// src/Shop.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import bannerBg from '../assets/images/Rectangle1.png';
import product1 from '../assets/images/Mask-group1.png';
import product2 from '../assets/images/Mask-group2.png';
import product3 from '../assets/images/Mask-group3.png';
import product4 from '../assets/images/Mask-group4.png';
import product5 from '../assets/images/Grain-coffee-table.png';
import product6 from '../assets/images/Kent-coffee-table.png';
import product7 from '../assets/images/Round-coffee-table_color.png';
import product8 from '../assets/images/Reclaimed-teak-Sideboard.png';
import product9 from '../assets/images/Plain-console.png';
import product10 from '../assets/images/Reclaimed-teak-Sideboard.png';
import product11 from '../assets/images/SJP08251.png';
import product12 from '../assets/images/Bella-chair-and-table.png';
import product13 from '../assets/images/sidetable.png';
import product14 from '../assets/images/Asgaard sofa 1.png';
import product15 from '../assets/images/Maya-sofa-three-seater.png';
import product16 from '../assets/images/Outdoor-sofa-set.png';

// Local icon imports
import filterIcon from '../assets/icons/filter.svg';
import gridIcon from '../assets/icons/four dots.svg';
import listIcon from '../assets/icons/burger.svg';
import meubelLogo from '../assets/icons/m tag.svg';

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

const productsData: Product[] = [
  { id: '1', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', imageUrl: product1 },
  { id: '2', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', imageUrl: product2 },
  { id: '3', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', imageUrl: product3 },
  { id: '4', name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', imageUrl: product4 },
  { id: '5', name: 'Chailn coffee table', price: 'Rs. 15,000.00', imageUrl: product5 },
  { id: '6', name: 'Front coffee table', price: 'Rs. 225,000.00', imageUrl: product6 },
  { id: '7', name: 'Round coffee table_color 2', price: 'Rs. 251,000.00', imageUrl: product7 },
  { id: '8', name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', imageUrl: product8 },
  { id: '9', name: 'Plain console_', price: 'Rs. 258,200.00', imageUrl: product9 },
  { id: '10', name: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', imageUrl: product10 },
  { id: '11', name: 'SJP_0825', price: 'Rs. 200,000.00', imageUrl: product11 },
  { id: '12', name: 'Delta chair and table', price: 'Rs. 100,000.00', imageUrl: product12 },
  { id: '13', name: 'Granite square side table', price: 'Rs. 258,800.00', imageUrl: product13 },
  { id: '14', name: 'Asgaard sofa', price: 'Rs. 250,000.00', imageUrl: product14 },
  { id: '15', name: 'Maya sofa three seater', price: 'Rs. 115,000.00', imageUrl: product15 },
  { id: '16', name: 'Outdoor sofa set', price: 'Rs. 244,000.00', imageUrl: product16 },
  // Duplicate data to demonstrate pagination
  { id: '17', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', imageUrl: product1 },
  { id: '18', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', imageUrl: product2 },
  { id: '19', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', imageUrl: product3 },
  { id: '20', name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', imageUrl: product4 },
  { id: '21', name: 'Chailn coffee table', price: 'Rs. 15,000.00', imageUrl: product5 },
  { id: '22', name: 'Front coffee table', price: 'Rs. 225,000.00', imageUrl: product6 },
  { id: '23', name: 'Round coffee table_color 2', price: 'Rs. 251,000.00', imageUrl: product7 },
  { id: '24', name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', imageUrl: product8 },
  { id: '25', name: 'Plain console_', price: 'Rs. 258,200.00', imageUrl: product9 },
  { id: '26', name: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', imageUrl: product10 },
  { id: '27', name: 'SJP_0825', price: 'Rs. 200,000.00', imageUrl: product11 },
  { id: '28', name: 'Delta chair and table', price: 'Rs. 100,000.00', imageUrl: product12 },
  { id: '29', name: 'Granite square side table', price: 'Rs. 258,800.00', imageUrl: product13 },
  { id: '30', name: 'Asgaard sofa', price: 'Rs. 250,000.00', imageUrl: product14 },
  { id: '31', name: 'Maya sofa three seater', price: 'Rs. 115,000.00', imageUrl: product15 },
  { id: '32', name: 'Outdoor sofa set', price: 'Rs. 244,000.00', imageUrl: product16 },
];

const ProductCard: React.FC<Product> = ({ id, name, price, imageUrl }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    addToCart({
      id,
      name,
      price: numericPrice,
      image: imageUrl,
      quantity: 1,
    });
    alert('Item added to cart!');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 text-center">{name}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-gray-600 font-semibold">{price}</p>
          <button
            onClick={handleAddToCart}
            className="text-gray-800 hover:text-orange-500 transition-colors duration-200 focus:outline-none"
            title="Add to Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Shop: React.FC = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | null>(null);
  const itemsPerPage = 16;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchQuery(search);
      setCurrentPage(1);
    }
  }, [location.search]);

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > currentPage) {
      setTransitionDirection('right');
    } else {
      setTransitionDirection('left');
    }
    setTimeout(() => {
      setCurrentPage(page);
      setTransitionDirection(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#333]">
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
            <h1 className="text-3xl tracking-wide">Shop</h1>
            <p className="text-sm mt-1 font-bold flex flex-row">
              <Link to="/" className="hover:underline">Home</Link> <p className="mx-1 font-bold">&gt;</p> Shop
            </p>
          </div>
        </div>
      </header>

      {/* Filter and Sort Section */}
      <section className="bg-[#F8F0E3] py-4 shadow-sm mt-8 ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-4 gap-3 text-black hover:text-orange-500">
              <img src={filterIcon} alt="Filter" className="w-4 h-4 text-black" />
              Filter
            </button>
            {/* Search Input */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-3 pr-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>
            <div className="flex space-x-4 ml-4">
              <button className="text-gray-600 hover:text-orange-500">
                <img src={gridIcon} alt="Grid View" className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-orange-500">
                <img src={listIcon} alt="List View" className="w-4 h-4" />
              </button>
            </div>
            <div className="h-6 w-px bg-gray-300 mx-4 hidden md:block"></div>
            <span className="text-black text-sm hidden md:block">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results
            </span>
          </div>
          <div className="flex items-center space-x-4 text-sm hidden md:flex">
            <div className="flex items-center space-x-2">
              <span className="text-black">Show</span>
              <div className="px-2 py-2 bg-white text-gray-400">{itemsPerPage}</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-black">Sort by</span>
              <div className="px-2 py-2 bg-white text-gray-400">Default</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-transform duration-300 ease-in-out ${transitionDirection === 'left' ? 'translate-x-full opacity-0' :
              transitionDirection === 'right' ? '-translate-x-full opacity-0' :
                'translate-x-0 opacity-100'
              }`}
          >
            {currentProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 flex justify-center">
          <nav className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-md text-lg ${currentPage === page ? 'bg-[#FBEBB5] text-gray-800' : 'bg-[#FFF9E5] text-gray-700'
                  }`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="w-20 h-10 flex items-center justify-center rounded-md bg-[#FFF9E5] text-gray-700 ml-2"
              >
                Next
              </button>
            )}
          </nav>
        </div>
      </section>

      {/* Footer Section */}
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
    </div>
  );
};

export default Shop;
