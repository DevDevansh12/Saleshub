import React from "react";
import image1 from "./../assets/pic.png"; // Replace with your image paths
import image2 from "./../assets/pic2.jpg";
import image3 from "./../assets/pic3.png";
import image4 from "./../assets/pic3.png";

const ShopTheLooks = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-serif mb-4 uppercase tracking-wide">
          SHOP THE LOOKS
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Our latest endeavour features designs from around the world with
          materials so comfortable you won't want to wear anything else ever
          again.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <img
            src={image1}
            alt="Look 1"
            className="w-full rounded-lg h-64 object-cover"
          />
          <img
            src={image2}
            alt="Look 2"
            className="w-full rounded-lg h-64 object-cover"
          />
          <img
            src={image3}
            alt="Look 3"
            className="w-full rounded-lg h-64 object-cover"
          />
          <img
            src={image4}
            alt="Look 4"
            className="w-full rounded-lg h-64 object-cover"
          />
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default ShopTheLooks;
