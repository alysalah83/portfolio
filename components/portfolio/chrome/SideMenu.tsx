"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { NAV_ITEMS } from "../../nav/nav.consts";
import NavLink from "../../nav/NavLink";

type SideMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

function SideMenu({ isOpen, onToggle, onClose }: SideMenuProps) {
  const canUseDOM = typeof document != "undefined";

  useEffect(() => {
    if (!canUseDOM) return;

    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [canUseDOM, isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex flex-col gap-1 p-1 md:hidden"
        onClick={onToggle}
      >
        <span className="bg-muted-text block h-0.5 w-5" />
        <span className="bg-muted-text block h-0.5 w-5" />
      </button>

      {canUseDOM &&
        isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              aria-label="Close menu"
              className="bg-surface3/40 absolute inset-0"
              onClick={onClose}
            />

            <aside className="bg-surface border-border absolute inset-y-0 right-0 flex h-full w-[min(82vw,15rem)] max-w-full flex-col border-l shadow-[-16px_0_40px_rgba(0,0,0,0.22)]">
              <div className="flex justify-end p-4">
                <button
                  type="button"
                  aria-label="Close menu"
                  className="text-muted-text hover:text-text font-mono text-sm transition-colors duration-200"
                  onClick={onClose}
                >
                  close
                </button>
              </div>

              <ul className="flex flex-1 flex-col items-center justify-center gap-5 px-6 pb-10">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item}
                    onClick={onClose}
                    className="text-muted-text hover:text-text font-mono text-lg font-medium tracking-wide capitalize"
                  >
                    <NavLink item={item} />
                  </li>
                ))}
              </ul>
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}

export default SideMenu;
