import React from "react";
import InternImage from "../../assets/Internships&Placement.jpg";

const InternshipsAndPlacements = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Internships & Placements
      </h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={InternImage}
          alt="Intern collaborating on design"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg text-gray-700">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Gain Real-World Experience
        </h2>
        <p>
          Our internships and industrial placements offer hands-on experience
          and valuable insights into the diverse world of infrastructure,
          building, and development.
        </p>
      </div>
    </div>
  );
};

export default InternshipsAndPlacements;