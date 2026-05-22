'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItem {
  id: string;
  title: string | React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

export function Accordion({ items, allowMultiple = false, defaultOpen = [] }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (allowMultiple) {
        return [...prev, id];
      }
      return [id];
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <motion.div
            key={item.id}
            className="border border-line/30 overflow-hidden"
            layout
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 md:py-5 bg-beige-soft hover:bg-beige-warm transition-colors duration-300 text-left"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {item.icon && (
                  <div className="shrink-0">{item.icon}</div>
                )}
                <h3 className="font-cormorant text-lg md:text-xl font-light text-navy tracking-display truncate">
                  {item.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-gold-deep" strokeWidth={1.5} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden bg-white/50"
                >
                  <div className="px-6 py-4 md:py-5 border-t border-line/20">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
