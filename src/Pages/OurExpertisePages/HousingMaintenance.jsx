import React from "react";

// The main component for the Housing Maintenance page.
export default function HousingMaintenance() {
  return (
    <div>
      {/* Hero Section with a background image and overlay */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/modern-house-exterior_1359-1120.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-5xl font-extrabold text-center">
            Housing Maintenance
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002147] text-center mb-6">
            Comprehensive Property Management
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Through DHD Places, our dedicated property management division, we
            offer comprehensive housing maintenance services to social landlords
            worldwide. Our expertise encompasses repairs, planned maintenance,
            fire safety compliance, and the implementation of energy-efficient
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
