import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

// --- Data for all navigation links based on your images ---
const menuData = [
  { title: "Home", path: "/" },
  {
    title: "About Us",
    path: "/about",
    submenu: [
      {
        title: "Profile",
        submenu: [
          { title: "History", path: "/about/history" },
          { title: "Vision & Mission", path: "/about/vision-mission" },
          { title: "Who We Are", path: "/about/who-we-are" },
          { title: "What We Do", path: "/about/what-we-do" },
        ],
      },
      {
        title: "Our Purpose",
        submenu: [
          { title: "Sustainability", path: "/about/purpose/sustainability" },
          { title: "Social Impact", path: "/about/purpose/social-impact" },
          { title: "Physical Impact", path: "/about/purpose/physical-impact" },
        ],
      },
      { title: "Our Policies", path: "/about/our-policies" },
      { title: "Governance", path: "/about/governance" },
      {
        title: "Our Committee",
        submenu: [
          { title: "Modern Slavery", path: "/about/committee/modern-slavery" },
          {
            title: "Human Trafficking Statement",
            path: "/about/committee/human-trafficking",
          },
          {
            title: "Supervisor Board",
            path: "/about/committee/supervisor-board",
          },
          {
            title: "Auditors Department",
            path: "/about/committee/auditors-department",
          },
          {
            title: "Risk Department",
            path: "/about/committee/risk-department",
          },
          {
            title: "COVID-19 Secure Risk Assessment",
            path: "/about/committee/covid-risk-assessment",
          },
        ],
      },
    ],
  },
  {
    title: "Our Expertise",
    path: "/expertise",
    submenu: [
      {
        title: "Real Estate End to End Solutions",
        path: "https://iresworld.com/",
        external: true,
      },
      {
        title: "Horticulture Services",
        path: "/expertise/horticulture",
        submenu: [
          {
            title: "Landscape Architecture & Design",
            path: "/expertise/horticulture#design",
          },
          {
            title: "Landscape Development & Construction",
            path: "/expertise/horticulture#construction",
          },
          {
            title: "Vertical Gardens & Bio Walls",
            path: "/expertise/horticulture#vertical-gardens",
          },
          {
            title: "Corporate Green Solutions",
            path: "/expertise/horticulture#corporate-green",
          },
          {
            title: "Garden Design & Maintenance",
            path: "/expertise/horticulture#garden-design",
          },
          {
            title: "Grass Plantation",
            path: "/expertise/horticulture#grass-plantation",
            submenu: [
              {
                title: "Terrace Gardening",
                path: "/expertise/horticulture#terrace",
              },
              {
                title: "Kitchen Gardening",
                path: "/expertise/horticulture#kitchen",
              },
              {
                title: "Horticulture Expertise",
                path: "/expertise/horticulture#expertise",
              },
              {
                title: "Sustainable Practices",
                path: "/expertise/horticulture#sustainable",
              },
            ],
          },
        ],
      },
      { title: "Construction", path: "/expertise/construction" },
      { title: "Infrastructure", path: "/expertise/infrastructure" },
      { title: "Highways", path: "/expertise/highways" },
      { title: "Utilities", path: "/expertise/utilities" },
      { title: "Housing Maintenance", path: "/expertise/housing-maintenance" },
      { title: "Rail", path: "/expertise/rail" },
      { title: "Property", path: "/expertise/property" },
      {
        title: "Facilities Management",
        path: "/expertise/facilities-management",
      },
      {
        title: "Environmental Targets",
        path: "/expertise/environmental-targets",
      },
      {
        title: "Sustainability Building Design",
        path: "/expertise/sustainability-design",
      },
    ],
  },
  { title: "Our Approach", path: "/approach" },
  { title: "Our Projects", path: "/projects" },
  { title: "Our Sectors", path: "/sectors" },
  { title: "Careers", path: "/careers" },
  { title: "Contact", path: "/contact" },
];

// --- Mock Logo ---
const DHDLogo = "https://placehold.co/100x40/be2227/ffffff?text=DHD";

