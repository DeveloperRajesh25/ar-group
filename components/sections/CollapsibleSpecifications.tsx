'use client';

import { Accordion } from '@/components/ui/Accordion';
import { FadeIn } from '@/components/ui/FadeIn';
import { Check } from 'lucide-react';
import type { SpecGroup } from '@/lib/data';

interface CollapsibleSpecificationsProps {
  groups: SpecGroup[];
}

export function CollapsibleSpecifications({
  groups,
}: CollapsibleSpecificationsProps) {
  if (!groups?.length) return null;

  const accordionItems = groups.map((group) => ({
    id: group.title.toLowerCase().replace(/\s+/g, '-'),
    title: group.title,
    content: (
      <ul className="space-y-3">
        {group.items.map((item, i) => (
          <li
            key={item + i}
            className="flex items-start gap-2.5 text-sm md:text-base text-navy/85 leading-relaxed"
          >
            <Check
              className="w-4 h-4 text-gold-deep mt-1 shrink-0"
              strokeWidth={1.6}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section className="py-16 md:py-24 bg-beige-soft">
      <div className="container-base">
        <FadeIn direction="up" className="text-center mb-14">
          <p className="text-gold text-xs tracking-ultra uppercase font-inter font-medium mb-4">
            — Specifications
          </p>
          <h2 className="font-cormorant text-[2rem] sm:text-3xl md:text-5xl font-light text-navy tracking-display">
            Built to <em className="italic font-normal">Last</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </FadeIn>

        <FadeIn direction="up" className="max-w-3xl mx-auto">
          <Accordion items={accordionItems} allowMultiple={true} />
        </FadeIn>
      </div>
    </section>
  );
}
