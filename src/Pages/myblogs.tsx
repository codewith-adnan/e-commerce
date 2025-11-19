import React from 'react';

import bannerBg from '../assets/images/Rectangle1.png';
import meubelLogo from '../assets/icons/m tag.svg';



import blogImage1 from '../assets/images/Rectangle14.png';
import blogImage2 from '../assets/images/Rectangle 68.png';
import blogImage3 from '../assets/images/Rectangle 68 (1).png';
import recentPost1 from '../assets/images/Rectangle 69 (4).png';
import recentPost2 from '../assets/images/Rectangle 69 (3).png';
import recentPost3 from '../assets/images/Rectangle 69 (1).png';
import recentPost4 from '../assets/images/Rectangle 69 (2).png';
import recentPost5 from '../assets/images/Rectangle 69.png';

import adminIcon from '../assets/icons/dashicons_admin-users.png';
import calendarIcon from '../assets/icons/uis_calender.png';
import tagIcon from '../assets/icons/ci_tag.png';
import searchIcon from '../assets/icons/search-icon.svg';

const MyBlog: React.FC = () => {
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
            <h1 className="text-3xl tracking-wide">Blog</h1>
            <p className="text-sm mt-1 font-bold flex flex-row">
              Home <p className="mx-1 font-bold">&gt;</p> Blog
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="mb-12">
              <img src={blogImage1} alt="Going all-in with millennial design" className="w-full  rounded-lg mb-6" />
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <img src={adminIcon} alt="Admin" className="h-4 w-4 mr-1" />
                <span className="mr-4">Admin</span>
                <img src={calendarIcon} alt="Date" className="h-4 w-4 mr-1" />
                <span className="mr-4">19 Jan 2022</span>
                <img src={tagIcon} alt="Category" className="h-4 w-4 mr-1" />
                <span>Wood</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Going all-in with millennial design</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-1">Read More</button>
            </div>

            <div className="mb-12">
              <img src={blogImage2} alt="Exploring new ways of decorating" className="w-full h-auto rounded-lg mb-6" />
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <img src={adminIcon} alt="Admin" className="h-4 w-4 mr-1" />
                <span className="mr-4">Admin</span>
                <img src={calendarIcon} alt="Date" className="h-4 w-4 mr-1" />
                <span className="mr-4">19 Jan 2022</span>
                <img src={tagIcon} alt="Category" className="h-4 w-4 mr-1" />
                <span>Handmade</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Exploring new ways of decorating</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-1">Read More</button>
            </div>

            <div className="mb-12">
              <img src={blogImage3} alt="Handmade pieces that took time to make" className="w-full h-auto rounded-lg mb-6" />
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <img src={adminIcon} alt="Admin" className="h-4 w-4 mr-1" />
                <span className="mr-4">Admin</span>
                <img src={calendarIcon} alt="Date" className="h-4 w-4 mr-1" />
                <span className="mr-4">19 Jan 2022</span>
                <img src={tagIcon} alt="Category" className="h-4 w-4 mr-1" />
                <span>Wood</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Handmade pieces that took time to make</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-1">Read More</button>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button className="w-10 h-10 flex items-center justify-center bg-[#B88E2F] text-white rounded-md">1</button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#F9F1E7] text-gray-800 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#F9F1E7] text-gray-800 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors">3</button>
              <button className="px-4 py-2 bg-[#F9F1E7] text-gray-800 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors">Next</button>
            </div>
          </div>

          <div className="w-full lg:w-1/3 p-6">
            <div className="mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <img src={searchIcon} alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Categories</h3>
              <ul>
                <li className="flex justify-between items-center mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Crafts</a>
                  <span className="text-gray-500">(2)</span>
                </li>
                <li className="flex justify-between items-center mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Design</a>
                  <span className="text-gray-500">(8)</span>
                </li>
                <li className="flex justify-between items-center mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Handmade</a>
                  <span className="text-gray-500">(1)</span>
                </li>
                <li className="flex justify-between items-center mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Interior</a>
                  <span className="text-gray-500">(1)</span>
                </li>
                <li className="flex justify-between items-center mb-3">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Wood</a>
                  <span className="text-gray-500">(6)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Recent Posts</h3>
              <ul>
                <li className="flex items-center mb-6">
                  <img src={recentPost1} alt="Recent Post 1" className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium leading-tight">Going all-in with millennial design</p>
                    <span className="text-gray-500 text-sm">23 Jan 2022</span>
                  </div>
                </li>
                <li className="flex items-center mb-6">
                  <img src={recentPost2} alt="Recent Post 2" className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium leading-tight">Exploring new ways of decorating</p>
                    <span className="text-gray-500 text-sm">23 Jan 2022</span>
                  </div>
                </li>
                <li className="flex items-center mb-6">
                  <img src={recentPost3} alt="Recent Post 3" className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium leading-tight">Handmade pieces that took time to make</p>
                    <span className="text-gray-500 text-sm">23 Jan 2022</span>
                  </div>
                </li>
                <li className="flex items-center mb-6">
                  <img src={recentPost4} alt="Recent Post 4" className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium leading-tight">Modern home in Milan</p>
                    <span className="text-gray-500 text-sm">23 Jan 2022</span>
                  </div>
                </li>
                <li className="flex items-center mb-6">
                  <img src={recentPost5} alt="Recent Post 5" className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium leading-tight">Modern home in Milan</p>
                    <span className="text-gray-500 text-sm">23 Jan 2022</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF4F4] py-12">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-start text-gray-600 text-sm text-center">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Free Delivery</h4>
            <p className="max-w-xs mx-auto">For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">90 Days Return</h4>
            <p className="max-w-xs mx-auto">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full sm:w-1/3">
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Secure Payment</h4>
            <p className="max-w-xs mx-auto">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBlog;