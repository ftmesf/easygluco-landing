"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!items.length) return;

    items.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index, 7) * 80}ms`;
      el.classList.add("reveal-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        items.forEach((el) => el.classList.remove("reveal-hidden"));
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
