'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { telLink } from '@/lib/utils';
import { CONTACT } from '@/lib/constants';

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=60';

export function CTASection() {
  return (
    <section className="relative bg-navy-deep text-beige overflow-hidden section-padding">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <Image
          src={CTA_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep/80" aria-hidden />

      <div className="relative container-base">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gold-soft text-xs tracking-ultra uppercase font-inter font-medium mb-6">
            — Start Today
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-beige leading-[1.1] tracking-display">
            Start Your Real Estate{' '}
            <em className="italic font-normal text-gold-soft">Investment</em> Journey
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-beige/80 max-w-xl mx-auto">
            Connect with AL Group for premium plots, villas, and secure investment opportunities — backed by RERA, VMRDA, and CRDA approvals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={telLink(CONTACT.phone)} variant="primary" size="md">
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
              Call Now
            </Button>
            <Button href="/contact" variant="outline-cream" size="md">
              <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
              Book Site Visit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
