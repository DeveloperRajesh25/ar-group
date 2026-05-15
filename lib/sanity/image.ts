import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { projectId, dataset, isSanityConfigured } from './client';

const builder = isSanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: Image | undefined | null) {
  if (!source || !builder) return null;
  return builder.image(source);
}
