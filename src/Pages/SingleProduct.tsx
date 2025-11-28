// SingleProductPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import meubelLogo from '../assets/icons/m tag.svg';

// --- Local Image Imports ---
import mainProductImage from '../assets/images/Asgaard sofa 1.png';
import thumb1 from '../assets/images/Grain-coffee-table.png';
import thumb2 from '../assets/images/Mask group (1).png';
import thumb3 from '../assets/images/Mask group (2).png';
import thumb4 from '../assets/images/Mask group (3).png';

import descriptionImage1 from '../assets/images/Cloud sofa three seater + ottoman_2 1.png';
import descriptionImage2 from '../assets/images/Cloud sofa three seater + ottoman_1 1.png';

import relatedProduct1 from '../assets/images/Mask-group1.png';
import relatedProduct2 from '../assets/images/Mask-group2.png';
import relatedProduct3 from '../assets/images/Mask-group3.png';
import relatedProduct4 from '../assets/images/Mask-group4.png';

// --- Local Icon Imports ---
import facebookIcon from '../assets/icons/akar-icons_facebook-fill.png';
import linkedinIcon from '../assets/icons/akar-icons_linkedin-box-fill.png';
import twitterIcon from '../assets/icons/ant-design_twitter-circle-filled.png';
import heartIcon from '../assets/icons/Vector (1).png';
import starIcon from '../assets/icons/Vector (1).png';

// --- SingleProductImages Component ---
const SingleProductImages: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(mainProductImage);
  const thumbnails = [mainProductImage, thumb1, thumb2, thumb3, thumb4];

  return (
    <div className="flex w-full md:w-1/2 p-4">
      <div className="flex flex-col space-y-4 pr-4">
        {thumbnails.map((thumb, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(thumb)}
            className={`w-24 h-24 p-2 bg-[#FFF9E5] rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 ${selectedImage === thumb ? 'ring-2 ring-[#B88E2F]' : 'hover:ring-2 hover:ring-gray-300'
              }`}
          >
            <img src={thumb} alt={`Thumbnail ${index + 1}`} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
      <div className="flex-grow bg-[#FFF9E5] rounded-lg flex items-center justify-center p-4">
        <img src={selectedImage} alt="Asgaard Sofa Main" className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};

// --- SingleProductDetails Component ---
const SingleProductDetails: React.FC = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: '14',
      name: 'Asgaard sofa',
      price: 250000,
      image: mainProductImage,
      quantity: quantity,
    });

    // Show toast notification
    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: {
        message: 'Item added to cart',
        image: meubelLogo
      }
    }));
  };

  return (
    <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Asgaard sofa</h1>
        <p className="text-2xl text-gray-700 mt-2">Rs. 250,000.00</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={starIcon} alt="Star" className="w-5 h-5 text-yellow-400" />
          ))}
          <img src={starIcon} alt="Star" className="w-5 h-5 text-gray-300 opacity-50" />
        </div>
        <span className="text-gray-500 text-sm">|</span>
        <span className="text-gray-500 text-sm">5 Customer Review</span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
      </p>

      <div>
        <p className="text-gray-700 font-medium mb-2">Size</p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-md bg-[#FBEBB5] text-black font-medium">L</button>
          <button className="px-4 py-2 rounded-md bg-[#FAF4F4] text-black">XL</button>
          <button className="px-4 py-2 rounded-md bg-[#FAF4F4] text-black">XS</button>
        </div>
      </div>

      <div>
        <p className="text-gray-700 font-medium mb-2">Color</p>
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#816DFA] border-indigo-800 cursor-pointer"></div>
          <div className="w-8 h-8 rounded-full bg-black border-transparent cursor-pointer"></div>
          <div className="w-8 h-8 rounded-full bg-[#CDBA7B] border-2 border-transparent cursor-pointer"></div>
        </div>
      </div>

      <div className="flex items-center space-x-4 pt-4 border-t border-[#9F9F9F] mt-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button className="px-4 py-2 text-xl" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span className="px-4 py-2 text-lg font-medium">{quantity}</span>
          <button className="px-4 py-2 text-xl" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button
          onClick={handleAddToCart}
          className="px-8 py-3 bg-white text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white font-medium flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add To Cart
        </button>
      </div>

      <hr className="my-6 border-[#9F9F9F]" />

      <div className="text-[#9F9F9F] text-sm space-y-2">
        <p>SKU <span className="ml-16">:</span> <span className="ml-4">SS001</span></p>
        <p>Category <span className="ml-8">:</span> <span className="ml-4">Sofas</span></p>
        <p>Tags <span className="ml-14">:</span> <span className="ml-4">Sofa, Chair, Home, Shop</span></p>
        <div className="flex items-center">
          <p>Share <span className="ml-14">:</span></p>
          <div className="flex space-x-3 ml-4">
            <a href="#" className="w-6 h-6"><img src={facebookIcon} alt="Facebook" className="w-full h-full" /></a>
            <a href="#" className="w-6 h-6"><img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" /></a>
            <a href="#" className="w-6 h-6"><img src={twitterIcon} alt="Twitter" className="w-full h-full" /></a>
          </div>
          <div className="ml-auto">
            <img src={heartIcon} alt="Add to Wishlist" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main SingleProductPage Component ---
const SingleProductPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-gray-600 flex items-center space-x-2">
        <Link to="/" className="hover:underline">Home</Link>
        <span>&gt;</span>
        <Link to="/pages/shop" className="hover:underline">Shop</Link>
        <span>&gt;</span>
        <span className="font-medium text-gray-800">Asgaard sofa</span>
      </div>

      <div className="flex flex-col md:flex-row bg-white rounded-lg p-6">
        <SingleProductImages />
        <SingleProductDetails />
      </div>

      <hr className="my-8 border-t-2 border-gray-200" />

      <div className="mt-12 bg-white p-6">
        <div className="flex space-x-8 border-b text-center pb-4 mb-6">
          <button className="text-lg font-medium text-gray-800 border-b-2 border-gray-800 pb-2">Description</button>
          <button className="text-lg text-gray-600 hover:text-gray-800">Additional Information</button>
          <button className="text-lg text-gray-600 hover:text-gray-800">Reviews <span className="text-gray-400">[5]</span></button>
        </div>
        <div className="space-y-4 text-gray-700">
          <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplug</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="w-full md:w-1/2 bg-[#FFF9E5] rounded-lg flex items-center justify-center p-4">
              <img src={descriptionImage1} alt="Description Image 1" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 bg-[#FFF9E5] rounded-lg flex items-center justify-center p-4">
              <img src={descriptionImage2} alt="Description Image 2" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-gray-200" />

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { img: relatedProduct1, name: 'Trenton modular sofa_3' },
              { img: relatedProduct2, name: 'Granite dining table with dining chair' },
              { img: relatedProduct3, name: 'Outdoor bar table and stool' },
              { img: relatedProduct4, name: 'Plain console with teak mirror' }
            ].map((prod, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img src={prod.img} alt={prod.name} className="w-full h-58 object-contain mb-2" />
                <h3 className="text-m font-medium text-gray-800 mb-1">{prod.name}</h3>
                <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/pages/shop" className="relative text-lg text-gray-800 font-medium pb-1 group">
              View More
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductPage;