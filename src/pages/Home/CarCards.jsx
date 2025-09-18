import { ArrowRight, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addWishlist } from "../../store/slices/SliceWish";
import { cars } from "../../database/carCardData";
import { toast } from "react-toastify";



export default function CarCards() {

  const senData = useDispatch();

  const handleWishlist = (id) => {
    const findData = cars.find((e) => e.id === id);
    console.log(findData)
    senData(addWishlist(findData));
  };



  return (
    <div className="w-full flex justify-center mt-16 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full px-4">
        {cars.map((car, idx) => (
          <NavLink
            key={idx}
            to={`/car/${car.title.split(" ").join("").replace(".", "").toLowerCase()}`}
          >
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-40 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleWishlist(car.id);
                  toast.success(`${car.title} added to wishlist ❤️`);
                }}
                className="absolute cursor-pointer top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 p-2 rounded-full shadow"
              >
                <Heart className="w-5 h-5 text-red-500" />
              </button>

              {/* Text & Arrow */}
              <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                <h3 className="text-white font-semibold text-xs">{car.title}</h3>
                <ArrowRight className="text-white w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>

  );
}