// --- Reusable MenuItem Component for Nested Menus ---
const MenuItem = ({ item, closeMobileMenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSubmenuOpen(true);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    timeoutRef.current = setTimeout(() => setIsSubmenuOpen(false), 200);
  };

  // Mobile click handler
  const handleMenuToggle = (e) => {
    if (window.innerWidth >= 768) return;
    e.preventDefault();
    setIsSubmenuOpen((prev) => !prev);
  };

  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const handleLinkClick = () => {
    setIsSubmenuOpen(false);
    if (closeMobileMenu) closeMobileMenu();
  };

  if (item.external) {
    return (
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
          onClick={handleLinkClick}
        >
          {item.title}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={item.path || "#"}
        onClick={hasSubmenu ? handleMenuToggle : handleLinkClick}
        className={({ isActive }) =>
          `flex items-center justify-between w-full px-3 py-2 text-gray-700 transition-colors duration-200 rounded-md whitespace-nowrap hover:text-blue-600 hover:bg-gray-100 md:text-base ${
            isActive && !hasSubmenu
              ? "font-semibold text-blue-600 bg-blue-50"
              : "font-normal"
          }`
        }
      >
        <span>{item.title}</span>
        {hasSubmenu && (
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isSubmenuOpen ? "rotate-180 md:rotate-0" : ""
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
        )}
      </NavLink>

      {/* --- Submenu --- */}
      {hasSubmenu && (
        <ul
          className={`
            transition-all duration-200 
            md:absolute md:left-full md:top-0 md:mt-0 md:ml-1 md:shadow-xl md:border md:bg-white md:rounded-lg
            ${
              isSubmenuOpen
                ? "opacity-100 scale-100 translate-y-0 visible"
                : "opacity-0 scale-95 -translate-y-2 invisible"
            }
            ${"pl-4 md:p-2 md:min-w-[220px]" /* Mobile vs Desktop padding */}
          `}
        >
          {item.submenu.map((subItem, index) => (
            <MenuItem
              item={subItem}
              key={index}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// --- Main Navbar Component ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200">
      <nav ref={navRef} className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* --- Logo --- */}
          <Link
            to="/"
            onClick={closeAllMenus}
            className="flex items-center space-x-2 shrink-0"
          >
            <img src={DHDLogo} alt="DHD Group Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">
              <span style={{ color: "#be2227" }}>D</span>
              <span style={{ color: "#2b2a29" }}>H</span>
              <span style={{ color: "#2b4c80" }}>D</span>
              <span className="text-gray-800"> Group</span>
            </span>
          </Link>

          {/* --- Desktop Menu --- */}
          <ul className="hidden md:flex items-center space-x-1">
            {menuData.map((item, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={item.path || "#"}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition-colors duration-200 whitespace-nowrap ${
                      isActive && (!item.submenu || item.submenu.length === 0)
                        ? "text-blue-600 bg-blue-100"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                    <ul className="bg-white shadow-xl border rounded-lg p-2 min-w-[220px]">
                      {item.submenu.map((subItem, subIndex) => (
                        <MenuItem item={subItem} key={subIndex} />
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li>
              <NavLink
                to="/partner"
                className="ml-2 px-4 py-2 rounded-md text-white hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                style={{ backgroundColor: "#2b4c80" }}
                onClick={closeAllMenus}
              >
                Become a Partner
              </NavLink>
            </li>
          </ul>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle menu"
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
        </div>

        {/* --- Mobile Menu Panel --- */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-y-auto ${
            isMobileMenuOpen
              ? "max-h-[80vh] opacity-100 py-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-1 px-4">
            {menuData.map((item, index) => (
              <MenuItem
                item={item}
                key={index}
                closeMobileMenu={closeAllMenus}
              />
            ))}
            <li className="pt-4">
              <NavLink
                to="/partner"
                className="block w-full text-center px-4 py-3 rounded-md text-white hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: "#2b4c80" }}
                onClick={closeAllMenus}
              >
                Become a Partner
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
