import React from "react";
import denimJacketImage from "./../assets/banner.jpg"; // Replace with the actual path to your image

const BannerSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${denimJacketImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-center text-white p-4 md:p-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
          OVERSIZED DENIM JACKET
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-12 max-w-2xl mx-auto">
          Oversized jacket in washed denim with distressed details. Collar,
          buttons at front, and dropped shoulders. Chest pockets with flap and
          button, welt side pockets, and buttons at cuffs.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
