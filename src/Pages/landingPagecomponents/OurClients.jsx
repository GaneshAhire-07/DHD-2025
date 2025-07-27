import React from "react";
import client1 from "../../assets/1.png";
import client2 from "../../assets/2.png";
import client3 from "../../assets/3.png";
import client4 from "../../assets/4.png";
import client5 from "../../assets/5.png";

function OurClients() {
  return (
    <section className="bg-off-white py-12">
      <div className="images-container container mx-auto px-4">
        <div className="mbr-section-head text-center">
          <h3 className="text-32px font-montserrat font-bold text-charcoal-gray mb-2 uppercase">
            <strong>Our Clients</strong>
          </h3>
          <h4 className="text-16px font-roboto text-medium-gray mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
        </div>
        <div className="row justify-content-center grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="col-md-3 card" data-aos="fade-up">
            <img src={client1} alt="Client 1" className="w-full h-24 object-contain mx-auto" />
          </div>
          <div className="col-md-3 card" data-aos="fade-up" data-aos-delay="100">
            <img src={client2} alt="Client 2" className="w-full h-24 object-contain mx-auto" />
          </div>
          <div className="col-md-3 card" data-aos="fade-up" data-aos-delay="200">
            <img src={client3} alt="Client 3" className="w-full h-24 object-contain mx-auto" />
          </div>
          <div className="col-md-3 card" data-aos="fade-up" data-aos-delay="300">
            <img src={client4} alt="Client 4" className="w-full h-24 object-contain mx-auto" />
          </div>
          <div className="col-md-3 card" data-aos="fade-up" data-aos-delay="400">
            <img src={client2} alt="Client 2" className="w-full h-24 object-contain mx-auto" />
          </div>
          <div className="col-md-3 card" data-aos="fade-up" data-aos-delay="500">
            <img src={client3} alt="Client 3" className="w-full h-24 object-contain mx-auto" />
          </div>
          <div className="col-md-3 card" data-aos="fade-up" data-aos-delay="600">
            <img src={client4} alt="Client 4" className="w-full h-24 object-contain mx-auto" />
          </div>
          <div className="col-md-3 card" data-aos="fade-up" data-aos-delay="700">
            <img src={client5} alt="Client 5" className="w-full h-24 object-contain mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;