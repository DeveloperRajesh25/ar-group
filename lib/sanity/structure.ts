import type { StructureResolver } from 'sanity/structure';
import { Cog, ImageIcon, Building, UserCircle } from 'lucide-react';

/**
 * Custom Studio structure.
 * - Singletons (Site Settings, Page Images) appear as single editable documents.
 * - Collections (Ventures, Managing Partners) appear as normal lists.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(Cog as unknown as React.ComponentType)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),

      S.listItem()
        .title('Page Images')
        .icon(ImageIcon as unknown as React.ComponentType)
        .child(
          S.editor()
            .id('pageImages')
            .schemaType('pageImages')
            .documentId('pageImages')
            .title('Page Images'),
        ),

      S.divider(),

      S.listItem()
        .title('Ventures')
        .icon(Building as unknown as React.ComponentType)
        .child(
          S.documentTypeList('venture')
            .title('Ventures')
            .defaultOrdering([{ field: 'order', direction: 'asc' }]),
        ),

      S.listItem()
        .title('Managing Partners')
        .icon(UserCircle as unknown as React.ComponentType)
        .child(
          S.documentTypeList('partner')
            .title('Managing Partners')
            .defaultOrdering([{ field: 'order', direction: 'asc' }]),
        ),
    ]);
