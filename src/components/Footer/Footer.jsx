import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Building2,
  Shield,
  FileText,
  Cookie,
  X,
} from "lucide-react";
import logo from "../../assets/logo.png";
import AP from "../../assets/AP.jpg";

// Centralized contact info
const contactInfo = {
  addressLine1: "1234 Business Park Road",
  addressLine2: "Pune, Maharashtra 411001",
  phone: "+91 98765 43210",
  email: "info@dhdgroup.com",
  workingHours: "Mon–Fri: 9AM – 6PM",
};

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03437512965!2d73.79292693935547!3d18.524603500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1722870055018!5m2!1sen!2sin";

const footerSections = [
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
          { to: "/responsible-use-policy", label: "Responsible Use Policy" },
        ].map((link) => (
          <li key={link.label}>
            <a
              href={link.to}
              className="group flex items-center hover:text-gray-100 transition-colors"
            >
              <span className="mr-2.5 w-1.5 h-1.5 rounded-full bg-gray-500 transition-colors group-hover:bg-white"></span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: "Company Info",
    description: (
      <div className="text-sm text-gray-300 leading-relaxed">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-10 h-10 rounded-md bg-white p-1 flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-10 h-10 rounded-md bg-white p-1 flex items-center justify-center">
            <img src={AP} alt="logo" />
          </div>
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
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
  { label: "Sitemap", href: "#sitemap" },
];

const Footer = () => {
  const [showConsent, setShowConsent] = useState(true);
  const [consentChoice, setConsentChoice] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleConsent = (choice) => {
    setConsentChoice(choice);
    setShowConsent(false);
  };

  const resetConsent = () => {
    setShowConsent(true);
    setConsentChoice(null);
    setShowDetails(false);
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white font-sans">
        <div className="px-4 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Main footer sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 text-blue-400">
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

        {/* Sub-footer */}
        <div className="border-t border-gray-700 bg-gray-900 text-gray-400 px-4 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-center md:text-left text-sm">
                <p>
                  &copy; {new Date().getFullYear()} DHD Group of Companies. All
                  Rights Reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Registered in India • CIN: L12345MH1985PLC123456
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                {bottomLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    {link.label === "Privacy Policy" && (
                      <Shield className="w-4 h-4 mr-1" />
                    )}
                    {link.label === "Cookie Policy" && (
                      <Cookie className="w-4 h-4 mr-1" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Professional Cookie Consent Banner */}
      {showConsent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Cookie Preferences
                    </h3>
                    <p className="text-sm text-gray-500">
                      Manage your privacy settings
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowConsent(false)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-gray-800">
              <p className="mb-4 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing
                experience, analyze site traffic, and personalize content. These
                technologies help us provide you with better services and
                improve our website functionality.
              </p>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 flex items-center"
              >
                <ChevronRight
                  className={`w-4 h-4 mr-1 transition-transform ${
                    showDetails ? "rotate-90" : ""
                  }`}
                />
                View detailed settings
              </button>

              {showDetails && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Essential Cookies
                      </h4>
                      <p className="text-sm text-gray-600">
                        Required for basic website functionality
                      </p>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Always Active
                    </div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Analytics Cookies
                      </h4>
                      <p className="text-sm text-gray-600">
                        Help us understand how visitors use our site
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Marketing Cookies
                      </h4>
                      <p className="text-sm text-gray-600">
                        Used to deliver relevant advertisements
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-600 mb-6">
                You can change your preferences at any time by clicking the
                "Cookie Settings" link in our footer. For more information,
                please review our{" "}
                <a
                  href="#privacy"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#cookies"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            {/* Action Buttons */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium order-2 sm:order-1"
                  onClick={() => handleConsent("essential")}
                >
                  Essential Only
                </button>
                <button
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium order-3 sm:order-2"
                  onClick={() => handleConsent("custom")}
                >
                  Save Preferences
                </button>
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium order-1 sm:order-3"
                  onClick={() => handleConsent("all")}
                >
                  Accept All Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consent Status & Reset Button (for demo) */}
      {consentChoice && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 max-w-xs">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">
                Cookie Preferences Set
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Choice:{" "}
              <span className="font-medium capitalize">{consentChoice}</span>
            </p>
            <button
              onClick={resetConsent}
              className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
            >
              Change Settings
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
