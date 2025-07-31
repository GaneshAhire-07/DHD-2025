import React from "react";
import building from "../../assets/building.avif";
import usePageTitle from "../../hooks/usePageTitle";

// The main component for the Sustainability Building Design page.
export default function SustainabilityPage() {
  usePageTitle("Sustainability");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg max-w-4xl mx-auto">
          Sustainability Building Design
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Content */}
          <div className="md:order-2">
            <img
              src={building}
              alt="Modern sustainable building with green features"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="max-w-3xl mx-auto text-left md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              A Leader in
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Sustainable Construction
              </span>
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                DHD has been a leader in sustainable building design and
                construction for over a decade. As a proud patron of the
                Sustainability Building Trust, DHD actively promotes the
                adoption of this leading international low-energy design
                standard.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 pt-4">
                Quality & Comfort
              </h3>
              <p>
                Sustainability Building structures prioritize occupant
                well-being while minimizing energy consumption. This is achieved
                through:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Low air permeability & enhanced insulation</li>
                <li>Elimination of cold bridging</li>
                <li>
                  Optimized ventilation with a constant supply of fresh air
                </li>
              </ul>
              <p>
                All projects adhere to a rigorous quality assurance process,
                verified by an independent certifier to ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
