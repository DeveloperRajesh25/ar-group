'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { APPROVALS } from '@/lib/constants';

interface ApprovalsProps {
  expanded?: boolean;
}

export function Approvals({ expanded = false }: ApprovalsProps) {
  if (expanded) {
    return (
      <section className="bg-beige-warm py-20 md:py-28">
        <div className="container-base">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
              — Recognised & Approved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy tracking-display">
              Every Project. <em className="italic font-normal">Legally Cleared.</em>
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROVALS.map((a, i) => (
              <motion.div
                key={a.short}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="bg-beige-soft border border-line/60 p-10 text-center hover:border-gold transition-colors duration-400"
              >
                <div className="relative h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src={a.logo}
                    alt={`${a.name} logo`}
                    width={160}
                    height={80}
                    sizes="160px"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <h3 className="font-cormorant text-3xl font-medium text-navy mb-3">
                  {a.short}
                </h3>
                <p className="text-xs tracking-widest uppercase text-gold-deep font-inter font-medium mb-3">
                  {a.name}
                </p>
                <p className="text-sm text-muted leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-beige-warm py-12 md:py-16 border-y border-line/40">
      <div className="container-base">
        <p className="text-gold text-[11px] tracking-ultra uppercase font-inter font-medium mb-3 text-center">
          — Recognised & Approved
        </p>
        <h2 className="font-cormorant text-2xl md:text-3xl text-navy text-center font-light tracking-display mb-8">
          Every Project. <em className="italic font-normal">Legally Cleared.</em>
        </h2>
        <div className="flex flex-row md:flex-row items-center justify-center gap-8 md:gap-16">
          {APPROVALS.map((a, i) => (
            <motion.div
              key={a.short}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <div className="relative h-16 w-28 flex items-center justify-center">
                <Image
                  src={a.logo}
                  alt={`${a.name} logo`}
                  width={140}
                  height={70}
                  sizes="140px"
                  className="h-16 w-auto object-contain"
                />
              </div>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
