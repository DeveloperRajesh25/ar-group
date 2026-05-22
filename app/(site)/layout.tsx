import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { StructuredData } from '@/components/seo/StructuredData';
import { getSiteSettings, getVentures } from '@/lib/sanity/queries';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [siteSettings, ventures] = await Promise.all([getSiteSettings(), getVentures()]);

  return (
    <>
      <SmoothScroll />
      <StructuredData />
      <Navbar />
      <main>{children}</main>
      <Footer
        siteSettings={siteSettings}
        ventures={ventures.map((v) => ({ slug: v.slug, name: v.name }))}
      />
      <WhatsAppFloat />
    </>
  );
}
