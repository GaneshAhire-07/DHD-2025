import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaHospitalAlt,
  FaFutbol,
} from "react-icons/fa";

// Import your project images
import image1 from "../../assets/projectImage1.jpg";
import image2 from "../../assets/mbr-816x524.jpg";

// Optimized Image Component with lazy loading
const OptimizedImage = ({
  src,
  alt,
  className,
  fallbackSrc = "https://via.placeholder.com/800x600?text=DHD+Project&bg=f8f9fa&color=6c757d",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
    }
  }, [currentSrc, fallbackSrc]);

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}

      {hasError && (
        <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
          <div className="text-center">
            <div className="text-4xl mb-2">🏗️</div>
            <span className="text-sm font-medium">Project Image</span>
          </div>
        </div>
      )}

      {!hasError && (
        <img
          src={currentSrc}
          alt={alt}
          className={`${className} ${
            isLoaded ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      )}
    </div>
  );
};

const OurProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Data for the page
  const featuredProjects = [
    {
      id: 1,
      title: "Sortapwadi Residential Development",
      image: image1,
      description:
        "A multi-story development in Sortapwadi, Tal Haveli, Pune, aligned with the Pradhan Mantri Awas Yojana.",
      status: "In Development",
      area: "5 acres master plan",
    },
    {
      id: 2,
      title: "New Build Construction",
      image: image2,
      description:
        "A cornerstone of Pune's thriving construction sector, specializing in bespoke structures tailored to specific needs and budgets.",
      status: "Coming Soon",
    },
  ];

  const constructionServices = [
    {
      title: "Residential",
      description: "New homes, multi-unit developments",
      icon: <FaHome className="text-xl text-blue-600" />,
    },
    {
      title: "Commercial",
      description: "Offices, retail spaces",
      icon: <FaBuilding className="text-xl text-green-600" />,
    },
    {
      title: "Industrial",
      description: "Factories, warehouses",
      icon: <FaIndustry className="text-xl text-gray-700" />,
    },
    {
      title: "Community",
      description: "Schools, hospitals",
      icon: <FaHospitalAlt className="text-xl text-red-600" />,
    },
    {
      title: "Sports & Recreation",
      description: "Sports complexes, recreational facilities",
      icon: <FaFutbol className="text-xl text-yellow-500" />,
    },
  ];

  const tabs = [
    { id: "overview", label: "Project Overview" },
    { id: "services", label: "Construction Services" },
    { id: "featured", label: "Featured Projects" },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Projects
        </h1>
      </section>

      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Our
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Projects
          </span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-4">
          At DHD, every project is an opportunity to showcase our unique
          problem-solving approach, innovation, and collaborative spirit. We
          work closely with our clients and partners to deliver exceptional
          results.
        </p>
      </section>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm sticky top-16 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex justify-center">
            <div className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8 sm:py-12">
        {/* Project Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12 sm:space-y-16">
            {/* Introduction */}
            <section className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Excellence in Every Build
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We work closely with our clients and partners to deliver
                exceptional results across residential, commercial, and
                industrial projects throughout Pune and Maharashtra.
              </p>
            </section>

            {/* PMRDA Accreditation */}
            <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                PMRDA Accredited Excellence
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                For residential projects, DHD l AP Group offers the prestigious
                PMRDA accreditation, providing homeowners and developers with
                the assurance of a{" "}
                <strong>100-year structural guarantee</strong> and complete
                peace of mind.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                  <span className="text-blue-600 font-semibold">
                    ✓ PMRDA Certified
                  </span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                  <span className="text-blue-600 font-semibold">
                    ✓ 100-Year Guarantee
                  </span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                  <span className="text-blue-600 font-semibold">
                    ✓ Quality Assured
                  </span>
                </div>
              </div>
            </section>

            {/* Value Engineering */}
            <section>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Value Engineering & Innovation
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                  DHD l AP Group takes pride in our value engineering expertise,
                  maximizing construction investments to deliver high-quality
                  finished products through efficient solutions. We utilize the
                  latest innovative building processes and enhance the thermal
                  and acoustic performance of new build constructions.
                </p>
              </div>
            </section>

            {/* Commercial Contracting */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Commercial Contracting for New Builds
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                DHD l AP Group offers full project management services as the
                Main Contractor on new build construction projects across
                various sectors.
              </p>
            </section>
          </div>
        )}

        {/* Construction Services Tab */}
        {activeTab === "services" && (
          <div className="space-y-8 sm:space-y-12">
            <section className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                New Build Construction Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                New build construction is a cornerstone of Pune's thriving
                construction sector. DHD l AP Group specializes in delivering
                comprehensive construction services for a diverse range of new
                build projects, including:
              </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {constructionServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                New build construction provides the freedom to create bespoke
                structures tailored to specific needs and budgets, with the
                primary constraint being the building site itself.
              </p>
            </div>
          </div>
        )}

        {/* Featured Projects Tab */}
        {activeTab === "featured" && (
          <div className="space-y-8 sm:space-y-12">
            <section className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Featured Projects
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover our showcase projects that demonstrate our commitment
                to excellence, innovation, and sustainable development.
              </p>
            </section>

            {/* Sortapwadi Project Highlight */}
            {featuredProjects.length > 0 && (
              <section className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <OptimizedImage
                      src={featuredProjects[0].image}
                      alt={featuredProjects[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10">
                    <div className="mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredProjects[0].status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredProjects[0].title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {featuredProjects[0].description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900 mr-2">
                          Location:
                        </span>
                        <span className="text-gray-700">
                          Sortapwadi, Tal Haveli, Pune
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900 mr-2">
                          Area:
                        </span>
                        <span className="text-gray-700">
                          {featuredProjects[0].area}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900 mr-2">
                          Type:
                        </span>
                        <span className="text-gray-700">
                          Multi-story residential
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Other Projects Grid */}
            {featuredProjects.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {featuredProjects.slice(1).map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
                  >
                    <div className="relative">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      {project.area && (
                        <div className="text-sm font-semibold text-blue-700">
                          Total Area: {project.area}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <section className="bg-gray-900 text-white rounded-lg p-6 sm:p-8 lg:p-12 text-center mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our
            expertise and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/expertise"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Our Expertise
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurProjectsPage;
