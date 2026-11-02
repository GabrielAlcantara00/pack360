"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StickyCTA = dynamic(() => import("./StickyCTA").then((m) => m.StickyCTA), { ssr: false });
const ExitPopup = dynamic(() => import("./ExitPopup").then((m) => m.ExitPopup), { ssr: false });

export function DeferredEnhancements() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const win = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(() => setReady(true), { timeout: 1800 });
      return () => win.cancelIdleCallback?.(id);
    }
    const timer = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;
  return <><StickyCTA /><ExitPopup /></>;
}
