// src/Shop.tsx
import React from 'react';
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
];

const Shop: React.FC = () => {
  const ProductCard: React.FC<Product> = ({ name, price, imageUrl }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover object-center" />
        <div className="p-4 text-center">
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          <p className="mt-1 text-gray-600">{price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#333]">
      {/* Header Section */}
      <header>
        <div className="relative h-48 overflow-hidden">
          <img
            src={bannerBg}
            alt="Shop Banner"
            className="absolute inset-0 w-full h-full object-cover  object-bottom"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
            <img src={meubelLogo} alt="Meubel Logo" className="h-18 w-auto" />
            <h1 className="text-3xl   tracking-wide">Shop</h1>
            <p className="text-sm mt-1 font-bold flex flex-row">Home <p className="mx-1 font-bold">&gt;</p> Shop</p>
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
                className="pl-3 pr-4 py-1   rounded-md  text-sm"
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
            <span className="text-black text-sm hidden md:block">Showing 1-16 of 32 results</span>
          </div>
          <div className="flex items-center space-x-4 text-sm hidden md:flex">
            <div className="flex items-center space-x-2">
              <span className="text-black">Show</span>
              <div className="px-2 py-2 bg-white  text-gray-400">16</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-black">Sort by</span>
              <div className="px-2 py-2  bg-white  text-gray-400">Default</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsData.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section (Static UI Only) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 flex justify-center">
          <nav className="flex space-x-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-md text-lg bg-[#FBEBB5] text-gray-800">1</div>
            <div className="w-10 h-10 flex items-center justify-center rounded-md text-lg bg-[#FFF9E5] text-gray-700">2</div>
            <div className="w-10 h-10 flex items-center justify-center rounded-md text-lg bg-[#FFF9E5] text-gray-700">3</div>
            <div className="w-20 h-10 flex items-center justify-center rounded-md bg-[#FFF9E5] text-gray-700 ml-2">Next</div>
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
