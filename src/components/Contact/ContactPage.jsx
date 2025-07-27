import React, { useState } from "react";

const ContactPage = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "Administrative Services",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const topics = [
    "Administrative Services",
    "Application Support",
    "NOC Application and DPR Planning",
    "RERA Registration Services",
    "Legal Support",
    "Property Asset Management",
    "Building Consultancy",
    "Project Management",
    "Technical Due Diligence Surveys",
    "Planned Preventative Maintenance Surveys",
    "Cost Consultancy",
    "Reinstatement Cost Assessments",
    "Landlord Representation",
    "Tenant Representation Serviced Offices",
    "Development Consultancy",
    "Lease Advisory",
    "Retail Advice",
    "Leasing",
    "Tenant Representation",
    "Commercial Services",
    "Investment Sales and Acquisitions",
    "Project Sales and Leasing",
    "Office Advice",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setFormData(initialFormState);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Contact Us
        </h1>
      </section>

      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Contact
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Us!
          </span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-4">
          We offer an engaging and challenging environment, giving you the
          opportunity to make the most of your unique skills.
        </p>
        <div className="text-slate-600">
          <strong className="text-indigo-700">Toll free:</strong> (+91)
          9545227252 | <strong className="text-indigo-700">Mail us:</strong>{" "}
          followup@iresworld.com
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto my-10 px-8 py-10"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name*"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          required
          value={formData.lastName}
          onChange={handleChange}
          className="p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address*"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone No.*"
          required
          value={formData.phone}
          onChange={handleChange}
          className="p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="md:col-span-2 p-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        >
          {topics.map((topic, idx) => (
            <option key={idx} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder="Clearly describe your question*"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="md:col-span-2 p-4 border border-gray-300 rounded-lg bg-gray-100 resize-vertical min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-900"
        />

        {isSubmitted && (
          <div className="md:col-span-2 text-green-600 font-medium">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <button
          type="submit"
          className="md:col-span-2 p-4 bg-[#002147] text-white font-semibold uppercase rounded-lg hover:bg-[#003366] transition-transform hover:-translate-y-1 shadow-md"
        >
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
