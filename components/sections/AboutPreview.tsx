import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { HIGHLIGHT_QUOTE } from '@/lib/data';

const DEFAULT_ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';

export interface AboutPreviewProps {
  /** Optional Sanity-managed image override. */
  image?: string;
}

export function AboutPreview({ image }: AboutPreviewProps = {}) {
  const aboutImage = image || DEFAULT_ABOUT_IMAGE;

  return (
    <section className="section-padding bg-beige">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden img-hover">
                <Image
                  src={aboutImage}
                  alt="A premium real estate project promoted by AL Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* Gold frame offset */}
              <div
                className="absolute -bottom-5 -right-5 lg:-bottom-8 lg:-right-8 w-2/3 h-2/3 border border-gold/60 -z-0"
                aria-hidden
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left" className="lg:col-span-7 lg:pl-8">
            <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-5">
              — About AL Group
            </p>
            <h2 className="font-cormorant text-[2rem] sm:text-3xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.1] tracking-display">
              Real Estate Built on{' '}
              <em className="italic font-normal text-gold-deep">Trust</em>, Family & Future.
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted max-w-xl">
              We are a real estate marketing company specializing in promoting developers&apos; ventures and plotted developments. All projects we work with are RERA approved and approved by the relevant urban development authorities (VMRDA & CRDA) — ensuring reliable, secure investment opportunities for our buyers.
            </p>
            <blockquote className="mt-8 gold-quote text-base md:text-lg leading-relaxed font-cormorant italic text-navy/80 max-w-lg">
              &ldquo;{HIGHLIGHT_QUOTE}&rdquo;
            </blockquote>
            <Link
              href="/about"
              className="link-underline mt-10 group"
            >
              Learn More
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
