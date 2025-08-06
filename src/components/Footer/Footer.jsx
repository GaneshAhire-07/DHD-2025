import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import AP from "../../assets/AP.jpg";

// --- Contact and Business Information ---
const contactInfo = {
  addressLine1: "1234 Business Park Road",
  addressLine2: "Pune, Maharashtra 411001",
  phone: "+91 98765 43210",
  email: "info@dhdgroup.com",
  workingHours: "Mon–Fri: 9AM – 6PM",
};

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03437512965!2d73.79292693935547!3d18.524603500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1722870055018!5m2!1sen!2sin";

// --- Data for Footer Sections ---
const footerSections = [
  {
    icon: <FaClock className="w-6 h-6" />,
    title: "Company Info",
    description: (
      <div className="text-sm text-gray-300 leading-relaxed">
        <div className="flex items-center space-x-2 mb-3">
          <img
            src={Logo}
            alt="DHD Logo"
            className="w-10 h-10 rounded-md object-contain bg-white p-1"
          />
          <img
            src={AP}
            alt="AP Logo"
            className="w-10 h-10 rounded-md object-contain bg-white p-1"
          />
          <h3 className="font-semibold text-base text-white">
            DHD Group of Companies
          </h3>
        </div>
        <p>
          Building sustainable futures through innovative infrastructure
          solutions since 1985.
        </p>
      </div>
    ),
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Find Us",
    description: (
      <iframe
        title="Google Map Location of DHD Group"
        className="w-full h-56 rounded-lg border border-gray-500"
        src={googleMapsEmbedUrl}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Quick Links",
    description: (
      <ul className="space-y-2 text-sm text-gray-300">
        {[
          { to: "/about/history", label: "Our History" },
          { to: "/about/vision-mission", label: "Vision & Mission" },
          { to: "/projects", label: "Our Projects" },
          { to: "/careers", label: "Careers" },
          { to: "/contact", label: "Contact Us" },
          { to: "/privacy-security", label: "Privacy & Security" },
        ].map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group flex items-center hover:text-gray-100 transition-colors"
            >
              <span className="mr-2.5 w-1.5 h-1.5 rounded-full bg-gray-500 transition-colors group-hover:bg-white"></span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: <FaPhoneAlt className="w-6 h-6" />,
    title: "Contact Us",
    description: (
      <ul className="space-y-3 text-sm text-gray-300">
        <li className="flex items-start">
          <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-white" />
          <span>
            {contactInfo.addressLine1},<br />
            {contactInfo.addressLine2}
          </span>
        </li>
        <li className="flex items-center">
          <FaPhoneAlt className="mr-3 flex-shrink-0 text-white" />
          <span>{contactInfo.phone}</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="mr-3 flex-shrink-0 text-white" />
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-gray-100"
          >
            {contactInfo.email}
          </a>
        </li>
        <li className="flex items-center">
          <FaClock className="mr-3 flex-shrink-0 text-white" />
          <span>{contactInfo.workingHours}</span>
        </li>
      </ul>
    ),
  },
];

const bottomLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Sitemap",
];

// --- Main Footer Component ---
const Footer = () => {
  const [showConsent, setShowConsent] = useState(false);

  // Check for cookie consent on component mount
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // If no consent is found in localStorage, show the banner
      setShowConsent(true);
    }
  }, []);

  // Handle user's consent choice
  const handleConsent = (choice) => {
    // Save the choice to localStorage so it's remembered
    localStorage.setItem("cookieConsent", choice);
    // Hide the banner
    setShowConsent(false);
  };

  return (
    <>
      <footer className="bg-gray-800 text-white font-sans">
        <div className="px-4 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="flex flex-col p-4 rounded">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 text-gray-300">
                      {section.icon}
                    </div>
                    <h3 className="ml-4 font-semibold text-white text-lg">
                      {section.title}
                    </h3>
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    {section.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 bg-gray-900 text-gray-400 px-4 lg:px-8 py-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-center md:text-left text-sm">
                &copy; {new Date().getFullYear()} DHD Group of Companies. All
                Rights Reserved.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                {bottomLinks.map((link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Cookie Consent Banner --- */}
      {showConsent && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900/90 backdrop-blur-sm text-white px-4 py-4 text-sm z-50 shadow-2xl animate-slide-up">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              We use cookies to enhance your browsing experience. See our
              <Link
                to="/cookie-policy"
                className="underline hover:text-gray-200 ml-1"
              >
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                onClick={() => handleConsent("rejected")}
              >
                Reject
              </button>
              <button
                className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
                onClick={() => handleConsent("accepted")}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
