import React, { useState, useEffect, useRef } from "react";
import horticulture from "../../assets/Holticulture.jpg";
import cityPark from "../../assets/city-park-with-lake.jpg";
import sustainablePractices from "../../assets/sustainable-practises.jpg";
import customerCentric from "../../assets/customer-centric.jpg";
import { FaLeaf, FaTree, FaRecycle, FaHandsHelping } from "react-icons/fa";

const expertiseData = [
  {
    id: 1,
    image: horticulture,
    alt: "Specialized Horticultural Services",
    title: "Specialized Horticultural Services",
    description:
      "Transforming spaces through vertical gardens, terrace farming, and sustainable green designs.",
    icon: <FaLeaf />,
    color: "emerald",
    stats: { value: "500+", label: "Projects Completed" },
    features: ["Vertical Gardens", "Terrace Farming", "Sustainable Design"],
    gradient: "from-emerald-500 to-green-600",
  },
  {
    id: 2,
    image: cityPark,
    alt: "DHD: Enhancing Landscapes, Enriching Lives",
    title: "Enhancing Landscapes, Enriching Lives",
    description:
      "DHD is a leading provider of comprehensive horticulture and landscape development solutions.",
    icon: <FaTree />,
    color: "blue",
    stats: { value: "15+", label: "Years Experience" },
    features: ["Landscape Design", "Urban Planning", "Eco Solutions"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    image: sustainablePractices,
    alt: "Sustainable Practices",
    title: "Sustainable Practices",
    description:
      "Committed to environmentally sustainable practices, utilizing water-efficient irrigation systems and organic solutions.",
    icon: <FaRecycle />,
    color: "teal",
    stats: { value: "100%", label: "Eco Friendly" },
    features: ["Water Efficiency", "Organic Methods", "Pest Management"],
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    id: 4,
    image: customerCentric,
    alt: "Customer-Centric Approach",
    title: "Customer-Centric Approach",
    description:
      "Building strong client relationships and providing personalized service to ensure complete satisfaction.",
    icon: <FaHandsHelping />,
    color: "amber",
    stats: { value: "98%", label: "Client Satisfaction" },
    features: ["Personal Service", "Strong Relations", "Quality Assured"],
    gradient: "from-amber-500 to-orange-600",
  },
];

const ExpertiseCard = ({ expertise, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <article
      className={`group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 animate-pulse" />
        )}
        <img
          src={expertise.image}
          alt={expertise.alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            imageLoaded
              ? isHovered
                ? "scale-110"
                : "scale-100"
              : "opacity-0 scale-105"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        />
        <div
          className={`absolute top-4 right-4 w-12 h-12 bg-${
            expertise.color
          }-500 rounded-full flex items-center justify-center text-white shadow-md transition-transform ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          {expertise.icon}
        </div>
        <div
          className={`absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-${
            expertise.color
          }-700 transition-all ${isHovered ? "opacity-100" : "opacity-80"}`}
        >
          {expertise.stats.value} {expertise.stats.label}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {expertise.features.map((feature, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 transition-opacity ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3
          className={`text-xl font-bold text-gray-900 transition-colors ${
            isHovered ? "text-gray-800" : ""
          }`}
        >
          {expertise.title}
        </h3>
        <p
          className={`text-gray-600 mt-2 transition-colors ${
            isHovered ? "text-gray-700" : ""
          }`}
        >
          {expertise.description}
        </p>
      </div>
    </article>
  );
};

function OurExpertise() {
  const [visibleCards, setVisibleCards] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- MODIFIED HEADER SECTION --- */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Expertise
          </h2>
        </div>
        {/* --- END OF MODIFIED HEADER SECTION --- */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {expertiseData.map((expertise, index) => (
            <ExpertiseCard
              key={expertise.id}
              expertise={expertise}
              index={index}
              isVisible={visibleCards}
            />
          ))}
        </div>
      </div>
      {/* Removed the style jsx block as Tailwind classes cover these needs */}
    </section>
  );
}

export default OurExpertise;
