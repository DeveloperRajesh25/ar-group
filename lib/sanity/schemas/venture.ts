import { defineType, defineField } from 'sanity';

export const venture = defineType({
  name: 'venture',
  title: 'Venture',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      description: 'Single-line summary shown on cards and hero.',
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'Live' },
          { title: 'Upcoming', value: 'Upcoming' },
          { title: 'Coming Soon', value: 'Coming Soon' },
          { title: 'Sold Out', value: 'Sold Out' },
        ],
      },
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Display order in listings (lower = first).',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'floorPlanImages',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({ name: 'propertyType', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'size', type: 'string' }),
    defineField({ name: 'configurations', type: 'string' }),
    defineField({ name: 'possessionDate', type: 'string' }),
    defineField({ name: 'reraNumber', type: 'string' }),
    defineField({ name: 'developerWebsite', type: 'url' }),
    defineField({
      name: 'about',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'icon', type: 'string', description: 'lucide-react icon name' },
          ],
        },
      ],
    }),
    defineField({
      name: 'locationAdvantages',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'googleMapsEmbed',
      type: 'url',
      description: 'Google Maps iframe embed URL.',
    }),
    defineField({ name: 'mapCoordinates', type: 'geopoint' }),
    defineField({
      name: 'brochurePdf',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'status', media: 'coverImage' },
  },
});
