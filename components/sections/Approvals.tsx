'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold mb-6">
                  <BadgeCheck className="w-7 h-7 text-gold-deep" strokeWidth={1.3} />
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
        <p className="text-gold text-[11px] tracking-ultra uppercase font-inter font-medium mb-6 text-center">
          — Recognised & Approved
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          {APPROVALS.map((a, i) => (
            <motion.div
              key={a.short}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full border border-gold">
                <BadgeCheck className="w-5 h-5 text-gold-deep" strokeWidth={1.4} />
              </div>
              <div className="text-left">
                <p className="font-cormorant text-xl text-navy leading-none">{a.short}</p>
                <p className="text-[10px] tracking-widest uppercase text-muted mt-1">
                  Approved
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
