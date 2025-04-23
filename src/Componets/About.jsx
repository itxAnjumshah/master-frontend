import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/master2logo.jpg"; 
import { FaAward, FaCogs, FaTools } from 'react-icons/fa';

export default function About() {
  
  // Initialize AOS Animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-12">
        
        {/* Image Section (Left Side) */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0" data-aos="fade-right">
          <img
            src={aboutImg}
            alt="About The Master Training Center"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg border-4 border-yellow-400"
          />
        </div>

        {/* Content Section (Right Side) */}
        <div className="w-full md:w-1/2 md:pl-8 lg:pl-10" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-4 sm:mb-6">About Us</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
            The Master Training Center provides <strong>professional heavy machinery training</strong>, ensuring that you master the skills required for handling dozers, loaders, cranes, and other construction vehicles. Our expert trainers and hands-on approach make learning easy and effective.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start space-x-3">
              <FaAward className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Training</h3>
                <p className="text-gray-300 text-sm">Learn from industry professionals with years of experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaCogs className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Modern Equipment</h3>
                <p className="text-gray-300 text-sm">Train on state-of-the-art machinery and equipment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaTools className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Hands-on Practice</h3>
                <p className="text-gray-300 text-sm">Get practical experience with real-world scenarios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
