import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// Mock DHDLogo for demonstration purposes
// In a real application, you would ensure this path is correct and the image exists.
const DHDLogo = "https://placehold.co/100x40/be2227/ffffff?text=DHD";

// DropdownMenu Component: Handles the main dropdown logic for navigation items.
const DropdownMenu = ({
  title,
  children,
  menuKey,
  getOpenState, // Function to check if this menu is open
  handleMenuToggle,
  handleMouseEnter,
  handleMouseLeave,
  isNested = false, // Indicates if it's a nested dropdown
}) => {
  const timeoutRef = useRef(null); // Ref to manage hover timeout for desktop
  const dropdownRef = useRef(null); // Ref to the dropdown content for positioning
  const isOpen = getOpenState(menuKey); // Determine if this specific menu is open

  // Wrapper for mouse enter event to handle desktop hover behavior
  const handleMouseEnterWrapper = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any pending mouse leave timeout
    }
    if (window.innerWidth >= 768) {
      // Only trigger hover on desktop (md breakpoint and up)
      handleMouseEnter(menuKey, isNested); // Pass isNested to the parent handler
    }
  };

  // Wrapper for mouse leave event to handle desktop hover behavior with a delay
  const handleMouseLeaveWrapper = () => {
    if (window.innerWidth >= 768) {
      // Only trigger hover on desktop
      timeoutRef.current = setTimeout(() => {
        handleMouseLeave(); // This will close all menus
      }, 200); // Small delay to prevent accidental closing
    }
  };

  // Effect to adjust dropdown position if it goes off-screen on desktop
  useEffect(() => {
    if (isOpen && dropdownRef.current && !isNested) {
      // Only for top-level dropdowns
      const dropdown = dropdownRef.current;
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // If the right edge of the dropdown is beyond the viewport,
      // position it to the right instead of left.
      if (rect.right > viewportWidth) {
        dropdown.style.left = "auto";
        dropdown.style.right = "0";
      } else {
        // Reset if it's not off-screen (important for resizing or re-opening)
        dropdown.style.left = "0";
        dropdown.style.right = "auto";
      }
    }
  }, [isOpen, menuKey, isNested]); // Re-run when isOpen or menuKey changes

  // Classes for the button that triggers the dropdown
  const buttonClasses = `whitespace-nowrap px-2 py-2 transition-all duration-300 flex items-center focus:outline-none w-full text-left
    ${
      isNested
        ? "text-gray-600 hover:text-blue-700 text-sm"
        : "text-gray-700 hover:text-blue-700"
    }`;

  // Classes for the dropdown container itself
  // Removed max-h-[70vh] and overflow-auto to prevent scrollbars and allow full content expansion
  const dropdownContainerClasses = `
    ${
      isNested
        ? "md:absolute md:left-full md:top-0 md:ml-2"
        : "md:absolute md:left-0 md:top-full md:mt-2"
    }
    bg-white shadow-2xl rounded-xl border border-gray-200 z-50
    min-w-[${isNested ? "220px" : "320px"}]
    animate-fadeIn
  `;

  return (
    <li
      className="relative" // Parent li for positioning the dropdown
      onMouseEnter={handleMouseEnterWrapper}
      onMouseLeave={handleMouseLeaveWrapper}
    >
      <button
        className={buttonClasses}
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          e.stopPropagation(); // Stop event propagation to prevent immediate closing
          handleMenuToggle(menuKey, isNested); // Toggle the dropdown open/close, pass isNested
        }}
        aria-expanded={isOpen} // Accessibility attribute
        aria-haspopup="true" // Accessibility attribute
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "" // Rotate arrow when menu is open
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

      {isOpen && ( // Render dropdown content only if menu is open
        <div
          ref={dropdownRef}
          className={dropdownContainerClasses}
          onMouseEnter={handleMouseEnterWrapper} // Keep menu open on hover over dropdown content
          onMouseLeave={handleMouseLeaveWrapper} // Allow menu to close on mouse leave from content
        >
          <div className="p-4">
            {/* Recursively pass down handlers and open state to nested DropdownMenu components */}
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child) && child.type === DropdownMenu) {
                return React.cloneElement(child, {
                  getOpenState,
                  handleMenuToggle,
                  handleMouseEnter,
                  handleMouseLeave,
                });
              }
              return child;
            })}
          </div>
        </div>
      )}
    </li>
  );
};

