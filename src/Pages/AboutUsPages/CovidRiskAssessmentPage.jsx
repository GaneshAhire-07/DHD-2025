import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import covid from "../../assets/covid.webp"
const CovidRiskAssessmentPage = () => {
  usePageTitle("Covid Risk Assessment");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-4xl font-extrabold drop-shadow-lg max-w-4xl mx-auto">
          COVID-19 Secure Risk Assessment
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Content */}
          <div>
            <img
              src={covid}
              alt="Person wearing a mask in a professional setting"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Our Commitment to
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Safety
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              DHD Group is committed to providing a safe environment. In response to the COVID-19 pandemic, we have implemented a comprehensive risk assessment and control measures to minimize transmission risk.
            </p>
            <ul className="text-slate-600 text-base list-disc list-inside space-y-2 pl-2">
              <li>We have carried out a COVID-19 risk assessment and shared the results.</li>
              <li>Cleaning, handwashing, and hygiene procedures are in line with guidance.</li>
              <li>We have taken all reasonable steps to help people work from home.</li>
              <li>Where remote work isn't possible, we ensure safe distancing in the workplace.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CovidRiskAssessmentPage;
