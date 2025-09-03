import React, { Fragment } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function SpeedSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,   // animates only once
        threshold: 0.3       // starts animating when 30% visible
    });

    return (
        <div
            ref={ref}
            className="flex items-center justify-center gap-12 min-h-screen bg-white px-16"
        >
            {/* Left Specs */}
            <div className="flex flex-col space-y-12">
                {/* Acceleration */}
                <div>
                    <h2 className="text-6xl">
                        {inView && (
                            <CountUp end={3.8} decimals={1} duration={1.2} />
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
                                <CountUp end={368} duration={1.2} />
                                <span className="text-2xl font-normal">kW</span> /{" "}
                                <CountUp end={500} duration={1.2} />
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
                            <CountUp end={302} duration={1.2} />
                        )}
                        <span className="text-2xl font-normal">km/h</span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Top speed
                    </p>
                </div>
            </div>

            {/* Right Car Image */}
            <div className="flex justify-center items-center">
                <img
                    src="https://images-porsche.imgix.net/-/media/9D1FBC86681443DD821C9771C86B30C5_DDE51CE8F8D044598800860BA1CFE02B_045-model-technical-highlights-1600x1125_dark?w=622&q=45&dpr=2&auto=format"
                    alt="Porsche Panamera"
                    className="w-[500px] max-w-full"
                />
            </div>
        </div>
    );
}
