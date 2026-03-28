"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

function NavOverLay({ children }: { children: ReactNode }) {
  const navPlaceholderRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!navPlaceholderRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrolling = !entry.isIntersecting;
        if (isScrolling) setIsScrolled(isScrolling);
      },
      {
        threshold: 0.9,
      },
    );
    observer.observe(navPlaceholderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={navPlaceholderRef} className="h-15">
      <nav
        className={`fixed inset-x-0 top-0 z-40 overflow-x-clip ${isScrolled ? "border-border border-b backdrop-blur-lg dark:bg-[rgba(13,13,13,0.5)]" : "bg-transparent"} font-mono transition duration-200`}
      >
        <div className="mx-auto flex h-14 w-full items-center justify-between gap-4 px-4 sm:px-6 md:px-10">
          {children}
        </div>
      </nav>
    </div>
  );
}

export default NavOverLay;
