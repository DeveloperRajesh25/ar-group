'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Venture } from '@/lib/data';
import { cn } from '@/lib/utils';

interface VentureCardProps {
  venture: Venture;
  index?: number;
  variant?: 'compact' | 'feature';
}

export function VentureCard({ venture, index = 0, variant = 'feature' }: VentureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group"
    >
      <Link
        href={`/ventures/${venture.slug}`}
        className="block relative overflow-hidden border border-line/60 hover:border-gold transition-colors duration-500"
      >
        <div
          className={cn(
            'relative w-full overflow-hidden',
            variant === 'feature' ? 'aspect-[4/5]' : 'aspect-[16/10]'
          )}
        >
          <Image
            src={venture.coverImage}
            alt={`${venture.name} — ${venture.propertyType} in ${venture.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          {/* Dark gradient overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 via-40% to-navy-deep/10"
          />
          {/* Status pill */}
          <span
            className={cn(
              'absolute top-5 left-5 px-3 py-1.5 text-[10px] tracking-ultra uppercase font-inter font-medium',
              venture.status === 'Live' && 'bg-gold text-navy',
              venture.status === 'Upcoming' && 'bg-beige text-navy',
              venture.status === 'Coming Soon' && 'bg-navy text-beige',
              venture.status === 'Sold Out' && 'bg-navy-deep text-beige/70'
            )}
          >
            {venture.status}
          </span>
          {/* Content overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-beige-soft">
            <p className="text-[11px] tracking-widest uppercase text-gold-soft font-inter font-medium flex items-center gap-1.5">
              <MapPin className="w-3 h-3" strokeWidth={1.5} />
              {venture.location}
            </p>
            <h3 className="mt-2 font-cormorant text-3xl md:text-4xl font-light leading-tight tracking-display text-beige-soft drop-shadow-md">
              {venture.name}
            </h3>
            {variant === 'feature' && (
              <p className="mt-2 text-sm text-beige-soft/90 max-w-md line-clamp-2">
                {venture.tagline}
              </p>
            )}
            <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-gold-soft font-inter font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              View Details
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
