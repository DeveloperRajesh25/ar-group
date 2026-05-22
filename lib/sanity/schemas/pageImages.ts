import { defineType, defineField } from 'sanity';
import { ImageIcon } from 'lucide-react';

export const pageImages = defineType({
  name: 'pageImages',
  title: 'Page Images',
  type: 'document',
  icon: ImageIcon as unknown as React.ComponentType,
  description:
    'All editable hero and section background images across the site, grouped by page. Replace any of these to update the corresponding image on the live site.',
  groups: [
    { name: 'home', title: 'Home Page', default: true },
    { name: 'about', title: 'About Page' },
    { name: 'contact', title: 'Contact Page' },
    { name: 'ventures', title: 'Ventures Listing Page' },
    { name: 'partners', title: 'Managing Partners Page' },
  ],
  fields: [
    // ===== HOME =====
    defineField({
      name: 'homeHeroBackground',
      title: 'Home — Hero Background',
      type: 'image',
      group: 'home',
      options: { hotspot: true },
      description: 'Full-screen background image behind the homepage hero.',
    }),
    defineField({
      name: 'homeAboutImage',
      title: 'Home — "About AL Group" Image',
      type: 'image',
      group: 'home',
      options: { hotspot: true },
      description: 'Image shown in the "About AL Group" preview section on the homepage.',
    }),
    defineField({
      name: 'homeCtaBackground',
      title: 'Home — Bottom CTA Background',
      type: 'image',
      group: 'home',
      options: { hotspot: true },
      description: 'Faint background image behind the dark "Start Your Investment Journey" CTA at the bottom of the homepage.',
    }),

    // ===== ABOUT =====
    defineField({
      name: 'aboutHeroBackground',
      title: 'About — Hero Background',
      type: 'image',
      group: 'about',
      options: { hotspot: true },
      description: 'Hero banner image at the top of the /about page.',
    }),
    defineField({
      name: 'aboutStoryImage',
      title: 'About — "Our Story" Image',
      type: 'image',
      group: 'about',
      options: { hotspot: true },
      description: 'Image shown alongside the "Our Story" content on the /about page.',
    }),

    // ===== CONTACT =====
    defineField({
      name: 'contactHeroBackground',
      title: 'Contact — Hero Background',
      type: 'image',
      group: 'contact',
      options: { hotspot: true },
      description: 'Hero banner image at the top of the /contact page.',
    }),

    // ===== VENTURES =====
    defineField({
      name: 'venturesHeroBackground',
      title: 'Ventures — Hero Background',
      type: 'image',
      group: 'ventures',
      options: { hotspot: true },
      description: 'Hero banner image at the top of the /ventures listing page.',
    }),

    // ===== PARTNERS =====
    defineField({
      name: 'partnersHeroBackground',
      title: 'Managing Partners — Hero Background',
      type: 'image',
      group: 'partners',
      options: { hotspot: true },
      description: 'Hero banner image at the top of the /managing-partners page.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Page Images', subtitle: 'Hero & section images' }) },
});
