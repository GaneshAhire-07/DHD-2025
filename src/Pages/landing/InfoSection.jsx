// src/components/InfoSection.jsx
import React from "react";

const InfoSection = ({ title, imageSrc, alt, children, reverse = false }) => (
  <section className="bg-white shadow-lg rounded-xl mb-12 overflow-hidden">
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/3">
        {imageSrc && (
          <img className="h-full w-full object-cover" src={imageSrc} alt={alt} />
        )}
      </div>
      <div className="md:w-2/3 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-oxford-blue mb-4">{title}</h2>
        <div className="text-gray-600 space-y-4 text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default InfoSection;