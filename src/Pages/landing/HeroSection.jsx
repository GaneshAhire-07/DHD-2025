import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import site from "../../assets/site.jpg";
import dhdLogo from "../../assets/w-logo.png";

const HeroSection = () => {
  const navigate = useNavigate();

  // --- UPDATE: Orchestrated animation variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will animate children one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // The main section now orchestrates the animations
    <motion.section
      className="bg-slate-100 p-2 sm:p-4 md:p-6 min-h-screen flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Image Section */}
            <motion.div
              className="md:w-1/2 relative h-64 sm:h-80 md:h-auto"
              variants={imageVariants} // Use variant from parent
            >
              <div className="absolute inset-0">
                <img
                  src={site}
                  alt="Construction site with a rising sun"
                  // --- FIX: Removed loading="lazy" for better performance on hero images ---
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <motion.div
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-amber-300/50 rounded-full blur-lg"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.div
                className="absolute top-4 left-4 flex items-center space-x-0 p-2 z-20"
                // Animation is now controlled by the parent's stagger effect
              >
                <img
                  src={dhdLogo}
                  alt="DHD Group Logo"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <div className="leading-tight text-sm md:text-base">
                  <div className="font-bold tracking-wider">
                    {/* --- UPDATE: Using brand colors from tailwind.config.js --- */}
                    <span className="text-brand-red">D</span>
                    <span className="text-brand-dark">H</span>
                    <span className="text-brand-blue">D</span>
                    <span className="text-white"> Group</span>
                  </div>
                  <div className="text-white/90 text-sm">of Companies</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Text Section */}
            <div className="md:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 md:p-12 flex items-center">
              <div className="w-full">
                <motion.h1
                  variants={itemVariants}
                  // --- FIX: Changed class to className ---
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                >
                  <span className="relative inline-block">
                    {/* --- UPDATE: Added subtle tilt and refined z-index --- */}
                    <span className="absolute bottom-1.5 left-0 w-full h-1/4 sm:h-1/3 bg-red-600/80 -z-10 -rotate-1"></span>
                    <span className="relative">Driven by Vision.</span>
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="absolute bottom-1.5 left-0 w-full h-1/4 sm:h-1/3 bg-blue-600/80 -z-10 -rotate-1"></span>
                    <span className="relative">Built on Trust.</span>
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="absolute bottom-1.5 left-0 w-full h-1/4 sm:h-1/3 bg-slate-600/80 -z-10 -rotate-1"></span>
                    <span className="relative">Delivered with Excellence.</span>
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  // --- FIX: Changed class to className ---
                  className="text-slate-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl"
                >
                  We are passionate about building value, committed to long-term
                  partnerships, and shared success with stakeholders.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  {/* --- UPDATE: Professional Primary/Secondary button styles --- */}
                  {/* Secondary Button */}
                  <motion.button
                    aria-label="Read more about our company"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-medium rounded-full border border-white/50 hover:border-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/about")}
                  >
                    Read More
                    <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                  {/* Primary Button */}
                  <motion.button
                    aria-label="Contact us now"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-red-500/40 hover:bg-red-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us
                    <PhoneIcon className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
