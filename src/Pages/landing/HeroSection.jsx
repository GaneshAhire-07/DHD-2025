import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 lg:py-16 min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 30 - 15}px, ${
              mousePosition.y * 30 - 15
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-2xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x * 25 + 10}px, ${
              -mousePosition.y * 25 + 10
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]
            bg-blue-900/15 rounded-full blur-3xl animate-pulse-slow-alt"
          style={{
            transform: `translate(-50%, -50%) translate(${
              mousePosition.x * 20 - 10
            }px, ${mousePosition.y * 20 - 10}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Text Content */}
          <div
            className={`w-full lg:w-1/2 text-center lg:text-left space-y-6 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 text-blue-700 text-sm font-medium rounded-full hover:scale-105 transition-transform duration-200 animate-pulse-slow">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Trusted Industry Leader
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug space-y-2">
              <div className="overflow-hidden">
                <span className="inline-block animate-slideUp text-slate-800 hover:text-slate-900 transition-colors duration-200">
                  Driven by{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Vision
                  </span>
                  .
                </span>
              </div>
              <div className="overflow-hidden delay-100">
                <span className="inline-block animate-slideUp text-slate-800 hover:text-slate-900 transition-colors duration-200">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    Built on Trust
                  </span>
                  .
                </span>
              </div>
              <div className="overflow-hidden delay-200">
                <span className="inline-block animate-slideUp text-slate-800 hover:text-slate-900 transition-colors duration-200">
                  Delivered with{" "}
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Excellence
                  </span>
                  .
                </span>
              </div>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium animate-typewriter">
              <span className="font-bold text-slate-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                We
              </span>{" "}
              are passionate about building value, committed to long-term
              partnerships, and shared success with stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp delay-300 mt-2">
              <Link
                to="/contact"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg text-sm hover:scale-105 transition-all duration-200 shadow-md"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="/about/history"
                className="group px-6 py-2.5 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-lg text-sm border border-slate-200 hover:border-red-400 hover:text-red-600 transition-all duration-200 hover:scale-105 shadow-md"
              >
                <span className="flex items-center">
                  Contact Us
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative ${
              isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
          >
            <div className="relative z-10 w-full max-w-lg sm:max-w-xl lg:max-w-4xl group">
              <div className="relative">
                <img
                  src={hero}
                  alt="Professional businessman working with tablet"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-8 -right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-md animate-float-alt border border-blue-100" />
            </div>
          </div>
        </div>

        {/* Explore More */}
        <div className="hidden lg:flex justify-center mt-8 animate-fadeInUp delay-500">
          <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition duration-200 cursor-pointer group">
            <span className="text-sm font-medium">Explore More</span>
            <svg
              className="w-5 h-5 animate-bounce-slow group-hover:animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
