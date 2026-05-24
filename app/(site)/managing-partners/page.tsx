import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { FadeIn } from '@/components/ui/FadeIn';
import { getPartners, getPageImages, getSiteSettings } from '@/lib/sanity/queries';

export const metadata: Metadata = {
  title: 'Managing Partners | AL Group',
  description:
    'Meet the managing partners of AL Group — Indu Mohini Bogi and Lokesh Bogi. Vision, integrity, and trusted leadership in real estate marketing across Andhra Pradesh.',
  alternates: { canonical: '/managing-partners' },
};

const FALLBACK_HERO_IMG =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80';

export const revalidate = 3600;

export default async function PartnersPage() {
  const [partners, images, site] = await Promise.all([
    getPartners(),
    getPageImages(),
    getSiteSettings(),
  ]);

  return (
    <>
      <PageHero
        preHeading="Leadership"
        title="Managing Partners"
        subtitle="The vision and leadership guiding AL Group."
        image={images.partnersHeroBackground || FALLBACK_HERO_IMG}
        imageAlt="AL Group managing partners"
        size="md"
      />

      <section className="section-padding bg-beige">
        <div className="container-base space-y-24 md:space-y-40">
          {partners.map((partner, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={partner.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start"
              >
                <FadeIn
                  direction={reversed ? 'left' : 'right'}
                  className={`lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}
                >
                  <div className="relative">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={partner.photo}
                        alt={`${partner.name} — ${partner.designation}, AL Group`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-5 ${
                        reversed ? '-left-5 lg:-left-8' : '-right-5 lg:-right-8'
                      } lg:-bottom-8 w-2/3 h-2/5 border border-gold/60 -z-0`}
                      aria-hidden
                    />
                  </div>
                </FadeIn>

                <FadeIn
                  direction={reversed ? 'right' : 'left'}
                  className={`lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}
                >
                  <span className="inline-block px-3 py-1.5 border border-gold text-gold-deep text-[10px] tracking-ultra uppercase font-inter font-medium">
                    {partner.designation}
                  </span>
                  <h2 className="mt-6 font-cormorant text-[2rem] sm:text-3xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.1] tracking-display">
                    {partner.name}
                  </h2>
                  <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted max-w-xl">
                    {partner.fullBio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {partner.visionOrMission && (
                    <div className="mt-10 pl-6 border-l-2 border-gold max-w-xl">
                      <p className="text-[11px] tracking-ultra uppercase text-gold-deep font-inter font-medium mb-3">
                        {partner.visionOrMission.label}
                      </p>
                      <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-navy leading-relaxed">
                        &ldquo;{partner.visionOrMission.content}&rdquo;
                      </p>
                    </div>
                  )}
                </FadeIn>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection phone={site.phone} />
    </>
  );
}
