"use client";

import { useEffect, useRef, useState } from "react";

const MEDIA_ID = "hkifs7oe9q";

export function LazyWistia() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const ensureScript = (src: string, type?: string) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (type) script.type = type;
      document.head.appendChild(script);
    };

    ensureScript("https://fast.wistia.com/player.js");
    ensureScript(`https://fast.wistia.com/embed/${MEDIA_ID}.js`, "module");
  }, [shouldLoad]);

  return (
    <div ref={hostRef} className="relative w-full aspect-video overflow-hidden rounded-xl border border-[var(--color-dark-border)] bg-[var(--color-dark-charcoal)] shadow-xl">
      {shouldLoad ? (
        <wistia-player media-id={MEDIA_ID} aspect="1.7777777777777777" style={{ display: "block", width: "100%" }} />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
          Vídeo da biblioteca
        </div>
      )}
    </div>
  );
}
