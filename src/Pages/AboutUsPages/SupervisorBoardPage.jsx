import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import supervisorBoard from "../../assets/supervisorBoard.jpg";

const SupervisorBoardPage = () => {
  usePageTitle("Supervisor Board");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg max-w-4xl mx-auto">
          Supervisor Board
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Oversight &
              <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Guidance
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              The Supervisor Board of DHD Group provides oversight and guidance
              to the executive management, ensuring the company operates in line
              with its strategic objectives, values, and legal obligations.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              Responsibilities
            </h3>
            <ul className="text-slate-600 text-base list-disc list-inside space-y-2 pl-2">
              <li>Reviewing and approving long-term corporate strategy.</li>
              <li>Overseeing financial performance and risk management.</li>
              <li>Ensuring robust corporate governance and compliance.</li>
              <li>Appointing and evaluating senior executives.</li>
            </ul>
          </div>
          {/* Image Content */}
          <div>
            <img
              src={supervisorBoard}
              alt="Professional board meeting in a modern office"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupervisorBoardPage;
