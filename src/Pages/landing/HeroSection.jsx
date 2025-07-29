import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/busy-businessman-working-tablet-mobile-phone-1-1256x1586.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 lg:py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford-blue leading-tight space-y-1">
              <div>Driven by Vision.</div>
              <div className="text-red-600">Built on Trust.</div>
              <div>Delivered with Excellence.</div>
            </h1>
            <div className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Trusted Industry Leader
            </div>
            <p className="text-medium-gray text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              <span className="font-semibold text-oxford-blue">We</span> are
              passionate about building value, committed to long-term
              partnerships, and shared success with stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg text-sm border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Get Started
              </Link>
              <Link
                to="/about/history"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg text-sm border-2 border-red-500 hover:border-red-600 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Double animated background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#002854] rounded-full opacity-20 animate-ping absolute" />
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#002854] rounded-full opacity-30 animate-pulse absolute" />
            </div>

            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={hero}
                alt="Professional businessman working with tablet and mobile phone - DHD Group"
                className="w-full h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              {/* Decorative floating cards */}
              <div className="absolute top-4 -left-2  bg-white p-2 rounded-lg shadow-lg -rotate-6 hover:rotate-0 transition-transform duration-300"></div>
              <div className="absolute bottom-8 -right-2 bg-white p-2 rounded-lg shadow-lg rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden lg:flex justify-center mt-10">
          <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-xs">Scroll Down</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
