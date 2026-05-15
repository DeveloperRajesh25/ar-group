'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Amenity } from '@/lib/data';

export function Amenities({
  amenities,
  background = 'beige-warm',
}: {
  amenities: Amenity[];
  background?: 'beige' | 'beige-warm' | 'beige-soft';
}) {
  if (!amenities?.length) return null;
  return (
    <section
      className={
        'section-padding ' +
        (background === 'beige-warm'
          ? 'bg-beige-warm'
          : background === 'beige-soft'
          ? 'bg-beige-soft'
          : 'bg-beige')
      }
    >
      <div className="container-base">
        <SectionHeading
          preHeading="Lifestyle"
          title={
            <>
              World-Class <em className="italic font-normal">Amenities</em>
            </>
          }
          subtitle="Thoughtfully curated to elevate everyday living — for every member of the family."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
          {amenities.map((a, i) => {
            const Icon =
              (Icons[a.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
            return (
              <motion.div
                key={a.name + i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.04,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col items-center text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/50 bg-beige-soft transition-all duration-400 group-hover:bg-gold group-hover:border-gold">
                  <Icon
                    className="w-6 h-6 md:w-7 md:h-7 text-gold-deep group-hover:text-navy transition-colors duration-400"
                    strokeWidth={1.3}
                  />
                </div>
                <p className="mt-4 font-cormorant text-lg md:text-xl text-navy">{a.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
