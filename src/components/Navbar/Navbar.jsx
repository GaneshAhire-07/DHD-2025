import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import DHDLogo from "../../assets/DHDLogo.png";

const DropdownMenu = ({
  title,
  children,
  menuKey,
  openMenu,
  handleMenuToggle,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnterWrapper = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (window.innerWidth >= 768) {
      handleMouseEnter(menuKey);
    }
  };

  const handleMouseLeaveWrapper = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        handleMouseLeave();
      }, 200);
    }
  };

  useEffect(() => {
    if (openMenu === menuKey && dropdownRef.current) {
      const dropdown = dropdownRef.current;
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (rect.right > viewportWidth) {
        dropdown.style.left = "auto";
        dropdown.style.right = "0";
      }
    }
  }, [openMenu, menuKey]);

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnterWrapper}
      onMouseLeave={handleMouseLeaveWrapper}
    >
      <button
        className="whitespace-nowrap px-2 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center focus:outline-none w-full text-left"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleMenuToggle(menuKey);
        }}
        aria-expanded={openMenu === menuKey}
        aria-haspopup="true"
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
            openMenu === menuKey ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {openMenu === menuKey && (
        <div
          ref={dropdownRef}
          className="md:absolute md:left-0 md:top-full md:mt-2 bg-white shadow-2xl rounded-xl border border-gray-200 z-50 min-w-[320px] max-h-[70vh] overflow-auto animate-fadeIn"
          onMouseEnter={handleMouseEnterWrapper}
          onMouseLeave={handleMouseLeaveWrapper}
        >
          <div className="p-6">{children}</div>
        </div>
      )}
    </li>
  );
};

