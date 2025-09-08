import React from "react";

const FindPorsche = () => {
  return (
    <div className="lg:px-40 px-5">
    <div className="flex md:flex-row flex-col bg-red-950 lg:h-96 max-w-6xl mt-30 mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://a.storyblok.com/f/338913/1920x1079/4f465bb7d6/16-9_porsche_finder.jpg/m/1638x921/filters:format(webp):quality(45)"
          alt="Porsche"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center p-10">
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Find your new or pre-owned Porsche.
        </h2>
        <p className="text-base leading-relaxed mb-6 text-gray-300">
          A Porsche is as individual as its owner. It is always an
          expression of one’s own personality. We help you find your
          personal dream vehicle from authorised Porsche Centres.
        </p>
        <button className="bg-white text-black font-medium px-6 py-3 rounded-md transition hover:bg-gray-200">
          Find your Porsche
        </button>
      </div>
    </div>
    </div>
  );
};

export default FindPorsche;
