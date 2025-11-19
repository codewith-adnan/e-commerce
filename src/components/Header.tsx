// src/components/Header.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

interface HeaderProps {
  onToggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleCart }) => {
  const location = useLocation(); // Get the current location

  // Determine the background color based on the current path
  const headerBackgroundColor =
    location.pathname === "/Pages/Home" || location.pathname === "/"
      ? "bg-[#FBEBB5]" // Keep original color for Home or root path
      : "bg-white"; // Change to white for other pages

  return (
    <header className={`${headerBackgroundColor} py-4`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Placeholder for logo or site title */}
        <div className="text-xl font-bold"></div>

        <nav className="hidden md:flex space-x-10">
          <Link to="/Pages/Home" className="text-gray-800 hover:text-gray-900">Home</Link>
          <Link to="/pages/shop" className="text-gray-800 hover:text-gray-900">Shop</Link>
          <Link to="/pages/about" className="text-gray-800 hover:text-gray-900">About</Link>
          <Link to="/pages/contact" className="text-gray-800 hover:text-gray-900">Contact</Link>
        </nav>

        <div className="flex items-center space-x-8">
          {/* Profile Icon: Navigates to MyAccount */}
          <Link to="/pages/myacount" className="text-gray-800 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Search Icon */}
          <a href="#" className="text-gray-800 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>

          {/* Wishlist Icon */}
          <a href="#" className="text-gray-800 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>

          {/* Cart Icon: Triggers onToggleCart */}
          <button onClick={onToggleCart} className="text-gray-800 hover:text-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;