'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { CONTACT, NAV_LINKS } from '@/lib/constants';
import { telLink, cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-beige/95 backdrop-blur-md border-b border-line/60'
            : 'bg-transparent'
        )}
      >
        <div className="container-base flex items-center justify-between py-5 md:py-6">
          <Logo size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-xs tracking-widest uppercase font-inter font-medium transition-colors group',
                    scrolled
                      ? 'text-navy hover:text-gold-deep'
                      : 'text-beige hover:text-gold-soft drop-shadow-sm'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute left-0 -bottom-1 h-px bg-gold transition-all duration-400',
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href={telLink(CONTACT.phone)}
              className={cn(
                'hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase font-inter font-medium transition-colors',
                scrolled
                  ? 'text-navy hover:text-gold-deep'
                  : 'text-beige hover:text-gold-soft drop-shadow-sm'
              )}
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
              {CONTACT.phone}
            </a>
            <Button
              href="/contact"
              variant={scrolled ? 'outline' : 'outline-cream'}
              size="sm"
              className="hidden md:inline-flex"
            >
              Book Visit
            </Button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                'lg:hidden flex items-center justify-center w-10 h-10',
                scrolled ? 'text-navy' : 'text-beige'
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-beige lg:hidden"
          >
            <div className="container-base flex items-center justify-between py-5">
              <Logo size="md" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-10 h-10 text-navy"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
            <nav
              className="container-base flex flex-col gap-2 mt-10"
              aria-label="Mobile primary"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 font-cormorant text-4xl md:text-5xl font-light text-navy border-b border-line/60 hover:text-gold-deep transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex flex-col gap-4"
              >
                <a
                  href={telLink(CONTACT.phone)}
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-navy"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  {CONTACT.phone}
                </a>
                <Button href="/contact" variant="primary" size="md" className="self-start">
                  Book a Visit
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
