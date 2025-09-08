import React, { Fragment, useState } from "react";
import Navbar from "../../component/Navbar";
import { useNavigate, useParams } from "react-router-dom";

// modelsData.js
const models = {
  Taycan: [
    {
      title: "Taycan",
      variant: "Taycan",
      tag: "Electric",
      price: "₹ 1,69,78,000.00 incl. VAT*",
      accel: "4.8 s",
      power: "300 kW / 408 PS",
      speed: "230 km/h",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
    },
    {
      title: "Taycan",
      variant: "Taycan 4S",
      tag: "Electric",
      price: "₹ 1,95,89,000.00 incl. VAT*",
      accel: "3.7 s",
      power: "440 kW / 598 PS",
      speed: "250 km/h",
      img: "https://images-porsche.imgix.net/-/media/EFA98263729F4470939DD168693247DB_BF96D641472449529407A93C5F498A9D_taycan_4s_black_edition_sideshot_corr?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
    },
    {
      title: "Taycan",
      variant: "Taycan 4S Black Edition",
      tag: "Electric",
      price: "₹ 2,07,10,000.00 incl. VAT*",
      accel: "3.7 s",
      power: "440 kW / 598 PS",
      speed: "250 km/h",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
    },
    {
      title: "Taycan",
      variant: "Taycan Turbo",
      tag: "Electric",
      price: "₹ 2,69,46,000.00 incl. VAT*",
      accel: "2.7 s",
      power: "650 kW / 884 PS",
      speed: "260 km/h",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
    },
  ],

  911: [
    {
      title: "911",
      variant: "911 Carrera",
      tag: "Petrol",
      price: "₹ 1,84,00,000",
      accel: "4.2 s",
      power: "283 kW / 385 PS",
      speed: "293 km/h",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
    },
    {
      title: "911",
      variant: "911 Carrera S",
      tag: "Petrol",
      price: "₹ 2,10,00,000",
      accel: "3.5 s",
      power: "316 kW / 430 PS",
      speed: "305 km/h",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

    },
    {
      title: "911",
      variant: "911 Turbo",
      tag: "Petrol",
      price: "₹ 2,40,00,000",
      accel: "2.9 s",
      power: "427 kW / 580 PS",
      speed: "320 km/h",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

    },
  ],
  Panamera: [
    {
      power: "427 kW / 580 PS",
      speed: "320 km/h",
      accel: "2.9 s",
      tag: "Gasoline",
      title: "Panamera",
      variant: "Panamera 4 E-Hybrid",
      description: "A luxury sports sedan combining performance and efficiency with hybrid technology.",
      price: "₹1.65 Cr",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

    },
    {
      power: "427 kW / 580 PS",
      speed: "320 km/h",
      accel: "2.9 s",
      tag: "Gasoline",
      title: "Panamera",
      variant: "Panamera Turbo S",
      description: "High-performance Panamera with turbocharged V8 engine and sporty design.",
      price: "₹2.12 Cr",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

    },
  ],
  718: [
    {
      power: "427 kW / 580 PS",
      speed: "320 km/h",
      accel: "2.9 s",
      tag: "Electric",
      title: "718",
      variant: "718 Cayman",
      description: "Mid-engine coupe with outstanding handling and pure driving pleasure.",
      price: "₹1.20 Cr",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"

    },
    {
      power: "427 kW / 580 PS",
      speed: "320 km/h",
      accel: "2.9 s",
      tag: "Electric",
      title: "718",
      variant: "718 Boxster",
      description: "Open-top roadster that delivers iconic Porsche performance.",
      price: "₹1.25 Cr",
      img: "https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
    },
  ],
};


export default function Model() {
  const navigate = useNavigate();
  const { title } = useParams();
  const [data, setData] = useState(models[title]);


  const handleRadioInput = (m) => {
    if (m.includes("All")) {
      const allModels = Object.values(models).flat();
      setData(allModels);
      navigate("/model/all");
    } else {
      setData(models[m]);
      navigate(`/model/${m}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6 md:p-12">
        {/* Heading */}
        <h1 className="text-2xl mt-20 font-bold mb-8">Model overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1 p-4 rounded">
            <h2 className="font-semibold mb-4">Models</h2>
            <div className="flex flex-col gap-2 mb-6">
              {["All (19)", "911", "Taycan", "Panamera", "718"].map((m, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input onClick={() => handleRadioInput(m)}
                    type="radio" name="model" className="accent-black" defaultChecked={m.includes(title)} />
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
            <h2 className="text-xl font-semibold mb-6 capitalize">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

              {
                data.map((e) => {
                  return (
                    <Fragment>
                      <div className="bg-white rounded-2xl hover:shadow-2xl cursor-pointer p-6 flex flex-col min-h-[500px]">
                        <span className="text-xs bg-gray-200 px-2 py-1 w-max mb-2">{e.tag}</span>
                        <img src={e.img} className="w-full h-auto object-contain mb-4 rounded" />
                        <h3 className="font-bold text-xl">{e.variant}</h3>
                        <p className="text-gray-500 text-xs mb-2">From {e.price}</p>

                        <div className="mt-4">
                          <p className="font-semibold text-xs">{e.accel}</p>
                          <p className="text-gray-500 text-xs">Acceleration 0-100 km/h with Launch Control</p>

                          <p className="font-semibold mt-2 text-xs">{e.power}</p>
                          <p className="text-gray-500 text-xs">Power (kW) / Power (hp)</p>

                          <p className="font-semibold mt-2 text-xs">{e.speed}</p>
                          <p className="text-gray-500 text-xs">Top speed</p>
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

                    </Fragment>
                  )
                })
              }


            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
