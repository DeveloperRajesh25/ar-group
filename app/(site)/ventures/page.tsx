import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Home, Calendar, FileCheck } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/sections/CTASection';
import { getVentures, getPageImages, getSiteSettings } from '@/lib/sanity/queries';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Premium Villas & Plots in Vijayawada, Visakhapatnam, Bhogapuram, Vizianagaram | AL Group',
  description:
    "Premium villas and RERA-approved plots in Vijayawada, Visakhapatnam, Bhogapuram and Vizianagaram. Explore AL Group's hand-picked real estate ventures across Andhra Pradesh.",
  keywords: [
    'premium villas Vijayawada',
    'plots Visakhapatnam',
    'Bhogapuram plots',
    'Vizianagaram real estate',
    'RERA approved villas Andhra Pradesh',
    'AL Group ventures',
  ],
  alternates: { canonical: '/ventures' },
};

const FALLBACK_HERO_IMG =
  'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=2000&q=80';

export const revalidate = 3600;

export default async function VenturesPage() {
  const [ventures, images, site] = await Promise.all([
    getVentures(),
    getPageImages(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHero
        preHeading="Our Ventures"
        title="Premium Real Estate Opportunities"
        subtitle="Hand-picked investment opportunities across Andhra Pradesh — every venture legally cleared, premium in finish, built for long-term value."
        image={images.venturesHeroBackground || FALLBACK_HERO_IMG}
        imageAlt="Premium real estate venture portfolio"
        size="md"
      />

      {/* SEO location strip */}
      <section className="bg-beige-warm border-b border-line/40 py-7">
        <div className="container-base">
          <p className="text-center text-sm md:text-base text-navy/85 leading-relaxed font-inter">
            We have <span className="font-medium text-navy">premium villas &amp; plots</span> in{' '}
            <span className="text-gold-deep font-medium">Vijayawada</span>,{' '}
            <span className="text-gold-deep font-medium">Visakhapatnam</span>,{' '}
            <span className="text-gold-deep font-medium">Bhogapuram</span> and{' '}
            <span className="text-gold-deep font-medium">Vizianagaram</span>.
          </p>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="container-base">
          <div className="space-y-16 md:space-y-24">
            {ventures.map((v, i) => {
              const reversed = i % 2 === 1;
              return (
                <FadeIn key={v.slug} direction="up">
                  <Link
                    href={`/ventures/${v.slug}`}
                    className="group block"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                      <div
                        className={cn(
                          'lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-line/60 group-hover:border-gold transition-colors duration-500',
                          reversed && 'lg:order-2'
                        )}
                      >
                        <Image
                          src={v.listingImage || v.coverImage}
                          alt={`${v.name} — ${v.propertyType} in ${v.location}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <span
                          className={cn(
                            'absolute top-5 left-5 px-3 py-1.5 text-[10px] tracking-ultra uppercase font-inter font-medium',
                            v.status === 'Live' && 'bg-gold text-navy',
                            v.status === 'Upcoming' && 'bg-beige text-navy',
                            v.status === 'Coming Soon' && 'bg-navy text-beige',
                            v.status === 'Sold Out' && 'bg-navy-deep text-beige/70'
                          )}
                        >
                          {v.status}
                        </span>
                      </div>

                      <div
                        className={cn(
                          'lg:col-span-5 space-y-5',
                          reversed && 'lg:order-1'
                        )}
                      >
                        <p className="text-[11px] tracking-widest uppercase text-gold-deep font-inter font-medium flex items-center gap-1.5">
                          <MapPin className="w-3 h-3" strokeWidth={1.5} />
                          {v.location}
                        </p>
                        <h2 className="font-cormorant text-[1.75rem] sm:text-3xl md:text-5xl font-light text-navy leading-tight tracking-display">
                          {v.name}
                        </h2>
                        <p className="text-base md:text-lg text-muted leading-relaxed">
                          {v.tagline}
                        </p>
                        <ul className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-navy/80">
                          <li className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-gold-deep" strokeWidth={1.4} />
                            {v.configurations}
                          </li>
                          <li className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gold-deep" strokeWidth={1.4} />
                            {v.possessionDate}
                          </li>
                          <li className="flex items-center gap-2 sm:col-span-2">
                            <FileCheck className="w-4 h-4 text-gold-deep" strokeWidth={1.4} />
                            <span className="font-inter font-medium text-xs tracking-widest uppercase text-muted">
                              RERA:
                            </span>
                            <span className="text-navy text-sm">{v.reraNumber}</span>
                          </li>
                        </ul>
                        <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-navy group-hover:text-gold-deep transition-colors font-inter font-medium pt-2 border-b border-gold pb-1">
                          View Details
                          <ArrowRight
                            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                            strokeWidth={1.5}
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection phone={site.phone} />
    </>
  );
}
