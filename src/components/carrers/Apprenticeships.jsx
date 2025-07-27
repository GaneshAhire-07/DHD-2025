import React from "react";
import ApprenticeshipImage from "../../assets/ApprenticeshipConstruction.jpg"; 

const Apprenticeships = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Apprenticeships</h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={ApprenticeshipImage}
          alt="Apprentice working with mentor"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg leading-relaxed text-gray-700">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Working and Learning in Parallel
        </h2>
        <p>
          Combine practical training with academic study in our apprenticeship
          programs, gaining valuable skills and qualifications while earning a
          competitive salary.
        </p>
      </div>
    </div>
  );
};

export default Apprenticeships;