import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import usePageTitle from "../../hooks/usePageTitle";
import horticulture from "../../assets/Holticulture.jpg";
import Architecture from "../../assets/Architecture.jpg"; // Adjust path if needed
import LandscapeImage from "../../assets/LandscapeArchitech.jpg";
import VerticalGarden from "../../assets/VerticalGarden.jpg"; // adjust path if needed
import CorporateGreenSolution from "../../assets/CorporateGreenSolution.jpg"; // adjust path as needed
import garderDesign from "../../assets/garderDesign.jpg"; // Adjust the path as needed
import GrassPlantation from "../../assets/GrassPlantation.jpg"; // adjust path if needed
import TeraceGarden from "../../assets/TeraceGarden.jpg";
import KitchenGarden from "../../assets/KitchenGarden .jpg";
import Infrastructure from "../../assets/Infrastructure.jpg";
import Utilities from "../../assets/utilities.jpg"; // ✅ Adjust the path if needed
import Housing from "../../assets/housing.jpg"; // Adjust the path as needed
import Property from "../../assets/property.jpg"; // Adjust path if needed
import FacilitiesManagement from "../../assets/FacilitiesManagement.jpg"; // Adjust path as per your folder structure

import {
  FaLeaf,
  FaBuilding,
  FaRoad,
  FaTrain,
  FaHome,
  FaWrench,
  FaGlobe,
  FaSeedling,
  FaTree,
  FaWater,
  FaCity,
  FaRecycle,
} from "react-icons/fa";

const SectionTitle = ({ title, subtitle, icon }) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center">
      {icon && <span className="mr-3 text-green-600">{icon}</span>}
      <h2 className="text-3xl md:text-4xl font-extrabold text-oxford-blue">
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">{subtitle}</p>
    )}
  </div>
);

const MissionStatement = ({ title, text }) => (
  <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white rounded-xl p-8 shadow-lg mb-12">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-lg">{text}</p>
  </div>
);

