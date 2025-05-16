"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Dummy banners; replace with your real image paths
const carouselImages = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.png",
];

export default function HeroCarousel() {
  // Inline autoplay plugin for Keen Slider
  const autoplay = (slider) => {
    let timeout;
    let mouseOver = false;
    const clearNext = () => clearTimeout(timeout);
    const nextTimeout = () => {
      clearNext();
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), 3000);
    };
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNext();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNext);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [autoplay]
  );

  return (
    <div ref={sliderRef} className='keen-slider w-full overflow-hidden rounded'>
      {carouselImages.map((src, idx) => (
        <div
          key={idx}
          className='keen-slider__slide relative w-full h-64 md:h-80 lg:h-[32rem]'
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
