import React from "react";
import marketAnalysis from "../../assets/mbr-816x544.jpg";
import marginTrading from "../../assets/mbr-1-816x544.jpg";
import stableIncome from "../../assets/mbr-816x524.jpg";
import { FaChartLine, FaExchangeAlt, FaPiggyBank } from "react-icons/fa";

// A simple card component to avoid repetition
const InfoCard = ({ image, alt, icon, title, description, delay }) => (
  <div
    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="relative overflow-hidden h-64">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

function GetStarted() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- MODIFIED HEADER SECTION --- */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Get Started with DHD
          </h2>
        </div>
        {/* --- END OF MODIFIED HEADER SECTION --- */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <InfoCard
            image={marketAnalysis}
            alt="Market Analysis"
            icon={<FaChartLine className="text-xl" />}
            title="Market Analysis"
            description="Gain valuable insights with our comprehensive market analysis services to make informed decisions."
            delay="0"
          />
          <InfoCard
            image={marginTrading}
            alt="Margin Trading"
            icon={<FaExchangeAlt className="text-xl" />}
            title="Margin Trading"
            description="Maximize your investment potential with our advanced margin trading solutions and expert guidance."
            delay="100"
          />
          <InfoCard
            image={stableIncome}
            alt="Stable Income"
            icon={<FaPiggyBank className="text-xl" />}
            title="Stable Income"
            description="Build a reliable income stream with our carefully curated stable investment opportunities."
            delay="200"
          />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
