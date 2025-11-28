// src/components/Header.tsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation, useNavigate
import { useCart } from "../context/CartContext";

interface HeaderProps {
  onToggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleCart }) => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/pages/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Determine the background color based on the current path
  const headerBackgroundColor =
    location.pathname === "/Pages/Home" || location.pathname === "/"
      ? "bg-[#FBEBB5]" // Keep original color for Home or root path
      : "bg-white"; // Change to white for other pages

  return (
    <header className={`${headerBackgroundColor} py-4 relative`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Placeholder for logo or site title */}
        <div className="flex items-center">
          {/* Custom Burger Icon for Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden mr-4 cursor-pointer flex flex-col gap-1 w-6 focus:outline-none z-50"
          >
            <span className={`block h-0.5 bg-black w-3 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5 w-6' : ''}`}></span>
            <span className={`block h-0.5 bg-black w-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-black w-6 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          <div className="text-xl font-bold"></div>
        </div>

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

          {/* Search Icon & Input */}
          <div className="relative">
            {!isSearchOpen ? (
              <button onClick={() => setIsSearchOpen(true)} className="text-gray-800 hover:text-gray-900 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            ) : (
              <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full px-3 py-1 flex items-center shadow-md z-50 w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="outline-none text-sm w-full"
                  autoFocus
                />
                <button type="button" onClick={() => setIsSearchOpen(false)} className="ml-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Wishlist Icon */}
          <a href="#" className="text-gray-800 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>

          {/* Cart Icon: Triggers onToggleCart */}
          <button onClick={onToggleCart} className="text-gray-800 hover:text-gray-900 focus:outline-none relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu}></div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col space-y-6 mt-12">
          <Link to="/Pages/Home" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/pages/shop" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>Shop</Link>
          <Link to="/pages/about" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>About</Link>
          <Link to="/pages/contact" className="text-lg font-medium text-gray-800 hover:text-orange-500" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;