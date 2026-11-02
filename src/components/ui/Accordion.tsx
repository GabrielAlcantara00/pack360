interface AccordionProps {
  items: { question: string; answer: string }[];
  defaultOpenCount?: number;
}

export function Accordion({ items, defaultOpenCount = 3 }: AccordionProps) {
  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          open={index < defaultOpenCount}
          className="group border border-[var(--color-dark-border)] rounded-lg bg-[var(--color-dark-charcoal)] overflow-hidden"
        >
          <summary className="cursor-pointer list-none w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-orange)]">
            <span className="font-bold text-base sm:text-lg pr-4">{item.question}</span>
            <span aria-hidden="true" className="text-[var(--color-brand-orange)] text-xl leading-none transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
