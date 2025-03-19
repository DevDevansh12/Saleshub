import React from "react";
import bgimg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Verdana:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="relative h-[600px] md:h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-y-0 left-0 flex items-center text-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
            <div
              className="text-xl md:text-2xl font-bold tracking-widest mb-2"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              FASHION TRENDS
            </div>
            <div
              className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-[.3em] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              THE HOTLIST OF
            </div>
            <div
              className="text-5xl md:text-6xl lg:text-[6rem] font-black tracking-[.2em] mb-6"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              SUMMER
            </div>
            <div
              className="text-sm md:text-base lg:text-lg mb-8"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              The 12 Biggest Spring / Summer 2021 Trends
            </div>
            <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 font-bold rounded-md hover:bg-gray-100 transition duration-300">
              SHOP THE COLLECTION
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