const DropdownLink = ({ to, children, closeMenu, external = false }) => {
  const baseClasses =
    "block w-full text-left py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200";

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} flex items-center justify-between`}
        onClick={closeMenu}
      >
        {children}
        <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z" />
        </svg>
      </a>
    );
  }

  return (
    <Link to={to} className={baseClasses} onClick={closeMenu}>
      {children}
    </Link>
  );
};

const ServiceCategory = ({ title, children }) => (
  <div className="mb-4">
    <h4 className="font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">
      {title}
    </h4>
    <div className="space-y-1">{children}</div>
  </div>
);

const ServiceItem = ({ to, children, closeMenu }) => (
  <Link
    to={to}
    className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded cursor-pointer transition-all duration-200"
    onClick={closeMenu}
  >
    {children}
  </Link>
);

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleMenuToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

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

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="menu">
      <nav
        ref={navRef}
        className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-3">
          {/* Mobile Layout */}
          <div className="flex justify-between items-center md:hidden">
            <Link
              to="/"
              onClick={closeAllMenus}
              className="flex items-center space-x-2"
            >
              <img
                src={DHDLogo} // Replace with actual path or import
                alt="DHD Group Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold transition-colors">
                <span style={{ color: "#be2227" }}>D</span>
                <span style={{ color: "#2b2a29" }}>H</span>
                <span style={{ color: "#2b4c80" }}>D</span>
                <span className="text-oxford-blue"> Group</span>
              </span>
            </Link>

            <button
              className="navbar-toggler p-2 focus:outline-none rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:justify-between w-full">
            <Link
              to="/"
              onClick={closeAllMenus}
              className="flex items-center space-x-2"
            >
              <img
                src={DHDLogo} // Replace with actual path or import
                alt="DHD Group Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold transition-colors">
                <span style={{ color: "#be2227" }}>D</span>
                <span style={{ color: "#2b2a29" }}>H</span>
                <span style={{ color: "#2b4c80" }}>D</span>
                <span className="text-oxford-blue"> Group</span>
              </span>
            </Link>

            <ul className="navbar-nav flex items-center space-x-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Home
                </NavLink>
              </li>

              <DropdownMenu
                title="About Us"
                menuKey="about"
                openMenu={openMenu}
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              >
                <div className="space-y-2">
                  <DropdownLink to="/about/history" closeMenu={closeAllMenus}>
                    Our History
                  </DropdownLink>
                  <DropdownLink
                    to="/about/vision-mission"
                    closeMenu={closeAllMenus}
                  >
                    Vision & Mission
                  </DropdownLink>
                  <DropdownLink to="/about/team" closeMenu={closeAllMenus}>
                    Our Team
                  </DropdownLink>
                  <DropdownLink to="/about/values" closeMenu={closeAllMenus}>
                    Core Values
                  </DropdownLink>
                  <DropdownLink
                    to="/about/leadership"
                    closeMenu={closeAllMenus}
                  >
                    Leadership
                  </DropdownLink>
                  <DropdownLink to="/about/awards" closeMenu={closeAllMenus}>
                    Awards & Recognition
                  </DropdownLink>
                </div>
              </DropdownMenu>

              <DropdownMenu
                title="Our Expertise"
                menuKey="expertise"
                openMenu={openMenu}
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-[320px] lg:min-w-[600px]">
                  <div className="space-y-4">
                    <ServiceCategory title="Core Services">
                      <DropdownLink
                        to="https://iresworld.com/"
                        closeMenu={closeAllMenus}
                        external={true}
                      >
                        Real Estate Solutions
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise/construction"
                        closeMenu={closeAllMenus}
                      >
                        Construction Services
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise/property"
                        closeMenu={closeAllMenus}
                      >
                        Property Management
                      </DropdownLink>
                    </ServiceCategory>

                    <ServiceCategory title="Infrastructure">
                      <DropdownLink
                        to="/expertise/infrastructure"
                        closeMenu={closeAllMenus}
                      >
                        Infrastructure Development
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise/highways"
                        closeMenu={closeAllMenus}
                      >
                        Highways & Transportation
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise/utilities"
                        closeMenu={closeAllMenus}
                      >
                        Utilities & Services
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise/rail"
                        closeMenu={closeAllMenus}
                      >
                        Rail Infrastructure
                      </DropdownLink>
                    </ServiceCategory>
                  </div>

                  <div className="space-y-4">
                    <ServiceCategory title="Horticulture">
                      <ServiceItem
                        to="/expertise/horticulture"
                        closeMenu={closeAllMenus}
                      >
                        Landscape Architecture & Design
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/horticulture"
                        closeMenu={closeAllMenus}
                      >
                        Vertical Gardens & Bio Walls
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/horticulture"
                        closeMenu={closeAllMenus}
                      >
                        Corporate Green Solutions
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/horticulture"
                        closeMenu={closeAllMenus}
                      >
                        Garden Design & Maintenance
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/horticulture"
                        closeMenu={closeAllMenus}
                      >
                        Terrace & Kitchen Gardening
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/horticulture"
                        closeMenu={closeAllMenus}
                      >
                        Sustainable Landscaping
                      </ServiceItem>
                    </ServiceCategory>

                    <ServiceCategory title="Specialized">
                      <ServiceItem
                        to="/expertise/facilities"
                        closeMenu={closeAllMenus}
                      >
                        Facilities Management
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/environmental"
                        closeMenu={closeAllMenus}
                      >
                        Environmental Solutions
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/sustainable-design"
                        closeMenu={closeAllMenus}
                      >
                        Sustainable Building Design
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/housing"
                        closeMenu={closeAllMenus}
                      >
                        Housing Maintenance
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/consulting"
                        closeMenu={closeAllMenus}
                      >
                        Project Consulting
                      </ServiceItem>
                    </ServiceCategory>
                  </div>
                </div>
              </DropdownMenu>

              <li>
                <NavLink
                  to="/approach"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Our Approach
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Our Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Careers With Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/partner"
                  className="ml-2 px-4 py-2 rounded-md text-white hover:opacity-90 transition-colors"
                  style={{ backgroundColor: "#2b4c80" }}
                  onClick={closeAllMenus}
                >
                  Become a Partner
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-[80vh] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="navbar-nav space-y-2 bg-gray-50 rounded-lg p-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link block px-3 py-2 rounded-md transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Home
                </NavLink>
              </li>

              <DropdownMenu
                title="About Us"
                menuKey="about"
                openMenu={openMenu}
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              >
                <div className="space-y-2 pl-4">
                  <DropdownLink to="/about/history" closeMenu={closeAllMenus}>
                    Our History
                  </DropdownLink>
                  <DropdownLink
                    to="/about/vision-mission"
                    closeMenu={closeAllMenus}
                  >
                    Vision & Mission
                  </DropdownLink>
                  <DropdownLink to="/about/team" closeMenu={closeAllMenus}>
                    Our Team
                  </DropdownLink>
                  <DropdownLink to="/about/values" closeMenu={closeAllMenus}>
                    Core Values
                  </DropdownLink>
                  <DropdownLink
                    to="/about/leadership"
                    closeMenu={closeAllMenus}
                  >
                    Leadership
                  </DropdownLink>
                  <DropdownLink to="/about/awards" closeMenu={closeAllMenus}>
                    Awards & Recognition
                  </DropdownLink>
                </div>
              </DropdownMenu>

              <DropdownMenu
                title="Our Expertise"
                menuKey="expertise"
                openMenu={openMenu}
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              >
                <div className="space-y-4 pl-4">
                  <ServiceCategory title="Core Services">
                    <DropdownLink
                      to="https://iresworld.com/"
                      closeMenu={closeAllMenus}
                      external={true}
                    >
                      Real Estate Solutions
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise/construction"
                      closeMenu={closeAllMenus}
                    >
                      Construction Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise/property"
                      closeMenu={closeAllMenus}
                    >
                      Property Management
                    </DropdownLink>
                  </ServiceCategory>

                  <ServiceCategory title="Infrastructure">
                    <DropdownLink
                      to="/expertise/infrastructure"
                      closeMenu={closeAllMenus}
                    >
                      Infrastructure Development
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise/highways"
                      closeMenu={closeAllMenus}
                    >
                      Highways & Transportation
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise/utilities"
                      closeMenu={closeAllMenus}
                    >
                      Utilities & Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise/rail"
                      closeMenu={closeAllMenus}
                    >
                      Rail Infrastructure
                    </DropdownLink>
                  </ServiceCategory>

                  <ServiceCategory title="Horticulture">
                    <ServiceItem
                      to="/expertise/horticulture"
                      closeMenu={closeAllMenus}
                    >
                      Landscape Architecture & Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/horticulture"
                      closeMenu={closeAllMenus}
                    >
                      Vertical Gardens & Bio Walls
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/horticulture"
                      closeMenu={closeAllMenus}
                    >
                      Corporate Green Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/horticulture"
                      closeMenu={closeAllMenus}
                    >
                      Garden Design & Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/horticulture"
                      closeMenu={closeAllMenus}
                    >
                      Terrace & Kitchen Gardening
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/horticulture"
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Landscaping
                    </ServiceItem>
                  </ServiceCategory>

                  <ServiceCategory title="Specialized">
                    <ServiceItem
                      to="/expertise/facilities"
                      closeMenu={closeAllMenus}
                    >
                      Facilities Management
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/environmental"
                      closeMenu={closeAllMenus}
                    >
                      Environmental Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/sustainable-design"
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Building Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/housing"
                      closeMenu={closeAllMenus}
                    >
                      Housing Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/consulting"
                      closeMenu={closeAllMenus}
                    >
                      Project Consulting
                    </ServiceItem>
                  </ServiceCategory>
                </div>
              </DropdownMenu>

              <li>
                <NavLink
                  to="/approach"
                  className={({ isActive }) =>
                    `nav-link block px-3 py-2 rounded-md transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Our Approach
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-link block px-3 py-2 rounded-md transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Our Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    `nav-link block px-3 py-2 rounded-md transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Careers With Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link block px-3 py-2 rounded-md transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="pt-4 mt-4 border-t border-gray-200">
                <NavLink
                  to="/partner"
                  className="w-full px-4 py-2 text-center rounded-md text-white hover:opacity-90 transition-colors"
                  style={{ backgroundColor: "#2b4c80" }}
                  onClick={closeAllMenus}
                >
                  Become a Partner
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .navbar-collapse {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        button:focus {
          outline: none;
        }

        .nav-link:focus {
          outline: none;
        }

        /* Ensure no wrapping on larger screens */
        @media (min-width: 1024px) {
          .navbar-nav {
            flex-wrap: nowrap;
          }
        }

        /* Handle very wide screens */
        @media (min-width: 1280px) {
          .navbar-nav li {
            flex-shrink: 0;
          }
        }

        /* Mobile dropdown styling */
        @media (max-width: 767px) {
          .relative > div {
            position: static;
            box-shadow: none;
            border: none;
            max-height: none;
            overflow: visible;
            background: transparent;
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
