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
    size === 'sm' ? 'h-[48vh] min-h-[420px]' : size === 'lg' ? 'h-[75vh] min-h-[600px]' : 'h-[62vh] min-h-[520px]';
  return (
    <section className={`relative ${heightClass} overflow-hidden bg-navy-deep`}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/65 to-navy-deep/90" />
        <div className="absolute inset-0 bg-navy-deep/25" />
      </div>
      <div className="relative container-base h-full flex items-end pt-32 md:pt-36 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          {preHeading && (
            <p className="text-gold-soft text-xs tracking-ultra uppercase font-inter font-medium mb-5">
              — {preHeading}
            </p>
          )}
          <h1 className="font-cormorant text-beige font-light tracking-display leading-[1.05] text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base md:text-lg leading-relaxed text-beige/80 max-w-xl">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-px bg-gold-soft mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
