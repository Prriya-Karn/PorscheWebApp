import React, { Fragment, useState } from "react";
import Accordion from "./Accordion";

const Configure = () => {
    const [carColor, setCarColor] = useState("#090909");

    const categories = {
        Contrasts: [
            { name: "White", value: "#E6E6E6" },
            { name: "Black", value: "#090909" },
        ],
        Shades: [
            { name: "Dark Blue", value: "#0A0F2C" },
            { name: "Silver", value: "#C0C0C0" },
            { name: "Gray", value: "#7A7A7A" },
            { name: "Light Gray", value: "#D3D3D3" },
        ],
        Dreams: [
            { name: "Royal Blue", value: "#1E3A8A" },
            { name: "Red", value: "#7D1722" },
            { name: "Gold", value: "#B8860B" },
            { name: "Maroon", value: "#670713" },
        ],
    };

    return (
        <Fragment>
            <div className="flex flex-col pt-30 gap-10 md:flex-row min-h-screen p-8 bg-gray-50">
                {/* Left Side: Car Image */}
                <div className="flex-[2] rounded-lg flex items-center justify-center"
                    style={{
                        backgroundImage: "url('../../../public/aesthetic-background-images-for-presentation-slides_vij.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    <div className="max-w-[650px] w-full p-4">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13764/color-change-car-base.png"
                            alt="Car"
                            className="w-full h-auto rounded-lg"
                            style={{ backgroundColor: carColor }}
                        />
                    </div>
                </div>

                {/* Right Side: Color Options */}
                <div className="flex-[1] bg-white rounded-lg shadow-2xl flex flex-col gap-6 p-6">
                    <h2 className="text-xl font-bold text-gray-800">Exterior Colours</h2>

                    {Object.entries(categories).map(([category, colors]) => (
                        <div key={category}>
                            <h3 className="text-md font-semibold text-gray-700 mb-2">
                                {category} <span className="text-xs text-gray-500">INR 0</span>
                            </h3>
                            <div className="flex gap-3 flex-wrap">
                                {colors.map((color) => (
                                    <div
                                        key={color.value}
                                        onClick={() => setCarColor(color.value)}
                                        style={{ backgroundColor: color.value }}
                                        className={`w-12 h-12 rounded cursor-pointer border-2 transition 
                    ${carColor === color.value
                                                ? "border-black scale-110"
                                                : "border-gray-300 hover:border-black"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Accordion/>
        </Fragment>
    );
};

export default Configure;
