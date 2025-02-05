import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full mt-20 bg-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
            <div className="w-full text-center mb-8 lg:mb-0 lg:w-auto">
              <a href="#" className="flex justify-center lg:justify-start">
                <img
                  src="/assets/image1.png"
                  alt="Logo"
                  className="mx-auto lg:mx-0"
                />
              </a>
              <span className="text-sm text-gray-500 block mt-4">
                <a href="#">2024 TechSpot, All rights reserved.</a>
              </span>
            </div>

            <div className="w-full lg:w-auto mb-8 lg:mb-0">
              <h4 className="text-lg text-gray-900 font-medium mb-4 text-center lg:text-left">
                Quick Links
              </h4>
              <ul className="text-sm transition-all duration-500 text-center lg:text-left">
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Best Sellers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Sales
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-auto mb-8 lg:mb-0">
              <h4 className="text-lg text-gray-900 font-medium mb-4 text-center lg:text-left">
                Customer Service
              </h4>
              <ul className="text-sm transition-all duration-500 text-center lg:text-left">
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Shipping & Delivery
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Returns & Refunds
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-900">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-4 text-center lg:text-left">
                Contact Information
              </h4>
              <ul className="text-sm transition-all duration-500 text-center lg:text-left">
                <li className="mb-2">
                  <div className="text-gray-900">
                    Email: support@OpticTrend.com
                  </div>
                </li>
                <li className="mb-2">
                  <div  className="text-gray-900">
                    Phone: +1-800-123-4567
                  </div>
                </li>
                <li>
                  <div className="text-gray-900">
                    Address: 123 Tech Avenue, Silicon Valley, CA
                  </div>
                </li>
              </ul>
              <div className="mt-6 text-center lg:text-left">
                <h5>Social Media Links</h5>
                <div className="flex justify-center lg:justify-start mt-4 space-x-4">
                  <a href="" className="text-gray-500 hover:text-gray-900">
                    <img src="/assets/fb_icon.png" />
                  </a>
                  <a href="" className="text-gray-500 hover:text-gray-900">
                   <img src="/assets/ig_icon.png" />
                  </a>
                  <a href="" className="text-gray-500 hover:text-gray-900">
                    <img src="/assets/nintendo_icon.png" />
                  </a>
                  <a href="" className="text-gray-500 hover:text-gray-900">
                    <img src="/assets/twitter_icon.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
