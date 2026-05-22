import { defineType, defineField } from 'sanity';
import { Building } from 'lucide-react';

export const venture = defineType({
  name: 'venture',
  title: 'Venture',
  type: 'document',
  icon: Building as unknown as React.ComponentType,
  description: 'A single real estate venture / project (villa community, plotted development, etc.).',
  groups: [
    { name: 'main', title: 'Main', default: true },
    { name: 'media', title: 'Images & Media' },
    { name: 'details', title: 'Project Details' },
    { name: 'content', title: 'About & Features' },
    { name: 'amenities', title: 'Amenities' },
    { name: 'specs', title: 'Specifications' },
    { name: 'floorPlans', title: 'Floor Plans' },
    { name: 'location', title: 'Location' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ===== MAIN =====
    defineField({
      name: 'name',
      title: 'Venture Name',
      type: 'string',
      group: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'main',
      description: 'Auto-generated URL path. Click "Generate" after entering the name.',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'main',
      description: 'Single-line summary shown on cards and the detail hero.',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'main',
      options: {
        list: [
          { title: 'Live', value: 'Live' },
          { title: 'Upcoming', value: 'Upcoming' },
          { title: 'Coming Soon', value: 'Coming Soon' },
          { title: 'Sold Out', value: 'Sold Out' },
        ],
        layout: 'radio',
      },
      initialValue: 'Live',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'main',
      description: 'Lower numbers appear first in listings.',
      initialValue: 1,
    }),

    // ===== MEDIA =====
    defineField({
      name: 'coverImage',
      title: 'Cover Image (Detail Hero)',
      type: 'image',
      group: 'media',
      description: 'Full-bleed hero image on the venture detail page.',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listingImage',
      title: 'Listing Image',
      type: 'image',
      group: 'media',
      description: 'Optional image used on the /ventures listing card. Falls back to the cover image if blank.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'clubhouseImage',
      title: 'Clubhouse / Feature Image',
      type: 'image',
      group: 'media',
      description: 'Optional secondary image (e.g. clubhouse).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      group: 'media',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
    }),
    defineField({
      name: 'brochurePdf',
      title: 'Brochure (PDF)',
      type: 'file',
      group: 'media',
      options: { accept: '.pdf' },
    }),

    // ===== DETAILS =====
    defineField({ name: 'propertyType', title: 'Property Type', type: 'string', group: 'details' }),
    defineField({ name: 'location', title: 'Location', type: 'string', group: 'details' }),
    defineField({ name: 'size', title: 'Size', type: 'string', group: 'details' }),
    defineField({
      name: 'configurations',
      title: 'Configurations',
      type: 'string',
      group: 'details',
      description: 'E.g. "3BHK Villas", "Residential Plots".',
    }),
    defineField({
      name: 'possessionDate',
      title: 'Possession Date',
      type: 'string',
      group: 'details',
      description: 'E.g. "Ready to Occupy", "Q3 2026".',
    }),
    defineField({ name: 'reraNumber', title: 'RERA Number', type: 'string', group: 'details' }),
    defineField({
      name: 'developerWebsite',
      title: 'Developer Website',
      type: 'url',
      group: 'details',
    }),

    // ===== CONTENT =====
    defineField({
      name: 'about',
      title: 'About Paragraphs',
      type: 'array',
      group: 'content',
      of: [{ type: 'text', rows: 4 }],
      description: 'One entry per paragraph in the "About" section.',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      description: 'Short bullet points — shown in the "Features" section.',
    }),

    // ===== AMENITIES =====
    defineField({
      name: 'amenities',
      title: 'Amenities (Simple List)',
      type: 'array',
      group: 'amenities',
      description:
        'Use this if the venture does NOT have themed amenity groups. If you fill Amenity Groups below, this list is ignored.',
      of: [
        {
          type: 'object',
          name: 'amenity',
          title: 'Amenity',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'lucide-react icon name (e.g. Building2, Waves, Shield).',
            }),
          ],
          preview: { select: { title: 'name', subtitle: 'icon' } },
        },
      ],
    }),
    defineField({
      name: 'amenityGroups',
      title: 'Amenity Groups (Themed)',
      type: 'array',
      group: 'amenities',
      description: 'Use this for themed amenity zones (e.g. "Clubhouse", "Kids Park", "Senior Citizen Park").',
      of: [
        {
          type: 'object',
          name: 'amenityGroup',
          title: 'Amenity Group',
          fields: [
            defineField({ name: 'title', title: 'Group Title', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Group Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'items',
              title: 'Amenities in this group',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: { select: { title: 'title', media: 'image' } },
        },
      ],
    }),

    // ===== SPECIFICATIONS =====
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      group: 'specs',
      description: 'Grouped specification lists (e.g. Structure, Flooring, Electrical).',
      of: [
        {
          type: 'object',
          name: 'specGroup',
          title: 'Spec Group',
          fields: [
            defineField({ name: 'title', title: 'Group Title', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Specs',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),

    // ===== FLOOR PLANS =====
    defineField({
      name: 'floorPlanGroups',
      title: 'Floor Plan Groups (Tabs)',
      type: 'array',
      group: 'floorPlans',
      description: 'Group floor plans into tabs (e.g. "East Facing Villa", "West Facing Villa").',
      of: [
        {
          type: 'object',
          name: 'floorPlanGroup',
          title: 'Floor Plan Group',
          fields: [
            defineField({ name: 'title', title: 'Group Title', type: 'string' }),
            defineField({
              name: 'images',
              title: 'Floor Plans',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'floorPlanImage',
                  title: 'Floor Plan',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      description: 'E.g. "Ground Floor", "First Floor".',
                    }),
                    defineField({
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: { hotspot: false },
                    }),
                  ],
                  preview: { select: { title: 'label', media: 'image' } },
                },
              ],
            }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
    defineField({
      name: 'floorPlanImages',
      title: 'Floor Plan Images (Flat List)',
      type: 'array',
      group: 'floorPlans',
      description: 'Flat list of floor plans — used only if Floor Plan Groups (above) is empty.',
      of: [{ type: 'image' }],
    }),

    // ===== LOCATION =====
    defineField({
      name: 'locationAdvantages',
      title: 'Location Advantages',
      type: 'array',
      group: 'location',
      of: [{ type: 'string' }],
      description: 'One entry per bullet point shown under the location map.',
    }),
    defineField({
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
      group: 'location',
      description: 'The `src` URL from a Google Maps iframe embed (open Google Maps → Share → Embed a map → copy the src attribute).',
    }),
    defineField({
      name: 'mapCoordinates',
      title: 'Map Coordinates',
      type: 'geopoint',
      group: 'location',
      description: 'Optional precise lat/long.',
    }),

    // ===== SEO =====
    defineField({ name: 'seoTitle', title: 'SEO — Page Title', type: 'string', group: 'seo' }),
    defineField({
      name: 'seoDescription',
      title: 'SEO — Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name (A→Z)', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'status', media: 'coverImage' },
  },
});
