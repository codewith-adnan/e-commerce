import React from 'react';
import bannerBg from '../assets/images/Rectangle1.png';
import meubelLogo from '../assets/icons/m tag.svg';
import aboutImage from '../assets/images/Mask-group1.png'; // Reusing a product image for the About section

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
                            Home <p className="mx-1 font-bold">&gt;</p> About
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content Section */}
            <div className="flex-grow container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* About Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={aboutImage}
                            alt="About Us"
                            className="w-full h-auto rounded-lg  object-cover"
                        />
                    </div>

                    {/* About Text */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to our store! We are passionate about providing high-quality furniture that transforms houses into homes.
                            Our journey began with a simple mission: to make beautiful, durable, and affordable furniture accessible to everyone.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We believe that your home should be a reflection of your personality. That's why we curate a wide range of
                            styles, from modern minimalism to classic elegance, ensuring there's something for every taste.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                To inspire and innovate in every piece we offer, prioritizing sustainability, craftsmanship, and customer satisfaction above all else.
                            </p>
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
