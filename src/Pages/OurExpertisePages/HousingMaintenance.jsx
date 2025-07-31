import React from "react";
import modern from "../../assets/modern.avif";
import usePageTitle from "../../hooks/usePageTitle";

export default function HousingMaintenancePage() {
  usePageTitle("Housing Maintenance");
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Housing Maintenance
        </h1>
      </section>

      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img
              src={modern}
              alt="Well-maintained modern house"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Comprehensive Property
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Management
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Through DHD Places, our dedicated property management division, we
              offer comprehensive housing maintenance services to social
              landlords worldwide. Our expertise encompasses repairs, planned
              maintenance, fire safety compliance, and the implementation of
              energy-efficient solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
