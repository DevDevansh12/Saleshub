import React from "react";
import Picone from "./../assets/pic.png";
import Pictwo from "./../assets/pic2.jpg";
import PicThree from "../assets/pic3.png";
const Collections = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wider uppercase mb-4 font-serif">
          DENIM COLLECTION
        </h2>
        <p className="text-gray-600 text-lg font-sans">
          Explore the best trends for girls and women at SaleHub! Clothes,
          shoes, and cool accessories for a new season are available now at
          SaleHub online.
        </p>
      </div>

      {/* Collection Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Denim Mini Skirt */}
        <div className="relative">
          <img
            src={Picone} // Replace with your image path
            alt="Denim Mini Skirt"
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold uppercase font-serif">
              DENIM MINI SKIRT
            </h3>
            <button className="mt-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors duration-300">
              SHOP THE COLLECTION
            </button>
          </div>
        </div>

        {/* Denim Jacket */}
        <div className="relative">
          <img
            src={Pictwo} // Replace with your image path
            alt="Denim Jacket"
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold uppercase font-serif">
              DENIM - JACKET
            </h3>
            <p className="mt-1 text-sm font-sans">
              14 Denim - Jacket Outfits to Live in Now That It Is Fall
            </p>
            <button className="mt-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors duration-300">
              SHOP THE COLLECTION
            </button>
          </div>
        </div>

        {/* Hooded Denim */}
        <div className="relative">
          <img
            src={PicThree} // Replace with your image path
            alt="Hooded Denim"
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold uppercase font-serif">
              HOODED DENIM
            </h3>
            <p className="mt-1 text-sm font-sans">
              Subtitle from happy customers
            </p>
            <button className="mt-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors duration-300">
              SHOP THE COLLECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
