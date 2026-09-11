"use client";

import { motion } from "framer-motion";

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
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  const durationMap = {
    slow: 60,
    normal: 40,
    fast: 20,
  };

  const duration = durationMap[speed];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient masks for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex space-x-4 sm:space-x-6 w-max items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedItems.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px] aspect-[1/2] rounded-xl overflow-hidden shadow-lg border border-[var(--color-dark-border)] bg-[var(--color-dark-charcoal)] relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Print ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
