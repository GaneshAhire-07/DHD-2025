import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import site from "../../assets/site.jpg";
import dhdLogo from "../../assets/w-logo.png";
const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      className="bg-white p-2 sm:p-4 md:p-6 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative bottom-6 max-w-6xl mx-auto w-full">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Image Section */}
            <motion.div
              className="md:w-1/2 relative h-64 sm:h-80 md:h-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0">
                <img
                  src={site}
                  alt="Hero Background"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />

                {/* Sun Animation */}
                <motion.div
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-200/60 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Company Logo - Top Left Transparent Overlay */}
              <motion.div
                className="absolute top-2 left-4 flex items-center space-x-2 sm:space-x-0 p-2 sm:p-2.5 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <img
                  src={dhdLogo}
                  alt="DHD Logo"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                />
                <div className="leading-tight text-[12px] sm:text-sm md:text-base">
                  <div className="font-bold tracking-wider">
                    <span style={{ color: "#FF0000" }}>D</span>
                    <span style={{ color: "#000000" }}>H</span>
                    <span style={{ color: "#00008B" }}>D</span>
                    <span className="text-white"> Group</span>
                  </div>
                  <div className="text-white text-xs sm:text-sm">
                    of Companies
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              ref={ref}
              className="md:w-1/2 bg-slate-800 p-6 sm:p-8 md:p-10 flex items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Driven by Vision.
                  <br />
                  Built on Trust.
                  <br />
                  <span className="text-cyan-300">
                    Delivered with Excellence.
                  </span>
                </h1>

                <p className="text-slate-200 text-base sm:text-lg mb-6 sm:mb-8">
                  We are passionate about building value, committed to long-term
                  partnerships, and shared success with stakeholders.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    aria-label="Read more about our company"
                    className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Read More
                    <ArrowRightIcon className="h-5 w-5" />
                  </motion.button>

                  <motion.button
                    aria-label="Contact us now"
                    className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Contact Us
                    <PhoneIcon className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
