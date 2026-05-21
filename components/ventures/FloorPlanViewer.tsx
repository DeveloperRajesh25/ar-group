'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { FloorPlanGroup } from '@/lib/data';
import { cn } from '@/lib/utils';
import { VentureGallery } from './VentureGallery';

type Item = { label: string; src: string };

export function FloorPlanViewer({
  images,
  groups,
  ventureName,
}: {
  images: string[];
  groups?: FloorPlanGroup[];
  ventureName: string;
}) {
  if (groups?.length) {
    return <GroupedFloorPlans groups={groups} ventureName={ventureName} />;
  }
  if (!images?.length) return null;
  return (
    <div className="max-w-5xl mx-auto">
      <VentureGallery images={images} ventureName={`${ventureName} floor plan`} />
    </div>
  );
}

function GroupedFloorPlans({
  groups,
  ventureName,
}: {
  groups: FloorPlanGroup[];
  ventureName: string;
}) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = groups[activeGroup];
  const items: Item[] = current?.images ?? [];

  const close = () => setOpenIndex(null);
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
  const prev = () =>
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + items.length) % items.length
    );

  return (
    <div className="max-w-6xl mx-auto">
      {/* Group tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
        {groups.map((g, i) => (
          <button
            key={g.title}
            type="button"
            onClick={() => {
              setActiveGroup(i);
              setOpenIndex(null);
            }}
            className={cn(
              'px-5 py-2.5 text-[11px] tracking-widest uppercase font-inter font-medium transition-colors duration-300 border',
              i === activeGroup
                ? 'bg-navy text-beige border-navy'
                : 'bg-transparent text-navy border-line/60 hover:border-gold hover:text-gold-deep'
            )}
          >
            {g.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group flex flex-col items-stretch text-left focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`Open ${it.label}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-beige-soft border border-line/40 group-hover:border-gold/60 transition-colors duration-400">
              <Image
                src={it.src}
                alt={`${ventureName} — ${current.title} — ${it.label}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-3 text-center font-cormorant text-lg text-navy">
              {it.label}
            </p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && items[openIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy-deep/95 flex items-center justify-center p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center text-beige hover:text-gold-soft transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-beige hover:text-gold-soft transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-beige hover:text-gold-soft transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[openIndex].src}
                alt={`${ventureName} — ${current.title} — ${items[openIndex].label}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-beige/70 font-inter font-medium">
              {current.title} — {items[openIndex].label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
