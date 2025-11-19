import React from 'react';

import bannerBg from '../assets/images/Rectangle1.png'; // Replace with your actual path
import meubelLogo from '../assets/icons/m tag.svg';

const Checkout: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <header>
        <div className="relative h-48 overflow-hidden">
          <img
            src={bannerBg}
            alt="Shop Banner"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
            <img src={meubelLogo} alt="Meubel Logo" className="h-18 w-auto" />
            <h1 className="text-3xl tracking-wide">Checkout</h1> {/* Changed to Checkout */}
            <p className="text-sm mt-1 font-bold flex flex-row">
              <a href="/pages/home" className="hover:underline">Home</a>
              <p className="mx-1 font-bold">&gt;</p>
              <a href="/pages/shop" className="hover:underline">Shop</a>
              <p className="mx-1 font-bold">&gt;</p>
              Checkout
            </p>
          </div>
        </div>
      </header>

      {/* Billing Details Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Billing details</h2>

        <div className="flex flex-wrap -mx-4">
          {/* Billing Form Column */}
          <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="countryRegion" className="block text-sm font-medium text-gray-700 mb-1">
                  Country / Region
                </label>
                <select
                  id="countryRegion"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Sri Lanka</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Street address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="townCity" className="block text-sm font-medium text-gray-700 mb-1">
                  Town / City
                </label>
                <input
                  type="text"
                  id="townCity"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                  Province
                </label>
                <select
                  id="province"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Western Province</option>
                  {/* Add more provinces as needed */}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="additionalInformation" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="additionalInformation"
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary and Payment Column */}
          <div className="w-full lg:w-2/5 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Product</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Asgaard sofa x 1</span>
                <span className="font-semibold text-gray-800">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center mb-4 border-b pb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-800">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-xl font-bold text-blue-600">Rs. 250,000.00</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="directBankTransfer"
                    name="paymentMethod"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor="directBankTransfer" className="ml-2 block text-sm font-medium text-gray-700">
                    Direct Bank Transfer
                  </label>
                </div>
                <p className="text-xs text-gray-500 ml-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>

              <div className="mb-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="directOnDelivery"
                    name="paymentMethod"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="directOnDelivery" className="ml-2 block text-sm font-medium text-gray-700">
                    Direct On Delivery
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="cashOnDelivery" className="ml-2 block text-sm font-medium text-gray-700">
                    Cash On Delivery
                  </label>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-6">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
              </p>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

     { /* Footer Section */}
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

export default Checkout;