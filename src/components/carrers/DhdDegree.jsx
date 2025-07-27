import React from "react";
import DhdDegreeImage from "../../assets/DhdDegree.jpg"; // ✅ Image import

const DhdDegree = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">DHD Degree</h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={DhdDegreeImage}
          alt="DHD degree student working"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg text-gray-700">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Earn While You Learn</h2>
        <p>
          Our DHD Degree Programme allows you to earn a recognized BSc degree while gaining practical experience and earning a competitive salary.
        </p>
      </div>
    </div>
  );
};

export default DhdDegree;