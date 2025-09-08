import { Plus, Minus, Info } from "lucide-react";
import React, { Fragment, useState } from "react";

const config = {
    "Exterior Colours & Wheels": [
        {
            img: "https://configurator.porsche.com/assets/exteriors/studio_1A.jpg?h=72a9a123163f41dbbfe871b69a2e64f9",
            title: "Gentian Blue Metallic",
            code: "1A",
            price: "INR 0",
        },
        {
            img: "https://configurator.porsche.com/assets/2026/YAAAA1/studio_58W.jpg?h=a373b6b8b056239bd4a145581b7bea6d",
            title: "48.26 cm (19) Panamera wheels",
            code: "58V",
            price: "Standard Equipment",
        },
    ],
    "Interior Colours & Seats": [
        {
            img: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXuBuNXdMGF4tl3U5Yz8rMH1spMBvMZq6G5OtgSv31nBJaA4qh4NSEGewirQ9wyRmWBi2Cf7gVdcQTtUlhDfFh8spAnPKd3iZJyNSklctBvoMauf8dXFkwnPED6uEhzN9nRe9pVo4y7z5AiF%25vUqCPauWXsO7REeV6iTUl7zhRc2cUWqA7fQfZDOJUPYPepTBsN5Jch2dioCBrNQDcFGdcyYnfurDXo5yPew7JzhRc2q0dqA7fQbmSOJUPYlyUTBsN5psP2dioCafrQDcFGbZ9Ynfur0QN5yPewHPRCvNzxqQbGXoq17BEr6hnQs1ITngI7LzCHjQ%25xOCtRVvFisXb1",
            title: "Partial leather interior Black",
            code: "AI",
            price: "INR 0",
        },
        {
            img: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXuBuNXdMGF4tl3U5Yz8rMH1spMBvMZq6G5OtgSv31nBJaA4qh4NSEGewirQ9wyRmWBi2Cf7gVdcQTtUlhDfFh8spAnPKd3iZJyNSklctBvoMauf8dXFkwnPED6uEhzN9nRe9pVo4y7z5AiF%25vUqCPauWXsO7REeV6iTUl7zhRc2cUWqA7fQfZDOJUPYPepTBsN5Jch2dioCBrNQDcFGdcyYnfurDXo5yPew7JzhRc2q0dqA7fQbmSOJUPYlyUTBsN5psP2dioCafrQDcFGbZ9Ynfur0QN5yPewHPRCvNzxqQbGXoq17BEr6hnQs1ITngI7LzCHjQ%25xOCtRVvFisXb1",
            title: "Comfort seats front (8-way, electric)",
            code: "Q1G",
            price: "Standard Equipment",
        },
        {
            img: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXuBuNXdMGF4tl3U5Yz8rMHIspMBvMZq6G5OtgSv31nBJaA4qh4NSEGewirQ9wyRmWBi2Cf7gVdcQTtUlhDfFh8spAnPKd3iZJyNSklctBvoMauf8dXFkwnPED6uEhzN9nRe9pVo4y7z5AiF%25vUqCPauWXsO7REeV6iTUl7zhRc2cUWqA7fQfZDOJUPYPepTBsN5Jch2dioCBrNQDcFGdcyYnfurDXo5yPew7JzhRc2q0dqA7fQbmSOJUPYlyUTBsN5psP2dioCafrQDcFGbZ9Ynfur0QN5yPewHPRCvNzxqQbGXoq17BEr6hnQs1ITngI7LzCHjQ%25xOCtRVvFisXb1",
            title:
                "Individual comfort rear seats (eight-way, electric) with memory Package",
            code: "3KK",
            price: "Standard Equipment",
        },
    ],
};

const Accordion = () => {
    const [acc, setAcc] = useState(false);

    const handleExtendDiv = () => {
        setAcc(!acc);
    };

    return (
        <Fragment>
            <div className="flex flex-col gap-10 md:flex-row min-h-screen p-8 bg-gray-50">
                <div
                    className={`bg-white w-[710px] rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${acc ? "max-h-[1200px]" : "max-h-[60px]"
                        }`}
                >
                    {/* Accordion Header */}
                    <div
                        onClick={handleExtendDiv}
                        className="flex justify-between items-center cursor-pointer px-6 py-5 rounded-t-lg"
                    >
                        <h1 className="font-semibold text-gray-800">
                            Your selected equipment
                        </h1>
                        {acc ? <Minus /> : <Plus />}
                    </div>

                    {/* Accordion Content with smooth height */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ${acc ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="px-6 pb-6">
                            {Object.entries(config).map(([category, items]) => (
                                <div key={category} className="mb-8">
                                    {/* Category Header */}
                                    <h2 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        {category}
                                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                                            {items.length}
                                        </span>
                                    </h2>

                                    {/* Items */}
                                    <div className="divide-y">
                                        {items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between py-3 gap-4"
                                            >
                                                {/* Left - Image + Title */}
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={item.img}
                                                        alt={item.title}
                                                        className="w-12 h-12 object-cover rounded"
                                                    />
                                                    <span className="text-xs text-gray-700">
                                                        {item.title}
                                                    </span>
                                                </div>

                                                {/* Right - Info + Code + Price + Change */}
                                                <div className="flex items-center gap-6 text-sm">
                                                    <div className="flex items-center gap-1 text-gray-500">
                                                        <Info size={16} />
                                                        <span className="text-xs">{item.code}</span>
                                                    </div>
                                                    <span className="text-gray-600 text-xs">{item.price}</span>
                                                    <button className="text-blue-600 hover:underline text-xs">
                                                        Change
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Accordion;
