import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  MapPin,
  Download,
  Check,
  ArrowRight,
  Home,
  Ruler,
  Calendar,
  FileCheck,
  Building,
} from 'lucide-react'; // Check used in location advantages section
import { PageHero } from '@/components/sections/PageHero';
import { Amenities } from '@/components/sections/Amenities';
import { GroupedAmenities } from '@/components/sections/GroupedAmenities';
import { VisualAmenities } from '@/components/sections/VisualAmenities';
import { Specifications } from '@/components/sections/Specifications';
import { CollapsibleSpecifications } from '@/components/sections/CollapsibleSpecifications';
import { CollapsibleFeatures } from '@/components/sections/CollapsibleFeatures';
import { Approvals } from '@/components/sections/Approvals';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { VentureGallery } from '@/components/ventures/VentureGallery';
import { FloorPlanViewer } from '@/components/ventures/FloorPlanViewer';
import { LocationMap } from '@/components/ventures/LocationMap';
import { BookVisitForm } from '@/components/ventures/BookVisitForm';
import { VentureStructuredData } from '@/components/seo/StructuredData';
import { getVentureBySlug, getVentures } from '@/lib/sanity/queries';
import { whatsappLink, telLink } from '@/lib/utils';
import { CONTACT, SITE } from '@/lib/constants';

export const revalidate = 3600;

export async function generateStaticParams() {
  const ventures = await getVentures();
  return ventures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const venture = await getVentureBySlug(params.slug);
  if (!venture) return { title: 'Venture not found' };
  return {
    title: venture.seoTitle || `${venture.name} | AL Group`,
    description: venture.seoDescription || venture.tagline,
    alternates: { canonical: `/ventures/${venture.slug}` },
    openGraph: {
      title: venture.seoTitle || `${venture.name} | AL Group`,
      description: venture.seoDescription || venture.tagline,
      images: [{ url: venture.coverImage, width: 1200, height: 630, alt: venture.name }],
      type: 'article',
    },
  };
}

