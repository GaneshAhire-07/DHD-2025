import React from "react";

// Import all your sections for the landing page
import HeroSection from "../Pages/landing/HeroSection";
import AboutUs from "../Pages/landing/AboutUs";
import OurServicesSection from "../Pages/landing/OurServices";
import OurExpertiseSection from "../Pages/landing/OurExpertise";
import WhyChooseDHDSection from "../Pages/landing/WhyChooseDHD";
import ProfessionalTeamSection from "../Pages/landing/ProfessionalTeam";
import GetStartedSection from "../Pages/landing/GetStrated";
import OurClientsSection from "../Pages/landing/OurClients";
import usePageTitle from "../hooks/usePageTitle.js";
import FrontAbout from "./AboutUsPages/FrontAbout.jsx";

function LandingPage() {
  usePageTitle("Home");
  return (
    <div className="bg-off-white">
      <HeroSection />
      <FrontAbout />
      <OurServicesSection />
      <OurExpertiseSection />
      <WhyChooseDHDSection />
      <ProfessionalTeamSection />
      <GetStartedSection />
      <OurClientsSection />
    </div>
  );
}

export default LandingPage;
