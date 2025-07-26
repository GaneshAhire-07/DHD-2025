import React from "react";

function OurProcess() {
  return (
    <section className="relative bg-off-white py-12 bg-parallax" style={{ backgroundImage: "url(/path/to/background-image.jpg)", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-white opacity-90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card-wrapper mb-8">
              <div className="card-box text-center">
                <h4 className="card-title text-42px font-montserrat font-bold text-charcoal-gray mb-4 uppercase">
                  <strong>Our Process</strong>
                </h4>
                <p className="mbr-text text-16px font-roboto text-medium-gray mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa, efficitur varius augue. In vel elit lorem. Fusce et dui fringilla, suscipit nulla sed, viverra nunc. Nulla ut justo ut enim vehicula maximus. Nam et neque tempus, ultricies purus vel, suscipit leo.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {/* Contact Us */}
            <div className="item first mbr-flex flex-col p-4 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div className="icon-wrap w-full flex justify-center">
                <div className="icon-box bg-deep-red text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="step-number text-2xl font-montserrat">1</span>
                </div>
              </div>
              <div className="text-box mt-4 text-center">
                <h4 className="icon-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Contact Us</strong>
                </h4>
                <h5 className="mbr-text text-16px font-roboto text-medium-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa efficitur.
                </h5>
              </div>
            </div>

            {/* Arrow between Contact Us and Buy Discovery */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-2/4 -ml-6 z-10">
              <div className="w-12 h-12 bg-deep-red text-white flex items-center justify-center rotate-45 transform origin-center">
                <span className="text-xl font-montserrat">&rarr;</span>
              </div>
            </div>

            {/* Buy Discovery */}
            <div className="item mbr-flex flex-col p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrap w-full flex justify-center">
                <div className="icon-box bg-deep-red text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="step-number text-2xl font-montserrat">2</span>
                </div>
              </div>
              <div className="text-box mt-4 text-center">
                <h4 className="icon-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Buy Discovery</strong>
                </h4>
                <h5 className="mbr-text text-16px font-roboto text-medium-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa efficitur.
                </h5>
              </div>
            </div>

            {/* Arrow between Buy Discovery and Start Working */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-2/4 -ml-6 z-10">
              <div className="w-12 h-12 bg-deep-red text-white flex items-center justify-center rotate-45 transform origin-center">
                <span className="text-xl font-montserrat">&rarr;</span>
              </div>
            </div>

            {/* Start Working */}
            <div className="item mbr-flex flex-col p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrap w-full flex justify-center">
                <div className="icon-box bg-deep-red text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="step-number text-2xl font-montserrat">3</span>
                </div>
              </div>
              <div className="text-box mt-4 text-center">
                <h4 className="icon-title text-16px font-lato font-bold text-charcoal-gray uppercase">
                  <strong>Start Working</strong>
                </h4>
                <h5 className="mbr-text text-16px font-roboto text-medium-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dapibus massa efficitur.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;