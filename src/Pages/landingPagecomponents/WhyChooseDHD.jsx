import React from "react";
import bannerImg from "../../assets/banner-img1-710x750.png";

function WhyChooseDHD() {
  return (
    <section className="bg-off-white py-12">
      <div className="container mx-auto px-4">
        <div className="content-wrapper">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="text-wrapper">
                <h6 className="text-42px font-montserrat font-bold text-charcoal-gray mb-4 uppercase">
                  <strong>Why Choose DHD</strong>
                </h6>
                <p className="text-16px font-roboto text-medium-gray mb-6 leading-relaxed">
                  <br />✔ Proven expertise across 15+ sectors<br /><br />🌱
                  Sustainability-first approach (Net Zero by 2030)<br /><br />🤝
                  Long-term partnerships & local community value<br /><br />📊
                  BIM & modern construction integration<br /><br />🔐 ISO
                  14001:2015 certified governance & safety practices
                </p>
                <div className="mt-6">
                  <a
                    href="https://mobiri.se"
                    className="px-6 py-2 border-2 border-deep-red text-deep-red font-medium rounded-lg hover:bg-deep-red hover:text-white transition duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="image-wrapper">
                <img
                  src={bannerImg}
                  alt="Why Choose DHD"
                  className="w-full h-auto object-cover rounded-lg border border-silver hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseDHD;