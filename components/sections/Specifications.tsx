'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { SpecGroup } from '@/lib/data';

export function Specifications({ groups }: { groups: SpecGroup[] }) {
  if (!groups?.length) return null;
  return (
    <section className="section-padding bg-beige-soft">
      <div className="container-base">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
            — Specifications
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy tracking-display">
            Built to <em className="italic font-normal">Last</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: gi * 0.06 }}
            >
              <h3 className="font-cormorant text-2xl md:text-3xl font-light text-navy">
                {group.title}
              </h3>
              <div className="w-10 h-px bg-gold mt-3 mb-5" />
              <ul className="space-y-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
