import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import rail from "../../assets/rail.jpg"

export default function Rail() {
  usePageTitle("Rail");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Rail
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
              Modernizing Rail
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Infrastructure
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              DHD plays a critical role in the development and modernization of rail
              infrastructure. We provide specialized signaling and power solutions,
              ensuring the safe and efficient operation of this vital transportation
              mode.
            </p>
          </div>
          {/* Image Content */}
          <div>
            <img
              src={rail}
              alt="Modern train at a station"
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
