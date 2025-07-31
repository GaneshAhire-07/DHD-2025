import React from "react";
import power from "../../assets/power.avif";
import usePageTitle from "../../hooks/usePageTitle";
// The main component for the Utilities page.

// The main component for the Utilities page.
export default function UtilitiesPage() {
  usePageTitle("Utilities");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Utilities
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Reliable &
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Sustainable Solutions
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              DHD provides expert installation and maintenance services for
              vital utility connections, ensuring the seamless operation of
              water, energy, and telecommunications networks. We are committed
              to delivering reliable and sustainable solutions that support the
              needs of communities and businesses.
            </p>
          </div>
          {/* Image Content */}
          <div>
            <img
              src={power}
              alt="Utility Services"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/e2e8f0/334155?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
