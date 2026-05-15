'use client';

import { VentureGallery } from './VentureGallery';

export function FloorPlanViewer({
  images,
  ventureName,
}: {
  images: string[];
  ventureName: string;
}) {
  if (!images?.length) return null;
  return (
    <div className="max-w-5xl mx-auto">
      <VentureGallery images={images} ventureName={`${ventureName} floor plan`} />
    </div>
  );
}
