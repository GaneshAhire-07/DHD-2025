import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

function FollowUs() {
  return (
    <section className="bg-off-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-content w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="mbr-section-title text-24px font-montserrat font-bold text-charcoal-gray mb-4 uppercase">
              <strong>Follow Us</strong>
            </h2>
            <p className="mbr-text text-16px font-roboto text-medium-gray">
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa, efficitur varius augue. In vel elit lorem. Fusce et dui fringilla, suscipit nulla sed, viverra nunc. Nulla ut justo ut enim vehicula maximus. Nam et neque tempus, ultricies purus vel, suscipit leo. Praesent orci turpis, maximus facilisis rhoncus vel, consequat ac augue. Nam facilisis mi non elit tempor sodales.<br />
            </p>
          </div>
          <div className="icons flex items-center justify-end w-full md:w-1/2 gap-4 flex-wrap">
            <a href="https://twitter.com/mobirise" target="_blank" className="text-2xl text-charcoal-gray hover:text-deep-red transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank" className="text-2xl text-charcoal-gray hover:text-deep-red transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/c/mobirise" target="_blank" className="text-2xl text-charcoal-gray hover:text-deep-red transition duration-300">
              <FaYoutube />
            </a>
            <a href="https://instagram.com/mobirise" target="_blank" className="text-2xl text-charcoal-gray hover:text-deep-red transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowUs;