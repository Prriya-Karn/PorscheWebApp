import React from "react";
import Navbar from "../../component/Navbar";
const models = [
  {
    tag: "Electric",
    name: "Taycan",
    price: "₹ 1,69,78,000.00 incl. VAT*",
    accel: "4.8 s",
    power: "300 kW / 408 PS",
    speed: "230 km/h",
    img: "https://images-porsche.imgix.net/-/media/66C5132442584A4EBE1159CEB1B5D476_9694CB9F5C63484D9509AFD68A47CC0A_911-carrera-sideshot?w=600&auto=format",
  },
  {
    tag: "Electric",
    name: "Taycan 4S",
    price: "₹ 1,95,00,000.00 incl. VAT*",
    accel: "3.7 s",
    power: "380 kW / 517 PS",
    speed: "250 km/h",
    img: "https://images-porsche.imgix.net/-/media/66C5132442584A4EBE1159CEB1B5D476_9694CB9F5C63484D9509AFD68A47CC0A_911-carrera-sideshot?w=600&auto=format",
  },
  {
    tag: "Electric",
    name: "Taycan 4S Black Edition",
    price: "₹ 2,07,10,000.00 incl. VAT*",
    accel: "3.7 s",
    power: "380 kW / 517 PS",
    speed: "250 km/h",
    img: "https://images-porsche.imgix.net/-/media/66C5132442584A4EBE1159CEB1B5D476_9694CB9F5C63484D9509AFD68A47CC0A_911-carrera-sideshot?w=600&auto=format",
  },
  {
    tag: "Electric",
    name: "Taycan Turbo",
    price: "₹ 2,29,45,000.00 incl. VAT*",
    accel: "2.7 s",
    power: "520 kW / 707 PS",
    speed: "260 km/h",
    img: "https://images-porsche.imgix.net/-/media/66C5132442584A4EBE1159CEB1B5D476_9694CB9F5C63484D9509AFD68A47CC0A_911-carrera-sideshot?w=600&auto=format",
  },
];

export default function Model() {
  return (
    <div>
    
    
    <Navbar />
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-8">Model overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 p-4 rounded">
          <h2 className="font-semibold mb-4">Models</h2>
          <div className="flex flex-col gap-2 mb-6">
            {["All (19)", "911 (3)", "Taycan (4)", "Panamera (2)", "Macan (4)", "Cayenne (6)"].map((m, i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="model" className="accent-black" defaultChecked={m.includes("Taycan")} />
                <span>{m}</span>
              </label>
            ))}
          </div>

          {/* Filters */}
          {["Body Design", "Seats", "Drive", "Fueltype"].map((f, i) => (
            <details key={i} className="border-t border-gray-200 py-2">
              <summary className="cursor-pointer font-medium">{f}</summary>
            </details>
          ))}

          {/* Reset Button */}
          <button className="mt-6 w-full border border-black py-2 rounded hover:bg-black hover:text-white transition">
            Reset Filter
          </button>
        </aside>

        {/* Models Grid */}
        <section className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-6">Taycan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {models.map((car, idx) => (
              <div key={idx} className="bg-white rounded shadow p-6 flex flex-col min-h-[500px]">
                <span className="text-xs border border-gray-400 rounded px-2 py-1 w-max mb-2">{car.tag}</span>
                <img 
                src={car.img} 
                alt={car.name} 
                className="w-full h-auto object-contain mb-4 rounded" 
              />
                <h3 className="font-bold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-2">From {car.price}</p>

                {/* Performance Stats */}
                <div className="mt-auto">
                  <p className="font-semibold">{car.accel}</p>
                  <p className="text-gray-500 text-sm">Acceleration 0-100 km/h with Launch Control</p>

                  <p className="font-semibold mt-2">{car.power}</p>
                  <p className="text-gray-500 text-sm">Power (kW) / Power (hp)</p>

                  <p className="font-semibold mt-2">{car.speed}</p>
                  <p className="text-gray-500 text-sm">Top speed</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-black text-sm text-white py-2 rounded hover:bg-gray-800 transition">
                    Select model
                  </button>
                  <button className="flex-1 border border-black text-sm py-2 rounded hover:bg-black hover:text-white transition">
                    Compare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
