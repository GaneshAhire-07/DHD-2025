import React from "react";
import horticulture from "../../assets/horticulture.jpg";
import cityPark from "../../assets/city-park-with-lake.jpg";
import sustainablePractices from "../../assets/sustainable-practises.jpg";
import customerCentric from "../../assets/customer-centric.jpg";

function OurExpertise() {
  return (
    <section className="bg-off-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading and Subtitle */}
        <div className="mbr-section-head text-center">
          <h4 className="text-42px font-montserrat font-bold text-charcoal-gray mb-2 uppercase">
            <strong>Our Expertise</strong>
          </h4>
          <h5 className="text-16px font-roboto text-medium-gray mb-8 leading-relaxed">
            <div>We deliver excellence across industries, backed by</div>
            <div>multi-sector expertise and a customer-first approach.</div>
          </h5>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Specialized Horticultural Services */}
          <div className="item features-image" data-aos="fade-up">
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={horticulture}
                  alt="Specialized Horticultural Services"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="item-content">
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                  <strong>Specialized Horticultural Services</strong>
                </h5>
                <p className="mbr-text text-16px text-medium-gray mt-3">
                  Transforming spaces through vertical gardens, terrace farming, and sustainable green designs.
                </p>
              </div>
            </div>
          </div>

          {/* DHD: Enhancing Landscapes, Enriching Lives */}
          <div className="item features-image" data-aos="fade-up" data-aos-delay="100">
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={cityPark}
                  alt="DHD: Enhancing Landscapes, Enriching Lives"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="item-content">
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                  <strong>DHD: Enhancing Landscapes, Enriching Lives</strong>
                </h5>
                <p className="mbr-text text-16px text-medium-gray mt-3">
                  DHD is a leading provider of comprehensive horticulture and landscape development solutions
                </p>
              </div>
            </div>
          </div>

          {/* Sustainable Practices */}
          <div className="item features-image" data-aos="fade-up" data-aos-delay="200">
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={sustainablePractices}
                  alt="Sustainable Practices"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="item-content">
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                  <strong>Sustainable Practices</strong>
                </h5>
                <p className="mbr-text text-16px text-medium-gray mt-3">
                  We are committed to environmentally sustainable practices, utilizing water-efficient irrigation systems, organic fertilizers, and integrated pest management strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Customer-Centric Approach */}
          <div className="item features-image" data-aos="fade-up" data-aos-delay="300">
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={customerCentric}
                  alt="Customer-Centric Approach"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="item-content">
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray mt-4 uppercase">
                  <strong>Customer-Centric Approach</strong>
                </h5>
                <p className="mbr-text text-16px text-medium-gray mt-3">
                  We prioritize building strong client relationships and providing personalized service to ensure complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;