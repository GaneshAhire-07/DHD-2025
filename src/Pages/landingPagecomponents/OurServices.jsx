import React from "react";
import landscapeArchi from "../../assets/landscapearchi.jpg";
import landscapeDev from "../../assets/landscapedev.jpg";
import verticalGarden from "../../assets/verticalGarden.jpg";
import corporateGreen from "../../assets/corporategreen.jpg";
import gardenDesign from "../../assets/gardendesign.jpg";
import grassPlantation from "../../assets/grassplantation.jpg";
import terraceGarden from "../../assets/terracegarden.jpg";
import kitchenGarden from "../../assets/kitchengarden.jpg";

function OurServices() {
  return (
    <section className="bg-off-white py-12">
      <div className="container mx-auto px-4">
        {/* Our Services Heading */}
        <h2 className="text-center text-32px font-montserrat font-bold text-charcoal-gray mb-8" data-aos="fade-down">
          <strong>Our Services</strong>
        </h2>

        {/* First Row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Landscape Architecture */}
          <div className="service-item" data-aos="fade-up">
            <div className="horticulture-card">
              <img
                src={landscapeArchi}
                alt="Landscape Architecture"
                className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
              />
              <h6 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                Landscape Architecture & Design
              </h6>
              <p className="text-16px text-medium-gray mt-2">
                DHD offers expert architectural services including master planning, site analysis, and conceptual design aligned with your vision and the environment.
              </p>
            </div>
          </div>

          {/* Landscape Development */}
          <div className="service-item" data-aos="fade-up" data-aos-delay="100">
            <div className="horticulture-card">
              <img
                src={landscapeDev}
                alt="Landscape Development"
                className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
              />
              <h6 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                Landscape Development & Construction
              </h6>
              <p className="text-16px text-medium-gray mt-2">
                Turnkey solutions from site prep to irrigation, ensuring precise execution of your landscape vision with top-tier industry standards.
              </p>
            </div>
          </div>

          {/* Vertical Gardens */}
          <div className="service-item" data-aos="fade-up" data-aos-delay="200">
            <div className="horticulture-card">
              <img
                src={verticalGarden}
                alt="Vertical Gardens"
                className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
              />
              <h6 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                Vertical Gardens & Bio Walls
              </h6>
              <p className="text-16px text-medium-gray mt-2">
                Innovative vertical green solutions that enhance aesthetics, save space, and improve biodiversity and air quality.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Corporate Green Solutions */}
          <div className="service-item" data-aos="fade-up">
            <div className="horticulture-card">
              <img
                src={corporateGreen}
                alt="Corporate Green"
                className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
              />
              <h6 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                Corporate Green Solutions
              </h6>
              <p className="text-16px text-medium-gray mt-2">
                We offer "Plants on Rent" and "Maali on Rent" to improve office spaces, boosting employee morale and sustainability.
              </p>
            </div>
          </div>

          {/* Garden Design */}
          <div className="service-item" data-aos="fade-up" data-aos-delay="100">
            <div className="horticulture-card">
              <img
                src={gardenDesign}
                alt="Garden Design"
                className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
              />
              <h6 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                Garden Design & Maintenance
              </h6>
              <p className="text-16px text-medium-gray mt-2">
                From plant selection to regular care, our horticulture team ensures your garden stays vibrant and healthy year-round.
              </p>
            </div>
          </div>
        </div>

        {/* Specialized Horticulture Services */}
        <div className="horticulture-container py-5 mx-auto">
          <h2 className="text-center text-32px font-montserrat font-bold text-charcoal-gray mb-8" data-aos="fade-down">
            <strong>Specialized Horticulture Services</strong>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {/* Grass Plantation */}
            <div className="service-item" data-aos="fade-up" data-aos-delay="200">
              <div className="horticulture-card">
                <img
                  src={grassPlantation}
                  alt="Grass Plantation"
                  className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                  <strong>Grass Plantation</strong>
                </h5>
                <p className="text-16px text-medium-gray mt-2">
                  High-quality grass options ideal for lawns, sports fields, and erosion control to suit all your green needs.
                </p>
              </div>
            </div>

            {/* Terrace Gardening */}
            <div className="service-item" data-aos="fade-up">
              <div className="horticulture-card">
                <img
                  src={terraceGarden}
                  alt="Terrace Gardening"
                  className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                  <strong>Terrace Gardening</strong>
                </h5>
                <p className="text-16px text-medium-gray mt-2">
                  Transform rooftops into lush green spaces that offer functionality and beauty for urban living.
                </p>
              </div>
            </div>

            {/* Kitchen Gardening */}
            <div className="service-item" data-aos="fade-up" data-aos-delay="100">
              <div className="horticulture-card">
                <img
                  src={kitchenGarden}
                  alt="Kitchen Gardening"
                  className="horticulture-img w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                  <strong>Kitchen Gardening</strong>
                </h5>
                <p className="text-16px text-medium-gray mt-2">
                  Grow your own herbs and vegetables even in compact spaces with our custom kitchen garden setups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;