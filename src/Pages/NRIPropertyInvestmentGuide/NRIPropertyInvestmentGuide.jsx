import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
const NRIPropertyInvestmentGuide = () => {
  usePageTitle("NRI Property Investment Guide");
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          NRI Property Investment Guide
        </h1>
      </section>

      {/* Introduction Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Investing in property in India can be a rewarding experience for
          Non-Resident Indians (NRIs).
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          DHD Group understands the unique needs and concerns of NRI investors
          and offers this comprehensive guide to simplify the process and ensure
          a smooth and successful investment journey.
        </p>
      </section>

      {/* Main Content Sections */}
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white rounded-2xl shadow-xl mb-10">
        {/* Who is an NRI? */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4 border-b-2 border-gray-200 pb-2">
            Who is an NRI?
          </h3>
          <p className="text-slate-700 leading-relaxed">
            An NRI is an Indian citizen who has resided outside of India for 180
            days or more in a financial year. Persons of Indian Origin (PIOs)
            and Overseas Citizens of India (OCIs) are also eligible to purchase
            property in India.
          </p>
        </section>

        {/* Property Purchase Restrictions for NRIs */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4 border-b-2 border-gray-200 pb-2">
            Property Purchase Restrictions for NRIs
          </h3>
          <p className="text-slate-700 leading-relaxed">
            NRIs, PIOs, and OCIs can acquire most types of property in India,
            with the exception of agricultural land, plantations, and farmland.
            No special permission from the Reserve Bank of India (RBI) is
            required for property purchases.
          </p>
        </section>

        {/* Required Documents for Property Purchase */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4 border-b-2 border-gray-200 pb-2">
            Required Documents for Property Purchase
          </h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Valid Passport</li>
            <li>Proof of Address</li>
            <li>Permanent Account Number (PAN Card)</li>
            <li>Recent Photograph</li>
          </ul>
        </section>

        {/* Funding Your Property Purchase */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4 border-b-2 border-gray-200 pb-2">
            Funding Your Property Purchase
          </h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            NRIs can fund their property purchase through various means,
            including:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>
              Non-Resident External (NRE) or Non-Resident Ordinary (NRO) rupee
              accounts
            </li>
            <li>Foreign Currency Non-Resident (FCNR) accounts</li>
            <li>
              Overseas funds brought to India through legitimate banking
              channels
            </li>
          </ul>
        </section>

        {/* Power of Attorney (POA) for NRIs */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4 border-b-2 border-gray-200 pb-2">
            Power of Attorney (POA) for NRIs
          </h3>
          <p className="text-slate-700 leading-relaxed">
            NRIs who are unable to travel to India for property registration can
            issue a Power of Attorney (POA) to a trusted relative residing in
            India. The POA holder can then complete the purchase and
            registration process on behalf of the NRI.
          </p>
        </section>

        {/* Repatriation of Funds and Tax Implications */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4 border-b-2 border-gray-200 pb-2">
            Repatriation of Funds and Tax Implications
          </h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>
              <span className="font-semibold">Repatriation:</span> The process
              of transferring sale proceeds from India to the NRI's country of
              residence.
            </li>
            <li>
              <span className="font-semibold">Taxation:</span> NRIs are subject
              to capital gains tax on property sales, with different rates for
              short-term (less than 3 years) and long-term (3 years or more)
              holdings. Tax benefits and exemptions may be available for
              reinvestment in specific bonds or properties.
            </li>
            <li>
              <span className="font-semibold">Rental Income:</span> Rental
              income earned from property in India is taxable for NRIs.
            </li>
          </ul>
        </section>

        {/* Home Loans for NRIs */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4 border-b-2 border-gray-200 pb-2">
            Home Loans for NRIs
          </h3>
          <p className="text-slate-700 leading-relaxed">
            NRIs, PIOs, and OCIs can access home loans from multinational banks
            in India. Tax benefits on home loan interest and principal
            repayments are available as per Indian Income Tax laws.
          </p>
        </section>

        {/* Image Placeholder */}
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4">
            Visualizing Your Investment
          </h3>
          <img
            src="https://placehold.co/600x400/E0E0E0/333333?text=Modern+Apartment+Building"
            alt="A modern apartment building in a thriving Indian city, representing a potential property investment for NRIs."
            className="w-full max-w-lg mx-auto rounded-md shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Available";
            }}
          />
          <p className="text-sm text-slate-500 mt-2">
            Image: A modern apartment building in a thriving Indian city,
            representing a potential property investment for NRIs.
          </p>
        </section>
      </div>

      {/* Conclusion Section */}
      <section className="mx-auto max-w-4xl text-center px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-4">
          Conclusion
        </h2>
        <p className="text-slate-700 text-lg leading-relaxed max-w-3xl mx-auto">
          DHD Group is dedicated to assisting NRIs in making informed property
          investment decisions. Our expertise and guidance can help you navigate
          the complexities of property purchase, financing, and taxation,
          ensuring a successful and rewarding investment experience.
        </p>
      </section>
    </div>
  );
};

export default NRIPropertyInvestmentGuide;
