'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80';

const headlineLines = [
  ["Your", "Family's", "Trusted"],
  ['Real', 'Estate', 'Partner'],
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-navy-deep"
    >
      {/* Background image with slow zoom + parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src={HERO_IMAGE}
            alt="Premium real estate project by AL Group"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/80"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-base h-full flex flex-col items-center justify-center text-center pt-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gold-soft text-xs md:text-sm tracking-ultra uppercase font-inter font-medium"
        >
          — AL GROUP
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.35 },
            },
          }}
          className="mt-6 font-cormorant text-beige font-light tracking-display leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl"
        >
          {headlineLines.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => (
                <motion.span
                  key={`${li}-${wi}`}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] },
                    },
                  }}
                  className="inline-block"
                >
                  {word === "Family's" ? (
                    <em className="italic font-normal not-italic">
                      <span className="italic">Family&apos;s</span>
                    </em>
                  ) : (
                    word
                  )}
                  {wi < line.length - 1 && ' '}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-beige/80 font-inter"
        >
          Premium ventures, RERA-approved investments, and a relationship-first promise — across Andhra Pradesh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="/ventures" variant="primary" size="md">
            Explore Ventures
          </Button>
          <Button href="/contact" variant="outline-cream" size="md">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-beige/70"
      >
        <span className="text-[10px] tracking-ultra uppercase font-inter font-medium">
          Scroll
        </span>
        <div className="animate-float-down">
          <ChevronDown className="w-5 h-5" strokeWidth={1.2} />
        </div>
      </motion.div>
    </section>
  );
}
