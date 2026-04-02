"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { projects } from "../projects-section/projects.const";

export function ProductImageSlider({ projectName }: { projectName: string }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projectImageSrcs = projects.find(
    (project) => project.id === projectName,
  )?.images;

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 1000 * 3);

    return () => clearInterval(id);
  }, [isHovered]);

  const totalSlides = projectImageSrcs?.length || 0;
  return (
    <>
      <div
        className="border-border relative aspect-video overflow-hidden rounded-xl border"
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {Array.from({ length: totalSlides }).map((_, index) => {
            const image = projectImageSrcs?.[index];

            return (
              <SwiperSlide key={image}>
                {image ? (
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "1919/925" }}
                  >
                    <Image
                      src={image}
                      alt={`${projectName} screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 940px"
                    />
                  </div>
                ) : (
                  <div className="bg-surface2 text-muted flex h-full w-full items-center justify-center text-center font-mono text-[12px]">
                    <span>
                      Screenshot {index + 1} / {totalSlides}
                    </span>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {totalSlides > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => swiperRef.current?.slidePrev()}
              className="border-border bg-bg text-text hover:border-accent hover:text-accent absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border text-lg transition-colors duration-200"
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
              className="border-border bg-bg text-text hover:border-accent hover:text-accent absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border text-lg transition-colors duration-200"
            >
              &#8250;
            </button>
          </>
        ) : null}
      </div>

      {totalSlides > 1 ? (
        <div className="flex justify-center gap-2 pt-4 pb-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-all duration-200 ${index === activeIndex ? "bg-accent scale-130" : "bg-border"} `}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
