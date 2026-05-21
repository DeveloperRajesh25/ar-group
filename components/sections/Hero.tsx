'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState, useCallback, MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

const HERO_BG = '/hero-bg.jpeg';
const HERO_IMAGE = '/kamadhenu-infra-1/Gallery/cover.png';

type Ripple = { id: number; x: number; y: number };

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 140]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);
  const contentY = useTransform(scrollY, [0, 500], [0, -40]);

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const id = ++rippleId.current;
    const next: Ripple = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples((prev) => [...prev, next]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1400);
  }, []);

  return (
    <section
      ref={ref}
      onClick={handleClick}
      className="relative min-h-screen w-full overflow-hidden bg-navy-deep cursor-default pt-28 md:pt-32 pb-16"
    >
      {/* === Background layer === */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
      >
        <div className="absolute inset-0 animate-slow-zoom opacity-[0.18]">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover [filter:saturate(0.85)_contrast(1.05)]"
          />
        </div>

        <div aria-hidden className="absolute inset-0 bg-navy-deep/65" />

        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -inset-1/2 will-change-transform mix-blend-screen"
            animate={{
              x: ['-10%', '12%', '-6%', '-10%'],
              y: ['-8%', '10%', '12%', '-8%'],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  'radial-gradient(circle at 30% 35%, rgba(226, 201, 138, 0.4) 0%, rgba(226, 201, 138, 0) 55%)',
              }}
            />
          </motion.div>

          <motion.div
            className="absolute -inset-1/2 will-change-transform mix-blend-screen"
            animate={{
              x: ['8%', '-12%', '6%', '8%'],
              y: ['10%', '-8%', '-12%', '10%'],
              scale: [1.05, 0.9, 1.18, 1.05],
            }}
            transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  'radial-gradient(circle at 70% 60%, rgba(168, 137, 71, 0.45) 0%, rgba(168, 137, 71, 0) 55%)',
              }}
            />
          </motion.div>

          <motion.div
            className="absolute -inset-1/2 will-change-transform mix-blend-soft-light"
            animate={{
              x: ['-4%', '6%', '-2%', '-4%'],
              y: ['4%', '-6%', '4%', '4%'],
              scale: [1.08, 0.96, 1.12, 1.08],
            }}
            transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(40, 70, 100, 0.55) 0%, rgba(40, 70, 100, 0) 60%)',
              }}
            />
          </motion.div>
        </div>

        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/55 via-transparent to-navy-deep/80"
        />

        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 55%, rgba(20, 28, 50, 0.55) 100%)',
          }}
        />

        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 18, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-32 h-32 rounded-full pointer-events-none"
              style={{
                left: r.x - 64,
                top: r.y - 64,
                border: '1px solid rgba(226, 201, 138, 0.5)',
                background:
                  'radial-gradient(circle, rgba(226,201,138,0.12) 0%, rgba(226,201,138,0) 70%)',
              }}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* === Content — split layout === */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container-base h-full flex items-center"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — tagline */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex items-center gap-4"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="block h-px w-10 bg-gold-soft origin-left"
              />
              <span className="text-gold-soft text-[11px] md:text-xs tracking-ultra uppercase font-inter font-medium">
                AL Group
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.07, delayChildren: 0.4 },
                },
              }}
              className="mt-6 font-cormorant text-beige font-light tracking-display leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[5.25rem] xl:text-[6rem]"
            >
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: '110%' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.05, ease: [0.21, 0.47, 0.32, 0.98] },
                    },
                  }}
                  className="inline-block"
                >
                  Your{' '}
                  <em className="italic font-normal text-gold-soft">Family&apos;s</em>{' '}
                  Trusted
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: '110%' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.05, ease: [0.21, 0.47, 0.32, 0.98] },
                    },
                  }}
                  className="inline-block"
                >
                  Real Estate Partner
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.9 }}
              className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-beige/75 font-inter font-light"
            >
              Premium ventures, RERA-approved investments, and a relationship-first
              promise — across Andhra Pradesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 0.9 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <PremiumButton href="/ventures" variant="primary">
                Explore Ventures
              </PremiumButton>
              <PremiumButton href="/contact" variant="ghost">
                Contact Us
              </PremiumButton>
            </motion.div>
          </div>

          {/* Right — venture showcase image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden">
              {/* Decorative gold frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-3 -right-3 w-24 h-24 border-t border-r border-gold-soft/70"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-3 -left-3 w-24 h-24 border-b border-l border-gold-soft/70"
              />

              <Image
                src={HERO_IMAGE}
                alt="AL Group premium villa community"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover scale-x-[-1] [filter:saturate(1.05)_contrast(1.02)]"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent"
              />

              {/* Caption tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[9px] md:text-[10px] tracking-ultra uppercase text-gold-soft font-inter font-medium">
                    Featured Venture
                  </p>
                  <p className="mt-1 font-cormorant text-beige text-xl md:text-2xl leading-tight">
                    Kamadhenu Pearls
                  </p>
                </div>
                <Link
                  href="/ventures/kamadhenu-pearls"
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-beige hover:text-gold-soft transition-colors font-inter font-medium border-b border-gold-soft/60 pb-1"
                >
                  View
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-beige/60"
      >
        <span className="text-[10px] tracking-ultra uppercase font-inter font-medium">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-beige/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold-soft"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

type PremiumButtonProps = {
  href: string;
  variant: 'primary' | 'ghost';
  children: React.ReactNode;
};

function PremiumButton({ href, variant, children }: PremiumButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.25);
    y.set(offsetY * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = ++idRef.current;
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 900);
  };

  const isPrimary = variant === 'primary';

  return (
    <motion.span style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={btnRef}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
        className={[
          'group relative inline-flex items-center justify-center gap-2 overflow-hidden',
          'px-8 py-[16px] text-[11px] tracking-widest uppercase font-inter font-medium',
          'transition-colors duration-500 ease-out',
          isPrimary
            ? 'bg-gold text-navy-deep hover:bg-gold-soft'
            : 'border border-beige/30 text-beige hover:text-navy-deep',
        ].join(' ')}
      >
        {!isPrimary && (
          <span
            aria-hidden
            className="absolute inset-0 bg-beige translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:translate-y-0"
          />
        )}

        {isPrimary && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
        )}

        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ scale: 0, opacity: 0.55 }}
              animate={{ scale: 6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute h-24 w-24 rounded-full bg-white/40 pointer-events-none"
              style={{ left: r.x - 48, top: r.y - 48 }}
            />
          ))}
        </AnimatePresence>

        <span className="relative z-10 flex items-center gap-2">
          {children}
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </span>
      </Link>
    </motion.span>
  );
}
