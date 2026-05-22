import { siteSettings } from './siteSettings';
import { pageImages } from './pageImages';
import { venture } from './venture';
import { partner } from './partner';

export const schemaTypes = [
  // Singletons (one document each)
  siteSettings,
  pageImages,
  // Collections (multiple documents)
  venture,
  partner,
];

// Document types that should only have ONE document (singletons).
export const SINGLETON_TYPES = new Set(['siteSettings', 'pageImages']);
