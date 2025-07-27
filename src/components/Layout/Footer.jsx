import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Social Icon component
const SocialIcon = ({ href, icon: Icon, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white ${hoverColor} transition-all duration-300`}
  >
    <Icon className="text-lg" />
  </a>
);

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">DHD Group</h5>
            <p className="text-sm leading-relaxed mb-6">
              Building sustainable futures through innovative infrastructure solutions since 1985.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="#" icon={FaTwitter} hoverColor="hover:bg-blue-400" />
              <SocialIcon href="#" icon={FaFacebookF} hoverColor="hover:bg-blue-600" />
              <SocialIcon href="#" icon={FaLinkedinIn} hoverColor="hover:bg-blue-700" />
              <SocialIcon href="#" icon={FaYoutube} hoverColor="hover:bg-red-600" />
              <SocialIcon href="#" icon={FaInstagram} hoverColor="hover:bg-pink-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { to: "/about/history", label: "Our History" },
                { to: "/about/vision-mission", label: "Vision & Mission" },
                { to: "/projects", label: "Our Projects" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-white transition-colors flex items-start"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Contact Us</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" />
                <span>
                  1234 Business Park Road,
                  <br />
                  Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-3" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <span>info@dhdgroup.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-500 mr-3" />
                <span>Mon–Fri: 9AM – 6PM</span>
              </li>
            </ul>
          </div>

          {/* Embedded Map */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Find Us</h5>
            <iframe
              title="Google Map"
              className="w-full h-64 rounded-md border border-gray-600"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04362142233!2d73.7929269393524!3d18.5245448375339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678201214152!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} DHD Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
