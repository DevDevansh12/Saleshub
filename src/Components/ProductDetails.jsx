import React from "react";
import productImage from "./../assets/pic.png"; // Replace with your image path

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto border rounded-lg p-6 shadow-md">
        {/* Featured Product */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold uppercase tracking-wider">
            FEATURED PRODUCT
          </h2>
        </div>

        {/* Product Image */}
        <div className="mb-4">
          <img
            src={productImage}
            alt="Product"
            className="w-full rounded-lg object-cover h-64 mx-auto"
          />
        </div>

        {/* Product Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold font-serif">
            Levi's essential western denim shirt
          </h3>
        </div>

        {/* Stars */}
        <div className="mb-4 text-center">
          <p className="text-yellow-500 text-xl">*****</p>
        </div>

        {/* Price */}
        <div className="mb-4 text-center">
          <p className="text-3xl font-bold">$ 120.00</p>
        </div>

        {/* Color */}
        <div className="mb-4">
          <p className="text-sm font-semibold">COLOR : DARKOLIVEGREEN</p>
        </div>

        {/* Size */}
        <div className="mb-6">
          <p className="text-sm font-semibold mb-2">SIZE : XS</p>
          <div className="flex justify-center space-x-4">
            <button className="border rounded-full px-4 py-2 text-sm">
              XS
            </button>
            <button className="border rounded-full px-4 py-2 text-sm">S</button>
            <button className="border rounded-full px-4 py-2 text-sm">L</button>
          </div>
        </div>

        {/* Add to Bag Button */}
        <div className="mb-4">
          <button className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition-colors duration-300">
            ADD TO BAG
          </button>
        </div>

        {/* Pay with PayPal */}
        <div className="mb-6 text-center">
          <p className="text-sm">Pay with PayPal</p>
        </div>

        {/* Size Chart */}
        <div className="mb-6 text-center">
          <p className="text-sm underline">SIZE CHART</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-sm">
            Steele's Lena Dress features a smocked bust, off the shoulder
            sleeves with eyelet design, and mini cut skirt with raw hem.
          </p>
        </div>

        {/* Washing Instructions */}
        <div>
          <p className="text-sm">
            MACHINE WASH AT MAX TEMP. 30°C - NORMAL PROCESS
          </p>
          <p className="text-sm">DO NOT BLEACH</p>
          <p className="text-sm">DO NOT TUMBLE DRY</p>
          <p className="text-sm">IRON AT MAX TEMP. OF 110°C WITHOUT STEAM</p>
          <p className="text-sm">DO NOT DRY CLEAN</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
