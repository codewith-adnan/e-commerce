// SingleProductPage.tsx
import React from 'react';

// --- Local Image Imports ---
// Adjust these paths to where your images are actually located.
import mainProductImage from '../assets/images/Asgaard sofa 1.png';
import thumb1 from '../assets/images/Grain-coffee-table.png';       // Thumbnail 1
import thumb2 from '../assets/images/Mask group (1).png';       // Thumbnail 2
import thumb3 from '../assets/images/Mask group (2).png';       // Thumbnail 3
import thumb4 from '../assets/images/Mask group (3).png';       // Thumbnail 4

// New imports for images below description
import descriptionImage1 from '../assets/images/Cloud sofa three seater + ottoman_2 1.png'; // Replace with your image path
import descriptionImage2 from '../assets/images/Cloud sofa three seater + ottoman_1 1.png'; // Replace with your image path

// New imports for related products (from your previous Home.tsx)
import relatedProduct1 from '../assets/images/Mask-group1.png'; // Trenton Sofa (from Home.tsx)
import relatedProduct2 from '../assets/images/Mask-group2.png'; // Dining Table (from Home.tsx)
import relatedProduct3 from '../assets/images/Mask-group3.png'; // Bar Stool (from Home.tsx)
import relatedProduct4 from '../assets/images/Mask-group4.png'; // Console Mirror (from Home.tsx)

// --- Local Icon Imports ---
// Adjust these paths to where your icons are actually located.
import facebookIcon from '../assets/icons/akar-icons_facebook-fill.png';
import linkedinIcon from '../assets/icons/akar-icons_linkedin-box-fill.png';
import twitterIcon from '../assets/icons/ant-design_twitter-circle-filled.png';
import heartIcon from '../assets/icons/Vector (1).png'; // Assuming Vector (1).png is the heart icon
import starIcon from '../assets/icons/Vector (1).png'; // Assuming star-icon.svg is the star icon


