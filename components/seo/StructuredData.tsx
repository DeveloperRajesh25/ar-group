import { SITE, CONTACT, SOCIALS } from '@/lib/constants';

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Visalakshi Nagar',
      addressLocality: 'Visakhapatnam',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'State',
      name: 'Andhra Pradesh',
    },
    openingHours: 'Mo-Sa 09:30-19:00',
    sameAs: [SOCIALS.instagram, SOCIALS.facebook, SOCIALS.linkedin, SOCIALS.youtube],
    slogan: SITE.slogan,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function VentureStructuredData({
  name,
  description,
  image,
  location,
  url,
}: {
  name: string;
  description: string;
  image: string;
  location: string;
  url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name,
    description,
    image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location,
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    url,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
