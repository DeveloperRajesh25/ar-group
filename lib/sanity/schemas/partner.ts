import { defineType, defineField } from 'sanity';
import { UserCircle } from 'lucide-react';

export const partner = defineType({
  name: 'partner',
  title: 'Managing Partner',
  type: 'document',
  icon: UserCircle as unknown as React.ComponentType,
  description: 'A managing partner shown on the Home page preview and the /managing-partners page.',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      initialValue: 'Managing Partner',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 1,
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      description: 'One-line summary shown on the homepage preview card.',
    }),
    defineField({
      name: 'fullBio',
      title: 'Full Bio Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'One entry per paragraph. Shown on the /managing-partners detail section.',
    }),
    defineField({
      name: 'visionOrMission',
      title: 'Vision or Mission',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          options: { list: ['Vision', 'Mission'] },
        }),
        defineField({ name: 'content', title: 'Quote / Statement', type: 'text', rows: 3 }),
      ],
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'designation', media: 'photo' },
  },
});
