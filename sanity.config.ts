'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes, SINGLETON_TYPES } from './lib/sanity/schemas';
import { structure } from './lib/sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export default defineConfig({
  name: 'al-group',
  title: 'AL Group Studio',
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Disable "Create new" for singleton types from the global UI.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
  document: {
    // Hide "duplicate" and "delete" actions on singletons so admins can't accidentally remove them.
    actions: (input, context) => {
      if (SINGLETON_TYPES.has(context.schemaType)) {
        return input.filter(({ action }) => action !== 'duplicate' && action !== 'delete');
      }
      return input;
    },
  },
});
