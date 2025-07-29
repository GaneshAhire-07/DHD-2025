import React, { useState, useCallback, useEffect, useRef } from "react";

// Service data with modern categorization
const servicesData = {
  main: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional landscape architecture and design services",
      title: "Landscape Architecture & Design",
      description:
        "Expert architectural services including master planning, site analysis, and conceptual design aligned with your vision and environment.",
      icon: "🏛️",
      category: "Design",
      stats: "500+ Projects",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Landscape development and construction services",
      title: "Landscape Development & Construction",
      description:
        "Turnkey solutions from site prep to irrigation, ensuring precise execution with top-tier industry standards.",
      icon: "🏗️",
      category: "Construction",
      stats: "15+ Years",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Vertical gardens and bio walls installation",
      title: "Vertical Gardens & Bio Walls",
      description:
        "Innovative vertical green solutions that enhance aesthetics, save space, and improve biodiversity and air quality.",
      icon: "🌿",
      category: "Innovation",
      stats: "200+ Walls",
    },
  ],
  secondary: [
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Corporate green solutions and office plant rental",
      title: "Corporate Green Solutions",
      description:
        "Plants on Rent and Maali on Rent services to improve office spaces, boosting employee morale and sustainability.",
      icon: "🏢",
      category: "Corporate",
      stats: "100+ Offices",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Garden design and maintenance services",
      title: "Garden Design & Maintenance",
      description:
        "From plant selection to regular care, ensuring your garden stays vibrant and healthy year-round.",
      icon: "🌺",
      category: "Maintenance",
      stats: "24/7 Care",
    },
  ],
  specialized: [
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional grass plantation for lawns and sports fields",
      title: "Grass Plantation",
      description:
        "High-quality grass options ideal for lawns, sports fields, and erosion control.",
      icon: "🌱",
      category: "Landscaping",
      stats: "1000+ m²",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Terrace gardening solutions for rooftops",
      title: "Terrace Gardening",
      description:
        "Transform rooftops into lush green spaces offering functionality and beauty for urban living.",
      icon: "🏠",
      category: "Urban",
      stats: "50+ Terraces",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Kitchen gardening setups for herbs and vegetables",
      title: "Kitchen Gardening",
      description:
        "Grow your own herbs and vegetables in compact spaces with custom kitchen garden setups.",
      icon: "🥬",
      category: "Home",
      stats: "Fresh Daily",
    },
  ],
};

// Enhanced Image Component with sophisticated loading states
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-shimmer" />
      )}

      {/* Error state with gradient */}
      {hasError && (
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500">
          <div className="text-center">
            <div className="text-4xl mb-2">🖼️</div>
            <span className="text-sm">Image loading...</span>
          </div>
        </div>
      )}

      {/* Main image with fade-in effect */}
      {!hasError && (
        <img
          ref={imgRef}
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

// Enhanced Service Card with micro-interactions
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
      {/* Image container with overlay effects */}
      <div className="relative h-64 overflow-hidden">
        <OptimizedImage
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Floating category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {service.category}
        </div>

        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Stats badge */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
          {service.stats}
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 relative">
        {/* Animated border */}
        <div
          className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 ${
            isHovered ? "w-full" : "w-0"
          }`}
        />

        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
          {service.description}
        </p>

        {/* Learn more button */}
        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group">
          <span className="mr-2">Learn More</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

// Section header with animated elements
const SectionHeader = ({ title, subtitle, isVisible }) => (
  <header
    className={`text-center mb-16 transform transition-all duration-800 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
  >
    {/* Animated line */}
    <div className="flex items-center justify-center mb-6">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24 animate-expand" />
      <div className="mx-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24 animate-expand" />
    </div>

    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-4">
      {title.split(" ").map((word, index) => (
        <span
          key={index}
          className="inline-block animate-slideInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {word === "Services" || word === "Horticulture" ? (
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              {word}
            </span>
          ) : (
            word
          )}
          {index < title.split(" ").length - 1 && " "}
        </span>
      ))}
    </h2>

    <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </header>
);

function OurServices() {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    main: false,
    secondary: false,
    specialized: false,
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-emerald-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Main Services Section */}
        <div data-section="header">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive landscaping and horticulture solutions for all your green space needs"
            isVisible={visibleSections.header}
          />
        </div>

        {/* Main Services Grid */}
        <section data-section="main" className="mb-20">
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

        {/* Secondary Services */}
        <section data-section="secondary" className="mb-20">
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

        {/* Specialized Services Section */}
        <section data-section="specialized" className="py-12">
          <SectionHeader
            title="Specialized Horticulture Services"
            subtitle="Expert solutions for specific gardening and landscaping needs"
            isVisible={visibleSections.specialized}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.specialized.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={visibleSections.specialized}
              />
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes expand {
          0% {
            width: 0;
          }
          100% {
            width: 6rem;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shimmer {
          background: linear-gradient(90deg, #f1f5f9, #e2e8f0, #f1f5f9);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

export default OurServices;
