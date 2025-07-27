import React, { useState, useEffect } from "react";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-slate-50 font-sans text-slate-800 min-h-screen">
      {/* Header */}
      <header
        className={`transition-opacity duration-600 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg transform transition-transform duration-500 hover:scale-105">
            Vision & Mission
          </h1>
        </section>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Vision Section */}
        <section
          className={`py-12 bg-gray-100 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 transition-all duration-500 hover:text-blue-600">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
              To be a leading and innovative global property developer,
              fostering sustainability and well-being for all.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section
          className={`py-12 transition-all duration-700 transform delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 transition-all duration-500 hover:text-blue-600">
              Our Mission
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
              {[
                "Embrace diverse talents and expertise to foster effective collaboration.",
                "Cultivate a knowledge-driven culture through technology, research, and information sharing.",
                "Create innovative living solutions that exceed stakeholder expectations and respect the environment.",
                "Continuously strive for advancement and the development of the highest global standards.",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-500 hover:text-gray-800 hover:translate-x-2 transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisionMission;
