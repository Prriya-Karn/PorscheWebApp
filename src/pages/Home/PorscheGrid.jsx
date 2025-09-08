import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const cars = [
  {
    title: "911",
    description: "Electric sports car with twin-turbo engine · 4 seats, 2 doors.",
    image:
      "https://porsche.imgix.net/-/media/38BB0AC8E77B4B7F8993D0800CE70EE9_0A4CBE5C6BA9497B875D72F44C5F44C1_718---Mobile_New?h=1757&iar=0&w=989&auto=format",
  },
  {
    title: "718",
    description: "Precise mid-engine sports car · 2 doors, 2 seats.",
    image:
      "https://porsche.imgix.net/-/media/B85D77B50F854CAC99B89056B334ADF6_1946DF3F5FF74ED19C1202FABA05B438_01---E3-II-Coupe-PHEV?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format",
  },
  {
    title: "Taycan",
    description: "Electric sports car · 4 doors, 4 seats.",
    image:
      "https://porsche.imgix.net/-/media/57BA0D23848F4EDD9F7362F4A4A7E35F_085418C69FD24F7D803B12C2FD02B311_00---911-Carrera-T---fallback---Desktop?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format",
  },
  {
    title: "Panamera",
    description: "Luxury sedan with high-level comfort · 4 doors, 4 seats.",
    image:
      "https://porsche.imgix.net/-/media/57BA0D23848F4EDD9F7362F4A4A7E35F_085418C69FD24F7D803B12C2FD02B311_00---911-Carrera-T---fallback---Desktop?h=2880&iar=0&w=600&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format",
  },
];

export default function PorscheGrid({ isPorscheGridVisible }) {
  return (
    <Fragment>
      <div className="mt-20">
        <h1 data-aos="fade-up"
          className={`lg:text-5xl md:text-4xl sm:text-3xl text-2xl px-10 mb-20 tracking-wide ${
            isPorscheGridVisible ? "text-white" : "text-black"
          }`}
        >
          Your Porsche journey starts now.
        </h1>

        <div className="w-full flex flex-col items-center">
          <div className="max-w-6xl w-full xl:px-4 px-5 flex flex-col gap-6">
            {/* Split cars into rows of 2 */}
            {cars.reduce((rows, car, idx) => {
              if (idx % 2 === 0) rows.push([car]);
              else rows[rows.length - 1].push(car);
              return rows;
            }, []).map((row, rowIdx) => (
              <div key={rowIdx} className="flex md:flex-row flex-col gap-6 group">
                {row.map((car, idx) => (
                  <div
                    key={idx}
                    className="
                      relative rounded-xl overflow-hidden shadow-lg cursor-pointer
                      transition-all duration-500 ease-in-out
                      h-[500px]
                      flex-1
                      group-hover:flex-[0.8]
                      hover:flex-[1.2]
                    "
                  >
                    <NavLink to={`/model/${car.title}`}>
                      <img
                        src={car.image}
                        alt={car.title}
                        className="w-full md:h-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
                      <h2 className="absolute top-3 left-3 text-white text-3xl font-bold tracking-wide">
                        {car.title}
                      </h2>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                        <p className="text-white text-sm max-w-[80%] leading-snug">
                          {car.description}
                        </p>
                        <ArrowRight className="text-white w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
