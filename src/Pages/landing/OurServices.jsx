import React, { useState, useCallback, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react"; // Import icon for consistency
import usePageTitle from "../../hooks/usePageTitle";

// --- Asset Imports ---
import LandscapeImage from "../../assets/Landscape.jpg";
import LandscapeDevelopmentImage from "../../assets/Landscape&Development.jpg";
import VerticalGarden from "../../assets/terracegarden.jpg";
import CorporateGreenSolution from "../../assets/CorporateGreenSolution.jpg";
import garderDesign from "../../assets/garderDesign.jpg";
import GrassPlantation from "../../assets/GrassPlantation.jpg";
import TeraceGarden from "../../assets/TeraceGarden.jpg";
import KitchenGarden from "../../assets/b1.jpeg";

// --- Data ---
const servicesData = {
  main: [
    {
      id: 1,
      image: LandscapeImage,
      alt: "Professional landscape architecture and design services",
      title: "Landscape Architecture & Design",
      description:
        "Expert architectural services including master planning, site analysis, and conceptual design aligned with your vision and environment.",
    },
    {
      id: 2,
      image: LandscapeDevelopmentImage,
      alt: "Landscape development and construction services",
      title: "Landscape Development & Construction",
      description:
        "Turnkey solutions from site prep to irrigation, ensuring precise execution with top-tier industry standards.",
    },
    {
      id: 3,
      image: VerticalGarden,
      alt: "Vertical gardens and bio walls installation",
      title: "Vertical Gardens & Bio Walls",
      description:
        "Innovative vertical green solutions that enhance aesthetics, save space, and improve biodiversity and air quality.",
    },
  ],
  secondary: [
    {
      id: 4,
      image: CorporateGreenSolution,
      alt: "Corporate green solutions and office plant rental",
      title: "Corporate Green Solutions",
      description:
        "Plants on Rent and Maali on Rent services to improve office spaces, boosting employee morale and sustainability.",
    },
    {
      id: 5,
      image: garderDesign,
      alt: "Garden design and maintenance services",
      title: "Garden Design & Maintenance",
      description:
        "From plant selection to regular care, ensuring your garden stays vibrant and healthy year-round.",
    },
  ],
  specialized: [
    {
      id: 6,
      image: GrassPlantation,
      alt: "Professional grass plantation for lawns and sports fields",
      title: "Grass Plantation",
      description:
        "High-quality grass options ideal for lawns, sports fields, and erosion control.",
    },
    {
      id: 7,
      image: TeraceGarden,
      alt: "Terrace gardening solutions for rooftops",
      title: "Terrace Gardening",
      description:
        "Transform rooftops into lush green spaces offering functionality and beauty for urban living.",
    },
    {
      id: 8,
      image: KitchenGarden,
      alt: "Kitchen gardening setups for herbs and vegetables",
      title: "Kitchen Gardening",
      description:
        "Grow your own herbs and vegetables in compact spaces with custom kitchen garden setups.",
    },
  ],
};

// --- Components ---

const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => {
    setIsLoaded(true); // Stop placeholder animation on error
    setHasError(true);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F1F5F9] animate-pulse" />
      )}
      {hasError ? (
        <div className="w-full h-full bg-[#F1F5F9] flex items-center justify-center text-slate-500">
          <div className="text-center">
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm font-medium">Cannot load image</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } transition-all duration-700 ease-out`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      )}
    </div>
  );
};

const ServiceCard = ({ service, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <OptimizedImage
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      <div className="p-6 relative flex flex-col flex-grow">
        <div
          className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4 flex-grow group-hover:text-slate-700 transition-colors duration-300">
          {service.description}
        </p>
        <a
          href="#" // Replace with actual link, e.g., `/services/${service.id}`
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/link mt-auto self-start"
        >
          <span className="mr-2">Learn More</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </article>
  );
};

// MODIFIED SECTION: The SectionHeader component is simplified here
const SectionHeader = ({ title, subtitle, isVisible }) => (
  <header
    className={`text-center mb-16 transform transition-all duration-800 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
      {title}
    </h2>
    <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </header>
);

function OurServices() {
  usePageTitle("Our Expert Services");
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
            observer.unobserve(entry.target); // Unobserve after it becomes visible
          }
        });
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-24 overflow-x-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-emerald-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div ref={addSectionRef} data-section="header">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive landscaping and horticulture solutions for all your green space needs."
            isVisible={visibleSections.header}
          />
        </div>

        <section ref={addSectionRef} data-section="main" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.main.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={visibleSections.main}
              />
            ))}
          </div>
        </section>

        <section ref={addSectionRef} data-section="secondary" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicesData.secondary.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={visibleSections.secondary}
              />
            ))}
          </div>
        </section>

        <section
          ref={addSectionRef}
          data-section="specialized"
          className="pb-12"
        >
          <div
            ref={addSectionRef}
            data-section="specializedHeader"
            className="mb-12"
          >
            <SectionHeader
              title="Specialized Horticulture"
              subtitle="Expert solutions for specific gardening and landscaping needs."
              isVisible={visibleSections.specializedHeader}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.specialized.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={visibleSections.specializedHeader} // Corrected this to use the header's visibility
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default OurServices;
