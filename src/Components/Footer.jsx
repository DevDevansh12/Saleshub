import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Logo1 from "../assets/visa.png";
import Logo2 from "../assets/mastercard.png";
import Logo3 from "../assets/paypal.png";
import Logo4 from "../assets/amx.png";
const Footer = () => {
  return (
    <footer className="bg-[#EBE8E2] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Salehub Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Salehub</h3>
            <p className="text-sm text-gray-600 mb-2">
              We're available by phone +123-456-789
            </p>
            <p className="text-sm text-gray-600 mb-2">info@example.com</p>
            <p className="text-sm text-gray-600">
              Monday till Friday 10 to 6 EST
            </p>
            <div className="flex mt-4">
              <span className="mr-2">
                <img src={Logo1} alt="Visa" className="h-6" />
              </span>
              <span className="mr-2">
                <img src={Logo2} alt="Mastercard" className="h-6" />
              </span>
              <span className="mr-2">
                <img src={Logo3} alt="PayPal" className="h-6" />
              </span>
              <span>
                <img src={Logo4} alt="Amex" className="h-6" />
              </span>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Factories</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Help and advice</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Our Shop Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Shop</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Top Trending</a>
              </li>
              <li>
                <a href="#">Autumn Collection</a>
              </li>
              <li>
                <a href="#">Back in Stock</a>
              </li>
              <li>
                <a href="#">Bikini Tops</a>
              </li>
              <li>
                <a href="#">Bikini Bottoms</a>
              </li>
              <li>
                <a href="#">Swimwear</a>
              </li>
              <li>
                <a href="#">Denim Collection</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Receive our weekly newsletter. For dietary content, fashion
              insider and the best offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="border rounded-l-md px-4 py-2 text-sm w-full focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md text-sm hover:bg-gray-800 transition-colors duration-300">
                Join
              </button>
            </div>
            <div className="flex mt-4 space-x-4 justify-start">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaPinterestP />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mb-2 md:mb-0">
            Copyright © 2025 Devansh, All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <select className="border rounded px-2 py-1 text-sm focus:outline-none bg-transparent">
                <option>USD</option>
                {/* Add more currency options */}
              </select>
            </span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
