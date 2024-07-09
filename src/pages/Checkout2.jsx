import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export const Checkout2 = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <Link to="/review">
          <p className="ml-8 lg:ml-24 float-left lg:opacity-0 md:opacity-0 opacity-100">
            ← Back
          </p>
        </Link>
        <p className="text-center font-bold text-xl text-[#2C3E50]">Checkout</p>
        <img
          src="src/assets/progress2.png"
          className="self-center m-10 mx-auto w-2/3 lg:w-auto"
        />
        <h1 className="text-center text-lg text-[#2C3E50] font-semibold">
          Shipping Details
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="p-8 rounded-lg">
          <form action="/payment">
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="full_name"
                    className="block text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    required
                    placeholder="Enter name"
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="eg Johndeo@gmail.com"
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="eg +234"
                    pattern="\+?[0-9\s-]{7,15}"
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    placeholder=""
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
                <div>
                  <label htmlFor="postal" className="block text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postal"
                    required
                    pattern="\d{5,6}"
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    required
                    className="w-full rounded-lg border py-2 px-3"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 items-end float-left">
              <Link to="/review">
                <button
                  type="button"
                  className="text-[#2C3E50] border border-[#2C3E50] hidden sm:block px-auto py-auto rounded-lg w-40 h-10"
                >
                  ← Back
                </button>
              </Link>
            </div>
            <div className="mt-8 items-end float-right w-full lg:w-40 md:w-40">
              <button
                type="submit"
                className="bg-[#2C3E50] text-white px-auto py-auto rounded-lg w-full lg:w-40 md:w-40 h-10"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>

      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Checkout2;
