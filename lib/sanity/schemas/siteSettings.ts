import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', type: 'string', initialValue: 'AL Group' }),
    defineField({
      name: 'tagline',
      type: 'string',
      initialValue: "Your Family's Trusted Real Estate Partner",
    }),
    defineField({ name: 'logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'phone', type: 'string', initialValue: '+91 7416011507' }),
    defineField({
      name: 'email',
      type: 'string',
      initialValue: 'ashtalakshmigroups@gmail.com',
    }),
    defineField({
      name: 'whatsappNumber',
      type: 'string',
      initialValue: '917416011507',
    }),
    defineField({
      name: 'address',
      type: 'text',
      initialValue: 'Visalakshi Nagar, Visakhapatnam, Andhra Pradesh',
    }),
    defineField({ name: 'googleMapsUrl', type: 'url' }),
    defineField({
      name: 'workingHours',
      type: 'string',
      initialValue: 'Mon - Sat, 9:30 AM - 7:00 PM',
    }),
    defineField({
      name: 'socials',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'facebook', type: 'url' },
        { name: 'linkedin', type: 'url' },
        { name: 'youtube', type: 'url' },
      ],
    }),
    defineField({ name: 'aboutShort', type: 'text' }),
    defineField({
      name: 'aboutFull',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'whyChooseUs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'icon', type: 'string', description: 'lucide-react icon name' },
          ],
        },
      ],
    }),
  ],
});
