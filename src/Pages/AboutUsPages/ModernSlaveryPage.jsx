import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import su from "../../assets/su.avif";
const ModernSlaveryPage = () => {
  usePageTitle("Modern Slavery");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg max-w-4xl mx-auto">
          Modern Slavery Statement
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Commitment to
              <span className="bg-gradient-to-r from-gray-500 to-slate-600 bg-clip-text text-transparent">
                {" "}
                Ethical Practices
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              DHD Group is committed to preventing acts of modern slavery and
              human trafficking from occurring within its business and supply
              chain. We impose the same high standards on our suppliers and
              partners.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              Due Diligence & Policy
            </h3>
            <ul className="text-slate-600 text-base list-disc list-inside space-y-2 pl-2">
              <li>
                Identify and assess potential risk areas in our supply chains.
              </li>
              <li>
                Mitigate the risk of slavery and human trafficking occurring.
              </li>
              <li>Monitor potential risk areas in our supply chains.</li>
              <li>Protect whistleblowers through our anti-slavery policy.</li>
            </ul>
          </div>
          {/* Image Content */}
          <div>
            <img
              src={su}
              alt="Hands connecting puzzle pieces, symbolizing partnership and ethical supply chains"
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
};

export default ModernSlaveryPage;
