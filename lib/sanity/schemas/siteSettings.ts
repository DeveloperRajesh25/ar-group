import { defineType, defineField } from 'sanity';
import { Cog } from 'lucide-react';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: Cog as unknown as React.ComponentType,
  description:
    'Contact details and brand info shown across the entire site (footer, contact page, WhatsApp links, structured data). Only one of these documents should exist.',
  groups: [
    { name: 'contact', title: 'Contact Info', default: true },
    { name: 'social', title: 'Social Links' },
    { name: 'brand', title: 'Brand' },
  ],
  fields: [
    // ===== CONTACT =====
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      description: 'Display format including country code, with spaces.',
      initialValue: '+91 7416011507',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'contact',
      initialValue: 'ashtalakshmigroups@gmail.com',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'contact',
      description: 'Digits only with country code (no plus sign, no spaces). Used to build WhatsApp links.',
      initialValue: '917416011507',
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      group: 'contact',
      rows: 2,
      initialValue: 'Visalakshi Nagar, Visakhapatnam, Andhra Pradesh',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      group: 'contact',
      initialValue: 'Mon - Sat, 9:30 AM - 7:00 PM',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Link',
      type: 'url',
      group: 'contact',
      description: 'Shareable Google Maps link to the office. Used by the "View on Map" buttons.',
    }),
    defineField({
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
      group: 'contact',
      description: 'The `src` URL from a Google Maps iframe embed code. Used for the office map on the contact page.',
    }),

    // ===== SOCIALS =====
    defineField({
      name: 'socials',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),

    // ===== BRAND =====
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      group: 'brand',
      description: 'Used in the footer copyright and structured data.',
      initialValue: 'AL Group',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'brand',
      options: { hotspot: true },
      description: 'Optional. Replaces the default logo in the navbar and footer if uploaded.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings', subtitle: 'Contact info & social links' }),
  },
});
