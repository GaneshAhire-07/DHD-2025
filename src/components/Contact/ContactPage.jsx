import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import usePageTitle from "../../hooks/usePageTitle";
import { Loader2, CheckCircle, X, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  usePageTitle("Contact - Page");
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // FIX 2: Added state to store the last submitted topic for the popup
  const [lastSubmittedTopic, setLastSubmittedTopic] = useState("");

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

  // FIX 3: Completely refactored handleSubmit to be logical and sequential
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state immediately

    // Store the topic before it gets cleared
    setLastSubmittedTopic(formData.topic);

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_email: formData.email,
      phone: formData.phone,
      topic: formData.topic,
      message: formData.message,
    };

    emailjs
      .send(
        "service_vxk15ka",
        "template_qkm83rp",
        templateParams,
        "w5kzCPK-GSWcLLli0"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSubmitted(true);
          setShowSuccessPopup(true);
          setFormData(initialFormState); // Reset form only after success

          // Auto-close popup after 5 seconds
          setTimeout(() => {
            setShowSuccessPopup(false);
            setIsSubmitted(false); // Reset button state when popup closes
          }, 5000);
        },
        (error) => {
          console.error("Email send failed:", error.text);
          alert("Something went wrong while sending your message.");
        }
      )
      .finally(() => {
        setIsLoading(false); // Stop loading state regardless of success or failure
      });
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setIsSubmitted(false); // Also reset button state on manual close
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800 relative">
      {/* Loading Modal (Now works correctly) */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm mx-4">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="animate-spin text-blue-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-800">
                Sending Message...
              </h3>
              <p className="text-gray-600">
                Please wait while we process your request
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-bounce">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-3">
                <CheckCircle size={32} className="text-white animate-pulse" />
                <div>
                  <h3 className="text-xl font-bold">
                    Message Sent Successfully!
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-600 mt-1" size={20} />
                <div>
                  <p className="text-gray-700 font-medium">Message Received</p>
                  <p className="text-gray-600 text-sm">
                    Your message has been successfully sent.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-orange-600 mt-1" size={20} />
                <div>
                  <p className="text-gray-700 font-medium">Response Timeline</p>
                  <p className="text-gray-600 text-sm">
                    Our team will get back to you within{" "}
                    <span className="font-semibold text-orange-600">
                      24 hours
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Inquiry logged!</span> Your
                  question about{" "}
                  {/* FIX 4: Display the topic correctly from state */}
                  <span className="font-medium">
                    {lastSubmittedTopic || "your selected topic"}
                  </span>{" "}
                  has been received.
                </p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  This popup will close automatically in 5 seconds
                </p>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                onClick={closePopup}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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

      {/* FIX 5: Changed div to a proper <form> element with onSubmit */}
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
          className="p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          required
          value={formData.lastName}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address*"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone No.*"
          required
          value={formData.phone}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <select
          name="topic"
          required
          value={formData.topic}
          onChange={handleChange}
          className="md:col-span-2 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
        >
          <option value="">Select a topic*</option>
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

        {/* FIX 6: Changed to type="submit" and removed onClick */}
        <button
          type="submit"
          disabled={isLoading || isSubmitted}
          className={`md:col-span-2 p-4 font-semibold uppercase rounded-lg transition-all duration-300 shadow-md flex items-center justify-center space-x-2 ${
            isLoading
              ? "bg-blue-600 text-white cursor-not-allowed"
              : isSubmitted
              ? "bg-green-600 text-white cursor-not-allowed"
              : "bg-[#002147] text-white hover:bg-[#003366] hover:-translate-y-1"
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Sending...</span>
            </>
          ) : isSubmitted ? (
            <>
              <CheckCircle size={20} />
              <span>Message Sent!</span>
            </>
          ) : (
            <span>Submit Message</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
