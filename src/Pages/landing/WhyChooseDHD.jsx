import React from "react";
import bannerImg from "../../assets/banner-img1-710x750.png";
import {
  FaCheck,
  FaLeaf,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

function WhyChooseDHD() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Why Choose <span className="text-blue-600">DHD</span>
              </h2>
            </div>

            <ul className="text-lg space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-green-500">
                  <FaCheck className="text-xl" />
                </div>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Proven expertise</strong>{" "}
                  across 15+ sectors
                </span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-green-500">
                  <FaLeaf className="text-xl" />
                </div>
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sustainability-first approach
                  </strong>{" "}
                  (Net Zero by 2030)
                </span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-green-500">
                  <FaHandshake className="text-xl" />
                </div>
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Long-term partnerships
                  </strong>{" "}
                  & local community value
                </span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-green-500">
                  <FaChartLine className="text-xl" />
                </div>
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    BIM & modern construction
                  </strong>{" "}
                  integration
                </span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-green-500">
                  <FaShieldAlt className="text-xl" />
                </div>
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    ISO 14001:2015 certified
                  </strong>{" "}
                  governance & safety practices
                </span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src={bannerImg}
                alt="Why Choose DHD"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseDHD;
