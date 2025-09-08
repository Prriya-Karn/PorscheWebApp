import { Fragment } from "react";
import InteriorExter from "./InteriorExter";
import HighlightsCard from "./HighlightsCard";
import Contact from "./Contact";

export default function CarOverview({car}) {
    return (
        <Fragment>
        <div className="bg-white">
        
        {
            car.map((e) => (
                <Fragment key={e.title}>
                    <div className="flex mt-20 mb-12 justify-center">
                <img
                    className="w-96 max-w-full"
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
                        className="w-[900px] max-w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Second Image Overlapping Top Image */}
                <img
                    src="https://images-porsche.imgix.net/-/media/7BE508A260E849CAB6699E73962DCED5_C19C5E14A2A24FD9B10B0384176E92D3_PA24P5AOX0001-panamera-back?w=800&q=45&auto=format"
                    alt="Panamera driving"
                    className="w-[500px] h-1/2 rounded-lg shadow-lg absolute bottom-40 right-10 z-20"
                />

                {/* Black Section with text */}
                <div className="bg-black h-[800px] text-white relative z-0 px-6 md:px-20 py-40 -mt-32">

                    {/* Left Content */}
                    <div className="max-w-sm ml-30 mt-5">
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

            <div className="flex justify-center relative z-10">
                <img
                    src="https://images-porsche.imgix.net/-/media/7BE508A260E849CAB6699E73962DCED5_C19C5E14A2A24FD9B10B0384176E92D3_PA24P5AOX0001-panamera-back?w=1200&q=45&auto=format"
                    alt="Porsche Panamera"
                    className="w-[500px] absolute -top-50 max-w-full rounded-lg shadow-lg"
                />
            </div>
        </div>
            <InteriorExter />
            <HighlightsCard/>
            <Contact/>
        </Fragment>

    );
}
