import React from "react";
import client1 from "../../assets/1.png";
import client2 from "../../assets/2.png";
import client3 from "../../assets/3.png";
import client4 from "../../assets/4.png";
import client5 from "../../assets/5.png";
import { FaBuilding, FaHandshake } from "react-icons/fa";

function OurClients() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            <FaHandshake className="mx-4 text-blue-500 text-2xl" />
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted By <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with top organizations across various sectors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[
            { img: client1, name: "Client 1", delay: 0 },
            { img: client2, name: "Client 2", delay: 100 },
            { img: client3, name: "Client 3", delay: 200 },
            { img: client4, name: "Client 4", delay: 300 },
            { img: client5, name: "Client 5", delay: 400 },
            { img: client2, name: "Client 6", delay: 500 },
            { img: client3, name: "Client 7", delay: 600 },
            { img: client4, name: "Client 8", delay: 700 },
          ].map((client, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center h-40"
              data-aos="fade-up"
              data-aos-delay={client.delay}
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <FaBuilding className="mr-2" />
            Become Our Partner
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
