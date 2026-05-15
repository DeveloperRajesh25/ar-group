import { defineType, defineField } from 'sanity';

export const partner = defineType({
  name: 'partner',
  title: 'Managing Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'designation',
      type: 'string',
      initialValue: 'Managing Partner',
    }),
    defineField({
      name: 'photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'order', type: 'number' }),
    defineField({ name: 'shortBio', type: 'text' }),
    defineField({
      name: 'fullBio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'visionOrMission',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'string',
          options: { list: ['Vision', 'Mission'] },
        },
        { name: 'content', type: 'text' },
      ],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'designation', media: 'photo' },
  },
});
