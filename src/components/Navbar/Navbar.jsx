import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import dhdLogo from "../../assets/DHDLOGO.png";

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

{
  /* Logo + Company Name Top Left */
}
<div className="absolute top-6 left-6 z-20 flex items-center gap-3">
  <img src={dhdLogo} alt="DHD Logo" className="w-10 h-10 object-contain" />
  <div className="leading-tight">
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
      DHD Group
    </div>
    <div className="text-sm sm:text-base text-gray-600 tracking-wide">
      of Companies
    </div>
  </div>
</div>;

// --- Menu Item ---
const MenuItem = ({ item, level = 0, closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 1024;
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const handleMouseEnter = () => {
    if (isMobile()) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile()) return;
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  const handleLinkClick = (e) => {
    if (hasSubmenu && isMobile()) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      if (closeMobileMenu) closeMobileMenu();
    }
  };

  const commonLinkClasses =
    "flex items-center justify-between w-full px-3 py-2 text-left transition duration-200 rounded-md text-sm";
  const activeLinkClasses = "font-semibold text-blue-600 bg-blue-100";
  const inactiveLinkClasses =
    "text-gray-700 hover:bg-gray-100 hover:text-blue-600";

  const renderLink = () => {
    if (item.external) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className={`${commonLinkClasses} ${inactiveLinkClasses}`}
        >
          <span>{item.title}</span>
          <svg
            className="w-3 h-3 ml-2 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      );
    }
    return (
      <NavLink
        to={item.path || "#"}
        onClick={handleLinkClick}
        className={({ isActive }) =>
          `${commonLinkClasses} ${
            isActive && !hasSubmenu ? activeLinkClasses : inactiveLinkClasses
          }`
        }
      >
        <span>{item.title}</span>
        {hasSubmenu && (
          <svg
            className={`w-3 h-3 ml-2 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
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
    );
  };

  return (
    <li
      className="relative text-sm xl:text-base"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderLink()}
      {hasSubmenu && (
        <ul
          className={`
            lg:absolute lg:bg-white lg:shadow-xl lg:border lg:rounded-lg lg:p-2 lg:min-w-[240px]
            lg:transition-all lg:duration-200
            ${
              level === 0
                ? "lg:left-0 lg:top-full lg:mt-1"
                : "lg:left-full lg:top-0 lg:-mt-2 lg:ml-1"
            }
            ${
              isOpen
                ? "block opacity-100 lg:scale-100 lg:translate-y-0"
                : "hidden opacity-0 lg:scale-95 lg:-translate-y-2"
            }
            space-y-1 mt-1 lg:mt-0
          `}
        >
          {item.submenu.map((subItem) => (
            <MenuItem
              key={subItem.title}
              item={subItem}
              level={level + 1}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// --- Navbar ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-20">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-2 group"
            >
              <img
                src={dhdLogo}
                alt="DHD Logo"
                className="w-8 h-7 sm:w-9 sm:h-8 md:w-10 md:h-10 object-contain"
              />
              <div className="leading-tight">
                <div className="text-[12px] sm:text-[14px] md:text-[20px] font-bold">
                  <span style={{ color: "#be2227" }}>D</span>
                  <span style={{ color: "#2b2a29" }}>H</span>
                  <span style={{ color: "#2b4c80" }}>D</span>
                  <span className="text-gray-800"> Group</span>
                </div>
                <div className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-500 tracking-wide">
                  of Companies
                </div>
              </div>
            </Link>

            <ul className="hidden lg:flex items-center space-x-0">
              {menuData.map((item) => (
                <MenuItem key={item.title} item={item} />
              ))}
              <li>
                <NavLink
                  to="/partner"
                  className="ml-4 px-4 py-2.5 rounded-lg text-white bg-[#002651] hover:bg-[#003366] transition-all duration-200 text-sm shadow-md"
                >
                  Become a Partner
                </NavLink>
              </li>
            </ul>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto h-full p-4 pb-24">
            <ul className="flex flex-col space-y-1 scroll-mt-20">
              {menuData.map((item) => (
                <MenuItem
                  key={item.title}
                  item={item}
                  closeMobileMenu={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </ul>
            <div className="px-4 py-6 absolute bottom-0 left-0 w-full bg-white border-t">
              <NavLink
                to="/partner"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md"
              >
                Become a Partner
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
