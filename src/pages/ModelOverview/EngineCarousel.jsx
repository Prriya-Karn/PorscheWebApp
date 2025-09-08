import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const EngineCarousel = () => {
    const slides = [
        {
            img: "https://images-porsche.imgix.net/-/media/B8459F7E5DFB423EBEF39D27B1F2655B_CBE355062DE248D69CE6AD39C40D813E_panamera-engine?w=645&q=45&dpr=2&auto=format",
            title: "The 2.9-litre twin-turbo V6 engine in the Panamera.",
            desc: "The Panamera is powered by a 2.9-litre twin-turbo V6 engine with power output of 260 kW (353 PS) and torque of 500 Nm.",
        },
        {
            img: "https://images-porsche.imgix.net/-/media/8B72D28D17AC4214AA1388796FEFB2B8_B82AABF2F0CA4F8D9FB3BA9484D27485_panamera-turbo-e-hybrid-transmission?w=645&q=45&dpr=2&auto=format",
            title: "Performance meets efficiency.",
            desc: "A balance between incredible horsepower and efficient fuel economy ensures optimal driving dynamics.",
        },
        {
            img: "https://images-porsche.imgix.net/-/media/3BCA5B793DCC418189F2DA777CAF905C_CC0186DCAFE04E00B4099E7FC4DB4FD5_PA24P5KOX0001-panamera-turbo-e-hybrid-awd?w=645&q=45&dpr=2&auto=format",
            title: "Transmission innovation.",
            desc: "Smooth gear shifts with Porsche’s dual-clutch PDK transmission give you ultimate control.",
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto my-16 relative">
            <style>
                {`
            .swiper-pagination-bullet-active {
                background-color: black !important;
            }
        `}
            </style>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-50 rounded-xl p-8">
                            <div className="flex  justify-center">
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-[400px] rounded-lg object-contain"
                                />
                            </div>
                            <div className="text-left mt-10">
                                <h2 className="text-2xl pl-10 lg:pl-0 font-bold mb-4">{slide.title}</h2>
                                <p className="text-gray-600 pl-10 lg:pl-0">{slide.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons in Center Bottom */}
                <div className="absolute top-10 -right-2 transform -translate-x-1/2 flex items-center space-x-6 z-10">
                    <div className="custom-prev p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <ChevronLeftIcon className="w-6 h-6" />
                    </div>
                    <div className="custom-next p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <ChevronRightIcon className="w-6 h-6" />
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default EngineCarousel;
