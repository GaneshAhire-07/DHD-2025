import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      setOpenMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenMenu(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMenu(null);
  };

  const toggleMobileDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <section className="menu">
      <nav
        ref={navRef}
        className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand */}
          <div className="navbar-brand flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              DHD Group
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="hamburger w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Nav Links */}
          <div
            className={`navbar-collapse absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none border-t md:border-t-0 border-gray-200 md:border-0 transition-all duration-300 ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-2`}
          >
            <ul className="navbar-nav flex flex-col md:flex-row p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-1">
              {/* About Us Dropdown */}
              <li
                className="nav-item relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="nav-link w-full text-left md:text-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 flex items-center justify-between md:justify-center"
                  onClick={() =>
                    window.innerWidth < 768
                      ? toggleMobileDropdown("about")
                      : null
                  }
                >
                  About Us
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      openMenu === "about" ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openMenu === "about" && (
                  <div
                    className={`${
                      window.innerWidth < 768
                        ? "relative mt-2 ml-4 bg-gray-50 rounded-md p-2"
                        : "absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-200 p-4 z-50"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-gray-800 py-1">
                        Profile
                      </div>
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          History
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Vision & Mission
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Who We Are
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          What We Do
                        </a>

                        <div className="font-semibold text-gray-800 py-1">
                          Our Purpose
                        </div>
                        <div className="pl-4 space-y-1">
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Sustainability
                          </a>
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Social Impact
                          </a>
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Physical Impact
                          </a>
                        </div>

                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Our Policies
                        </a>

                        <div className="font-semibold text-gray-800 py-1">
                          Governance
                        </div>
                        <div className="pl-4 space-y-1">
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Our Governance
                          </a>
                        </div>

                        <div className="font-semibold text-gray-800 py-1">
                          Our Committee
                        </div>
                        <div className="pl-4 space-y-1">
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Modern Slavery
                          </a>
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Human Trafficking Statement
                          </a>
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Supervisor Board
                          </a>
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Auditors Department
                          </a>
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            Risk Department
                          </a>
                          <a
                            href="#"
                            className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                          >
                            COVID-19 Risk Assessment
                          </a>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Customer Guide
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Careers With Us
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Investors
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Our Expertise Dropdown */}
              <li
                className="nav-item relative"
                onMouseEnter={() => handleMouseEnter("expertise")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="nav-link w-full text-left md:text-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 flex items-center justify-between md:justify-center"
                  onClick={() =>
                    window.innerWidth < 768
                      ? toggleMobileDropdown("expertise")
                      : null
                  }
                >
                  Our Expertise
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      openMenu === "expertise" ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openMenu === "expertise" && (
                  <div
                    className={`${
                      window.innerWidth < 768
                        ? "relative mt-2 ml-4 bg-gray-50 rounded-md p-2"
                        : "absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-200 p-4 z-50"
                    }`}
                  >
                    <div className="space-y-1">
                      <a
                        href="https://iresworld.com/"
                        className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Real Estate End to End Solutions
                      </a>

                      <div className="font-semibold text-gray-800 py-1">
                        Horticulture Services
                      </div>
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Landscape Architecture & Design
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Vertical Gardens & Bio Walls
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Garden Design & Maintenance
                        </a>
                      </div>

                      <div className="font-semibold text-gray-800 py-1">
                        Specialized Horticultural Services
                      </div>
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Grass Plantation
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Terrace Gardening
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Kitchen Gardening
                        </a>
                      </div>

                      <div className="border-t border-gray-200 pt-2 mt-2 space-y-1">
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Construction
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Highways
                        </a>
                        <a
                          href="#"
                          className="block py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-all duration-200"
                        >
                          Utilities
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Static Menu Items */}
              <li>
                <a
                  href="#team1-1o"
                  className="nav-link block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#contacts2-1r"
                  className="nav-link block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#team1-1o"
                  className="nav-link block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
                >
                  Sectors
                </a>
              </li>
              <li>
                <a
                  href="#contacts2-1r"
                  className="nav-link block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Partner Button */}
            <div className="px-4 pb-4 md:px-0 md:pb-0 md:ml-4">
              <a
                href="/become-a-partner.html"
                className="btn block w-full md:w-auto text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 font-medium"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </section>
  );
}

export default Navbar;
