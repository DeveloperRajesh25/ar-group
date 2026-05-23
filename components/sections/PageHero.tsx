'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeroProps {
  preHeading?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function PageHero({
  preHeading,
  title,
  subtitle,
  image,
  imageAlt = '',
  size = 'md',
}: PageHeroProps) {
  const heightClass =
    size === 'sm' ? 'h-[52vh] min-h-[500px]' : size === 'lg' ? 'h-[78vh] min-h-[680px]' : 'h-[66vh] min-h-[620px]';
  return (
    <section className={`relative ${heightClass} overflow-hidden bg-black`}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative container-base h-full flex items-end pt-32 md:pt-48 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl w-full"
        >
          {preHeading && (
            <p className="text-gold-soft text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-ultra uppercase font-inter font-medium mb-4 md:mb-5">
              — {preHeading}
            </p>
          )}
          <h1 className="font-cormorant text-beige font-light tracking-tight md:tracking-display leading-[1.05] text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl break-words">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-beige/80 max-w-xl">
              {subtitle}
            </p>
          )}
          <div className="w-12 md:w-16 h-px bg-gold-soft mt-6 md:mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
