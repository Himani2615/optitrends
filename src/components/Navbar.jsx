import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch, IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#FDFEFE]">
      <div className="max-w-8xl mx-auto lg:mx-5 px-4 sm:px-6 lg:px-8 lg:py-5">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-7  w-auto lg:h-full"
                src="/assets/image1.png"
                alt="OptiTrends logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:space-x-8">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 px-1 pt-1 border-b-2 border-transparent text-md font-medium"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-[#34495E] px-1 pt-1 border-b-2 border-[#34495E] text-md font-medium"
            >
              Shop
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 px-1 pt-1 border-b-2 border-transparent text-md font-medium"
            >
              Features
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative text-gray-600 hidden lg:block pr-[180px]">
              <input
                type="search"
                name="search"
                placeholder="Search for anything..."
                className="bg-white h-10 px-20 rounded text-sm focus:outline-none border-2 focus:border-[#2C3E50]"
              />
              <IoMdSearch className="absolute top-0 mt-3 ml-10 text-gray-400" />{" "}
            </div>
            <div className="hidden lg:flex items-center space-x-4 hover:cursor-pointer">
              <img className="h-8" src="/assets/user-check.png" alt="User icon" />
              <span>Hi.. Jay</span>
            </div>

            <div className="flex items-center space-x-2">
              <CiSearch className="lg:hidden h-[25px] w-[25px] hover:cursor-pointer" />
              <Link to="/cart" className="relative">
                <img
                  className="h-[25px] w-[25px]"
                  src="/assets/shopping-cart.png"
                  alt="Cart icon"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] rounded-full px-1">
                  3
                </span>
              </Link>
              <Link to="/cart">
              <span className="hidden lg:inline">Cart</span>
              </Link>
            


            </div>
            <button onClick={toggleMenu} className="lg:hidden">
              <IoMdMenu className="text-2xl text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2 text-base font-medium"
            >
              Shop
            </Link>
            <Link
              to="/"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2 text-base font-medium"
            >
              Features
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
