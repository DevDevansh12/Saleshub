import React from "react";
// import video from "../assets/video.mp4";
const VideoBanner = () => {
  return (
    <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs tracking-widest uppercase mb-2">New Arrivals</p>
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            Autumn is Coming
          </h2>
          <p className="text-sm mb-6">
            The 11 Biggest Autumn / Winter 2025 Trends
          </p>
          <p className="text-xs mb-8">By Novaflix | Winter 2025</p>
          <button className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
