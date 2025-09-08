import { Fragment } from "react";
import InteriorExter from "./InteriorExter";
import HighlightsCard from "./HighlightsCard";
import Contact from "./Contact";

export default function CarOverview({car}) {
    return (
        <Fragment>
        <div className="bg-white mt-40">
        
        {
            car.map((e) => (
                <Fragment key={e.title}>
                    <div className="flex  mt-20 mb-12 justify-center">
                <img
                    className="sm:w-96 w-70 max-w-full"
                    src={e.textImg}
                />
            </div>
                </Fragment>
            ))
        }
            {/* Wrapper for Top Image + Black Section */}
            <div className="relative">
                {/* Top Large Image */}
                <div className="flex justify-center relative z-10">
                    <img
                        src="https://images-porsche.imgix.net/-/media/7BE508A260E849CAB6699E73962DCED5_C19C5E14A2A24FD9B10B0384176E92D3_PA24P5AOX0001-panamera-back?w=1200&q=45&auto=format"
                        alt="Porsche Panamera"
                        className="lg:w-[900px] md:w-[600px] sm:w-[500px] w-[400px] max-w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Second Image Overlapping Top Image */}
                <img
                    src="https://images-porsche.imgix.net/-/media/7BE508A260E849CAB6699E73962DCED5_C19C5E14A2A24FD9B10B0384176E92D3_PA24P5AOX0001-panamera-back?w=800&q=45&auto=format"
                    alt="Panamera driving"
                    className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-full right-20 lg:h-1/2 md:h-80 h-60 rounded-lg shadow-lg absolute lg:bottom-40 bottom-10 sm:right-10 z-20"
                />

                {/* Black Section with text */}
                <div className="bg-black h-[800px] text-white relative z-0 px-6 md:px-20 py-40 -mt-32">

                    {/* Left Content */}
                    <div className="max-w-sm ml-5 sm:ml-12 md:ml-30 mt-5">
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            Courage is a decision.
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Exciting visions are always worth fighting for. As a genuine
                            four-seater sports car that combines impressive performance
                            with a high level of comfort. Many said it was impossible.
                            Others called it brave.
                        </p>
                    </div>
                </div>



            </div>

            <div className="sm:flex hidden justify-center relative z-10">
                <img
                    src="https://images-porsche.imgix.net/-/media/7BE508A260E849CAB6699E73962DCED5_C19C5E14A2A24FD9B10B0384176E92D3_PA24P5AOX0001-panamera-back?w=1200&q=45&auto=format"
                    alt="Porsche Panamera"
                    className="lg:w-[700px] w-[500px] absolute lg:-top-50 md:-top-20 sm:-top-30 -top-20 max-w-full rounded-lg shadow-lg"
                />
            </div>
        </div>
            <InteriorExter />
            <HighlightsCard/>
            <Contact/>
        </Fragment>

    );
}
