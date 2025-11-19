import React from 'react';

import bannerBg from '../assets/images/Rectangle1.png';
import meubelLogo from '../assets/icons/m tag.svg';
import asgaardSofa from '../assets/images/Asgaard sofa 1.png';

const ViewCart: React.FC = () => {
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
            <h1 className="text-3xl tracking-wide">Cart</h1>
            <p className="text-sm mt-1 font-bold flex flex-row">
              <a href="/pages/home" className="hover:underline">Home</a>
              <p className="mx-1 font-bold">&gt;</p>
              <a href="/pages/shop" className="hover:underline">Shop</a>
              <p className="mx-1 font-bold">&gt;</p>
              Cart
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
            <div className="overflow-x-auto"> {/* Added for horizontal scrolling on small screens */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F9F1E7]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Subtotal
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Remove</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-20 w-20 bg-[#F9F1E7] rounded-lg p-2">
                          <img className="h-full w-full object-contain" src={asgaardSofa} alt="Asgaard sofa" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Asgaard sofa</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Rs. 250,000.00</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        defaultValue="1"
                        min="1"
                        className="w-16 px-3 py-1 border border-gray-300 rounded-md text-center text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rs. 250,000.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-red-600 hover:text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 01-2 0v6a1 1 0 112 0V8z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full lg:w-1/4 bg-[#F9F1E7] p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Cart Totals</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-semibold text-gray-800">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-gray-800">Total</span>
              <span className="text-lg font-bold text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
            <button
              type="button"
              className="w-full py-3 px-4 border border-gray-700 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF4F4] py-12">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-start text-gray-600 text-sm">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-left">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Free Delivery</h4>
            <p className="max-w-xs">For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-left">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">90 Days Return</h4>
            <p className="max-w-xs">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full sm:w-1/3 text-left">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Secure Payment</h4>
            <p className="max-w-xs">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCart;