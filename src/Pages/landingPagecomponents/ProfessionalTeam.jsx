import React from "react";
import johnSmith from "../../assets/mbr-1-816x544.jpg";
import sarahPalmer from "../../assets/mbr-3-596x397.jpg";
import jamesSwift from "../../assets/mbr-2-596x397.jpg";
import helenSmith from "../../assets/mbr-596x401.jpeg";

function ProfessionalTeam() {
  return (
    <section className="bg-off-white py-12">
      <div className="container mx-auto px-4">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-8">
            <h3 className="text-32px font-montserrat font-bold text-charcoal-gray uppercase">
              <strong>Professional Team</strong>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* John Smith */}
            <div className="card-wrap" data-aos="fade-up">
              <div className="image-wrap">
                <img
                  src={johnSmith}
                  alt="John Smith"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="content-wrap text-center mt-4">
                <h5 className="card-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>John Smith</strong>
                </h5>
                <h6 className="mbr-role text-16px font-roboto text-medium-gray mb-2">
                  <strong>Trader</strong>
                </h6>
                <p className="card-text text-16px text-medium-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mbr-section-btn card-btn mt-4">
                  <a
                    href="https://mobiri.se"
                    className="btn px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Sarah Palmer */}
            <div className="card-wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="image-wrap">
                <img
                  src={sarahPalmer}
                  alt="Sarah Palmer"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="content-wrap text-center mt-4">
                <h5 className="card-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Sarah Palmer</strong>
                </h5>
                <h6 className="mbr-role text-16px font-roboto text-medium-gray mb-2">
                  <strong>Manager</strong>
                </h6>
                <p className="card-text text-16px text-medium-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mbr-section-btn card-btn mt-4">
                  <a
                    href="https://mobiri.se"
                    className="btn px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* James Swift */}
            <div className="card-wrap" data-aos="fade-up" data-aos-delay="200">
              <div className="image-wrap">
                <img
                  src={jamesSwift}
                  alt="James Swift"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="content-wrap text-center mt-4">
                <h5 className="card-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>James Swift</strong>
                </h5>
                <h6 className="mbr-role text-16px font-roboto text-medium-gray mb-2">
                  <strong>Trader</strong>
                </h6>
                <p className="card-text text-16px text-medium-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mbr-section-btn card-btn mt-4">
                  <a
                    href="https://mobiri.se"
                    className="btn px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Helen Smith */}
            <div className="card-wrap" data-aos="fade-up" data-aos-delay="300">
              <div className="image-wrap">
                <img
                  src={helenSmith}
                  alt="Helen Smith"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="content-wrap text-center mt-4">
                <h5 className="card-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Helen Smith</strong>
                </h5>
                <h6 className="mbr-role text-16px font-roboto text-medium-gray mb-2">
                  <strong>Manager</strong>
                </h6>
                <p className="card-text text-16px text-medium-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mbr-section-btn card-btn mt-4">
                  <a
                    href="https://mobiri.se"
                    className="btn px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalTeam;