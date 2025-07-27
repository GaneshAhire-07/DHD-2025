import React from "react";
import marketAnalysis from "../../assets/mbr-816x544.jpg";
import marginTrading from "../../assets/mbr-1-816x544.jpg";
import stableIncome from "../../assets/mbr-816x524.jpg";
import { FaChartLine, FaExchangeAlt, FaPiggyBank } from "react-icons/fa";

function GetStarted() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started with <span className="text-blue-600">DHD</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Begin your journey with our comprehensive solutions tailored for
            your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Market Analysis */}
          <div
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={marketAnalysis}
                alt="Market Analysis"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <FaChartLine className="text-xl" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Market Analysis
              </h3>
              <p className="text-gray-600 mb-6">
                Gain valuable insights with our comprehensive market analysis
                services to make informed decisions.
              </p>
            </div>
          </div>

          {/* Margin Trading */}
          <div
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={marginTrading}
                alt="Margin Trading"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <FaExchangeAlt className="text-xl" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Margin Trading
              </h3>
              <p className="text-gray-600 mb-6">
                Maximize your investment potential with our advanced margin
                trading solutions and expert guidance.
              </p>
            </div>
          </div>

          {/* Stable Income */}
          <div
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={stableIncome}
                alt="Stable Income"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <FaPiggyBank className="text-xl" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Stable Income
              </h3>
              <p className="text-gray-600 mb-6">
                Build a reliable income stream with our carefully curated stable
                investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
