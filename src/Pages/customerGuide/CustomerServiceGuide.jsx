import React from "react";
import usePageTitle from "../../hooks/usePageTitle";

const CustomerServiceGuide = () => {
  usePageTitle("Customer Service Guide");
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {" "}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        {" "}
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          {" "}
          Customer Service Community Board
        </h1>
      </section>
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12 mb-10">
        {" "}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          DHD Group is committed to delivering exceptional client experiences.
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          {" "}
          We recognize that clear communication and efficient issue resolution
          are fundamental to successful partnerships. Our Customer Service
          Community Board provides a platform for addressing any concerns and
          ensuring your satisfaction.
        </p>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white rounded-2xl shadow-xl mb-10">
        {" "}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          {" "}
          How to Reach Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300">
            {" "}
            <h3 className="text-xl font-semibold text-[#be2227] mb-3">
              In Person
            </h3>
            <p className="text-slate-700">
              {" "}
              Consult with a DHD representative directly at your convenience.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300">
            {" "}
            <h3 className="text-xl font-semibold text-[#be2227] mb-3">
              By Mail
            </h3>
            <p className="text-slate-700">
              {" "}
              Submit your inquiry or feedback in writing to{" "}
              <span className="font-medium text-[#002147]">
                {" "}
                [insert company address]
              </span>
              .
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300">
            {" "}
            <h3 className="text-xl font-semibold text-[#be2227] mb-3">
              By Email
            </h3>
            <p className="text-slate-700">
              {" "}
              Contact our dedicated customer service team at{" "}
              <span className="font-medium text-[#002147]">
                {" "}
                [insert customer service email address]
              </span>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white rounded-2xl shadow-xl mb-10">
        {" "}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          {" "}
          Our Three-Tiered Complaint Resolution Process
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 border border-gray-300">
          {" "}
          <h3 className="text-xl font-semibold text-[#be2227] mb-3 flex items-center">
            <span className="mr-2 text-2xl text-[#002147]">1.</span> Tier I:
            Initial Point of Contact
          </h3>
          <p className="text-slate-700 mb-4">
            {" "}
            Should you encounter any challenges or have concerns regarding our
            services, please don't hesitate to contact our customer service
            center or utilize our online complaint submission system.
          </p>
          <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
            {" "}
            <h4 className="font-semibold text-slate-800 mb-2">
              Online Complaint Form Fields:
            </h4>{" "}
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              {" "}
              <li>Service Request/Complaint Reference Number (if available)</li>
              <li>Name</li>
              <li>Residence Status</li>
              <li>Full Address</li>
              <li>City</li>
              <li>Country</li>
              <li>Primary Contact Number (residence/office or mobile)</li>
              <li>Registered Email Address (for expedited resolution)</li>
              <li>Subject of Complaint/Feedback</li>
              <li>
                Confirmation that the complaint is submitted by the individual
                directly affected by the issue
              </li>
              <li>Detailed Description of the complaint/feedback</li>
              <li>Confirmation of being a current DHD customer</li>
              <li>Consent for DHD to contact you regarding the complaint</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 border border-gray-300">
          {" "}
          <h3 className="text-xl font-semibold text-[#be2227] mb-3 flex items-center">
            <span className="mr-2 text-2xl text-[#002147]">2.</span> Tier II:
            Escalation to Grievance Officer
          </h3>
          <p className="text-slate-700 mb-4">
            {" "}
            If the resolution provided at Tier I does not meet your
            expectations, you have the option to escalate your grievance to our
            designated Grievance Officer. Their contact information can be
            accessed{" "}
            <a href="#" className="text-[#002147] hover:underline font-medium">
              {" "}
              here
            </a>
            .
          </p>
          <p className="text-slate-700">
            {" "}
            <span className="font-semibold">Complaint Form:</span> The same
            user-friendly online form is utilized for consistency and ease of
            navigation.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
          {" "}
          <h3 className="text-xl font-semibold text-[#be2227] mb-3 flex items-center">
            <span className="mr-2 text-2xl text-[#002147]">3.</span> Tier III:
            Final Escalation to Principal Officer
          </h3>
          <p className="text-slate-700 mb-4">
            {" "}
            In the unlikely event that your concerns remain unresolved at Tier
            II, you may escalate the matter to the Principal Officer for
            Complaint and Redressal. This represents the final stage of our
            internal escalation process. Their contact details can be found{" "}
            <a href="#" className="text-[#002147] hover:underline font-medium">
              {" "}
              here
            </a>
            .
          </p>
          <p className="text-slate-700">
            {" "}
            <span className="font-semibold">Complaint Form:</span> For seamless
            continuity, the same online form is utilized at this tier as well.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl text-center px-4 py-8 md:py-12">
        {" "}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-4">
          {" "}
          Our Pledge to You
        </h2>
        <p className="text-slate-700 text-lg leading-relaxed max-w-3xl mx-auto">
          {" "}
          Your feedback is invaluable to us. We are dedicated to addressing your
          inquiries and resolving any issues promptly and professionally. Our
          Customer Service Community Board and comprehensive three-tiered
          complaint resolution process are designed to ensure your satisfaction
          and reinforce our commitment to client-focused solutions.
        </p>
      </section>
    </div>
  );
};

export default CustomerServiceGuide;
