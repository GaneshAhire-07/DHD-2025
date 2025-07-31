import React from "react";
import Property from "../../assets/property.jpg";
import usePageTitle from "../../hooks/usePageTitle";

export default function PropertyPage() {
  usePageTitle("Property");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Property
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Strategic Property
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Investment & Development
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We strategically invest in and develop property assets globally,
              maximizing their potential to create thriving spaces for
              communities and businesses. Our expertise spans a wide range of
              property types, including residential, commercial, and mixed-use
              developments.
            </p>
          </div>
          {/* Image Content */}
          <div>
            <img
              src={Property}
              alt="Modern architectural building"
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