export default async function VenturePage({
  params,
}: {
  params: { slug: string };
}) {
  const venture = await getVentureBySlug(params.slug);
  if (!venture) notFound();

  const waMessage = `Hi, I'm interested in ${venture.name}. Please share more details.`;

  const specs = [
    { label: 'Type', value: venture.propertyType, Icon: Building },
    { label: 'Size', value: venture.size, Icon: Ruler },
    { label: 'Configuration', value: venture.configurations, Icon: Home },
    { label: 'Possession', value: venture.possessionDate, Icon: Calendar },
    { label: 'RERA', value: venture.reraNumber, Icon: FileCheck },
  ];

  return (
    <>
      <VentureStructuredData
        name={venture.name}
        description={venture.tagline}
        image={venture.coverImage}
        location={venture.location}
        url={`${SITE.url}/ventures/${venture.slug}`}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <Image
            src={venture.coverImage}
            alt={`${venture.name} — ${venture.propertyType}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85" />
        </div>
        <div className="relative container-base h-full flex flex-col justify-end pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1.5 bg-gold text-navy text-[10px] tracking-ultra uppercase font-inter font-medium mb-6">
                {venture.status}
              </span>
              <h1 className="font-cormorant text-beige font-light tracking-display leading-[1.05] text-5xl md:text-6xl lg:text-7xl">
                {venture.name}
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-beige/80 max-w-2xl">
                {venture.tagline}
              </p>
              <p className="mt-4 text-[11px] tracking-widest uppercase text-gold-soft font-inter font-medium flex items-center gap-1.5">
                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                {venture.location}
              </p>
            </div>
            {venture.brochurePdf && (
              <a
                href={venture.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gold text-navy text-xs tracking-widest uppercase hover:bg-gold-deep transition-colors duration-400 font-inter font-medium self-start"
              >
                <Download className="w-4 h-4" strokeWidth={1.5} />
                View Brochure
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Quick specs strip */}
      <section className="bg-beige-warm border-y border-line/40 py-8">
        <div className="container-base grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6 divide-y md:divide-y-0 md:divide-x divide-line/40">
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-1 py-3 md:py-2 ${i === 0 ? '' : 'md:pl-6'}`}
            >
              <span className="text-[10px] tracking-widest uppercase text-muted font-inter font-medium">
                {s.label}
              </span>
              <span className="text-sm md:text-base font-cormorant text-navy leading-tight">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-beige">
        <div className="container-base grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn direction="right" className="lg:col-span-5">
            <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-5">
              — Overview
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy leading-[1.1] tracking-display">
              About <em className="italic font-normal text-gold-deep">{venture.name}</em>
            </h2>
            <div className="w-16 h-px bg-gold mt-8" />
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-muted">
            {venture.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Features — Collapsible */}
      {venture.features?.length > 0 && <CollapsibleFeatures features={venture.features} />}

      {/* Amenities — visual card grid with modal expansion */}
      {venture.amenityGroups?.length ? (
        <VisualAmenities groups={venture.amenityGroups} />
      ) : (
        venture.amenities?.length > 0 && <Amenities amenities={venture.amenities} />
      )}

      {/* Specifications — Collapsible */}
      {venture.specifications?.length ? (
        <CollapsibleSpecifications groups={venture.specifications} />
      ) : null}

      {/* Floor plans */}
      {(venture.floorPlanGroups?.length || venture.floorPlanImages?.length) ? (
        <section className="section-padding bg-beige">
          <div className="container-base">
            <FadeIn direction="up" className="text-center mb-14">
              <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
                — Floor Plans
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy tracking-display">
                Floor Plans & <em className="italic font-normal">Layouts</em>
              </h2>
              <div className="w-16 h-px bg-gold mx-auto mt-8" />
            </FadeIn>
            <FloorPlanViewer
              images={venture.floorPlanImages}
              groups={venture.floorPlanGroups}
              ventureName={venture.name}
            />
          </div>
        </section>
      ) : null}

      {/* Gallery */}
      {venture.gallery?.length > 0 && (
        <section className="py-20 md:py-28 bg-beige-soft">
          <div className="container-base">
            <FadeIn direction="up" className="text-center mb-14">
              <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
                — Gallery
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy tracking-display">
                Inside <em className="italic font-normal">{venture.name}</em>
              </h2>
              <div className="w-16 h-px bg-gold mx-auto mt-8" />
            </FadeIn>
            <VentureGallery images={venture.gallery} ventureName={venture.name} />
          </div>
        </section>
      )}

      {/* Location */}
      <section className="section-padding bg-beige-warm">
        <div className="container-base grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn direction="right" className="lg:col-span-7">
            <LocationMap
              embedUrl={venture.googleMapsEmbed}
              ventureName={venture.name}
              height={500}
            />
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-5 lg:pl-4 lg:sticky lg:top-32">
            <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-5">
              — Location
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[1.1] tracking-display">
              Connected. <em className="italic font-normal text-gold-deep">Convenient.</em>
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Set in a prime location with strong infrastructure, schools, healthcare, and seamless connectivity.
            </p>
            <ul className="mt-8 space-y-3">
              {venture.locationAdvantages.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-navy/90 leading-relaxed">
                  <Check
                    className="w-4 h-4 text-gold-deep mt-1 shrink-0"
                    strokeWidth={1.6}
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Brochure CTA */}
      {venture.brochurePdf && (
        <section className="py-20 md:py-28 bg-beige">
          <div className="container-base text-center max-w-2xl mx-auto">
            <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
              — Brochure
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy tracking-display">
              Get The Full <em className="italic font-normal">Brochure</em>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Detailed plans, pricing, specifications, and approvals — everything you need to make an informed decision.
            </p>
            <Button
              href={venture.brochurePdf}
              external
              variant="primary"
              size="lg"
              className="mt-10"
            >
              <Download className="w-4 h-4" strokeWidth={1.5} />
              Download Brochure (PDF)
            </Button>
          </div>
        </section>
      )}

      {/* Book Visit */}
      <section className="section-padding bg-navy-deep text-beige relative overflow-hidden">
        <div className="container-base grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeIn direction="right" className="lg:col-span-5">
            <p className="text-gold-soft text-xs tracking-ultra uppercase font-inter font-medium mb-5">
              — Visit Us
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-beige leading-[1.1] tracking-display">
              Book a <em className="italic font-normal text-gold-soft">Site Visit</em>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-beige/80 max-w-md">
              Walk through {venture.name} with our expert team. We&apos;ll show you the project, answer your questions, and help you understand the full investment story.
            </p>
            <div className="mt-10 space-y-3 text-sm text-beige/70">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-soft" strokeWidth={1.4} />
                <a href={telLink(CONTACT.phone)} className="hover:text-gold-soft transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold-soft" strokeWidth={1.4} />
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft transition-colors"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-7">
            <BookVisitForm ventureName={venture.name} />
          </FadeIn>
        </div>
      </section>

      {/* Bottom action row */}
      <section className="bg-beige-warm py-16">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={telLink(CONTACT.phone)}
              className="flex items-center justify-center gap-3 px-6 py-5 bg-navy text-beige text-xs tracking-widest uppercase font-inter font-medium hover:bg-navy-deep transition-colors duration-400"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              Call Now
            </a>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-5 bg-gold text-navy text-xs tracking-widest uppercase font-inter font-medium hover:bg-gold-deep transition-colors duration-400"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              WhatsApp Enquiry
            </a>
            {venture.googleMapsEmbed && (
              <a
                href={CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-5 border border-navy text-navy text-xs tracking-widest uppercase font-inter font-medium hover:bg-navy hover:text-beige transition-colors duration-400"
              >
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                View on Map
              </a>
            )}
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-line/40">
            <p className="text-sm text-muted">Looking for more options?</p>
            <Link href="/ventures" className="link-underline group">
              Explore All Ventures
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>

      <Approvals />
    </>
  );
}
