import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import system from "../../assets/system.avif";
const HumanTraffickingPage = () => {
  usePageTitle("Human Trafficking");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg max-w-4xl mx-auto">
          Human Trafficking Statement
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Content */}
          <div className="md:order-2">
            <img
              src={system}
              alt="Hand reaching towards the sky, symbolizing freedom and hope"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="text-left md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              A
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Zero-Tolerance
              </span>{" "}
              Approach
            </h2>
            <p className="text-slate-600 text-base leading-relaxed space-y-4">
              DHD Group has a zero-tolerance approach to human trafficking. We
              are committed to ensuring that there is no modern slavery or human
              trafficking in our supply chains or in any part of our business.
              <br />
              <br />
              This statement is made pursuant to section 54(1) of the Modern
              Slavery Act 2015. We are committed to improving our practices to
              combat slavery and human trafficking and ensuring our
              organizational policies and supplier relationships reflect this
              commitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanTraffickingPage;
