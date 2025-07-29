import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/DHDLogo.png"; // ✅ Correct import

function Footer() {
  return (
    <footer className="bg-[#be2227] text-black pt-16 pb-8 px-4 sm:px-6 font-sans border-t border-red-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={Logo}
                alt="DHD Logo"
                className="w-10 h-10 rounded-md object-contain bg-white p-1"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/40x40/FFFFFF/BE2227?text=D";
                }}
              />
              <h5 className="text-xl font-semibold text-black">
                DHD Group of Companies
              </h5>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-black mb-6">
              Building sustainable futures through innovative infrastructure
              solutions since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold text-black mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                { to: "/about/history", label: "Our History" },
                { to: "/about/vision-mission", label: "Vision & Mission" },
                { to: "/projects", label: "Our Projects" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact Us" },
                { to: "/privacy-security", label: "Privacy & Security" },
                {
                  to: "/responsible-use-policy",
                  label: "Responsible Use Policy",
                },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Service" },
                { to: "/cookie", label: "Cookie Policy" },
                { to: "/sitemap", label: "Sitemap" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm sm:text-base text-black hover:text-white transition-colors flex items-start"
                  >
                    <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-semibold text-black mb-4">
              Contact Us
            </h5>
            <ul className="space-y-4 text-sm sm:text-base text-black">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-white mt-1 mr-3" />
                <span>
                  1234 Business Park Road,
                  <br />
                  Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-white mr-3" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-white mr-3" />
                <span>info@dhdgroup.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-white mr-3" />
                <span>Mon–Fri: 9AM – 6PM</span>
              </li>
            </ul>
          </div>

          {/* Embedded Map */}
          <div>
            <h5 className="text-xl font-semibold text-black mb-4">Find Us</h5>
            <iframe
              title="Google Map"
              className="w-full h-64 rounded-md border border-black"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04362142233!2d73.7929269393524!3d18.5245448375339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678201214152!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <p className="mt-10 text-center text-sm text-black">
          &copy; {new Date().getFullYear()} DHD Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
