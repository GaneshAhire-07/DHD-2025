import React from "react";
import { Link } from "react-router-dom";
import AboutUsImage from "../../assets/2-1256x718.jpg"; // Verify this path
import usePageTitle from "../../hooks/usePageTitle";

const AboutUs = () => {
  usePageTitle("About");
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={AboutUsImage}
              alt="About Us - DHD Group"
              className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/1256x718";
              }} // Fallback image
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2 md:pl-6 lg:pl-10">
            <div className="text-wrapper space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford-blue">
                <span>About Us</span>
              </h1>
              <p className="text-medium-gray text-sm sm:text-base lg:text-lg leading-relaxed">
                <strong className="text-oxford-blue">
                  From Humble Beginnings to Industry Leadership
                </strong>
                <br />
                <br />
                DHD is a leading privately held real estate developer in India,
                recognized for its residential-led mixed-use developments.
                Founded by visionaries and powered by over 300 passionate
                professionals, we deliver high-quality projects that balance
                design, sustainability, and commercial value. With deep
                expertise, a customer-first approach, and active leadership, DHD
                continues to shape India's built environment with integrity and
                innovation.
              </p>
              <div className="mt-6">
                <Link
                  to="/about/history"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-lg text-sm border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
