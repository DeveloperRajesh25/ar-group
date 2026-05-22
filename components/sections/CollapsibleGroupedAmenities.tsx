'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Accordion } from '@/components/ui/Accordion';
import { FadeIn } from '@/components/ui/FadeIn';
import type { AmenityGroup } from '@/lib/data';

interface CollapsibleGroupedAmenitiesProps {
  groups: AmenityGroup[];
}

export function CollapsibleGroupedAmenities({
  groups,
}: CollapsibleGroupedAmenitiesProps) {
  if (!groups?.length) return null;

  const accordionItems = groups.map((group, idx) => ({
    id: `zone-${idx + 1}`,
    title: group.title,
    icon: (
      <span className="text-[10px] tracking-ultra uppercase text-gold-deep font-inter font-medium">
        Zone {idx + 1}
      </span>
    ),
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {group.image && (
          <div className="relative aspect-[5/3] overflow-hidden border border-line/40">
            <Image
              src={group.image}
              alt={`${group.title} — visual`}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {group.items.map((item, i) => (
            <li
              key={item + i}
              className="flex items-start gap-2.5 text-sm md:text-base text-navy/85 leading-relaxed"
            >
              <Check
                className="w-4 h-4 text-gold-deep mt-1 shrink-0"
                strokeWidth={1.6}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    ),
  }));

  return (
    <section className="section-padding bg-beige-warm">
      <div className="container-base">
        <FadeIn direction="up" className="text-center mb-14">
          <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
            — Lifestyle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy tracking-display">
            World-Class <em className="italic font-normal">Amenities</em>
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            Three themed zones designed for every member of the family — from the
            youngest to the elders — anchored by the region&apos;s largest clubhouse.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </FadeIn>

        <FadeIn direction="up" className="max-w-4xl mx-auto">
          <Accordion items={accordionItems} allowMultiple={true} />
        </FadeIn>
      </div>
    </section>
  );
}
