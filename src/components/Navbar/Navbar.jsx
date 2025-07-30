import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import DHDLogo from "../../assets/DHDLogo.png";

// DropdownMenu Component: Handles the main dropdown logic for navigation items.
const DropdownMenu = ({
  title,
  children,
  menuKey,
  openMenu,
  handleMenuToggle,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const timeoutRef = useRef(null); // Ref to manage hover timeout for desktop
  const dropdownRef = useRef(null); // Ref to the dropdown content for positioning

  // Wrapper for mouse enter event to handle desktop hover behavior
  const handleMouseEnterWrapper = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any pending mouse leave timeout
    }
    if (window.innerWidth >= 768) {
      // Only trigger hover on desktop (md breakpoint and up)
      handleMouseEnter(menuKey);
    }
  };

  // Wrapper for mouse leave event to handle desktop hover behavior with a delay
  const handleMouseLeaveWrapper = () => {
    if (window.innerWidth >= 768) {
      // Only trigger hover on desktop
      timeoutRef.current = setTimeout(() => {
        handleMouseLeave(); // Close menu after a short delay
      }, 200);
    }
  };

  // Effect to adjust dropdown position if it goes off-screen on desktop
  useEffect(() => {
    if (openMenu === menuKey && dropdownRef.current) {
      const dropdown = dropdownRef.current;
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // If the right edge of the dropdown is beyond the viewport,
      // position it to the right instead of left.
      if (rect.right > viewportWidth) {
        dropdown.style.left = "auto";
        dropdown.style.right = "0";
      }
    }
  }, [openMenu, menuKey]); // Re-run when openMenu or menuKey changes

  return (
    <li
      className="relative" // Parent li for positioning the dropdown
      onMouseEnter={handleMouseEnterWrapper}
      onMouseLeave={handleMouseLeaveWrapper}
    >
      <button
        className="whitespace-nowrap px-2 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center focus:outline-none w-full text-left"
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          e.stopPropagation(); // Stop event propagation to prevent immediate closing
          handleMenuToggle(menuKey); // Toggle the dropdown open/close
        }}
        aria-expanded={openMenu === menuKey} // Accessibility attribute
        aria-haspopup="true" // Accessibility attribute
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
            openMenu === menuKey ? "rotate-180" : "" // Rotate arrow when menu is open
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

      {openMenu === menuKey && ( // Render dropdown content only if menu is open
        <div
          ref={dropdownRef}
          className="md:absolute md:left-0 md:top-full md:mt-2 bg-white shadow-2xl rounded-xl border border-gray-200 z-50 min-w-[320px] max-h-[70vh] overflow-auto animate-fadeIn"
          onMouseEnter={handleMouseEnterWrapper} // Keep menu open on hover over dropdown content
          onMouseLeave={handleMouseLeaveWrapper} // Allow menu to close on mouse leave from content
        >
          <div className="p-6">{children}</div> {/* Content of the dropdown */}
        </div>
      )}
    </li>
  );
};

