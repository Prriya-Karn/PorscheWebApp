import React from "react";

const FindPorsche = () => {
  return (
    <div className="flex max-w-4xl mt-30 mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Left Image Section */}
      <div className="w-1/2 h-full">
        <img
          src="https://porsche.imgix.net/-/media/38BB0AC8E77B4B7F8993D0800CE70EE9_0A4CBE5C6BA9497B875D72F44C5F44C1_718---Mobile_New?h=1757&iar=0&w=989&auto=format"
          alt="Porsche"
          className="w-full h-full"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center p-10">
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
  );
};

export default FindPorsche;
