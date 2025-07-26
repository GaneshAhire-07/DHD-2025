import { Link } from 'react-router-dom';
import React from 'react';

const OurExpertise = () => {
  const expertiseItems = [
    { title: "Horticulture Services", desc: "“Cultivating Life’s Landscapes”. We provide comprehensive horticulture and landscape solutions. [cite: 492, 495]", link: "/horticulture-services", img: "https://img.freepik.com/free-photo/beautiful-garden_74190-1017.jpg" },
    { title: "Infrastructure", desc: "We specialize in the execution of complex infrastructure and civil engineering projects on a global scale. [cite: 536]", link: "/infrastructure", img: "https://img.freepik.com/free-photo/bridge-with-lights_1127-3136.jpg" },
    { title: "Utilities", desc: "DHD provides expert installation and maintenance services for vital utility connections. [cite: 540]", link: "/utilities", img: "https://img.freepik.com/free-photo/power-lines_1127-3135.jpg" },
    { title: "Housing Maintenance", desc: "Through DHD Places, we offer comprehensive housing maintenance services to social landlords worldwide. [cite: 544]", link: "/housing-maintenance", img: "https://img.freepik.com/free-photo/modern-house-exterior_1359-1120.jpg" },
    { title: "Rail", desc: "DHD plays a critical role in the development and modernization of rail infrastructure. [cite: 548]", link: "/rail", img: "https://img.freepik.com/free-photo/train-station_1127-3134.jpg" },
    { title: "Property", desc: "We strategically invest in and develop property assets globally, maximizing their potential. [cite: 552]", link: "/property", img: "https://img.freepik.com/free-photo/modern-building_1127-3133.jpg" },
    { title: "Facilities Management", desc: "DHD Places provides comprehensive facilities management services, ensuring optimal operation of buildings. [cite: 556]", link: "/facilities-management", img: "https://img.freepik.com/free-photo/office-building_1127-3132.jpg" },
    { title: "Environmental Targets", desc: "DHD collaborates with local authorities to optimize service delivery and achieve critical environmental targets. [cite: 560]", link: "/environmental-targets", img: "https://img.freepik.com/free-photo/wind-turbines_1127-3131.jpg" },
    { title: "Sustainability Building Design", desc: "DHD has been a leader in sustainable building design and construction for over a decade. [cite: 564]", link: "/sustainability-design", img: "https://img.freepik.com/free-photo/green-building_1127-3130.jpg" }
  ];

  return (
    <div id="our-expertise" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Expertise</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            [cite_start]DHD leverages a diverse portfolio of expertise across key sectors to deliver comprehensive solutions and exceed client expectations. [cite: 490]
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item) => (
            <Link to={item.link} key={item.title} className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurExpertise;