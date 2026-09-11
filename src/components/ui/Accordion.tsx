"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border border-[var(--color-dark-border)] rounded-lg bg-[var(--color-dark-charcoal)] overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)]"
      >
        <span className="font-bold text-base sm:text-lg pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[var(--color-brand-orange)] transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4 sm:p-6 pt-0 text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  defaultOpenCount?: number;
}

export function Accordion({ items, defaultOpenCount = 3 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [initialOpens, setInitialOpens] = useState<number[]>(
    Array.from({ length: Math.min(defaultOpenCount, items.length) }, (_, i) => i)
  );

  const handleClick = (index: number) => {
    if (initialOpens.includes(index)) {
      setInitialOpens(initialOpens.filter((i) => i !== index));
    } else {
      setOpenIndex(openIndex === index ? null : index);
      // Close initial ones if a new one is opened
      setInitialOpens([]); 
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={initialOpens.includes(index) || openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
