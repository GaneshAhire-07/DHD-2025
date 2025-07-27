import React from "react";
import WorkingImage from  '../../assets/WorkingExperienceConstruction.jpg';
 // ✅ Image import

const WorkingExperience = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Work Experience</h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={WorkingImage}
          alt="Students at site visit"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg leading-relaxed text-gray-700">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Your Chance to Sample the World of Work
        </h2>
        <p>
          Gain valuable insights into the built environment through our work
          experience programs.
        </p>
      </div>
    </div>
  );
};

export default WorkingExperience;