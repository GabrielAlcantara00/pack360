import Image from "next/image";
import type { CSSProperties } from "react";

interface InfiniteCarouselProps {
  items: string[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

export function InfiniteCarousel({
  items,
  direction = "left",
  speed = "normal",
}: InfiniteCarouselProps) {
  const duplicatedItems = [...items, ...items];
  const durationMap = { slow: "60s", normal: "40s", fast: "20s" };

  return (
    <div className="relative w-full overflow-hidden py-4 carousel-shell">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

      <div
        className={`carousel-track ${direction === "right" ? "carousel-track-right" : "carousel-track-left"}`}
        style={{ "--carousel-duration": durationMap[speed] } as CSSProperties}
      >
        {duplicatedItems.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px] aspect-[1/2] rounded-xl overflow-hidden shadow-lg border border-[var(--color-dark-border)] bg-[var(--color-dark-charcoal)] relative"
            aria-hidden={index >= items.length ? true : undefined}
          >
            <Image
              src={src}
              alt={index < items.length ? `Feedback real ${index + 1}` : ""}
              fill
              sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
              className="object-cover"
              loading="lazy"
              quality={68}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
