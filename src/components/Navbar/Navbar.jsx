import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  Target,
  FolderKanban,
  Mail,
  UserCircle,
  Heart,
  FileText,
  Sparkles,
  Building,
  Sprout,
  LayoutGrid,
} from "lucide-react";
import dhdLogo from "../../assets/logo.png";
import logo from "../../assets/logo.png";
import horticultureLogo from "../../assets/horticulture.png";

const menuData = [
  { id: "home", title: "Home", path: "/", icon: Home },
  {
    id: "about",
    title: "About Us",
    path: "/about",
    icon: Users,
    submenu: [
      {
        id: "profile",
        title: "Profile",
        icon: UserCircle,
        submenu: [
          { id: "history", title: "History", path: "/about/history" },
          {
            id: "vision",
            title: "Vision & Mission",
            path: "/about/vision-mission",
          },
          { id: "who", title: "Who We Are", path: "/about/Who-We-Are" },
          { id: "what", title: "What We Do", path: "/about/What-We-Do" },
        ],
      },
      {
        id: "purpose",
        title: "Our Purpose",
        icon: Heart,
        submenu: [
          {
            id: "sustainability",
            title: "Sustainability",
            path: "/about/purpose/sustainability",
          },
          {
            id: "social",
            title: "Social Impact",
            path: "/about/purpose/social",
          },
          {
            id: "physical",
            title: "Physical Impact",
            path: "/about/purpose/physical",
          },
        ],
      },
      {
        id: "policies",
        title: "Our Policies",
        path: "/about/our-policies",
        icon: FileText,
      },
      { id: "careers", title: "Careers", path: "/careers", icon: Briefcase },
    ],
  },
  {
    id: "expertise",
    title: "Our Expertise",
    path: "/expertise",
    icon: Sparkles,
    submenu: [
      {
        id: "realestate",
        title: "Real Estate Solutions",
        path: "https://iresworld.com/",
        external: true,
        logo: logo,
        icon: Building,
      },
      {
        id: "horticulture",
        title: "Horticulture Services",
        path: "/expertise/horticulture",
        logo: horticultureLogo,
        icon: Sprout,
      },
      {
        id: "sectors",
        title: "Our Sectors",
        path: "/sectors",
        icon: LayoutGrid,
      },
    ],
  },
  { id: "approach", title: "Our Approach", path: "/approach", icon: Target },
  {
    id: "projects",
    title: "Our Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  { id: "contact", title: "Contact", path: "/contact", icon: Mail },
];

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
    const defaultLinkContent = (
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
          <span className="flex items-center gap-2">
            <span className="truncate">{item.title}</span>
            <img
              src={logo}
              alt="logo"
              className="relative left-9 w-7 h-5 object-contain"
            />
          </span>
        </a>
      );
    if (item.path?.includes("#"))
      return (
        <HashLink smooth to={item.path} className={linkClasses}>
          {defaultLinkContent}
        </HashLink>
      );
    return (
      <NavLink to={item.path || "#"} className={linkClasses}>
        {item.logo ? (
          <>
            <span className="flex items-center gap-14">
              <span className="truncate">{item.title}</span>
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="w-7 h-5 object-contain"
              />
            </span>
            {hasSubmenu && (
              <ChevronRight
                size={16}
                className="ml-2 transition-transform duration-200 group-hover:rotate-90"
              />
            )}
          </>
        ) : (
          defaultLinkContent
        )}
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
                key={subItem.id}
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

const MobileMenu = ({ isOpen, closeMenu }) => {
  const [history, setHistory] = useState([{ title: "Menu", items: menuData }]);
  const currentMenu = history[history.length - 1];
  const location = useLocation();

  const goToSubmenu = (submenu, title) =>
    setHistory([...history, { items: submenu, title }]);
  const goBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(
        () => setHistory([{ title: "Menu", items: menuData }]),
        300
      );
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const SmartLink = ({ item, onClick, className, children }) => {
    if (item.external)
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={className}
        >
          {children}
        </a>
      );
    if (item.path?.includes("#"))
      return (
        <HashLink smooth to={item.path} onClick={onClick} className={className}>
          {children}
        </HashLink>
      );
    return (
      <NavLink to={item.path || "#"} onClick={onClick} className={className}>
        {children}
      </NavLink>
    );
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-slate-50 shadow-2xl"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-3">
            <div className="w-24">
              <AnimatePresence>
                {history.length > 1 && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onClick={goBack}
                    className="flex items-center gap-1 rounded-full p-2 pr-3 text-slate-600 transition-colors hover:bg-slate-200"
                  >
                    <ChevronLeft size={18} />
                    <span className="text-sm font-medium">Back</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <motion.h2
              key={currentMenu.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-base font-semibold text-slate-800 truncate"
            >
              {currentMenu.title}
            </motion.h2>
            <div className="w-24 flex justify-end">
              <button
                onClick={closeMenu}
                className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-200"
                aria-label="Close menu"
              >
                <X size={20} />
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
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="p-2"
              >
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-1 list-none"
                >
                  {currentMenu.items.map((item) => {
                    const Icon = item.icon;
                    const isCurrentActive =
                      (item.path === "/" && location.pathname === "/") ||
                      (item.path &&
                        item.path !== "/" &&
                        location.pathname.startsWith(item.path));

                    // This is the content that will be on the left side of the row
                    const leftSideContent = (
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <Icon
                            className={`h-5 w-5 flex-shrink-0 ${
                              isCurrentActive
                                ? "text-indigo-500"
                                : "text-slate-400"
                            }`}
                          />
                        )}
                        <span
                          className={`font-medium text-sm ${
                            isCurrentActive ? "font-semibold" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt=""
                            className="w-5 h-4 object-contain"
                          />
                        )}
                      </div>
                    );

                    return (
                      <motion.li key={item.id} variants={itemVariants}>
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          className="rounded-lg overflow-hidden"
                        >
                          {item.submenu ? (
                            <button
                              onClick={() =>
                                goToSubmenu(item.submenu, item.title)
                              }
                              className={`flex items-center justify-between w-full p-3 text-left transition-colors ${
                                isCurrentActive
                                  ? "bg-white shadow-sm"
                                  : "text-slate-700 hover:bg-white/70"
                              }`}
                            >
                              {leftSideContent}
                              <ChevronRight
                                size={18}
                                className="text-slate-400 flex-shrink-0"
                              />
                            </button>
                          ) : (
                            <SmartLink
                              item={item}
                              onClick={closeMenu}
                              className={`flex items-center justify-between w-full p-3 transition-colors ${
                                isCurrentActive
                                  ? "bg-white text-indigo-600 shadow-sm"
                                  : "text-slate-700 hover:bg-white/70"
                              }`}
                            >
                              {leftSideContent}
                              {/* No chevron needed for direct links */}
                            </SmartLink>
                          )}
                        </motion.div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="p-4 bg-white border-t border-slate-200 flex-shrink-0">
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
                  <DesktopMenuItem key={item.id} item={item} />
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
