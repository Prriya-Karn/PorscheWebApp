import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

const cars = [
  {
    title: "911 GT3.",
    image: "https://porsche.imgix.net/-/media/B85D77B50F854CAC99B89056B334ADF6_1946DF3F5FF74ED19C1202FABA05B438_01---E3-II-Coupe-PHEV?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format",
  },
  {
    title: "taycan.",
    image: "https://porsche.imgix.net/-/media/912CC98313B64A4E8222388A657538F2_58B0091F97AA4BCC817566C519782FFF_KW34---WW---Sonderwunsch?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format",
  },
  {
    title: "panamera.",
    image: "https://porsche.imgix.net/-/media/57BA0D23848F4EDD9F7362F4A4A7E35F_085418C69FD24F7D803B12C2FD02B311_00---911-Carrera-T---fallback---Desktop?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format",
  },
];

export default function CarCards() {


  return (
    <div className="w-full flex justify-center mt-16 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full px-4">
        {cars.map((car, idx) => (
          <Fragment key={idx}>

            <NavLink to={`/car/${car.title.split(" ").join("").replace(".", "").toLowerCase()}`}>
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-40 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Text & Icon */}
                <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                  <h3 className="text-white font-semibold text-xs">{car.title}</h3>
                  <ArrowRight className="text-white w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </NavLink>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
