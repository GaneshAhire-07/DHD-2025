import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/busy-businessman-working-tablet-mobile-phone-1-1256x1586.png";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Optimize mouse move with requestAnimationFrame
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

  // Profile-like images (placeholders)
  const profiles = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 lg:py-16 min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
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
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div
            className={`w-full lg:w-1/2 text-center lg:text-left space-y-6 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 text-blue-700 text-sm font-medium rounded-full hover:scale-105 transition-transform duration-200 animate-pulse-slow">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Trusted Industry Leader
            </div>

            {/* Main Heading with Staggered Animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight space-y-2">
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

            {/* Description with Typewriter Effect */}
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium animate-typewriter">
              <span className="font-bold text-slate-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                We
              </span>{" "}
              are passionate about building value, committed to long-term
              partnerships, and shared success with stakeholders.
            </p>

            {/* CTA Buttons with Modern Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp delay-300">
              <Link
                to="/contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg text-sm overflow-hidden transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
              </Link>
              <Link
                to="/about/history"
                className="group px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-lg text-sm border border-slate-200 hover:border-red-400 hover:text-red-600 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="flex items-center">
                  Contact Us
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:rotate-12 transition-transform duration-200"
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

          {/* Right Image Section */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end relative ${
              isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
          >
            <div className="relative z-10 w-full max-w-md lg:max-w-lg group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102">
                <img
                  src={hero}
                  alt="Professional businessman working with tablet - DHD Group"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-3 -left-3 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-md animate-float hover:scale-110 transition-all duration-200 -rotate-6 border border-blue-100"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-12 animate-fadeInUp delay-500">
          <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer group">
            <span className="text-sm font-medium">Explore More</span>
            <div className="relative">
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/10 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes profileFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out forwards;
        }

        .animate-typewriter {
          animation: typewriter 2s steps(40) forwards;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid transparent;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }

        .animate-profileFloat {
          animation: profileFloat 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
