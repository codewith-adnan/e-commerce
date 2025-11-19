import React from 'react';

import bannerBg from '../assets/images/Rectangle1.png';
import meubelLogo from '../assets/icons/m tag.svg';

import locationIcon from '../assets/icons/location.png';
import phoneIcon from '../assets/icons/bxs_phone.png';
import clockIcon from '../assets/icons/bi_clock-fill.png';


const ContactUs: React.FC = () => {
  return (
    <>
      <header>
        <div className="relative h-48 overflow-hidden">
          <img
            src={bannerBg}
            alt="Shop Banner"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
            <img src={meubelLogo} alt="Meubel Logo" className="h-18 w-auto" />
            <h1 className="text-3xl tracking-wide">Contact</h1>
            <p className="text-sm mt-1 font-bold flex flex-row">
              <a href="/pages/home" className="hover:underline">Home</a>
              <p className="mx-1 font-bold">&gt;</p>
              <a href="/pages/shop" className="hover:underline">Shop</a>
              <p className="mx-1 font-bold">&gt;</p>
              Contact
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* "Get In Touch With Us" section - already centered with max-w-2xl and mx-auto */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For More Information About Our Product & Services, Please Feel Feel To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* This main flex container now has justify-center and a max-w to center it */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-5xl mx-auto">
          {/* Information column */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8 p-6">
            <div className="flex items-start space-x-4">
              <img src={locationIcon} alt="Address Icon" className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">236 5th SE Avenue, New <br /> York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img src={phoneIcon} alt="Phone Icon" className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img src={clockIcon} alt="Working Time Icon" className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="w-full lg:w-1/2 p-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="yourName" className="block text-sm font-medium text-gray-700">Your name</label>
                <input
                  type="text"
                  id="yourName"
                  placeholder="Abc"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="emailAddressContact" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  id="emailAddressContact"
                  placeholder="abc@def.com"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I'd like to ask about"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-48 py-3 px-4 border border-gray-800 text-gray-800 font-semibold rounded-xl shadow-sm hover:bg-gray-800 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF4F4] py-12">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-start text-gray-600 text-sm text-center">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Free Delivery</h4>
            <p className="max-w-xs mx-auto">For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">90 Days Return</h4>
            <p className="max-w-xs mx-auto">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full sm:w-1/3">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Secure Payment</h4>
            <p className="max-w-xs mx-auto">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;