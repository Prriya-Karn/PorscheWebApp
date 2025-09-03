import { Fragment } from "react";
import SpeedSection from "./pages/ModelOverview/SpeedSection";
import { NavLink } from "react-router-dom";

export default function TestCar() {
    return (
        <Fragment>
            <div className="min-h-screen mt-10 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center p-8 relative">

                {/* Watermark text at top */}
                <img
                    src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/panamera.6dae809.svg"
                    alt="Panamera watermark"
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2/3 opacity-9 z-0"
                />

                {/* Car image */}
                <div className="relative z-10">
                    <img
                        src="https://images-porsche.imgix.net/-/media/82470245156B451B8FD447D14D61BA0A_5B42C484DD0242CAA89FD781FC8DD834_panamera-model-intro?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format"
                        alt="Porsche Panamera"
                        className="w-[800px] max-w-full"
                    />
                </div>

                {/* Text and price */}
                <div className="relative z-10 mt-8 text-center">
                    <h2 className="text-4xl font-semibold">Panamera</h2>
                    <p className="text-gray-600 mt-2 inline-flex items-center space-x-2">
                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Gasoline</span>
                    </p>
                    <p className="mt-4 text-lg font-medium">
                        From <span className="font-bold">₹1,80,31,000.00</span> incl. VAT
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex space-x-4 justify-center">
                        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
                            Change model
                        </button>
                        <NavLink to="/configure">
                            <button className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition">
                                Configure
                            </button>
                        </NavLink>

                        <button className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition">
                            Find new or used
                        </button>
                    </div>
                </div>
            </div>
            <SpeedSection />
        </Fragment>
    );
}

