// src/components/HeroSection.jsx
import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&w=645&ar=16%3A9&q=45&dpr=2&auto=format" 
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay Navbar */}
     <Navbar />

      {/* Hero Text */}
      <div className="absolute bottom-24 left-12">
        <h1 className="text-white text-4xl font-semibold">Individualisation.</h1>
      </div>
    </div>
  );
};

export default HeroSection;