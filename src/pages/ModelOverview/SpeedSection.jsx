import React, { Fragment } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Buttons from "../../component/Buttons";
import CarOverview from "./CarOverview";
import InteriorExter from "./InteriorExter";

export default function SpeedSection({ car }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <Fragment>
            <div
                ref={ref}
                className="flex items-center justify-center gap-12 min-h-screen bg-white px-16"
            >
                {
                    car.map((e) => {
                        return (
                            <Fragment key={e.title}>

                                {/* Left Specs */}
                                <div className="flex flex-col space-y-12">
                                    {/* Acceleration */}
                                    <div>
                                        <h2 className="text-6xl">
                                            {inView && (
                                                <CountUp end={e.accel} decimals={1} duration={1.2} />
                                            )}
                                            <span className="text-2xl font-normal">s</span>
                                        </h2>
                                        <p className="text-gray-600 mt-2">
                                            Acceleration 0 - 100 km/h with Sport Chrono Package
                                        </p>
                                    </div>

                                    {/* Power */}
                                    <div>
                                        <h2 className="text-6xl">
                                            {inView && (
                                                <Fragment>
                                                    <CountUp end={e.powerKW} duration={1.2} />
                                                    <span className="text-2xl font-normal">kW</span> /{" "}
                                                    <CountUp end={e.powerPS} duration={1.2} />
                                                </Fragment>
                                            )}
                                            <span className="text-2xl font-normal">PS</span>
                                        </h2>
                                        <p className="text-gray-600 mt-2">
                                            Power (kW)/Power (PS)
                                        </p>
                                    </div>

                                    {/* Top speed */}
                                    <div>
                                        <h2 className="text-6xl">
                                            {inView && (
                                                <CountUp end={e.speed} duration={1.2} />
                                            )}
                                            <span className="text-2xl font-normal">km/h</span>
                                        </h2>
                                        <p className="text-gray-600 mt-2">
                                            Top speed
                                        </p>
                                    </div>
                                    <Buttons text="View all technical details" />
                                </div>

                                {/* Right Car Image */}
                                <div className="flex justify-center items-center">
                                    <img
                                        src={e.text2Img}
                                        alt="Porsche Panamera"
                                        className="w-[500px] max-w-full"
                                    />
                                </div>
                            </Fragment>
                        )
                    })
                }
            </div>

            <CarOverview car={car}/>

        </Fragment>
    );
}