// --- SingleProductImages Component (Integrated) ---
const SingleProductImages: React.FC = () => {
  return (
    <div className="flex w-full md:w-1/2 p-4">
      {/* Thumbnails Column */}
      <div className="flex flex-col space-y-4 pr-4">
        <div className="w-24 h-24 p-2 bg-[#FFF9E5] rounded-lg flex items-center justify-center cursor-pointer  ">
          <img src={thumb1} alt="Asgaard Sofa Thumbnail 1" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="w-24 h-24 p-2 bg-[#FFF9E5] rounded-lg flex items-center justify-center cursor-pointer  ">
          <img src={thumb2} alt="Asgaard Sofa Thumbnail 2" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="w-24 h-24 p-2 bg-[#FFF9E5] rounded-lg flex items-center justify-center cursor-pointer  ">
          <img src={thumb3} alt="Asgaard Sofa Thumbnail 3" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="w-24 h-24 p-2 bg-[#FFF9E5] rounded-lg flex items-center justify-center cursor-pointer  ">
          <img src={thumb4} alt="Asgaard Sofa Thumbnail 4" className="max-w-full max-h-full object-contain" />
        </div>
      </div>

      {/* Main Product Image */}
      <div className="flex-grow bg-[#FFF9E5] rounded-lg flex items-center justify-center p-4">
        <img src={mainProductImage} alt="Asgaard Sofa Main" className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};

// --- SingleProductDetails Component (Integrated) ---
const SingleProductDetails: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
      {/* Product Title and Price */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Asgaard sofa</h1>
        <p className="text-2xl text-gray-700 mt-2">Rs. 250,000.00</p>
      </div>

      {/* Ratings */}
      <div className="flex items-center space-x-2">
        <div className="flex">
          {/* Render 4 full stars and 1 empty/half star */}
          <img src={starIcon} alt="Star" className="w-5 h-5 text-yellow-400" />
          <img src={starIcon} alt="Star" className="w-5 h-5 text-yellow-400" />
          <img src={starIcon} alt="Star" className="w-5 h-5 text-yellow-400" />
          <img src={starIcon} alt="Star" className="w-5 h-5 text-yellow-400" />
          {/* If you have an empty star icon, use it here, otherwise, a faded one */}
          <img src={starIcon} alt="Star" className="w-5 h-5 text-gray-300 opacity-50" />
        </div>
        <span className="text-gray-500 text-sm">|</span>
        <span className="text-gray-500 text-sm">5 Customer Review</span>
      </div>

      {/* Product Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
      </p>

      {/* Size Selection */}
      <div>
        <p className="text-gray-700 font-medium mb-2">Size</p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-md bg-[#FBEBB5] text-black font-medium">L</button>
          <button className="px-4 py-2 rounded-md bg-[#FAF4F4] text-black ">XL</button>
          <button className="px-4 py-2 rounded-md bg-[#FAF4F4] text-black ">XS</button>
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <p className="text-gray-700 font-medium mb-2">Color</p>
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#816DFA]  border-indigo-800 cursor-pointer"></div>
          <div className="w-8 h-8 rounded-full bg-black  border-transparent cursor-pointer "></div>
          <div className="w-8 h-8 rounded-full bg-[#CDBA7B] border-2 border-transparent cursor-pointer "></div>
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex items-center space-x-4 pt-4 border-t border-[#9F9F9F] mt-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button className="px-4 py-2 text-xl">-</button>
          <span className="px-4 py-2 text-lg font-medium">1</span>
          <button className="px-4 py-2 text-xl">+</button>
        </div>
        <button className="px-8 py-3 bg-white text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white font-medium">
          Add To Cart
        </button>
      </div>

      {/* Separator */}
      <hr className="my-6 border-[#9F9F9F]" />

      {/* Additional Info */}
      <div className="text-[#9F9F9F] text-sm space-y-2">
        <p>SKU <span className="ml-16">:</span> <span className="ml-4">SS001</span></p>
        <p>Category <span className="ml-8">:</span> <span className="ml-4">Sofas</span></p>
        <p>Tags <span className="ml-14">:</span> <span className="ml-4">Sofa, Chair, Home, Shop</span></p>
        <div className="flex items-center">
          <p>Share <span className="ml-14">:</span></p>
          <div className="flex space-x-3 ml-4">
            <a href="#" className="w-6 h-6"> 
              <img src={facebookIcon} alt="Facebook" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6">
              <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
            </a>
            <a href="#" className="w-6 h-6">
              <img src={twitterIcon} alt="Twitter" className="w-full h-full" />
            </a>
          </div>
          <div className="ml-auto">
            <img src={heartIcon} alt="Add to Wishlist" className="w-6 h-6 cursor-pointer" /> {/* No text-red-500 on img, it's for SVG/text */}
          </div>
        </div>
      </div>

    </div>

  );
};


const SingleProductPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Breadcrumbs */}
      <div className="mb-6 text-gray-600 flex items-center space-x-2">
        <span>Home</span>
        <span>&gt;</span>
        <span>Shop</span>
        <span>&gt;</span>
        <span className="font-medium text-gray-800">Asgaard sofa</span>
      </div>

      {/* Product Sections (Images & Details) */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg p-6">
        <SingleProductImages />
        {/* No need for an hr here inside the flex row, as per image layout */}
        <SingleProductDetails />
      </div>

      {/* Horizontal Line above Description section */}
      <hr className="my-8 border-t-2 border-gray-200" />

      {/* Description, Additional Info, Reviews */}
      <div className="mt-12 bg-white p-6"> {/* Removed rounded-lg and shadow-md from this div */}
        <div className="flex space-x-8 border-b text-center pb-4 mb-6">
          <button className="text-lg font-medium text-gray-800 border-b-2 border-gray-800 pb-2">Description</button>
          <button className="text-lg text-gray-600 hover:text-gray-800">Additional Information</button>
          <button className="text-lg text-gray-600 hover:text-gray-800">Reviews <span className="text-gray-400">[5]</span></button>
        </div>
        <div className="space-y-4 text-gray-700"> {/* Corrected this line */}
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplug
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>

          {/* Images below description */}
          <div className="flex flex-col md:flex-row gap-4 mt-8"> {/* Changed space-x-4 to gap-4 on parent */}
            <div className="w-full md:w-1/2 bg-[#FFF9E5] rounded-lg flex items-center justify-center p-4"> {/* Individual div for image 1 */}
              <img src={descriptionImage1} alt="Description Image 1" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 bg-[#FFF9E5] rounded-lg flex items-center justify-center p-4"> {/* Individual div for image 2 */}
              <img src={descriptionImage2} alt="Description Image 2" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
          </div>
        </div> {/* Corrected this line */}

      </div>

      {/* Horizontal Line below Description section */}
      <hr className="my-8 border-t-2 border-gray-200" />

      {/* Related Products Section (formerly Top Picks For You) */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Related Products</h2>
          {/* Removed the paragraph here as requested */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Product Card 1 */}
            <div className="flex flex-col items-center text-center">
              <img src={relatedProduct1} alt="Trenton modular sofa_3" className="w-full h-58 object-contain mb-2" />
              <h3 className="text-m font-medium text-gray-800 mb-1">Trenton modular sofa_3</h3>
              <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
            </div>
            {/* Product Card 2 */}
            <div className="flex flex-col items-center text-center">
              <img src={relatedProduct2} alt="Granite dining table with dining chair" className="w-full h-58 object-contain mb-2" />
              <h3 className="text-m font-medium text-gray-800 mb-1">Granite dining table with dining chair</h3>
              <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
            </div>
            {/* Product Card 3 */}
            <div className="flex flex-col items-center text-center">
              <img src={relatedProduct3} alt="Outdoor bar table and stool" className="w-full h-58 object-contain mb-2" />
              <h3 className="text-m font-medium text-gray-800 mb-1">Outdoor bar table and stool</h3>
              <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
            </div>
            {/* Product Card 4 */}
            <div className="flex flex-col items-center text-center">
              <img src={relatedProduct4} alt="Plain console with teak mirror" className="w-full h-58 object-contain mb-2" />
              <h3 className="text-m font-medium text-gray-800 mb-1">Plain console with teak mirror</h3>
              <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
            </div>
          </div>

          <div className="mt-12">
            <a href="#" className="relative text-lg text-gray-800 font-medium pb-1 group">
              View More
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductPage;