import { SectionHeading } from '@/components/ui/SectionHeading';
import { PartnerCard } from '@/components/partners/PartnerCard';
import type { Partner } from '@/lib/data';

export function PartnersPreview({ partners }: { partners: Partner[] }) {
  return (
    <section className="section-padding bg-beige">
      <div className="container-base">
        <SectionHeading
          preHeading="Leadership"
          title={
            <>
              Meet The People <br className="hidden md:block" />
              <em className="italic font-normal">Behind</em> AL Group
            </>
          }
          subtitle="Partners with a shared philosophy of integrity, transparency, and long-term family relationships."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <PartnerCard key={p.slug} partner={p} index={i} variant="preview" />
          ))}
        </div>
      </div>
    </section>
  );
}
