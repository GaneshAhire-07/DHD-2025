import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

// Import your project images (verify paths)
import landscapeArchi from "../../assets/landscapearchi.jpg";
import landscapeDev from "../../assets/landscapedev.jpg";
import verticalGarden from "../../assets/verticalGarden.jpg";
import corporateGreen from "../../assets/corporategreen.jpg";
import gardenDesign from "../../assets/gardendesign.jpg";
import grassPlantation from "../../assets/grassplantation.jpg";
import terraceGarden from "../../assets/terracegarden.jpg";
import kitchenGarden from "../../assets/kitchengarden.jpg";

// Optimized Image Component with lazy loading and error handling
const OptimizedImage = ({ src, alt, className, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-300">
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500">
          <span>Image unavailable</span>
        </div>
      )}

      {/* Actual image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      )}
    </div>
  );
};

// Service Card Component for reusability
const ServiceCard = ({ image, alt, title, description, delay = 0 }) => (
  <article className="service-item" data-aos="fade-up" data-aos-delay={delay}>
    <div className="horticulture-card">
      <OptimizedImage
        src={image}
        alt={alt}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-lg font-semibold text-charcoal-gray mt-4 uppercase">
        {title}
      </h3>
      <p className="text-base text-medium-gray mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  </article>
);

function OurServices() {
  // Service data for better maintainability
  const mainServices = [
    {
      id: 1,
      image: landscapeArchi,
      alt: "Professional landscape architecture and design services",
      title: "Landscape Architecture & Design",
      description:
        "DHD offers expert architectural services including master planning, site analysis, and conceptual design aligned with your vision and the environment.",
    },
    {
      id: 2,
      image: landscapeDev,
      alt: "Landscape development and construction services",
      title: "Landscape Development & Construction",
      description:
        "Turnkey solutions from site prep to irrigation, ensuring precise execution of your landscape vision with top-tier industry standards.",
    },
    {
      id: 3,
      image: verticalGarden,
      alt: "Vertical gardens and bio walls installation",
      title: "Vertical Gardens & Bio Walls",
      description:
        "Innovative vertical green solutions that enhance aesthetics, save space, and improve biodiversity and air quality.",
    },
  ];

  const secondaryServices = [
    {
      id: 4,
      image: corporateGreen,
      alt: "Corporate green solutions and office plant rental",
      title: "Corporate Green Solutions",
      description:
        "We offer 'Plants on Rent' and 'Maali on Rent' to improve office spaces, boosting employee morale and sustainability.",
    },
    {
      id: 5,
      image: gardenDesign,
      alt: "Garden design and maintenance services",
      title: "Garden Design & Maintenance",
      description:
        "From plant selection to regular care, our horticulture team ensures your garden stays vibrant and healthy year-round.",
    },
  ];

  const specializedServices = [
    {
      id: 6,
      image: grassPlantation,
      alt: "Professional grass plantation for lawns and sports fields",
      title: "Grass Plantation",
      description:
        "High-quality grass options ideal for lawns, sports fields, and erosion control to suit all your green needs.",
    },
    {
      id: 7,
      image: terraceGarden,
      alt: "Terrace gardening solutions for rooftops",
      title: "Terrace Gardening",
      description:
        "Transform rooftops into lush green spaces that offer functionality and beauty for urban living.",
    },
    {
      id: 8,
      image: kitchenGarden,
      alt: "Kitchen gardening setups for herbs and vegetables",
      title: "Kitchen Gardening",
      description:
        "Grow your own herbs and vegetables even in compact spaces with our custom kitchen garden setups.",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16"
      role="main"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Services Heading */}
        <header className="text-center mb-12 sm:mb-16">
          <h1
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-oxford-blue mb-4"
            data-aos="fade-down"
          >
            Our Services
          </h1>
          <p className="text-medium-gray text-lg sm:text-xl max-w-2xl mx-auto">
            Comprehensive landscaping and horticulture solutions for all your green space needs
          </p>
        </header>

        {/* Main Services Grid */}
        <section aria-labelledby="main-services" className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                alt={service.alt}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Secondary Services Grid */}
        <section aria-labelledby="secondary-services" className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {secondaryServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                alt={service.alt}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Specialized Services */}
        <section aria-labelledby="specialized-services" className="py-8 sm:py-12">
          <header className="text-center mb-12 sm:mb-16">
            <h2
              id="specialized-services"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-oxford-blue mb-4"
              data-aos="fade-down"
            >
              Specialized Horticulture Services
            </h2>
            <p className="text-medium-gray text-lg sm:text-xl max-w-2xl mx-auto">
              Expert solutions for specific gardening and landscaping needs
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {specializedServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                alt={service.alt}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12 sm:mt-16">
          <Link
            to="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-md"
          >
            Get Started
          </Link>
        </section>
      </div>
    </section>
  );
}

export default OurServices;