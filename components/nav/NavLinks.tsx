"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav.consts";
import SideMenu from "../portfolio/chrome/SideMenu";
import NavLink from "./NavLink";

function NavLinks() {
  const pathname = usePathname();
  const inHomePage = pathname === "/";
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<(typeof NAV_ITEMS)[number] | null>(
    NAV_ITEMS[0],
  );
  const [hoveredItem, setHoveredItem] = useState<(typeof NAV_ITEMS)[number] | null>(
    null,
  );
  const [pill, setPill] = useState({
    width: 0,
    x: 0,
  });
  const targetItem = inHomePage ? hoveredItem ?? activeItem : null;

  const measurePill = (item: (typeof NAV_ITEMS)[number]) => {
    const container = containerRef.current;
    const itemElement = itemRefs.current[item];
    if (!container || !itemElement) return null;

    const linkElement = itemElement.querySelector("a");
    const targetElement = linkElement ?? itemElement;
    const containerRect = container.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    return {
      width: targetRect.width,
      x: targetRect.left - containerRect.left - container.clientLeft,
    };
  };

  useEffect(() => {
    if (!inHomePage) return;

    const visibleSections = NAV_ITEMS.flatMap((item) => {
      const element = document.getElementById(item);
      return element ? [{ item, element }] : [];
    });

    if (!visibleSections.length) return;

    const visibleRatios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          visibleRatios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let nextItem = visibleSections[0]?.item ?? NAV_ITEMS[0];
        let maxRatio = -1;

        visibleSections.forEach(({ item }) => {
          const ratio = visibleRatios.get(item) ?? 0;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextItem = item;
          }
        });

        setActiveItem(nextItem);
      },
      {
        rootMargin: "-22% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      },
    );

    visibleSections.forEach(({ item, element }, index) => {
      visibleRatios.set(item, index === 0 ? 1 : 0);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [inHomePage]);

  useLayoutEffect(() => {
    if (!targetItem) return;

    const updatePill = () => {
      const nextPill = measurePill(targetItem);
      if (!nextPill) return;
      setPill(nextPill);
    };

    updatePill();

    const resizeObserver = new ResizeObserver(updatePill);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    const currentItemElement = itemRefs.current[targetItem];
    if (currentItemElement) {
      resizeObserver.observe(currentItemElement);
    }
    window.addEventListener("resize", updatePill);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePill);
    };
  }, [targetItem]);

  return (
    <>
      <SideMenu
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((current) => !current)}
        onClose={() => setIsMenuOpen(false)}
      />

      <ul
        ref={containerRef}
        className="border-border bg-surface/70 relative hidden items-center gap-0.5 rounded-full border px-2.5 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:flex"
      >
        <span
          aria-hidden="true"
          className="bg-accent absolute top-1 bottom-1 left-0 rounded-full shadow-[0_8px_24px_var(--color-accent-glow)] transition-[transform,width,opacity] duration-300 ease-out"
          style={{
            width: `${pill.width}px`,
            transform: `translateX(${pill.x}px)`,
            opacity: targetItem ? 1 : 0,
          }}
        />
        {NAV_ITEMS.map((item) => (
          <li
            key={item}
            ref={(element) => {
              itemRefs.current[item] = element;
            }}
            className="relative z-10"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            onFocusCapture={() => setHoveredItem(item)}
            onBlurCapture={() => setHoveredItem(null)}
          >
            <NavLink
              item={item}
              className={`inline-flex rounded-full px-4 py-1.5 font-mono text-sm leading-none transition-colors duration-200 ${
                targetItem === item
                  ? "text-accent-text"
                  : "text-muted-text hover:text-text"
              }`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLinks;
