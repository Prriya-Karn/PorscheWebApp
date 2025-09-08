import { Fragment, useEffect, useState } from "react";
import SpeedSection from "./pages/ModelOverview/SpeedSection";
import { NavLink, useParams } from "react-router-dom";
import Buttons from "./component/Buttons";

const favCar = [
    {
        title: "panamera",
        textImg: "https://cdn.ui.porsche.com/porsche-design-system/model-signatures/panamera.6dae809.svg",
        carImg: "https://images-porsche.imgix.net/-/media/82470245156B451B8FD447D14D61BA0A_5B42C484DD0242CAA89FD781FC8DD834_panamera-model-intro?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format",
        price: "₹1,80,31,000.00",
        tag: "Gasoline",
        accel: 3.8,     // ✅ number
        powerKW: 368,  // ✅ number
        powerPS: 500,  // ✅ number
        speed: 302,    // ✅ number
        text2Img: "https://images-porsche.imgix.net/-/media/C55D45D6279F45E387448347B6F1518D_9C3984134FD84022AF37078EDFB03B86_MA22T3BIX0005-macan-front?w=699&q=45&dpr=2&auto=format",
        car2Img: "https://images-porsche.imgix.net/-/media/9D1FBC86681443DD821C9771C86B30C5_DDE51CE8F8D044598800860BA1CFE02B_045-model-technical-highlights-1600x1125_dark?w=622&q=45&dpr=2&auto=format"
    },

    {
        title: "911gt3",
        textImg: "https://cdn.ui.porsche.com/porsche-design-system/model-signatures/911.b68f913.svg",
        carImg: "https://images-porsche.imgix.net/-/media/82470245156B451B8FD447D14D61BA0A_5B42C484DD0242CAA89FD781FC8DD834_panamera-model-intro?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format",
        price: "₹1,80,31,000.00",
        tag: "Gasoline",
        accel: 3.8,
        powerKW: 368,
        powerPS: 500,
        speed: 302,
        text2Img: "https://images-porsche.imgix.net/-/media/9D1FBC86681443DD821C9771C86B30C5_DDE51CE8F8D044598800860BA1CFE02B_045-model-technical-highlights-1600x1125_dark?w=699&q=45&dpr=2&auto=format",
        car2Img: "https://images-porsche.imgix.net/-/media/9D1FBC86681443DD821C9771C86B30C5_DDE51CE8F8D044598800860BA1CFE02B_045-model-technical-highlights-1600x1125_dark?w=622&q=45&dpr=2&auto=format"
    },
    {
        title: "taycan",
        textImg: "https://cdn.ui.porsche.com/porsche-design-system/model-signatures/taycan.df444c6.svg",
        carImg: "https://images-porsche.imgix.net/-/media/82470245156B451B8FD447D14D61BA0A_5B42C484DD0242CAA89FD781FC8DD834_panamera-model-intro?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format",
        price: "₹1,80,31,000.00",
        tag: "Gasoline",
        accel: 3.8,
        powerKW: 368,
        powerPS: 500,
        speed: 302,
        text2Img: "https://images-porsche.imgix.net/-/media/050757A5E50C4790BEF193EB374BE5B3_F8AE1EFF7CD94C7288646CF8C4091521_CY24J5LIX0011-cayenne-coupe-front?w=699&q=45&dpr=2&auto=format",
        car2Img: "https://images-porsche.imgix.net/-/media/9D1FBC86681443DD821C9771C86B30C5_DDE51CE8F8D044598800860BA1CFE02B_045-model-technical-highlights-1600x1125_dark?w=622&q=45&dpr=2&auto=format"
    }
]

export default function TestCar() {
    const [car, setCar] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        const selectedCar = favCar.filter((e) => {
            return e.title === title;
        })
        setCar(selectedCar);
    }, [title])



    return (
        <Fragment>
            <div className="min-h-screen mt-30 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center p-8 relative">

                {
                    car.map((car) => (
                        <Fragment>
                            {/* Watermark text at top */}
                            <img
                                src={car.textImg}
                                alt="Panamera watermark"
                                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2/3 opacity-9 z-0"
                            />

                            {/* Car image */}
                            <div className="relative z-10">
                                <img
                                    src={car.carImg}
                                    alt="Porsche Panamera"
                                    className="w-[800px] max-w-full"
                                />
                            </div>

                            {/* Text and price */}
                            <div className="relative z-10 mt-8 text-center">
                                <h2 className="text-4xl font-semibold capitalize">{car.title}</h2>
                                <p className="text-gray-600 mt-2 inline-flex items-center space-x-2">
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">{car.tag}</span>
                                </p>
                                <p className="mt-4 text-lg font-medium">
                                    From <span className="font-bold">{car.price}</span> incl. VAT
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

                                    <Buttons text="Find new or used" />
                                </div>
                            </div>
                        </Fragment>
                    ))
                }
            </div>
            <SpeedSection car={car}/>
        </Fragment>
    );
}

