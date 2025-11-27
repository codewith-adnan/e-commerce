import React from 'react';
import { useNavigate } from 'react-router-dom';

import sideTable1 from '../assets/images/sidetable.png';
import sofa1 from '../assets/images/Mask-group.png';
import blogImage1 from '../assets/images/Rectangle13.png';
import blogImage2 from '../assets/images/Rectangle14.png';
import blogImage3 from '../assets/images/Rectangle15.png';
import asgaardSofa from '../assets/images/Asgaard sofa 1.png';
import trentonSofa from '../assets/images/Mask-group1.png';
import diningTable from '../assets/images/Mask-group2.png';
import barStool from '../assets/images/Mask-group3.png';
import consoleMirror from '../assets/images/Mask-group4.png';
import rocketSeater from '../assets/images/single-seater.png';
import instagramBg from '../assets/images/Rectangle17.png';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/pages/shop');
  };

  const handleOrderClick = () => {
    navigate('/pages/singleproduct');
  };

  const handleViewAllPostsClick = () => {
    navigate('/pages/myblogs');
  };

  return (
    <div>
      <section className="bg-[#FBEBB5] py-8 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-center min-h-[400px] md:min-h-[500px] px-4 md:px-8 lg:px-16">
        <div className="flex-1 text-center md:text-left md:pr-8 lg:pr-16 order-2 md:order-1 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Rocket single <br /> seater
          </h2>
          <a
            href="#"
            onClick={handleShopNowClick}
            className="relative text-lg text-gray-900 font-semibold pb-1 group inline-block"
          >
            Shop Now
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>

        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src={rocketSeater}
            alt="Rocket Single Seater"
            className="max-w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[800px] lg:scale-125 object-contain"
          />
        </div>
      </section>

      <section className="bg-[#FAF4F4] py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-start text-left max-w-sm mx-auto">
            <img
              src={sideTable1}
              alt="Side table"
              className="w-full h-auto object-contain max-h-[500px] md:max-h-[700px] mb-4"
            />
            <h3 className="text-3xl pl-14 mt-[-7rem] font-semibold text-gray-900 mb-2 ">Side table</h3>
            <a href="#" className="pl-14 text-lg text-gray-800 font-medium pb-1 inline-block">
              <span className="relative group inline-block">
                View More
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </a>
          </div>
          <div className="flex flex-col items-start text-left max-w-sm mx-auto">
            <img
              src={sofa1}
              alt="Side table (Sofa)"
              className="w-full h-auto object-contain max-h-[500px] md:max-h-[700px] mb-4"
            />
            <h3 className="text-3xl mt-[-7rem] pl-14 font-semibold text-[#000000] mb-2 ">Side table</h3>
            <a href="#" className="pl-14 text-lg text-gray-800 font-medium pb-1 inline-block">
              <span className="relative group inline-block">
                View More
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top Picks For You</h2>
          <p className="text-[#9F9F9F] text-lg mb-12 max-w-2xl mx-auto">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <img src={trentonSofa} alt="Trenton modular sofa_3" className="w-full h-58 object-contain mb-2" />
              <h3 className="text-m font-medium text-gray-800 mb-1">Trenton modular sofa_3</h3>
              <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={diningTable} alt="Granite dining table with dining chair" className="w-full h-58 object-contain mb-2" />
              <h3 className="text-m font-medium text-gray-800 mb-1">Granite dining table with dining chair</h3>
              <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={barStool} alt="Outdoor bar table and stool" className="w-full h-58 object-contain mb-2" />
              <h3 className="text-m font-medium text-gray-800 mb-1">Outdoor bar table and stool</h3>
              <p className="text-xl font-bold text-gray-900">Rs. 25,000.00</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={consoleMirror} alt="Plain console with teak mirror" className="w-full h-58 object-contain mb-2" />
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

      <section className="bg-[#FFF9E5] py-8 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-center min-h-[400px] md:min-h-[600px] px-4 md:px-8 lg:px-16">
        <div className="flex-1 flex justify-center md:justify-start order-1 md:order-1 mb-8 md:mb-0">
          <img
            src={asgaardSofa}
            alt="Asgaard Sofa"
            className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px] lg:max-h-[1000px]"
          />
        </div>
        <div className="flex-1 text-center md:text-center md:pl-8 lg:pl-16 order-2 md:order-2">
          <p className="text-gray-800 text-sm md:text-base font-medium mb-2">New Arrivals</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Asgaard sofa
          </h2>
          <button
            className="px-8 py-3 md:px-10 md:py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
            onClick={handleOrderClick}
          >
            Order Now
          </button>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blogs</h2>
          <p className="text-[#9F9F9F] text-lg mb-12 max-w-2xl mx-auto">
            Find a bright ideal to suit your taste with our great selection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-left max-w-sm mx-auto">
              <img src={blogImage1} alt="Blog Post Image" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Going all-in with millennial design</h3>
              <a href="#" className="relative text-lg text-gray-800 font-medium pb-1 group mb-4">
                Read More
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>5 min</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>12ᵗʰ Oct 2022</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-left max-w-sm mx-auto">
              <img src={blogImage2} alt="Blog Post Image" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Going all-in with millennial design</h3>
              <a href="#" className="relative text-lg text-gray-800 font-medium pb-1 group mb-4">
                Read More
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>5 min</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>12ᵗʰ Oct 2022</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-left max-w-sm mx-auto">
              <img src={blogImage3} alt="Blog Post Image" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Going all-in with millennial design</h3>
              <a href="#" className="relative text-lg text-gray-800 font-medium pb-1 group mb-4">
                Read More
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>5 min</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>12ᵗʰ Oct 2022</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="#"
              onClick={handleViewAllPostsClick}
              className="relative text-lg text-gray-800 font-medium pb-1 group"
            >
              View All Post
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative bg-gray-100 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${instagramBg})` }}
      >
        <div className="absolute inset-0 bg-[#FAF4F4] opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Instagram</h2>
          <p className="text-gray-700 text-lg mb-8">Follow our store on Instagram</p>
          <button className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            Follow Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;