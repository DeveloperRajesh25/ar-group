'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

interface CollapsibleFeaturesProps {
  features: string[];
}

export function CollapsibleFeatures({ features }: CollapsibleFeaturesProps) {
  if (!features?.length) return null;

  const mid = Math.ceil(features.length / 2);
  const leftItems = features.slice(0, mid);
  const rightItems = features.slice(mid);

  return (
    <section className="py-16 md:py-24 bg-beige-soft overflow-hidden">
      <div className="container-base">
        <FadeIn direction="up" className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
            — Features
          </p>
          <h2 className="font-cormorant text-[2rem] sm:text-3xl md:text-5xl font-light text-navy tracking-display">
            Premium <em className="italic font-normal">Features</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </FadeIn>

        {/* Desktop: lines reach inward toward the center hub */}
        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-[1fr_auto_1fr] gap-x-0 items-center">
          <ul className="flex flex-col gap-y-3 lg:gap-y-4 pr-2">
            {leftItems.map((f, i) => (
              <FeatureRow key={`l-${i}`} text={f} index={i} side="left" />
            ))}
          </ul>

          <CenterHub />

          <ul className="flex flex-col gap-y-3 lg:gap-y-4 pl-2">
            {rightItems.map((f, i) => (
              <FeatureRow key={`r-${i}`} text={f} index={i} side="right" />
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="md:hidden max-w-md mx-auto">
          <ul className="flex flex-col gap-y-3">
            {features.map((f, i) => (
              <FeatureRow key={`m-${i}`} text={f} index={i} side="mobile" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  text,
  index,
  side,
}: {
  text: string;
  index: number;
  side: 'left' | 'right' | 'mobile';
}) {
  const delay = index * 0.06;
  const isLeft = side === 'left';
  const isRight = side === 'right';

  const align =
    isLeft ? 'justify-end text-right'
    : isRight ? 'justify-start text-left'
    : 'justify-start text-left';

  return (
    <motion.li
      initial={{ opacity: 0, x: isLeft ? -8 : 8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: delay + 0.15, duration: 0.45, ease: 'easeOut' }}
      className={`group relative flex items-center gap-3 cursor-default select-none ${align}`}
    >
      {/* RIGHT-side and MOBILE: line is first (closest to hub on the left) */}
      {!isLeft && <BranchLine delay={delay} side={side} />}
      {!isLeft && <Dot />}

      <span
        className={`text-sm md:text-[15px] lg:text-base leading-snug font-inter text-navy/85 transition-all duration-300
          ${isLeft ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}
          group-hover:text-navy group-hover:tracking-wide`}
      >
        {text}
      </span>

      {/* LEFT-side: dot then line (closest to hub on the right) */}
      {isLeft && <Dot />}
      {isLeft && <BranchLine delay={delay} side={side} />}
    </motion.li>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="relative w-1.5 h-1.5 rounded-full bg-gold-deep shrink-0 transition-all duration-300
        group-hover:scale-[1.6] group-hover:shadow-[0_0_0_5px_rgba(184,134,11,0.18)]
        before:absolute before:inset-0 before:rounded-full before:bg-gold-deep before:opacity-0
        group-hover:before:opacity-60 group-hover:before:animate-ping"
    />
  );
}

function BranchLine({ delay, side }: { delay: number; side: 'left' | 'right' | 'mobile' }) {
  const isLeft = side === 'left';
  const widthClass = side === 'mobile' ? 'w-6' : 'w-14 lg:w-20';
  const gradient = isLeft
    ? 'bg-gradient-to-l from-gold-deep via-gold to-gold/30'
    : 'bg-gradient-to-r from-gold-deep via-gold to-gold/30';

  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: delay + 0.3, duration: 0.5, ease: 'easeOut' }}
      className={`relative h-px ${widthClass} ${gradient} ${
        isLeft ? 'origin-left' : 'origin-right'
      } transition-all duration-300 group-hover:h-[1.5px] group-hover:opacity-100 opacity-90`}
    >
      {/* Animated shine on hover */}
      <span
        className={`absolute top-0 left-0 h-full w-1/3 bg-beige-soft/80 blur-[1.5px] opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          ${isLeft ? 'group-hover:animate-shine-l' : 'group-hover:animate-shine-r'}`}
      />
    </motion.span>
  );
}

function CenterHub() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative flex items-center justify-center mx-2"
    >
      <div className="relative w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center">
        <motion.span
          aria-hidden
          animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border border-gold/60"
        />
        <motion.span
          aria-hidden
          animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute inset-0 rounded-full border border-gold/40"
        />
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-beige flex flex-col items-center justify-center shadow-[0_10px_36px_-8px_rgba(166,134,76,0.35)] border-2 border-gold-deep cursor-pointer"
        >
          <span className="w-5 h-px bg-gold-deep mb-2" />
          <span className="font-cormorant text-lg lg:text-xl tracking-[0.25em] text-navy uppercase font-medium">
            Features
          </span>
          <span className="w-5 h-px bg-gold-deep mt-2" />
        </motion.div>
      </div>
    </motion.div>
  );
}
