import React from "react";
import GraduatesImage from "../../assets/Graduate.jpeg"; // ✅ Image import
const Graduates = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Graduates</h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={GraduatesImage}
          alt="Graduate engineer presenting project"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg text-gray-700">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Launch Your Career with DHD
        </h2>
        <p>
          Kickstart your career with our graduate programs, designed to provide
          you with the skills and experience you need to succeed in the built
          environment.
        </p>
      </div>
    </div>
  );
};

export default Graduates;