const ExpertisePage = () => {
  usePageTitle("Expertise");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const images = {
    horticulture:
     horticulture,
    architecture:
     Architecture,
    development: LandscapeImage,
    verticalGarden:
     VerticalGarden,
    corporateGreen:
     CorporateGreenSolution,
    gardenDesign:
     garderDesign,
    grass: GrassPlantation,
    terrace: TeraceGarden,
    kitchen: KitchenGarden,
    infrastructure:
     Infrastructure,
    utilities: Utilities,
    housing:  Housing,
    rail: "https://images.unsplash.com/photo-1519817650390-64a93db51149",
    property:Property,
    fm: FacilitiesManagement,
    sustainability:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    expertise: "https://images.unsplash.com/photo-1552581234-26160f608093",
    mission: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  };

  return (
    <div className="bg-light-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
            Our Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            DHD leverages a diverse portfolio of expertise across key sectors to
            deliver comprehensive solutions and exceed client expectations.
          </p>
        </div>
      </section>

      {/* Horticulture Intro */}
      <section className="-mt-10 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl text-center px-8 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
            <img
              src={images.horticulture}
              alt="Horticulture Services"
              className="rounded-lg shadow-md w-full h-auto"
              loading="lazy" // Added lazy loading
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              "Cultivating Life's Landscapes"
            </h2>
            <p className="text-slate-600 mb-4">
              DHD is a leading provider of comprehensive horticulture and
              landscape development solutions. With a proven track record in the
              real estate and infrastructure development sectors, we specialize
              in creating sustainable and aesthetically pleasing green spaces
              that enhance the built environment.
            </p>
            <p className="text-slate-600">
              Our commitment to innovation, quality, and customer satisfaction
              drives us to deliver exceptional service and exceed client
              expectations.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Horticulture Services */}
        <section id="horticulture" className="mb-24">
          <SectionTitle
            title="Horticulture Services"
            icon={<FaLeaf className="text-3xl" />}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              image={images.architecture}
              title="Landscape Architecture & Design"
              icon={<FaTree />}
            >
              DHD offers expert landscape architectural services, encompassing
              master planning, site analysis, and conceptual design. Our
              experienced architects work closely with clients to develop
              customized solutions that harmonize with the surrounding
              environment and fulfill their unique vision.
            </ServiceCard>
            <ServiceCard
              image={images.development}
              title="Landscape Development & Construction"
              icon={<FaWrench />}
            >
              We provide turnkey landscape development and construction
              services, managing all aspects of the project from site
              preparation and planting to hardscaping and irrigation
              installation. Our skilled team ensures meticulous execution and
              adheres to the highest industry standards.
            </ServiceCard>
            <ServiceCard
              image={images.verticalGarden}
              title="Vertical Gardens & Bio Walls"
              icon={<FaSeedling />}
            >
              We specialize in the design and installation of innovative
              vertical gardens and bio walls, transforming interior and exterior
              spaces with lush greenery. These solutions maximize space
              utilization and create stunning visual focal points while
              promoting biodiversity and improving air quality.
            </ServiceCard>
            <ServiceCard
              image={images.corporateGreen}
              title="Corporate Green Solutions"
              icon={<FaBuilding />}
            >
              DHD offers tailored green solutions for corporate clients,
              including "Plants on Rent" and "Maali on Rent" programs. We
              understand the importance of a healthy and inspiring work
              environment and provide sustainable solutions that enhance
              employee well-being and promote corporate social responsibility.
            </ServiceCard>
            <ServiceCard
              image={images.gardenDesign}
              title="Garden Design & Maintenance"
              icon={<FaLeaf />}
            >
              Our team of horticultural experts provides comprehensive garden
              design and maintenance services, ensuring vibrant and thriving
              landscapes. We offer a wide selection of plants, decorative
              elements, and maintenance programs to suit diverse needs and
              preferences.
            </ServiceCard>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8 text-oxford-blue">
            Specialized Horticultural Services
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image={images.grass}
              title="Grass Plantation"
              icon={<FaGlobe />}
            >
              We offer a diverse selection of high-quality grasses suitable for
              various applications, including lawns, sports fields, and erosion
              control.
            </ServiceCard>
            <ServiceCard
              image={images.terrace}
              title="Terrace Gardening"
              icon={<FaHome />}
            >
              We create functional and aesthetically pleasing terrace gardens,
              maximizing outdoor living space and promoting urban agriculture.
            </ServiceCard>
            <ServiceCard
              image={images.kitchen}
              title="Kitchen Gardening"
              icon={<FaSeedling />}
            >
              We design and implement kitchen gardens, enabling clients to
              cultivate fresh produce in limited spaces.
            </ServiceCard>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="mb-24 bg-white rounded-xl shadow-md p-8">
          <SectionTitle title="Our Horticulture Expertise" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaTree className="text-4xl mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Horticulture Expertise
              </h3>
              <p>
                Our team comprises experienced horticulturists with in-depth
                knowledge of plant selection, care, and maintenance.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaRecycle className="text-4xl mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Sustainable Practices
              </h3>
              <p>
                We are committed to environmentally sustainable practices,
                utilizing water-efficient irrigation systems, organic
                fertilizers, and integrated pest management strategies.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaWater className="text-4xl mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Customer-Centric Approach
              </h3>
              <p>
                We prioritize building strong client relationships and providing
                personalized service to ensure complete satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <MissionStatement
          title="Our Mission"
          text="To be the preferred partner for creating and maintaining exceptional green spaces that enhance the quality of life and promote a sustainable future."
        />

        {/* Infrastructure Services */}
        <section id="infrastructure" className="mt-24">
          <SectionTitle
            title="Infrastructure & Building Solutions"
            subtitle="DHD Group: Delivering Excellence Across Diverse Sectors"
            icon={<FaCity className="text-3xl" />}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image={images.infrastructure}
              title="Infrastructure"
              icon={<FaRoad />}
            >
              We specialize in the execution of complex infrastructure and civil
              engineering projects on a global scale, contributing to the
              development of essential infrastructure networks. Our capabilities
              encompass a wide range of project types, including transportation,
              energy, water resources, and urban development.
            </ServiceCard>
            <ServiceCard
              image={images.utilities}
              title="Utilities"
              icon={<FaWater />}
            >
              DHD provides expert installation and maintenance services for
              vital utility connections, ensuring the seamless operation of
              water, energy, and telecommunications networks. We are committed
              to delivering reliable and sustainable solutions that support the
              needs of communities and businesses.
            </ServiceCard>
            <ServiceCard
              image={images.housing}
              title="Housing Maintenance"
              icon={<FaHome />}
            >
              Through DHD Places, our dedicated property management division, we
              offer comprehensive housing maintenance services to social
              landlords worldwide. Our expertise encompasses repairs, planned
              maintenance, fire safety compliance, and the implementation of
              energy-efficient solutions.
            </ServiceCard>
            <ServiceCard image={images.rail} title="Rail" icon={<FaTrain />}>
              DHD plays a critical role in the development and modernization of
              rail infrastructure. We provide specialized signaling and power
              solutions, ensuring the safe and efficient operation of this vital
              transportation mode.
            </ServiceCard>
            <ServiceCard
              image={images.property}
              title="Property"
              icon={<FaBuilding />}
            >
              We strategically invest in and develop property assets globally,
              maximizing their potential to create thriving spaces for
              communities and businesses. Our expertise spans a wide range of
              property types, including residential, commercial, and mixed-use
              developments.
            </ServiceCard>
            <ServiceCard
              image={images.fm}
              title="Facilities Management"
              icon={<FaWrench />}
            >
              DHD Places provides comprehensive facilities management services,
              ensuring the optimal operation of buildings and infrastructure.
              Our services encompass building maintenance, energy management,
              security, and sustainability initiatives.
            </ServiceCard>
          </div>
        </section>

        {/* Sustainability Section */}
        <section
          id="sustainability"
          className="mt-24 bg-white rounded-xl shadow-md p-8"
        >
          <SectionTitle
            title="Sustainability Building Design at DHD"
            subtitle="Sustainably Built. Delivering Quality & Comfort."
            icon={<FaRecycle className="text-3xl" />}
          />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={images.sustainability}
                alt="Sustainable Building"
                className="rounded-lg shadow-md w-full h-auto"
                loading="lazy" // Added lazy loading
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4">
                DHD has been a leader in sustainable building design and
                construction for over a decade. As a proud patron of the
                Sustainability Building Trust, DHD actively promotes the
                adoption of this leading international low-energy design
                standard.
              </p>
              <p className="mb-4">
                With a portfolio of over 50 certified buildings worldwide, we
                have demonstrated our commitment to sustainable construction
                across diverse sectors, including commercial, industrial,
                education, residential, and leisure.
              </p>
              <p className="mb-6">
                Recognizing the global climate emergency and the increasing need
                for resilient communities, DHD prioritizes sustainable building
                practices. Our approach encompasses all aspects of construction,
                from design and build to occupant comfort and long-term
                efficiency.
              </p>

              <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Low air permeability</li>
                <li>Enhanced insulation</li>
                <li>Elimination of cold bridging</li>
                <li>
                  Optimized ventilation with a constant supply of fresh air
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <p>
              All Sustainability Building projects adhere to a rigorous quality
              assurance process, verified by an independent certifier to ensure
              compliance with the stringent criteria defined by the
              Sustainability Building Institute. Sustainability Building
              projects represent the optimal balance of quality, innovation, and
              environmental responsibility.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExpertisePage;
