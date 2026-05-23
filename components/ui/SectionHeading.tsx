'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  preHeading?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  showDivider?: boolean;
  className?: string;
  invert?: boolean;
}

export function SectionHeading({
  preHeading,
  title,
  subtitle,
  align = 'center',
  showDivider = true,
  className,
  invert = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        'max-w-3xl',
        align === 'center' ? 'mx-auto' : '',
        className
      )}
    >
      {preHeading && (
        <p
          className={cn(
            'text-xs tracking-ultra uppercase font-inter font-medium mb-4',
            invert ? 'text-gold-soft' : 'text-gold'
          )}
        >
          — {preHeading}
        </p>
      )}
      <h2
        className={cn(
          'font-cormorant text-[2rem] sm:text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-display',
          invert ? 'text-beige' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-6 font-inter text-base md:text-lg leading-relaxed',
            invert ? 'text-beige/80' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
      {showDivider && (
        <div
          className={cn(
            'w-16 h-px mt-8',
            align === 'center' ? 'mx-auto' : '',
            invert ? 'bg-gold-soft' : 'bg-gold'
          )}
        />
      )}
    </motion.div>
  );
}
