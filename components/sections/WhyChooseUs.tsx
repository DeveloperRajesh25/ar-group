'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  BadgeCheck,
  Handshake,
  TrendingUp,
  Wifi,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WHY_CHOOSE_US } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  BadgeCheck,
  Handshake,
  TrendingUp,
  Wifi,
  Heart,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-beige-warm">
      <div className="container-base">
        <SectionHeading
          preHeading="Why Choose Us"
          title={
            <>
              Built on Service. <br className="hidden md:block" />
              <em className="italic font-normal">Earned Through Trust.</em>
            </>
          }
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.07,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -4 }}
                className="group relative p-8 border border-line/60 bg-beige-soft transition-colors duration-400 hover:border-gold"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-beige border border-gold/40 group-hover:bg-gold group-hover:border-gold transition-all duration-400">
                  <Icon
                    className="w-5 h-5 text-gold-deep group-hover:text-navy transition-colors duration-400"
                    strokeWidth={1.4}
                  />
                </div>
                <h3 className="font-cormorant text-2xl text-navy font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
