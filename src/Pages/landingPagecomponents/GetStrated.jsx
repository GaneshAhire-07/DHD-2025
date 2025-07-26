import React from "react";
import marketAnalysis from "../../assets/mbr-816x544.jpg";
import marginTrading from "../../assets/mbr-1-816x544.jpg";
import stableIncome from "../../assets/mbr-816x524.jpg";

function GetStarted() {
  return (
    <section className="bg-off-white py-12">
      <div className="container mx-auto px-4">
        <div className="mbr-section-head text-center">
          <h4 className="text-42px font-montserrat font-bold text-charcoal-gray mb-8 uppercase">
            <strong>Get Started</strong>
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Market Analysis */}
          <div className="item features-image" data-aos="fade-up">
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={marketAnalysis}
                  alt="Market Analysis"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="item-content mt-4">
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Market Analysis</strong>
                </h5>
                <p className="mbr-text text-16px text-medium-gray mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa varius augue. In vel elit lorem.
                </p>
              </div>
              <div className="mbr-section-btn item-footer mt-4">
                <a
                  href=""
                  className="btn px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  target="_blank"
                >
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>

          {/* Margin Trading */}
          <div className="item features-image" data-aos="fade-up" data-aos-delay="100">
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={marginTrading}
                  alt="Margin Trading"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="item-content mt-4">
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Margin Trading</strong>
                </h5>
                <p className="mbr-text text-16px text-medium-gray mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa varius augue. In vel elit lorem.
                </p>
              </div>
              <div className="mbr-section-btn item-footer mt-4">
                <a
                  href=""
                  className="btn px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  target="_blank"
                >
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>

          {/* Stable Income */}
          <div className="item features-image" data-aos="fade-up" data-aos-delay="200">
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={stableIncome}
                  alt="Stable Income"
                  className="w-full h-64 object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="item-content mt-4">
                <h5 className="item-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Stable Income</strong>
                </h5>
                <p className="mbr-text text-16px text-medium-gray mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa varius augue. In vel elit lorem.
                </p>
              </div>
              <div className="mbr-section-btn item-footer mt-4">
                <a
                  href=""
                  className="btn px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  target="_blank"
                >
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;