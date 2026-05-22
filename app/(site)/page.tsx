import { Hero } from '@/components/sections/Hero';
import { Approvals } from '@/components/sections/Approvals';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { VenturesPreview } from '@/components/sections/VenturesPreview';
import { PartnersPreview } from '@/components/sections/PartnersPreview';
import { CTASection } from '@/components/sections/CTASection';
import {
  getVentures,
  getPartners,
  getPageImages,
  getSiteSettings,
} from '@/lib/sanity/queries';

export const revalidate = 3600;

export default async function HomePage() {
  const [ventures, partners, images, site] = await Promise.all([
    getVentures(),
    getPartners(),
    getPageImages(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero backgroundImage={images.homeHeroBackground} />
      <Approvals />
      <VenturesPreview ventures={ventures} />
      <AboutPreview image={images.homeAboutImage} />
      <WhyChooseUs />
      <PartnersPreview partners={partners} />
      <CTASection backgroundImage={images.homeCtaBackground} phone={site.phone} />
    </>
  );
}
