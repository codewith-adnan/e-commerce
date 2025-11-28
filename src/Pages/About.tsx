import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../assets/images/Rectangle1.png';
import meubelLogo from '../assets/icons/m tag.svg';
import aboutImage from '../assets/images/Mask-group1.png'; // Reusing a product image for the About section
import focusImage1 from '../assets/images/Mask-group.png';
import focusImage2 from '../assets/images/Mask-group2.png';
import focusImage3 from '../assets/images/Rectangle13.png';

const About: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-[#333]">
            {/* Header Section */}
            <header className="w-full">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={bannerBg}
                        alt="About Banner"
                        className="absolute inset-0 w-full h-full object-cover object-bottom"
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
                        <img src={meubelLogo} alt="Meubel Logo" className="h-18 w-auto" />
                        <h1 className="text-3xl tracking-wide">About</h1>
                        <p className="text-sm mt-1 font-bold flex flex-row">
                            <Link to="/" className="hover:underline">Home</Link> <p className="mx-1 font-bold">&gt;</p> About
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content Section */}
            <div className="flex-grow container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    {/* About Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={aboutImage}
                            alt="About Us"
                            className="w-full h-auto rounded-lg object-cover shadow-md"
                        />
                    </div>

                    {/* About Text */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800">Crafting Comfort, Designing Dreams</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Meubel House, we don't just sell furniture; we curate experiences. Our passion lies in finding the perfect balance between aesthetic beauty and functional comfort. Every piece in our collection is selected with a keen eye for detail, ensuring that it not only looks stunning but also stands the test of time.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From the warmth of natural wood to the sleek lines of modern metal, our diverse range caters to every style. We believe your home is your sanctuary, and it deserves nothing but the best.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Our Promise</h3>
                            <p className="text-gray-600">
                                Uncompromising quality, sustainable sourcing, and a customer-first approach are the pillars of our brand. We are here to help you build the home of your dreams, one piece at a time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* New Section: Our Focus / Gallery */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Creative Focus</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                        We focus on three core principles: Innovation, Sustainability, and Timeless Design. Explore how we bring these to life.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow">
                                <img src={focusImage1} alt="Innovation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-800">Innovation</h3>
                            <p className="text-sm text-gray-500 mt-2">Pushing boundaries with modern materials.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow">
                                <img src={focusImage2} alt="Sustainability" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-800">Sustainability</h3>
                            <p className="text-sm text-gray-500 mt-2">Eco-friendly choices for a better future.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow">
                                <img src={focusImage3} alt="Timeless Design" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-800">Timeless Design</h3>
                            <p className="text-sm text-gray-500 mt-2">Styles that never go out of fashion.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Features Section */}
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

export default About;
