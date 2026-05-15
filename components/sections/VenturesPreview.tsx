import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { VentureCard } from '@/components/ventures/VentureCard';
import type { Venture } from '@/lib/data';

export function VenturesPreview({ ventures }: { ventures: Venture[] }) {
  return (
    <section className="section-padding bg-beige">
      <div className="container-base">
        <SectionHeading
          preHeading="Our Ventures"
          title={
            <>
              Discover Premium <br className="hidden md:block" />
              <em className="italic font-normal">Investment</em> Opportunities
            </>
          }
          subtitle="Hand-picked villas and plotted developments across Andhra Pradesh — each carefully approved, premium in finish, and built for long-term value."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {ventures.slice(0, 4).map((venture, i) => (
            <VentureCard key={venture.slug} venture={venture} index={i} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/ventures" className="link-underline group">
            View All Ventures
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
