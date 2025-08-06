import React from "react";
import client1 from "../../assets/1.png";
import client2 from "../../assets/2.png";
import client3 from "../../assets/3.png";
import client4 from "../../assets/4.png";
import client5 from "../../assets/5.png";
import { FaBuilding } from "react-icons/fa";

// Client data array for cleaner code
const clientsData = [
  { img: client1, name: "Client 1", delay: 0 },
  { img: client2, name: "Client 2", delay: 100 },
  { img: client3, name: "Client 3", delay: 200 },
  { img: client4, name: "Client 4", delay: 300 },
  { img: client5, name: "Client 5", delay: 400 },
  { img: client2, name: "Client 6", delay: 500 }, // Using placeholder images
  { img: client3, name: "Client 7", delay: 600 }, // Using placeholder images
  { img: client4, name: "Client 8", delay: 700 }, // Using placeholder images
];

// ClientLogo component to keep the map function clean
const ClientLogo = ({ client }) => (
  <div
    className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center h-40"
    data-aos="fade-up"
    data-aos-delay={client.delay}
  >
    <img
      src={client.img}
      alt={client.name}
      className="max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
    />
  </div>
);

function OurClients() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- MODIFIED HEADER SECTION --- */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Trusted By Industry Leaders
          </h2>
        </div>
        {/* --- END OF MODIFIED HEADER SECTION --- */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clientsData.map((client, index) => (
            <ClientLogo key={index} client={client} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            type="button"
            className="inline-flex items-center px-8 py-4 bg-[#162034] text-white font-semibold rounded-lg shadow-md hover:bg-[#273c64] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            <FaBuilding className="mr-3" />
            Become Our Partner
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
