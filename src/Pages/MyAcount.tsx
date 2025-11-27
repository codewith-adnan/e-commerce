import React from 'react';

// Import your images
import bannerBg from '../assets/images/Rectangle1.png'; // Adjust the path as needed
import meubelLogo from '../assets/icons/m tag.svg'; // Adjust the path as needed

const MyAcount: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Main container for the whole page */}

      {/* Header Section */}
      <header className="w-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={bannerBg}
            alt="Shop Banner"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
            <img src={meubelLogo} alt="Meubel Logo" className="h-18 w-auto" />
            <h1 className="text-3xl tracking-wide">My Account</h1>
            <p className="text-sm mt-1 font-bold flex flex-row">
              <a href="/" className="hover:underline">Home</a> <p className="mx-1 font-bold">&gt;</p> My Account
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area (Login/Register Card) */}
      <div className="flex-grow flex items-center justify-center p-4 py-12"> {/* flex-grow to push footer down */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
          {/* Log In Section */}
          <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Log In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="login-username" className="block text-sm text-gray-700 mb-2">
                  Username or email address
                </label>
                <input
                  type="text"
                  id="login-username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="login-password" className="block text-sm text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
                >
                  Log In
                </button>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Lost Your Password?
                </a>
              </div>
            </form>
          </div>

          {/* Register Section */}
          <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="register-email" className="block text-sm text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Your personal data will be used to support your experience throughout this website, to manage access
                to your account, and for other purposes described in our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full">
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
      </footer>
    </div>
  );
};

export default MyAcount;