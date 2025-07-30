import React from 'react';

const ModernSlaveryPage = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Modern Slavery Statement
          </h1>
          <div className="text-gray-700 space-y-4">
            <p>
              DHD Group is committed to preventing acts of modern slavery and human trafficking from occurring within its business and supply chain. We impose the same high standards on our suppliers, contractors, and other business partners.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Our Policy</h2>
            <p>
              Our anti-slavery policy reflects our commitment to acting ethically and with integrity in all our business relationships and to implementing and enforcing effective systems and controls to ensure slavery and human trafficking are not taking place anywhere in our supply chains.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Due Diligence</h2>
            <p>
              As part of our initiative to identify and mitigate risk, we have in place systems to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Identify and assess potential risk areas in our supply chains.</li>
              <li>Mitigate the risk of slavery and human trafficking occurring in our supply chains.</li>
              <li>Monitor potential risk areas in our supply chains.</li>
              <li>Protect whistleblowers.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModernSlaveryPage;
