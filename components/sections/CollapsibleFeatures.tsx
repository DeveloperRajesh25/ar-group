'use client';

import { Check } from 'lucide-react';
import { Accordion } from '@/components/ui/Accordion';
import { FadeIn } from '@/components/ui/FadeIn';

interface CollapsibleFeaturesProps {
  features: string[];
}

export function CollapsibleFeatures({ features }: CollapsibleFeaturesProps) {
  if (!features?.length) return null;

  const accordionItems = [
    {
      id: 'all-features',
      title: 'Explore All Features',
      icon: <Check className="w-5 h-5 text-gold-deep" strokeWidth={1.6} />,
      content: (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                className="w-4 h-4 text-gold-deep mt-1 shrink-0"
                strokeWidth={1.8}
              />
              <span className="text-navy/90 text-sm md:text-base leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-beige-soft">
      <div className="container-base">
        <FadeIn direction="up" className="text-center mb-10">
          <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
            — Features
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-navy tracking-display">
            Premium <em className="italic font-normal">Features</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </FadeIn>
        <FadeIn direction="up" className="max-w-3xl mx-auto">
          <Accordion items={accordionItems} />
        </FadeIn>
      </div>
    </section>
  );
}
