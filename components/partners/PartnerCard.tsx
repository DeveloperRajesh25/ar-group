'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Partner } from '@/lib/data';

export function PartnerCard({
  partner,
  index = 0,
  variant = 'preview',
}: {
  partner: Partner;
  index?: number;
  variant?: 'preview' | 'full';
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-navy-deep/10">
        <Image
          src={partner.photo}
          alt={`${partner.name} — ${partner.designation}, AL Group`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(
            'object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-[1.03]'
          )}
        />
      </div>
      <div className="mt-6">
        <p className="text-[11px] tracking-ultra uppercase text-gold-deep font-inter font-medium">
          {partner.designation}
        </p>
        <h3 className="mt-3 font-cormorant text-3xl md:text-4xl font-light text-navy tracking-display leading-tight">
          {partner.name}
        </h3>
        <p className="mt-4 text-sm text-muted leading-relaxed max-w-md">
          {partner.shortBio}
        </p>
        {variant === 'preview' && (
          <Link
            href="/managing-partners"
            className="link-underline mt-6 group/link"
          >
            Read More
            <ArrowRight
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
              strokeWidth={1.5}
            />
          </Link>
        )}
      </div>
    </motion.article>
  );
}
