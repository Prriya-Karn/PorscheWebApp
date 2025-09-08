// src/components/HeroSection.jsx
import React from "react";
import Navbar from "./Navbar";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const heroImages = [
    "https://a.storyblok.com/f/338913/3840x2880/c9c5acd5c3/00-911-gt3-video-fallback-desktop-new-cut.jpg/m/900x675/filters:format(webp):quality(80)",
    "https://a.storyblok.com/f/338913/1920x1080/eafc7bd644/te24t4cox0002_16-9_mobile.jpg/m/1290x725/filters:format(webp):quality(45)",
    "https://images-porsche.imgix.net/-/media/B96EBD5072734DFF9773D746C3725F08_19A33DD3612149E4BAB3A4E5DB3B5BEB_EP21Q2EOX0003-taycan-4s-cross-turismo-at-beach-with-kitesurfers?w=645&q=45&dpr=2&auto=format"
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Background Slider */}
      <Swiper
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
        className="w-full h-full"
      >
        {heroImages.map((src, idx) => (
          <SwiperSlide key={idx} className="">
            <img
              src={src}
              alt={`Hero Background ${idx}`}
              className="w-full h-full bg-no-repeat object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Text */}
      <div className="absolute bottom-24 left-12 z-10">
        <h1 className="text-white text-4xl font-semibold">Individualisation.</h1>
      </div>
    </div>
  );
};

export default HeroSection;
