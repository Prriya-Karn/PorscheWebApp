import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Porsche Exclusive Collection",
    image: "https://porsche.imgix.net/-/media/57BA0D23848F4EDD9F7362F4A4A7E35F_085418C69FD24F7D803B12C2FD02B311_00---911-Carrera-T---fallback---Desktop?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format"
  },
  {
    title: "Porsche Tequipment",
    image: "https://porsche.imgix.net/-/media/57BA0D23848F4EDD9F7362F4A4A7E35F_085418C69FD24F7D803B12C2FD02B311_00---911-Carrera-T---fallback---Desktop?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format"
  },
  {
    title: "Taycan",
    image: "https://porsche.imgix.net/-/media/57BA0D23848F4EDD9F7362F4A4A7E35F_085418C69FD24F7D803B12C2FD02B311_00---911-Carrera-T---fallback---Desktop?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format"
  },
];

const Discover = () => {
  return (
<div>
    <div className="w-full flex mt-16 justify-center py-12 bg-white">
    <h2 className="text-3xl font-bold leading-snug">
      Discover
    </h2>
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-2xl px-4 md:px-0  gap-4 md:max-w-2xl lg:max-w-3xl mx-auto">
    
      {cards.map((card, idx) => (
        <div data-aos="fade-up" data-aos-delay={idx * 200}
          key={idx}
          className="
            group relative rounded-xl overflow-hidden shadow-lg cursor-pointer 
            transition-all duration-500 ease-in-out
          "
        >
          {/* Background Image */}
          <img 
            src={card.image} 
            alt={card.title} 
            className="w-full h-70   object-cover transition-transform duration-500 group-hover:scale-105" 
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/30 opacity-100  transition-opacity duration-500"></div>
         {/* Content on top of overlay */}
<div className="absolute inset-0 flex items-end p-4">
<div className="flex items-center justify-between w-full">
  <h2 className="text-white text-md z-10">
    {card.title}
  </h2>
  <ArrowRight className="text-white w-6 h-6 z-10 group-hover:translate-x-1 transition-transform duration-300" />
</div>
</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Discover;
