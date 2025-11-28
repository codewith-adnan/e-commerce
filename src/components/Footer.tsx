// Footer Component (Footer.jsx)
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="space-y-2 mt-12">
          <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral</p>
          <p className="text-[#9F9F9F]">Gables, </p>
          <p className="text-[#9F9F9F]">FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-semibold text-[#9F9F9F] mb-6">Links</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Shop</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="font-semibold text-[#9F9F9F] mb-6">Help</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Payment Options</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full max-w-sm">
          <h4 className="font-semibold text-[#9F9F9F] mb-4">Newsletter</h4>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 border-b border-gray-400 focus:outline-none focus:border-gray-900 flex-grow w-full"
            />
            <button className="p-2 border-b border-gray-400 font-semibold text-gray-800 hover:text-gray-900 hover:border-gray-900 ml-2 shrink-0">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-gray-600 text-sm">
        <p>© 2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;