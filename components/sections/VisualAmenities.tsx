'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import type { AmenityGroup } from '@/lib/data';

interface VisualAmenitiesProps {
  groups: AmenityGroup[];
}

export function VisualAmenities({ groups }: VisualAmenitiesProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  if (!groups?.length) return null;

  return (
    <section className="section-padding bg-beige-warm">
      <div className="container-base">
        <FadeIn direction="up" className="text-center mb-16">
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

        {/* Grid of Visual Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              layout
              onClick={() => setSelectedIdx(idx)}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative aspect-[4/5] overflow-hidden border-2 border-line/40 bg-navy-deep"
                whileHover={{ borderColor: '#D4A574' }}
                transition={{ duration: 0.3 }}
              >
                {group.image && (
                  <Image
                    src={group.image}
                    alt={`${group.title} — visual`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-60" />

                {/* Zone title overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <p className="text-[11px] tracking-ultra uppercase text-gold-soft font-inter font-medium mb-2">
                    Zone {idx + 1}
                  </p>
                  <h3 className="font-cormorant text-2xl font-light text-beige tracking-display">
                    {group.title}
                  </h3>
                </div>

                {/* Click indicator */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-deep/40"
                >
                  <div className="flex flex-col items-center gap-2 text-beige">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                    <span className="text-xs font-inter tracking-widest uppercase">
                      Explore
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Expanded Modal View */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="relative min-h-screen flex items-center justify-center p-4 md:p-8"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 z-10 p-3 hover:bg-beige/10 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6 text-beige" strokeWidth={1.5} />
              </motion.button>

              {/* Content */}
              <div className="max-w-5xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image Section */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative aspect-[5/4] overflow-hidden"
                  >
                    {groups[selectedIdx].image && (
                      <Image
                        src={groups[selectedIdx].image}
                        alt={groups[selectedIdx].title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover rounded-lg"
                      />
                    )}
                  </motion.div>

                  {/* Details Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-beige"
                  >
                    <p className="text-gold-soft text-xs tracking-ultra uppercase font-inter font-medium mb-3">
                      Zone {selectedIdx + 1}
                    </p>
                    <h2 className="font-cormorant text-4xl md:text-5xl font-light text-beige tracking-display mb-8">
                      {groups[selectedIdx].title}
                    </h2>

                    <div className="w-12 h-px bg-gold mb-8" />

                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-h-[400px] overflow-y-auto pr-4">
                      {groups[selectedIdx].items.map((item, i) => (
                        <motion.div
                          key={item + i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check
                            className="w-5 h-5 text-gold-soft mt-0.5 shrink-0"
                            strokeWidth={1.6}
                          />
                          <span className="text-sm md:text-base leading-relaxed text-beige/90">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Navigation dots */}
                    <div className="flex gap-2 mt-10">
                      {groups.map((_, idx2) => (
                        <motion.button
                          key={idx2}
                          onClick={() => setSelectedIdx(idx2)}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            idx2 === selectedIdx ? 'bg-gold' : 'bg-beige/30'
                          }`}
                          whileHover={{ scale: 1.3 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Click to close hint */}
              <motion.p
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-beige/60 text-xs tracking-widest uppercase font-inter"
              >
                Click to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
