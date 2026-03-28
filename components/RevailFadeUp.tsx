"use client";

import { useEffect } from "react";

function RevailFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("opacity-0", "translate-y-5");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );
    const fadeEle = document.body.querySelectorAll("[data-fade-up]");
    fadeEle.forEach((ele) => observer.observe(ele));
  }, []);

  return null;
}

export default RevailFadeUp;
