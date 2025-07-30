import React from 'react';

const CovidRiskAssessmentPage = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            COVID-19 Secure Risk Assessment
          </h1>
          <div className="text-gray-700 space-y-4">
            <p>
              DHD Group is committed to providing a safe and secure environment for all our employees, clients, and partners. In response to the COVID-19 pandemic, we have implemented a comprehensive risk assessment and a series of control measures to minimize the risk of transmission.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Our Commitment</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>We have carried out a COVID-19 risk assessment and shared the results with the people who work here.</li>
              <li>We have cleaning, handwashing, and hygiene procedures in line with guidance.</li>
              <li>We have taken all reasonable steps to help people work from home.</li>
              <li>Where people cannot work from home, we have taken all reasonable steps to maintain a safe distance in the workplace.</li>
            </ul>
            <p className="mt-4">
              This assessment is reviewed regularly to ensure it remains relevant and effective in the evolving public health landscape.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CovidRiskAssessmentPage;
