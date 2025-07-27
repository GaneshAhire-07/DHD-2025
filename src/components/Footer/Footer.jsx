import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaBehance,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address & Contact */}
          <div>
            <h5 className="font-semibold text-lg mb-2">Address</h5>
            <p className="text-sm">
              1234 Street Name <br />
              City, AA 99999
            </p>

            <h5 className="font-semibold text-lg mt-6 mb-2">Contacts</h5>
            <p className="text-sm">
              Email: support@thedhd.uk <br />
              Phone: +1 (0) 000 0000 001 <br />
              Fax: +1 (0) 000 0000 002
            </p>
          </div>

          {/* Links & Feedback */}
          <div>
            <h5 className="font-semibold text-lg mb-2">Links</h5>
            <ul className="text-sm list-disc list-inside mb-6">
              <li>Privacy &amp; Security links</li>
              <li>Data Management Policy link</li>
              <li>Police Responsible Use link</li>
            </ul>

            <h5 className="font-semibold text-lg mb-2">Feedback</h5>
            <p className="text-sm">
              Please send us your ideas, bug reports, suggestions! Any feedback would be appreciated.
            </p>
          </div>

          {/* Google Map */}
          <div>
            <iframe
              title="Google Map"
              className="w-full h-64 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-start md:justify-start mt-6 space-x-4">
          <a href="https://twitter.com/mobirise" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl hover:text-blue-600" />
          </a>
          <a href="https://www.youtube.com/c/mobirise" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-xl hover:text-red-500" />
          </a>
          <a href="https://instagram.com/mobirise" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a href="https://plus.google.com/u/0/+Mobirise" target="_blank" rel="noopener noreferrer">
            <FaGooglePlusG className="text-xl hover:text-red-400" />
          </a>
          <a href="https://www.behance.net/Mobirise" target="_blank" rel="noopener noreferrer">
            <FaBehance className="text-xl hover:text-blue-500" />
          </a>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-600" />

        {/* Copyright */}
        <p className="text-xs md:text-sm leading-relaxed">
          <strong>Global Financial Crimes Compliance: </strong><br />
          @ 2024 DHD All rights reserved. DHD Group of company and AP Group Company is an Equal Opportunity Employer,
          including Disability/Veterans.
        </p>
      </div>

      {/* Bottom Bar with AI Website Generator */}
      <div className="flex justify-center items-center h-16 border-t border-gray-700 mt-6 text-sm">
        <a
          href="https://mobirise.com/builder/ai-website-generator.html"
          className="text-gray-400 hover:text-white transition"
        >
          AI Website Generator
        </a>
      </div>
    </footer>
  );
}

export default Footer;
