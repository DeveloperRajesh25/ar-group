import { Hero } from '@/components/sections/Hero';
import { Approvals } from '@/components/sections/Approvals';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { VenturesPreview } from '@/components/sections/VenturesPreview';
import { PartnersPreview } from '@/components/sections/PartnersPreview';
import { CTASection } from '@/components/sections/CTASection';
import { getVentures } from '@/lib/sanity/queries';
import { getPartners } from '@/lib/sanity/queries';

export const revalidate = 3600;

export default async function HomePage() {
  const [ventures, partners] = await Promise.all([getVentures(), getPartners()]);

  return (
    <>
      <Hero />
      <Approvals />
      <AboutPreview />
      <WhyChooseUs />
      <VenturesPreview ventures={ventures} />
      <PartnersPreview partners={partners} />
      <CTASection />
    </>
  );
}
