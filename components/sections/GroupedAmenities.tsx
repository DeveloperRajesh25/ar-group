'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { AmenityGroup } from '@/lib/data';

export function GroupedAmenities({
  groups,
}: {
  groups: AmenityGroup[];
}) {
  if (!groups?.length) return null;
  return (
    <section className="section-padding bg-beige-warm">
      <div className="container-base">
        <div className="text-center mb-14 md:mb-20">
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
        </div>

        <div className="space-y-20 md:space-y-28">
          {groups.map((group, gi) => {
            const reversed = gi % 2 === 1;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {group.image && (
                  <div
                    className={
                      'lg:col-span-6 relative aspect-[5/4] overflow-hidden border border-line/40 ' +
                      (reversed ? 'lg:order-2' : '')
                    }
                  >
                    <Image
                      src={group.image}
                      alt={`${group.title} — visual`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div
                  className={
                    'lg:col-span-6 space-y-6 ' +
                    (reversed ? 'lg:order-1' : '')
                  }
                >
                  <div>
                    <p className="text-[11px] tracking-ultra uppercase text-gold-deep font-inter font-medium">
                      Zone {gi + 1}
                    </p>
                    <h3 className="mt-3 font-cormorant text-3xl md:text-4xl font-light text-navy tracking-display">
                      {group.title}
                    </h3>
                    <div className="w-12 h-px bg-gold mt-5" />
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {group.items.map((item, i) => (
                      <li
                        key={item + i}
                        className="flex items-start gap-2.5 text-[15px] md:text-base text-navy/85 leading-relaxed"
                      >
                        <Check
                          className="w-4 h-4 text-gold-deep mt-1 shrink-0"
                          strokeWidth={1.6}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
