import React from 'react';

const SupervisorBoardPage = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Supervisor Board
          </h1>
          <div className="text-gray-700 space-y-4">
            <p>
              The Supervisor Board of DHD Group provides oversight and guidance to the executive management, ensuring that the company operates in line with its strategic objectives, values, and legal obligations. The board is composed of experienced leaders from diverse backgrounds who bring a wealth of knowledge to the organization.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Reviewing and approving long-term corporate strategy.</li>
              <li>Overseeing financial performance and risk management.</li>
              <li>Ensuring robust corporate governance and compliance.</li>
              <li>Appointing and evaluating the performance of senior executives.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SupervisorBoardPage;
