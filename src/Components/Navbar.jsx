import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPagesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-3xl">Salehub</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={togglePagesDropdown}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Pages
                </button>
                {isPagesDropdownOpen && (
                  <div
                    className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    style={{ minWidth: "450px" }}
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <div>
                          <h3 className="font-semibold text-sm mb-2">
                            COLLECTION
                          </h3>
                          <Link
                            to="/collection-left-sidebar"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Left Sidebar
                          </Link>
                          <Link
                            to="/collection-right-sidebar"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Right Sidebar
                          </Link>
                          <Link
                            to="/collection-full-width"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Full Width
                          </Link>
                          <Link
                            to="/collection-canvas-sidebar"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Canvas Sidebar
                          </Link>
                          <Link
                            to="/all-collections"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            All Collections
                          </Link>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-2">
                            PRODUCT SINGLE
                          </h3>
                          <Link
                            to="/single-product-v1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Product v1
                          </Link>
                          <Link
                            to="/single-product-v2"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Product v2
                          </Link>
                          <Link
                            to="/single-product-v3"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Product v3
                          </Link>
                          <Link
                            to="/single-product-v4"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Product v4
                          </Link>
                          <Link
                            to="/single-product-v5"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Product v5
                          </Link>
                          <Link
                            to="/single-product-v6"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Product v6
                          </Link>
                          <Link
                            to="/product-pre-order"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Pre Order
                          </Link>
                          <Link
                            to="/product-video"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Video
                          </Link>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-2">
                            INNER PAGES
                          </h3>
                          <Link
                            to="/about-us"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            About Us
                          </Link>
                          <Link
                            to="/contact-us"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Contact Us
                          </Link>
                          <Link
                            to="/faqs-page"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            FAQs Page
                          </Link>
                          <Link
                            to="/term-and-services"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Term and Services
                          </Link>
                          <Link
                            to="/privacy-policy"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Privacy Policy
                          </Link>
                          <Link
                            to="/size-guide"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Size Guide
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/women"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Women
              </Link>
              <Link
                to="/men"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Men
              </Link>
              <Link
                to="/blog"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex items-center">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Search</span>
                <FaSearch className="h-6 w-6" aria-hidden="true" />
              </button>
              <Link
                to="/account"
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Account</span>
                <FaUser className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                to="/cart"
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Cart</span>
                <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <FaBars
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  aria-hidden="true"
                />
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Home
          </Link>
          <div onClick={togglePagesDropdown} className="relative">
            <button className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left">
              Pages
            </button>
            {isPagesDropdownOpen && (
              <div className="ml-6" style={{ minWidth: "250px" }}>
                <h3 className="font-semibold text-sm mt-2 mb-1 pl-4">
                  COLLECTION
                </h3>
                <Link
                  to="/collection-left-sidebar"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Left Sidebar
                </Link>
                <Link
                  to="/collection-right-sidebar"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Right Sidebar
                </Link>
                <Link
                  to="/collection-full-width"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Full Width
                </Link>
                <Link
                  to="/collection-canvas-sidebar"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Canvas Sidebar
                </Link>
                <Link
                  to="/all-collections"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  All Collections
                </Link>
                <h3 className="font-semibold text-sm my-2 pl-4">
                  PRODUCT SINGLE
                </h3>
                <Link
                  to="/single-product-v1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Product v1
                </Link>
                <Link
                  to="/single-product-v2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Product v2
                </Link>
                <Link
                  to="/single-product-v3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Product v3
                </Link>
                <Link
                  to="/single-product-v4"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Product v4
                </Link>
                <Link
                  to="/single-product-v5"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Product v5
                </Link>
                <Link
                  to="/single-product-v6"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Product v6
                </Link>
                <Link
                  to="/product-pre-order"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Pre Order
                </Link>
                <Link
                  to="/product-video"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Video
                </Link>
                <h3 className="font-semibold text-sm my-2 pl-4">INNER PAGES</h3>
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
                <Link
                  to="/faqs-page"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  FAQs Page
                </Link>
                <Link
                  to="/term-and-services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Term and Services
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/size-guide"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Size Guide
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/women"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Women
          </Link>
          <Link
            to="/men"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Men
          </Link>
          <Link
            to="/blog"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Blog
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Search</span>
              <FaSearch className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link
              to="/account"
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">Account</span>
              <FaUser className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link to="/cart" className="ml-4 text-gray-500 hover:text-gray-700">
              <span className="sr-only">Cart</span>
              <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
