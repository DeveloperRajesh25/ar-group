import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Approvals } from '@/components/sections/Approvals';
import { CTASection } from '@/components/sections/CTASection';
import { FadeIn } from '@/components/ui/FadeIn';
import { ABOUT_PARAGRAPHS, HIGHLIGHT_QUOTE } from '@/lib/data';
import { getPageImages, getSiteSettings } from '@/lib/sanity/queries';

export const metadata: Metadata = {
  title: 'About AL Group | Real Estate Marketing in Andhra Pradesh',
  description:
    "Learn about AL Group — a real estate marketing company promoting RERA, VMRDA and CRDA approved ventures across Vizag, Bhogapuram, and Andhra Pradesh. Our story, mission, and values.",
  alternates: { canonical: '/about' },
};

export const revalidate = 3600;

const FALLBACK_HERO_IMG =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80';
const FALLBACK_STORY_IMG =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80';

export default async function AboutPage() {
  const [images, site] = await Promise.all([getPageImages(), getSiteSettings()]);

  return (
    <>
      <PageHero
        preHeading="Our Story"
        title="About AL Group"
        subtitle="Envision. Invest. Grow."
        image={images.aboutHeroBackground || FALLBACK_HERO_IMG}
        imageAlt="AL Group team and clients discussing a premium real estate venture"
        size="md"
      />

      {/* Our Story */}
      <section className="section-padding bg-beige">
        <div className="container-base grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden img-hover">
                <Image
                  src={images.aboutStoryImage || FALLBACK_STORY_IMG}
                  alt="AL Group office consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 lg:-bottom-8 lg:-right-8 w-2/3 h-2/3 border border-gold/60 -z-0"
                aria-hidden
              />
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:col-span-7 lg:pl-6 lg:sticky lg:top-32">
            <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-5">
              — Who We Are
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.1] tracking-display">
              A Relationship-First{' '}
              <em className="italic font-normal text-gold-deep">Real Estate</em> Company
            </h2>
            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted max-w-xl">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 gold-quote font-cormorant italic text-navy/80 text-lg md:text-xl max-w-xl leading-relaxed">
              &ldquo;{HIGHLIGHT_QUOTE}&rdquo;
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <WhyChooseUs />
      <Approvals expanded />
      <CTASection phone={site.phone} />
    </>
  );
}