// DropdownLink Component: Renders a link within a dropdown menu.
const DropdownLink = ({ to, children, closeMenu, external = false }) => {
  const baseClasses =
    "block w-full text-left py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200";

  if (external) {
    // For external links, use <a> tag with target="_blank"
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} flex items-center justify-between`}
        onClick={closeMenu} // Close all menus when clicked
      >
        {children}
        {/* External link icon */}
        <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z" />
        </svg>
      </a>
    );
  }

  // For internal links, use React Router's Link
  return (
    <Link to={to} className={baseClasses} onClick={closeMenu}>
      {children}
    </Link>
  );
};

// ServiceCategory Component: Used within "Our Expertise" dropdown for grouping links.
// This component is no longer directly used in the "Our Expertise" dropdown structure,
// but kept for reference if needed elsewhere or for future expansion.
const ServiceCategory = ({ title, children }) => (
  <div className="mb-4">
    <h4 className="font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">
      {title}
    </h4>
    <div className="space-y-1">{children}</div>
  </div>
);

// ServiceItem Component: A specific link within a ServiceCategory.
// This component is no longer directly used in the "Our Expertise" dropdown structure,
// but kept for reference if needed elsewhere or for future expansion.
const ServiceItem = ({ to, children, closeMenu }) => (
  <Link
    to={to}
    className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded cursor-pointer transition-all duration-200"
    onClick={closeMenu} // Close all menus when clicked
  >
    {children}
  </Link>
);

// Main Navbar Component
function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // State for currently open desktop dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const navRef = useRef(null); // Ref for the navbar element (not directly used for logic here, but good practice)

  // Toggles a specific dropdown menu (for mobile click or desktop hover fallback)
  const handleMenuToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Handles mouse enter for desktop dropdowns
  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      setOpenMenu(menu);
    }
  };

  // Handles mouse leave for desktop dropdowns
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenMenu(null);
    }
  };

  // Closes all menus (mobile and desktop dropdowns)
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
          {/* Mobile Layout: Logo and Hamburger Icon */}
          <div className="flex justify-between items-center md:hidden">
            <Link
              to="/"
              onClick={closeAllMenus}
              className="flex items-center space-x-2"
            >
              <img src={DHDLogo} alt="DHD Group Logo" className="h-10 w-auto" />
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

          {/* Desktop Layout: Full Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between w-full">
            <Link
              to="/"
              onClick={closeAllMenus}
              className="flex items-center space-x-2"
            >
              <img src={DHDLogo} alt="DHD Group Logo" className="h-10 w-auto" />
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
                  <DropdownLink
                    to="/customer-guide/complaint-guide"
                    closeMenu={closeAllMenus}
                  >
                    Customer Guide
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
                {/* Updated structure for "Our Expertise" dropdown to be a single column */}
                <div className="space-y-2">
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
                  <DropdownLink to="/expertise/rail" closeMenu={closeAllMenus}>
                    Rail Infrastructure
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Landscape Architecture & Design
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Vertical Gardens & Bio Walls
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Corporate Green Solutions
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Garden Design & Maintenance
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Terrace & Kitchen Gardening
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Sustainable Landscaping
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/facilities"
                    closeMenu={closeAllMenus}
                  >
                    Facilities Management
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/environmental"
                    closeMenu={closeAllMenus}
                  >
                    Environmental Solutions
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/sustainable-design"
                    closeMenu={closeAllMenus}
                  >
                    Sustainable Building Design
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/housing"
                    closeMenu={closeAllMenus}
                  >
                    Housing Maintenance
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/consulting"
                    closeMenu={closeAllMenus}
                  >
                    Project Consulting
                  </DropdownLink>
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

              {/* Added Our Sectors Link */}
              <li>
                <NavLink
                  to="/sectors" // Changed to '/sectors' for consistency
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Our Sectors
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

          {/* Mobile Menu Content (Toggles open/close) */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-[80vh] opacity-100 mt-4" // When open, expand and show
                : "max-h-0 opacity-0" // When closed, collapse and hide
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
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                <div className="space-y-2 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
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
                  <DropdownLink
                    to="/customer-guide/complaint-guide"
                    closeMenu={closeAllMenus}
                  >
                    Customer Guide
                  </DropdownLink>
                </div>
              </DropdownMenu>

              <DropdownMenu
                title="Our Expertise"
                menuKey="expertise"
                openMenu={openMenu}
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                {/* Updated structure for "Our Expertise" dropdown to be a single column */}
                <div className="space-y-2 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
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
                  <DropdownLink to="/expertise/rail" closeMenu={closeAllMenus}>
                    Rail Infrastructure
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Landscape Architecture & Design
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Vertical Gardens & Bio Walls
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Corporate Green Solutions
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Garden Design & Maintenance
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Terrace & Kitchen Gardening
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/horticulture"
                    closeMenu={closeAllMenus}
                  >
                    Sustainable Landscaping
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/facilities"
                    closeMenu={closeAllMenus}
                  >
                    Facilities Management
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/environmental"
                    closeMenu={closeAllMenus}
                  >
                    Environmental Solutions
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/sustainable-design"
                    closeMenu={closeAllMenus}
                  >
                    Sustainable Building Design
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/housing"
                    closeMenu={closeAllMenus}
                  >
                    Housing Maintenance
                  </DropdownLink>
                  <DropdownLink
                    to="/expertise/consulting"
                    closeMenu={closeAllMenus}
                  >
                    Project Consulting
                  </DropdownLink>
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
                    `block px-3 py-2 rounded-md transition-all duration-300 ${
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
              {/* Added Our Sectors Link for Mobile */}
              <li>
                <NavLink
                  to="/sectors" // Changed to '/sectors' for consistency
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Our Sectors
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

        /* Mobile dropdown styling: Overrides desktop absolute positioning for inline expansion */
        @media (max-width: 767px) {
          .relative > div[ref="dropdownRef"] {
            /* Target the dropdown content div specifically */
            position: static !important; /* Force static positioning */
            box-shadow: none !important;
            border: none !important;
            max-height: none !important;
            overflow: visible !important;
            background: transparent !important;
            padding: 0; /* Remove padding for mobile dropdown content */
          }
          /* Adjust padding for children within mobile dropdowns */
          .relative > div[ref="dropdownRef"] > div {
            padding: 0; /* Remove inner padding as well */
          }
          .relative > div[ref="dropdownRef"] .space-y-2.pl-4,
          .relative > div[ref="dropdownRef"] .space-y-4.pl-4 {
            padding-left: 1rem; /* Re-apply desired indentation for sub-items */
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
