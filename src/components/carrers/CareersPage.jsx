import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import usePageTitle from "../../hooks/usePageTitle";
import {
  Briefcase,
  Award,
  Heart,
  TrendingUp,
  Users,
  Lightbulb,
  Handshake,
  DollarSign,
  CheckCircle,
  X,
  Loader2,
  UploadCloud,
} from "lucide-react";

// Import your images
import careersHeroImage from "../../assets/b1.jpeg";
import ApprenticeshipImage from "../../assets/ApprenticeshipConstruction.jpg";
import DhdDegreeImage from "../../assets/DhdDegree.jpg";
import GraduatesImage from "../../assets/Graduate.jpeg";
import InternImage from "../../assets/intership.jpg";
import WorkingImage from "../../assets/WorkingExperienceConstruction.jpg";

// FIX: Added the missing animation variants definitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Data ---
const pathways = [
  {
    image: WorkingImage,
    title: "Work Experience",
    subtitle: "Sample the World of Work",
    points: [
      "Gain valuable insights",
      "Mentorship from experts",
      "Certificate of completion",
    ],
  },
  {
    image: ApprenticeshipImage,
    title: "Apprenticeships",
    subtitle: "Working and Learning in Parallel",
    points: [
      "Competitive salary",
      "Recognized qualifications",
      "Clear progression pathways",
    ],
  },
  {
    image: GraduatesImage,
    title: "Graduates",
    subtitle: "Launch Your Career",
    points: [
      "Structured development program",
      "Rotation across departments",
      "Professional qualification support",
    ],
  },
  {
    image: InternImage,
    title: "Internships & Placements",
    subtitle: "Gain Real-World Experience",
    points: [
      "6-12 month placements",
      "Direct project involvement",
      "Potential for permanent roles",
    ],
  },
  {
    image: DhdDegreeImage,
    title: "DHD Degree",
    subtitle: "Earn While You Learn",
    points: [
      "Earn a BSc with no student debt",
      "Gain 4 years of work experience",
      "Apply academic knowledge on-site",
    ],
  },
];
const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Package",
    description:
      "Comprehensive salary, pension, share plans, and life assurance.",
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    description:
      "24/7 GP service, employee assistance programs, and wellness initiatives.",
  },
  {
    icon: TrendingUp,
    title: "Learning & Development",
    description: "Professional memberships, training, and continuous learning.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description:
      "Employee awards, performance incentives, and our 'Kier Stars' scheme.",
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description:
      "Flexible and remote work options to support your personal commitments.",
  },
  {
    icon: Handshake,
    title: "Community Impact",
    description:
      "Volunteering initiatives and opportunities to give back to local communities.",
  },
];

// --- Application Form Modal ---
const ApplicationModal = ({ position, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Note: You need to set up an EmailJS template that accepts attachments.
    // This example sends the text data. Replace with your actual credentials.
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { ...formData, position },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => onClose(), 3000);
        },
        () => alert("Application failed to send. Please try again.")
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b text-center">
          <h2 className="text-2xl font-bold text-[#002147]">
            Apply for: <span className="text-indigo-600">{position}</span>
          </h2>
        </div>
        <div className="p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-bold">Application Sent!</h3>
              <p className="text-slate-600 mt-2">
                Thank you for your interest. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  required
                  onChange={handleChange}
                  className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  required
                  onChange={handleChange}
                  className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  onChange={handleChange}
                  className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  onChange={handleChange}
                  className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  onClick={() => fileInputRef.current.click()}
                  className="w-full flex items-center justify-center gap-3 p-4 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-indigo-500 hover:bg-slate-50 transition-colors"
                >
                  <UploadCloud className="text-slate-500" />
                  <span className="text-slate-600 font-medium truncate">
                    {fileName || "Upload your CV/Resume*"}
                  </span>
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  required
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-4 font-semibold rounded-lg bg-[#002147] hover:bg-[#003366] text-white shadow-lg flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </motion.button>
            </form>
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

// --- Career Card Component ---
const CareerCard = ({ pathway, onApplyClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
  >
    <div className="h-56 overflow-hidden">
      <img
        src={pathway.image}
        alt={pathway.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-[#002147] mb-2">
        {pathway.title}
      </h3>
      <p className="font-semibold text-indigo-600 mb-4">{pathway.subtitle}</p>
      <ul className="space-y-3 mb-6 flex-grow">
        {pathway.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <motion.button
        onClick={() => onApplyClick(pathway.title)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-auto p-3 font-semibold rounded-lg bg-[#002147] hover:bg-[#003366] text-white shadow-md transition-colors"
      >
        Apply Now
      </motion.button>
    </div>
  </motion.div>
);

const CareersWithUs = () => {
  usePageTitle("Careers With Us - DHD");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyingFor, setApplyingFor] = useState("");

  const handleApplyClick = (position) => {
    setApplyingFor(position);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <AnimatePresence>
        {isModalOpen && (
          <ApplicationModal
            position={applyingFor}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>

      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black">
          <img
            src={careersHeroImage}
            alt="Team at DHD Group"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 p-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Build Your Future With Us
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Join a team that values innovation, supports growth, and is
            committed to building a sustainable world.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Your Career Journey Starts Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our diverse career opportunities designed to nurture talent
            at every stage.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {pathways.map((pathway) => (
            <CareerCard
              key={pathway.title}
              pathway={pathway}
              onApplyClick={handleApplyClick}
            />
          ))}
        </div>

        <div className="text-center mt-24 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose DHD?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're committed to creating an environment where our people can
            thrive.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border text-center hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="inline-block bg-indigo-100 text-indigo-600 p-4 rounded-full mb-4">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default CareersWithUs;