// DropdownLink Component: Renders a link within a dropdown menu.
const DropdownLink = ({ to, children, closeMenu, external = false }) => {
  const baseClasses =
    "block w-full text-left py-2 px-3 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all duration-200";

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

// ServiceCategory Component: Used within dropdowns for grouping links with a header.
const ServiceCategory = ({ title, children }) => (
  <div className="mb-4 last:mb-0">
    <h4 className="font-semibold text-gray-800 mb-2 pb-1 border-b border-gray-200">
      {title}
    </h4>
    <div className="space-y-1">{children}</div>
  </div>
);

// ServiceItem Component: A specific link within a ServiceCategory.
const ServiceItem = ({ to, children, closeMenu, external = false }) => (
  <DropdownLink to={to} closeMenu={closeMenu} external={external}>
    {children}
  </DropdownLink>
);

// Main Navbar Component
export default function Navbar() {
  // State for currently active menu keys (path of open menus)
  const [activeMenuKeys, setActiveMenuKeys] = useState([]);
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null); // Ref for the navbar element

  // Handles toggling a menu (for mobile click or desktop hover)
  const handleMenuToggle = (menuKey, isNestedCaller = false) => {
    setActiveMenuKeys((prevKeys) => {
      if (prevKeys.includes(menuKey)) {
        // If menu is already open, close it and any deeper menus
        const index = prevKeys.indexOf(menuKey);
        return prevKeys.slice(0, index);
      } else {
        // If menu is closed, open it.
        // For top-level menus on desktop, close all others first.
        if (!isNestedCaller && window.innerWidth >= 768) {
          return [menuKey];
        }
        // For mobile or nested menus, add to the stack
        return [...prevKeys, menuKey];
      }
    });
  };

  // Handles mouse enter for desktop dropdowns
  const handleMouseEnter = (menuKey, isNestedCaller = false) => {
    if (window.innerWidth >= 768) {
      // Only for desktop
      setActiveMenuKeys((prevKeys) => {
        // If it's a top-level menu, reset the stack to just this menu
        if (!isNestedCaller) {
          return [menuKey];
        }
        // If it's a nested menu, add it to the stack if not already present
        // This ensures the correct path is maintained for nested hovers
        const newKeys = [...prevKeys];
        if (!newKeys.includes(menuKey)) {
          // Find the parent's index to insert the new key correctly
          const parentKey = prevKeys[prevKeys.length - 1]; // Assuming immediate parent is last in stack
          const parentIndex = prevKeys.indexOf(parentKey);
          if (parentIndex !== -1) {
            return [...prevKeys.slice(0, parentIndex + 1), menuKey];
          }
          return [...prevKeys, menuKey];
        }
        return prevKeys;
      });
    }
  };

  // Handles mouse leave for desktop dropdowns (closes all)
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      // Only for desktop
      setActiveMenuKeys([]);
    }
  };

  // Closes all menus (mobile and desktop dropdowns)
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveMenuKeys([]);
  };

  // Function to pass to DropdownMenu to check if it's currently open
  const getOpenState = (menuKey) => activeMenuKeys.includes(menuKey);

  return (
    <header className="menu">
      <nav
        ref={navRef}
        className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-2">
          {" "}
          {/* Changed py-3 to py-2 */}
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Home
                </NavLink>
              </li>

              {/* About Us Dropdown */}
              <DropdownMenu
                title="About Us"
                menuKey="about"
                getOpenState={getOpenState} // Pass the new function
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Profile Section */}
                  <div className="space-y-2">
                    <ServiceCategory title="Profile">
                      <DropdownLink
                        to="/about/history"
                        closeMenu={closeAllMenus}
                      >
                        Our History
                      </DropdownLink>
                      <DropdownLink
                        to="/about/vision-mission"
                        closeMenu={closeAllMenus}
                      >
                        Vision & Mission
                      </DropdownLink>
                      <DropdownLink
                        to="/about/who-we-are"
                        closeMenu={closeAllMenus}
                      >
                        Who We Are
                      </DropdownLink>
                      <DropdownLink
                        to="/about/what-we-do"
                        closeMenu={closeAllMenus}
                      >
                        What We Do
                      </DropdownLink>
                      {/* Nested Dropdown for Our Purpose */}
                      <DropdownMenu
                        title="Our Purpose"
                        menuKey="our-purpose"
                        getOpenState={getOpenState} // Pass the new function
                        handleMenuToggle={handleMenuToggle}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        isNested={true} // Mark as nested
                      >
                        <DropdownLink
                          to="/about/purpose/sustainability"
                          closeMenu={closeAllMenus}
                        >
                          Sustainability
                        </DropdownLink>
                        <DropdownLink
                          to="/about/purpose/social-impact"
                          closeMenu={closeAllMenus}
                        >
                          Social Impact
                        </DropdownLink>
                        <DropdownLink
                          to="/about/purpose/physical-impact"
                          closeMenu={closeAllMenus}
                        >
                          Physical Impact
                        </DropdownLink>
                      </DropdownMenu>
                    </ServiceCategory>
                  </div>

                  {/* Policies & Governance Section */}
                  <div className="space-y-2">
                    <ServiceCategory title="Company Information">
                      <DropdownLink
                        to="/about/our-policies"
                        closeMenu={closeAllMenus}
                      >
                        Our Policies
                      </DropdownLink>
                      <DropdownLink
                        to="/about/governance"
                        closeMenu={closeAllMenus}
                      >
                        Governance
                      </DropdownLink>
                      {/* Nested Dropdown for Our Committee */}
                      <DropdownMenu
                        title="Our Committee"
                        menuKey="our-committee"
                        getOpenState={getOpenState} // Pass the new function
                        handleMenuToggle={handleMenuToggle}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        isNested={true} // Mark as nested
                      >
                        <DropdownLink
                          to="/about/committee/modern-slavery"
                          closeMenu={closeAllMenus}
                        >
                          Modern Slavery
                        </DropdownLink>
                        <DropdownLink
                          to="/about/committee/human-trafficking"
                          closeMenu={closeAllMenus}
                        >
                          Human Trafficking Statement
                        </DropdownLink>
                        <DropdownLink
                          to="/about/committee/supervisor-board"
                          closeMenu={closeAllMenus}
                        >
                          Supervisor Board
                        </DropdownLink>
                        <DropdownLink
                          to="/about/committee/auditors-department"
                          closeMenu={closeAllMenus}
                        >
                          Auditors Department
                        </DropdownLink>
                        <DropdownLink
                          to="/about/committee/risk-department"
                          closeMenu={closeAllMenus}
                        >
                          Risk Department
                        </DropdownLink>
                        <DropdownLink
                          to="/about/committee/covid-risk-assessment"
                          closeMenu={closeAllMenus}
                        >
                          COVID-19 Secure Risk Assessment
                        </DropdownLink>
                      </DropdownMenu>
                    </ServiceCategory>
                  </div>
                </div>
              </DropdownMenu>

              {/* Our Expertise Dropdown (Existing) */}
              <DropdownMenu
                title="Our Expertise"
                menuKey="expertise"
                getOpenState={getOpenState} // Pass the new function
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
                        to="/expertise#construction" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Construction Services
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise#property" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Property Management
                      </DropdownLink>
                    </ServiceCategory>

                    <ServiceCategory title="Infrastructure">
                      <DropdownLink
                        to="/expertise#infrastructure" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Infrastructure Development
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise#highways" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Highways & Transportation
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise#utilities" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Utilities & Services
                      </DropdownLink>
                      <DropdownLink
                        to="/expertise#rail" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Rail Infrastructure
                      </DropdownLink>
                    </ServiceCategory>
                  </div>

                  <div className="space-y-4">
                    <ServiceCategory title="Horticulture">
                      <ServiceItem
                        to="/expertise#horticulture" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Landscape Architecture & Design
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise#horticulture" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Vertical Gardens & Bio Walls
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise#horticulture" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Corporate Green Solutions
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise#horticulture" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Garden Design & Maintenance
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise#horticulture" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Terrace & Kitchen Gardening
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/horticulture" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Sustainable Landscaping
                      </ServiceItem>
                    </ServiceCategory>

                    <ServiceCategory title="Specialized">
                      <ServiceItem
                        to="/expertise#facilities" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Facilities Management
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise#environmental" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Environmental Solutions
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise#sustainability" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Sustainable Building Design
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise#housing" // Link to section on ExpertisePage
                        closeMenu={closeAllMenus}
                      >
                        Housing Maintenance
                      </ServiceItem>
                      <ServiceItem
                        to="/expertise/consulting" // Link to section on ExpertisePage
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                  to="/sectors"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Home
                </NavLink>
              </li>

              {/* About Us Dropdown for Mobile */}
              <DropdownMenu
                title="About Us"
                menuKey="about"
                getOpenState={getOpenState} // Pass the new function
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                <div className="space-y-2 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
                  <ServiceCategory title="Profile">
                    <DropdownLink to="/about/history" closeMenu={closeAllMenus}>
                      Our History
                    </DropdownLink>
                    <DropdownLink
                      to="/about/vision-mission"
                      closeMenu={closeAllMenus}
                    >
                      Vision & Mission
                    </DropdownLink>
                    <DropdownLink
                      to="/about/who-we-are"
                      closeMenu={closeAllMenus}
                    >
                      Who We Are
                    </DropdownLink>
                    <DropdownLink
                      to="/about/what-we-do"
                      closeMenu={closeAllMenus}
                    >
                      What We Do
                    </DropdownLink>
                    {/* Nested Dropdown for Our Purpose - Mobile */}
                    <DropdownMenu
                      title="Our Purpose"
                      menuKey="our-purpose"
                      getOpenState={getOpenState} // Pass the new function
                      handleMenuToggle={handleMenuToggle}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                      isNested={true} // Mark as nested
                    >
                      <DropdownLink
                        to="/about/purpose/sustainability"
                        closeMenu={closeAllMenus}
                      >
                        Sustainability
                      </DropdownLink>
                      <DropdownLink
                        to="/about/purpose/social-impact"
                        closeMenu={closeAllMenus}
                      >
                        Social Impact
                      </DropdownLink>
                      <DropdownLink
                        to="/about/purpose/physical-impact"
                        closeMenu={closeAllMenus}
                      >
                        Physical Impact
                      </DropdownLink>
                    </DropdownMenu>
                  </ServiceCategory>
                  <ServiceCategory title="Company Information">
                    <DropdownLink
                      to="/about/our-policies"
                      closeMenu={closeAllMenus}
                    >
                      Our Policies
                    </DropdownLink>
                    <DropdownLink
                      to="/about/governance"
                      closeMenu={closeAllMenus}
                    >
                      Governance
                    </DropdownLink>
                    {/* Nested Dropdown for Our Committee - Mobile */}
                    <DropdownMenu
                      title="Our Committee"
                      menuKey="our-committee"
                      getOpenState={getOpenState} // Pass the new function
                      handleMenuToggle={handleMenuToggle}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                      isNested={true} // Mark as nested
                    >
                      <DropdownLink
                        to="/about/committee/modern-slavery"
                        closeMenu={closeAllMenus}
                      >
                        Modern Slavery
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/human-trafficking"
                        closeMenu={closeAllMenus}
                      >
                        Human Trafficking Statement
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/supervisor-board"
                        closeMenu={closeAllMenus}
                      >
                        Supervisor Board
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/auditors-department"
                        closeMenu={closeAllMenus}
                      >
                        Auditors Department
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/risk-department"
                        closeMenu={closeAllMenus}
                      >
                        Risk Department
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/covid-risk-assessment"
                        closeMenu={closeAllMenus}
                      >
                        COVID-19 Secure Risk Assessment
                      </DropdownLink>
                    </DropdownMenu>
                  </ServiceCategory>
                </div>
              </DropdownMenu>

              {/* Our Expertise Dropdown for Mobile (Existing) */}
              <DropdownMenu
                title="Our Expertise"
                menuKey="expertise"
                getOpenState={getOpenState} // Pass the new function
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                {/* Reverted to structured grouping for better organization and performance */}
                <div className="space-y-4 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
                  <ServiceCategory title="Core Services">
                    <DropdownLink
                      to="https://iresworld.com/"
                      closeMenu={closeAllMenus}
                      external={true}
                    >
                      Real Estate Solutions
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#construction" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Construction Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#property" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Property Management
                    </DropdownLink>
                  </ServiceCategory>
                  <ServiceCategory title="Infrastructure">
                    <DropdownLink
                      to="/expertise#infrastructure" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Infrastructure Development
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#highways" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Highways & Transportation
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#utilities" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Utilities & Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#rail" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Rail Infrastructure
                    </DropdownLink>
                  </ServiceCategory>
                  <ServiceCategory title="Horticulture">
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Landscape Architecture & Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Vertical Gardens & Bio Walls
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Corporate Green Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Garden Design & Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Terrace & Kitchen Gardening
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Landscaping
                    </ServiceItem>
                  </ServiceCategory>
                  <ServiceCategory title="Specialized">
                    <ServiceItem
                      to="/expertise#facilities" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Facilities Management
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#environmental" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Environmental Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#sustainability" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Building Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#housing" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Housing Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/consulting" // Link to section on ExpertisePage
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
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                  to="/sectors"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Home
                </NavLink>
              </li>

              {/* About Us Dropdown for Mobile */}
              <DropdownMenu
                title="About Us"
                menuKey="about"
                getOpenState={getOpenState} // Pass the new function
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                <div className="space-y-2 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
                  <ServiceCategory title="Profile">
                    <DropdownLink to="/about/history" closeMenu={closeAllMenus}>
                      Our History
                    </DropdownLink>
                    <DropdownLink
                      to="/about/vision-mission"
                      closeMenu={closeAllMenus}
                    >
                      Vision & Mission
                    </DropdownLink>
                    <DropdownLink
                      to="/about/who-we-are"
                      closeMenu={closeAllMenus}
                    >
                      Who We Are
                    </DropdownLink>
                    <DropdownLink
                      to="/about/what-we-do"
                      closeMenu={closeAllMenus}
                    >
                      What We Do
                    </DropdownLink>
                    {/* Nested Dropdown for Our Purpose - Mobile */}
                    <DropdownMenu
                      title="Our Purpose"
                      menuKey="our-purpose"
                      getOpenState={getOpenState} // Pass the new function
                      handleMenuToggle={handleMenuToggle}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                      isNested={true} // Mark as nested
                    >
                      <DropdownLink
                        to="/about/purpose/sustainability"
                        closeMenu={closeAllMenus}
                      >
                        Sustainability
                      </DropdownLink>
                      <DropdownLink
                        to="/about/purpose/social-impact"
                        closeMenu={closeAllMenus}
                      >
                        Social Impact
                      </DropdownLink>
                      <DropdownLink
                        to="/about/purpose/physical-impact"
                        closeMenu={closeAllMenus}
                      >
                        Physical Impact
                      </DropdownLink>
                    </DropdownMenu>
                  </ServiceCategory>
                  <ServiceCategory title="Company Information">
                    <DropdownLink
                      to="/about/our-policies"
                      closeMenu={closeAllMenus}
                    >
                      Our Policies
                    </DropdownLink>
                    <DropdownLink
                      to="/about/governance"
                      closeMenu={closeAllMenus}
                    >
                      Governance
                    </DropdownLink>
                    {/* Nested Dropdown for Our Committee - Mobile */}
                    <DropdownMenu
                      title="Our Committee"
                      menuKey="our-committee"
                      getOpenState={getOpenState} // Pass the new function
                      handleMenuToggle={handleMenuToggle}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                      isNested={true} // Mark as nested
                    >
                      <DropdownLink
                        to="/about/committee/modern-slavery"
                        closeMenu={closeAllMenus}
                      >
                        Modern Slavery
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/human-trafficking"
                        closeMenu={closeAllMenus}
                      >
                        Human Trafficking Statement
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/supervisor-board"
                        closeMenu={closeAllMenus}
                      >
                        Supervisor Board
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/auditors-department"
                        closeMenu={closeAllMenus}
                      >
                        Auditors Department
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/risk-department"
                        closeMenu={closeAllMenus}
                      >
                        Risk Department
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/covid-risk-assessment"
                        closeMenu={closeAllMenus}
                      >
                        COVID-19 Secure Risk Assessment
                      </DropdownLink>
                    </DropdownMenu>
                  </ServiceCategory>
                </div>
              </DropdownMenu>

              {/* Our Expertise Dropdown for Mobile (Existing) */}
              <DropdownMenu
                title="Our Expertise"
                menuKey="expertise"
                getOpenState={getOpenState} // Pass the new function
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                {/* Reverted to structured grouping for better organization and performance */}
                <div className="space-y-4 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
                  <ServiceCategory title="Core Services">
                    <DropdownLink
                      to="https://iresworld.com/"
                      closeMenu={closeAllMenus}
                      external={true}
                    >
                      Real Estate Solutions
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#construction" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Construction Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#property" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Property Management
                    </DropdownLink>
                  </ServiceCategory>
                  <ServiceCategory title="Infrastructure">
                    <DropdownLink
                      to="/expertise#infrastructure" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Infrastructure Development
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#highways" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Highways & Transportation
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#utilities" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Utilities & Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#rail" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Rail Infrastructure
                    </DropdownLink>
                  </ServiceCategory>
                  <ServiceCategory title="Horticulture">
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Landscape Architecture & Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Vertical Gardens & Bio Walls
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Corporate Green Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Garden Design & Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Terrace & Kitchen Gardening
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Landscaping
                    </ServiceItem>
                  </ServiceCategory>
                  <ServiceCategory title="Specialized">
                    <ServiceItem
                      to="/expertise#facilities" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Facilities Management
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#environmental" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Environmental Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#sustainability" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Building Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#housing" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Housing Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/consulting" // Link to section on ExpertisePage
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
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                  to="/sectors"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={closeAllMenus}
                >
                  Home
                </NavLink>
              </li>

              {/* About Us Dropdown for Mobile */}
              <DropdownMenu
                title="About Us"
                menuKey="about"
                getOpenState={getOpenState} // Pass the new function
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                <div className="space-y-2 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
                  <ServiceCategory title="Profile">
                    <DropdownLink to="/about/history" closeMenu={closeAllMenus}>
                      Our History
                    </DropdownLink>
                    <DropdownLink
                      to="/about/vision-mission"
                      closeMenu={closeAllMenus}
                    >
                      Vision & Mission
                    </DropdownLink>
                    <DropdownLink
                      to="/about/who-we-are"
                      closeMenu={closeAllMenus}
                    >
                      Who We Are
                    </DropdownLink>
                    <DropdownLink
                      to="/about/what-we-do"
                      closeMenu={closeAllMenus}
                    >
                      What We Do
                    </DropdownLink>
                    {/* Nested Dropdown for Our Purpose - Mobile */}
                    <DropdownMenu
                      title="Our Purpose"
                      menuKey="our-purpose"
                      getOpenState={getOpenState} // Pass the new function
                      handleMenuToggle={handleMenuToggle}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                      isNested={true} // Mark as nested
                    >
                      <DropdownLink
                        to="/about/purpose/sustainability"
                        closeMenu={closeAllMenus}
                      >
                        Sustainability
                      </DropdownLink>
                      <DropdownLink
                        to="/about/purpose/social-impact"
                        closeMenu={closeAllMenus}
                      >
                        Social Impact
                      </DropdownLink>
                      <DropdownLink
                        to="/about/purpose/physical-impact"
                        closeMenu={closeAllMenus}
                      >
                        Physical Impact
                      </DropdownLink>
                    </DropdownMenu>
                  </ServiceCategory>
                  <ServiceCategory title="Company Information">
                    <DropdownLink
                      to="/about/our-policies"
                      closeMenu={closeAllMenus}
                    >
                      Our Policies
                    </DropdownLink>
                    <DropdownLink
                      to="/about/governance"
                      closeMenu={closeAllMenus}
                    >
                      Governance
                    </DropdownLink>
                    {/* Nested Dropdown for Our Committee - Mobile */}
                    <DropdownMenu
                      title="Our Committee"
                      menuKey="our-committee"
                      getOpenState={getOpenState} // Pass the new function
                      handleMenuToggle={handleMenuToggle}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                      isNested={true} // Mark as nested
                    >
                      <DropdownLink
                        to="/about/committee/modern-slavery"
                        closeMenu={closeAllMenus}
                      >
                        Modern Slavery
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/human-trafficking"
                        closeMenu={closeAllMenus}
                      >
                        Human Trafficking Statement
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/supervisor-board"
                        closeMenu={closeAllMenus}
                      >
                        Supervisor Board
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/auditors-department"
                        closeMenu={closeAllMenus}
                      >
                        Auditors Department
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/risk-department"
                        closeMenu={closeAllMenus}
                      >
                        Risk Department
                      </DropdownLink>
                      <DropdownLink
                        to="/about/committee/covid-risk-assessment"
                        closeMenu={closeAllMenus}
                      >
                        COVID-19 Secure Risk Assessment
                      </DropdownLink>
                    </DropdownMenu>
                  </ServiceCategory>
                </div>
              </DropdownMenu>

              {/* Our Expertise Dropdown for Mobile (Existing) */}
              <DropdownMenu
                title="Our Expertise"
                menuKey="expertise"
                getOpenState={getOpenState} // Pass the new function
                handleMenuToggle={handleMenuToggle}
                handleMouseEnter={handleMouseEnter} // Still pass, but won't apply on mobile
                handleMouseLeave={handleMouseLeave} // Still pass, but won't apply on mobile
              >
                {/* Reverted to structured grouping for better organization and performance */}
                <div className="space-y-4 pl-4">
                  {" "}
                  {/* Added pl-4 for indentation */}
                  <ServiceCategory title="Core Services">
                    <DropdownLink
                      to="https://iresworld.com/"
                      closeMenu={closeAllMenus}
                      external={true}
                    >
                      Real Estate Solutions
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#construction" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Construction Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#property" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Property Management
                    </DropdownLink>
                  </ServiceCategory>
                  <ServiceCategory title="Infrastructure">
                    <DropdownLink
                      to="/expertise#infrastructure" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Infrastructure Development
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#highways" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Highways & Transportation
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#utilities" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Utilities & Services
                    </DropdownLink>
                    <DropdownLink
                      to="/expertise#rail" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Rail Infrastructure
                    </DropdownLink>
                  </ServiceCategory>
                  <ServiceCategory title="Horticulture">
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Landscape Architecture & Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Vertical Gardens & Bio Walls
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Corporate Green Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Garden Design & Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Terrace & Kitchen Gardening
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#horticulture" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Landscaping
                    </ServiceItem>
                  </ServiceCategory>
                  <ServiceCategory title="Specialized">
                    <ServiceItem
                      to="/expertise#facilities" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Facilities Management
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#environmental" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Environmental Solutions
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#sustainability" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Sustainable Building Design
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise#housing" // Link to section on ExpertisePage
                      closeMenu={closeAllMenus}
                    >
                      Housing Maintenance
                    </ServiceItem>
                    <ServiceItem
                      to="/expertise/consulting" // Link to section on ExpertisePage
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
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                  to="/sectors"
                  className={({ isActive }) =>
                    `nav-link whitespace-nowrap px-2 py-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
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
        </div>
      </nav>
    </header>
  );
}
