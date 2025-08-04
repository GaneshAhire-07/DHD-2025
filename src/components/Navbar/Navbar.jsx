import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowUpRight, Menu, X } from "lucide-react";
import dhdLogo from "../../assets/logo.png";

// --- Data ---
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
        ],
      },
      {
        title: "Our Purpose",
        submenu: [
          { title: "Sustainability", path: "/about/purpose/sustainability" },
        ],
      },
      { title: "Our Policies", path: "/about/our-policies" },
    ],
  },
  {
    title: "Our Expertise",
    path: "/expertise",
    submenu: [
      {
        title: "Real Estate Solutions",
        path: "https://iresworld.com/",
        external: true,
      },
      { title: "Horticulture Services", path: "/expertise/horticulture" },
      { title: "Our Sectors", path: "/sectors" },
    ],
  },
  { title: "Our Approach", path: "/approach" },
  { title: "Our Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

// --- Desktop Fly-out Menu Item ---
const DesktopMenuItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const isActive =
    (item.path === "/" && location.pathname === "/") ||
    (item.path !== "/" && location.pathname.startsWith(item.path));

  const linkClasses = `flex items-center justify-between w-full px-3 py-2 text-left transition-all duration-200 rounded-lg text-sm font-medium ${
    isActive
      ? "text-indigo-600 bg-indigo-50"
      : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
  }`;

  const renderLink = () => {
    const linkContent = (
      <>
        <span className="truncate">{item.title}</span>
        {hasSubmenu && (
          <ChevronRight
            size={16}
            className="ml-2 transition-transform duration-200 group-hover:rotate-90"
          />
        )}
      </>
    );

    if (item.external)
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClasses} group`}
        >
          <span className="flex items-center">
            <span className="truncate">{item.title}</span>
            <ArrowUpRight
              size={14}
              className="ml-2 opacity-60 group-hover:opacity-100"
            />
          </span>
        </a>
      );
    if (item.path?.includes("#"))
      return (
        <HashLink smooth to={item.path} className={linkClasses}>
          {linkContent}
        </HashLink>
      );
    return (
      <NavLink to={item.path || "#"} className={linkClasses}>
        {linkContent}
      </NavLink>
    );
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderLink()}
      <AnimatePresence>
        {isOpen && hasSubmenu && (
          <motion.ul
            initial={{ opacity: 0, y: 5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`list-none absolute bg-white shadow-2xl border border-slate-100 rounded-xl p-2 min-w-[240px] space-y-1 z-50 ${
              level === 0
                ? "left-0 top-full mt-1"
                : "left-full top-0 -mt-2 ml-1"
            }`}
          >
            {item.submenu.map((subItem) => (
              <DesktopMenuItem
                key={subItem.title}
                item={subItem}
                level={level + 1}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

// --- Mobile/Tablet Sliding Panel Menu ---
const MobileMenu = ({ isOpen, closeMenu }) => {
  const [history, setHistory] = useState([{ title: "Menu", items: menuData }]);
  const currentMenu = history[history.length - 1];
  const location = useLocation();
  const transition = { type: "spring", stiffness: 400, damping: 30, mass: 0.8 };

  const goToSubmenu = (submenu, title) =>
    setHistory([...history, { items: submenu, title }]);
  const goBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setHistory([{ title: "Menu", items: menuData }]);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const SmartLink = ({ item, onClick, className }) => {
    const isCurrentActive =
      (item.path === "/" && location.pathname === "/") ||
      (item.path !== "/" && location.pathname.startsWith(item.path));
    const baseClassName = `${className} transition-all duration-200 ${
      isCurrentActive ? "text-indigo-600 font-semibold" : "text-slate-700"
    }`;
    if (item.external)
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={`${baseClassName} flex items-center justify-between w-full group`}
        >
          <span className="truncate">{item.title}</span>
          <ArrowUpRight
            size={16}
            className="opacity-60 group-hover:opacity-100"
          />
        </a>
      );
    if (item.path?.includes("#"))
      return (
        <HashLink
          smooth
          to={item.path}
          onClick={onClick}
          className={baseClassName}
        >
          {item.title}
        </HashLink>
      );
    return (
      <NavLink
        to={item.path || "#"}
        onClick={onClick}
        className={baseClassName}
      >
        {item.title}
      </NavLink>
    );
  };

  return (
    <div
      className={`fixed inset-0 z-40 md:z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={transition}
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4 flex-shrink-0 bg-slate-50">
            <div className="w-12">
              <AnimatePresence>
                {history.length > 1 && (
                  <motion.button
                    key="back"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={goBack}
                    className="rounded-full p-2 hover:bg-white"
                  >
                    <ChevronLeft size={20} className="text-slate-600" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <motion.h2
              key={currentMenu.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-semibold text-slate-800 truncate"
            >
              {currentMenu.title}
            </motion.h2>
            <div className="w-12 flex justify-end">
              <button
                onClick={closeMenu}
                className="rounded-full p-2 hover:bg-white"
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={history.length}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="p-4"
              >
                <ul className="space-y-1 list-none">
                  {currentMenu.items.map((item) => (
                    <li key={item.title}>
                      <div className="flex items-center rounded-lg hover:bg-slate-50 transition-colors">
                        <SmartLink
                          item={item}
                          onClick={() => {
                            if (!item.submenu) closeMenu();
                          }}
                          className="block flex-grow px-4 py-3"
                        />
                        {item.submenu && (
                          <button
                            onClick={() =>
                              goToSubmenu(item.submenu, item.title)
                            }
                            className="p-3 text-slate-400 hover:text-slate-600"
                          >
                            <ChevronRight size={18} />
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex-shrink-0">
            <Link
              to="/partner"
              onClick={closeMenu}
              className="block w-full text-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#002651] to-[#003366] font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-sm">Become a Partner</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Navbar Component ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200/50"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-0 group">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src={dhdLogo}
                alt="DHD Logo"
                className="w-9 h-9 object-contain"
              />
              <div className="leading-tight">
                <div className="text-lg font-bold">
                  <span style={{ color: "#be2227" }}>D</span>
                  <span style={{ color: "#2b2a29" }}>H</span>
                  <span style={{ color: "#2b4c80" }}>D</span>
                  <span className="text-gray-800"> Group</span>
                </div>
                <div className="text-xs text-gray-500 tracking">
                  of Companies
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-1 list-none">
                {menuData.map((item) => (
                  <DesktopMenuItem key={item.title} item={item} />
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/partner"
                  className="ml-5 px-5 py-2 rounded-lg text-white bg-[#002651] hover:bg-[#003366] transition-colors font-semibold text-sm shadow-md"
                >
                  Become a Partner
                </Link>
              </motion.div>
            </nav>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} className="text-slate-800" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
