import React from "react";
import horticulture from "../../assets/horticulture.jpg";
import cityPark from "../../assets/city-park-with-lake.jpg";
import sustainablePractices from "../../assets/sustainable-practises.jpg";
import customerCentric from "../../assets/customer-centric.jpg";
import { FaLeaf, FaTree, FaRecycle, FaHandsHelping } from "react-icons/fa";

function OurExpertise() {
  return (
    <section className="bg-gradient-to-b from-off-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading and Subtitle */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-green-500 rounded-full mx-auto"></div>
          </div>
          <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Expertise</span>
          </h4>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver excellence across industries, backed by multi-sector
            expertise and a customer-first approach.
          </p>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Specialized Horticultural Services */}
          <div
            className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={horticulture}
                alt="Specialized Horticultural Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <FaLeaf className="text-xl" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Specialized Horticultural Services
              </h5>
              <p className="text-gray-600 mb-4">
                Transforming spaces through vertical gardens, terrace farming,
                and sustainable green designs.
              </p>
            </div>
          </div>

          {/* DHD: Enhancing Landscapes, Enriching Lives */}
          <div
            className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={cityPark}
                alt="DHD: Enhancing Landscapes, Enriching Lives"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <FaTree className="text-xl" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Enhancing Landscapes, Enriching Lives
              </h5>
              <p className="text-gray-600 mb-4">
                DHD is a leading provider of comprehensive horticulture and
                landscape development solutions.
              </p>
            </div>
          </div>

          {/* Sustainable Practices */}
          <div
            className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={sustainablePractices}
                alt="Sustainable Practices"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <FaRecycle className="text-xl" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Sustainable Practices
              </h5>
              <p className="text-gray-600 mb-4">
                We are committed to environmentally sustainable practices,
                utilizing water-efficient irrigation systems, organic
                fertilizers, and integrated pest management strategies.
              </p>
            </div>
          </div>

          {/* Customer-Centric Approach */}
          <div
            className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={customerCentric}
                alt="Customer-Centric Approach"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <FaHandsHelping className="text-xl" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Customer-Centric Approach
              </h5>
              <p className="text-gray-600 mb-4">
                We prioritize building strong client relationships and providing
                personalized service to ensure complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;
