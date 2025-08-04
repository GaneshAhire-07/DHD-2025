import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaHospitalAlt,
  FaFutbol,
} from "react-icons/fa";
import { ShieldCheck, Zap, Users, ArrowRight } from "lucide-react";
import usePageTitle from "../../hooks/usePageTitle.js";

// Import your project images
import image1 from "../../assets/projectImage1.jpg";
import image2 from "../../assets/mbr-816x524.jpg";
import overviewBg from "../../assets/aboutus.jpg"; 

// Optimized Image Component (no changes needed)
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const handleLoad = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => {
    setHasError(true);
  }, []);
  return (
    <div className="relative overflow-hidden h-full w-full bg-slate-200">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      <img
        src={
          hasError
            ? "https://via.placeholder.com/800x600?text=Image+Not+Found"
            : currentSrc
        }
        alt={alt}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- NEW Project Card for the Gallery ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl overflow-hidden shadow-lg"
    >
      <OptimizedImage
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white"
        >
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
              project.status === "In Development"
                ? "bg-green-600"
                : "bg-blue-600"
            }`}
          >
            {project.status}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {project.title}
          </h3>
          {/* Hide description initially, show on hover */}
          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
            <p className="text-slate-200 mb-4 text-sm">{project.description}</p>
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center text-white font-semibold hover:text-indigo-300"
            >
              View Project <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const OurProjectsPage = () => {
  usePageTitle("DHD - Projects");
  const [activeTab, setActiveTab] = useState("featured"); // Default to featured projects

  const featuredProjects = [
    {
      id: 1,
      title: "Sortapwadi Residential",
      image: image1,
      description:
        "A multi-story development aligned with the Pradhan Mantri Awas Yojana.",
      status: "In Development",
      area: "5 acres",
      location: "Sortapwadi, Pune",
      span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      id: 2,
      title: "Pune Commercial Complex",
      image: image2,
      description: "A cornerstone of Pune's thriving construction sector.",
      status: "Coming Soon",
      location: "Pune, Maharashtra",
      span: "col-span-1",
    },
    {
      id: 3,
      title: "Industrial Hub, Chakan",
      image: overviewBg,
      description:
        "State-of-the-art industrial park for manufacturing and logistics.",
      status: "Completed",
      location: "Chakan, Maharashtra",
      span: "col-span-1",
    },
  ];
  const constructionServices = [
    {
      title: "Residential",
      icon: <FaHome size={28} />,
      color: "text-blue-500 bg-blue-100",
    },
    {
      title: "Commercial",
      icon: <FaBuilding size={28} />,
      color: "text-green-500 bg-green-100",
    },
    {
      title: "Industrial",
      icon: <FaIndustry size={28} />,
      color: "text-slate-500 bg-slate-100",
    },
    {
      title: "Community",
      icon: <FaHospitalAlt size={28} />,
      color: "text-red-500 bg-red-100",
    },
    {
      title: "Recreation",
      icon: <FaFutbol size={28} />,
      color: "text-orange-500 bg-orange-100",
    },
  ];
  const tabs = [
    { id: "featured", label: "Featured Projects" },
    { id: "overview", label: "Our Approach" },
    { id: "services", label: "Services" },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          Our Projects
        </motion.h1>
      </section>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="-mt-16 relative z-10 bg-white rounded-2xl shadow-2xl text-center px-6 py-12"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Pune & Maharashtra
            </span>
          </h2>
        </motion.section>
      </div>

      <nav className="bg-white/70 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-gray-200 mt-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-4 px-6 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-indigo-600"
                    : "text-gray-500 hover:text-indigo-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 max-w-7xl py-12 sm:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {activeTab === "featured" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 h-[80vh]"
              >
                {featuredProjects.map((project) => (
                  <div key={project.id} className={project.span}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "overview" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-16"
              >
                <div className="relative rounded-2xl overflow-hidden p-8 md:p-16 text-center text-white bg-[#002147]">
                  <img
                    src={overviewBg}
                    alt="Construction site background"
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                  />
                  <motion.h2
                    variants={itemVariants}
                    className="text-4xl font-bold mb-6 relative"
                  >
                    Excellence in Every Build
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-slate-300 max-w-4xl mx-auto relative"
                  >
                    We deliver exceptional results across all project types,
                    guided by our core commitments to quality, innovation, and
                    partnership.
                  </motion.p>
                </div>
                <motion.div
                  variants={itemVariants}
                  className="grid md:grid-cols-3 gap-8"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border text-center">
                    <ShieldCheck className="w-12 h-12 text-indigo-500 mb-4 mx-auto" />
                    <h4 className="text-xl font-semibold mb-2">
                      PMRDA Accredited
                    </h4>
                    <p className="text-gray-600">
                      A <strong>100-year structural guarantee</strong> for total
                      peace of mind.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border text-center">
                    <Zap className="w-12 h-12 text-indigo-500 mb-4 mx-auto" />
                    <h4 className="text-xl font-semibold mb-2">
                      Value Engineering
                    </h4>
                    <p className="text-gray-600">
                      Maximizing your investment with efficient, innovative
                      solutions.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border text-center">
                    <Users className="w-12 h-12 text-indigo-500 mb-4 mx-auto" />
                    <h4 className="text-xl font-semibold mb-2">
                      Full Management
                    </h4>
                    <p className="text-gray-600">
                      Guiding your project from concept to completion as Main
                      Contractor.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "services" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Construction Services
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {constructionServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${service.color}`}
                      >
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <section className="container mx-auto px-4 max-w-6xl pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h3>
          <Link
            to="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 inline-block"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default OurProjectsPage;
