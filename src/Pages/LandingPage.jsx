import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutUs from "./landingPagecomponents/AboutUs";
import OurServices from "./landingPagecomponents/OurServices";

import businessman from "../assets/busy-businessman-working-tablet-mobile-phone-1-1256x1586.png";
import OurExpertise from "./landingPagecomponents/OurExpertise";
import WhyChooseDHD from "./landingPagecomponents/WhyChooseDHD";
import ProfessionalTeam from "./landingPagecomponents/ProfessionalTeam";
import GetStarted from "./landingPagecomponents/GetStrated";
import OurClients from "./landingPagecomponents/OurClients";
import OurProcess from "./landingPagecomponents/OurProcess";
import FollowUs from "./landingPagecomponents/FollowUs";

function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white relative py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Driven by Vision. <br />
                Built on Trust. <br />
                Delivered with <br />
                Excellence.
              </h1>
              <p className="text-gray-700 mt-6 text-base md:text-lg">
                <strong>We</strong> are passionate about building value at every
                stage of development, committed to long-term partnerships,
                integrated strategies, and shared success with all our
                stakeholders.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="https://mobiri.se"
                  className="px-6 py-2 border border-blue-800 text-blue-800 font-medium rounded hover:bg-blue-800 hover:text-white transition"
                >
                  Get Started
                </a>
                <a
                  href="https://mobiri.se"
                  className="px-6 py-2 border border-red-600 text-red-600 font-medium rounded hover:bg-red-600 hover:text-white transition"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={businessman}
                alt="Businessman"
                className="max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <OurServices />
      <OurExpertise />
      <WhyChooseDHD />
      <ProfessionalTeam />
      <GetStarted />
      <OurClients />
      <OurProcess />
      <FollowUs />
      <Footer />
    </>
  );
}

export default LandingPage;
