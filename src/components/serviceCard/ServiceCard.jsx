import React from "react";

const ServiceCard = ({ image, alt, title, description, delay = 0 }) => (
  <article className="service-item" data-aos="fade-up" data-aos-delay={delay}>
    <div className="horticulture-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <img
        src={image}
        alt={alt}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        onError={(e) => (e.target.src = "https://via.placeholder.com/600/400?text=Image+Not+Found")}
      />
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-oxford-blue mt-4 uppercase">{title}</h3>
        <p className="text-base text-medium-gray mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  </article>
);

export default ServiceCard;