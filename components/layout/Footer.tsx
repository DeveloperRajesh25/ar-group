import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { telLink, mailLink } from '@/lib/utils';
import type { SiteSettings } from '@/lib/sanity/queries';

export interface FooterProps {
  siteSettings: SiteSettings;
  ventures: Array<{ slug: string; name: string }>;
}

export function Footer({ siteSettings, ventures }: FooterProps) {
  const year = new Date().getFullYear();

  const socials = [
    { href: siteSettings.socials.instagram, Icon: Instagram, label: 'Instagram' },
    { href: siteSettings.socials.facebook, Icon: Facebook, label: 'Facebook' },
    { href: siteSettings.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: siteSettings.socials.youtube, Icon: Youtube, label: 'YouTube' },
  ].filter((s) => Boolean(s.href));

  return (
    <footer className="bg-navy-deep text-beige relative overflow-hidden">
      {/* Subtle textured top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-base py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo invert size="lg" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-beige/70">
              {SITE.description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border border-gold/50 text-gold-soft hover:bg-gold hover:text-navy hover:border-gold transition-all duration-400"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-widest uppercase text-gold-soft font-inter font-medium mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-beige/80 hover:text-gold-soft transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-gold-soft font-inter font-medium mb-6">
              Our Ventures
            </h4>
            <ul className="space-y-3">
              {ventures.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/ventures/${v.slug}`}
                    className="text-sm text-beige/80 hover:text-gold-soft transition-colors"
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-gold-soft font-inter font-medium mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-beige/80">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-soft shrink-0" strokeWidth={1.5} />
                <span>{siteSettings.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gold-soft shrink-0" strokeWidth={1.5} />
                <a href={telLink(siteSettings.phone)} className="hover:text-gold-soft transition-colors">
                  {siteSettings.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold-soft shrink-0" strokeWidth={1.5} />
                <a href={mailLink(siteSettings.email)} className="hover:text-gold-soft transition-colors">
                  {siteSettings.email}
                </a>
              </li>
              <li className="text-xs tracking-widest uppercase text-beige/60 pt-2">
                {siteSettings.workingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-beige/60">
              © {year} {siteSettings.companyName || SITE.legalName}. All rights reserved.
            </p>
            <p className="text-xs tracking-widest uppercase text-gold-soft font-inter font-medium">
              {SITE.slogan}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
