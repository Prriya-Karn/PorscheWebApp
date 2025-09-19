import React, { Fragment, useState } from "react";
import Navbar from "../../component/Navbar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import models from "../../database/ModelData";

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


          </aside>

          {/* Models Grid */}
          <section className="md:col-span-3">
            <h2 className="text-xl font-semibold mb-6 capitalize">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

              {
                data.map((e) => {
                  console.log(data)
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



                          <NavLink to={`/compare/${e.variant.split(" ").join("")}`}
                            className="flex-1 text-center border border-black text-sm py-2 rounded hover:bg-black hover:text-white transition">
                            Compare
                          </NavLink>

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
