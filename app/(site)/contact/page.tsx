import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
} from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { FadeIn } from '@/components/ui/FadeIn';
import { LocationMap } from '@/components/ventures/LocationMap';
import { CONTACT, SOCIALS } from '@/lib/constants';
import { telLink, mailLink, whatsappLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact AL Group | Get in Touch',
  description:
    "Get in touch with AL Group to discover trusted real estate opportunities across Andhra Pradesh. Visit our office in Visakhapatnam, or send us an enquiry.",
  alternates: { canonical: '/contact' },
};

const HERO_IMG =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80';

const socials = [
  { href: SOCIALS.instagram, Icon: Instagram, label: 'Instagram' },
  { href: SOCIALS.facebook, Icon: Facebook, label: 'Facebook' },
  { href: SOCIALS.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { href: SOCIALS.youtube, Icon: Youtube, label: 'YouTube' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        preHeading="Contact"
        title="Get in Touch"
        subtitle="We're here to help you discover trusted real estate opportunities across Andhra Pradesh."
        image={HERO_IMG}
        imageAlt="AL Group office and consultation"
        size="sm"
      />

      <section className="section-padding bg-beige">
        <div className="container-base grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — info */}
          <FadeIn direction="right" className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
                — Reach Us
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy leading-tight tracking-display">
                Let&apos;s Start a{' '}
                <em className="italic font-normal text-gold-deep">Conversation</em>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-md">
                Whether you&apos;re ready to invest or simply exploring, our team is here to guide you with honesty and care.
              </p>
            </div>

            <ul className="space-y-6 max-w-md">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-1">
                    Visit Our Office
                  </p>
                  <p className="text-base text-navy leading-relaxed">{CONTACT.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-1">
                    Working Hours
                  </p>
                  <p className="text-base text-navy leading-relaxed">{CONTACT.workingHours}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-1">
                    Call Us
                  </p>
                  <a
                    href={telLink(CONTACT.phone)}
                    className="text-base text-navy hover:text-gold-deep transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-1">
                    Email Us
                  </p>
                  <a
                    href={mailLink(CONTACT.email)}
                    className="text-base text-navy hover:text-gold-deep transition-colors break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={whatsappLink("Hi AL Group, I'd like to enquire about your real estate ventures.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-navy hover:text-gold-deep transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </li>
            </ul>

            <div>
              <p className="text-[11px] tracking-widest uppercase text-muted font-inter font-medium mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-11 h-11 border border-line text-navy hover:bg-gold hover:border-gold hover:text-navy transition-all duration-400"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn direction="left" className="lg:col-span-7">
            <div className="bg-beige-soft border border-line/60 p-8 md:p-12">
              <h3 className="font-cormorant text-3xl md:text-4xl font-light text-navy tracking-display">
                Send Us an <em className="italic font-normal text-gold-deep">Inquiry</em>
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Fill out the form below and our team will get back to you within one working day.
              </p>
              <div className="w-12 h-px bg-gold mt-6 mb-8" />
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <LocationMap
          embedUrl={CONTACT.googleMapsEmbed}
          ventureName="AL Group Office"
          height={500}
        />
      </section>
    </>
  );
}
