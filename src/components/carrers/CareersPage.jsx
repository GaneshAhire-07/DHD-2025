import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

// Import your images
import ApprenticeshipImage from "../../assets/ApprenticeshipConstruction.jpg";
import DhdDegreeImage from "../../assets/DhdDegree.jpg";
import GraduatesImage from "../../assets/Graduate.jpeg";
import InternImage from "../../assets/Internships&Placement.jpg";
import WorkingImage from "../../assets/WorkingExperienceConstruction.jpg";

// Animation Variants for consistency
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Component for Career Pathway sections
const CareerPathwaySection = ({
  image,
  title,
  subtitle,
  points,
  reverse = false,
}) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-2xl shadow-xl overflow-hidden"
  >
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/2 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-[#002147] mb-3">{title}</h3>
        <p className="text-lg font-semibold text-indigo-600 mb-6">{subtitle}</p>
        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-slate-600">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const CareersWithUs = () => {
  usePageTitle("Careers With Us - DHD");

  const pathways = [
    {
      image: WorkingImage,
      title: "Work Experience",
      subtitle: "Sample the World of Work",
      points: [
        "Gain valuable insights into the built environment",
        "Mentorship from industry experts",
        "Certificate of completion",
      ],
    },
    {
      image: ApprenticeshipImage,
      title: "Apprenticeships",
      subtitle: "Working and Learning in Parallel",
      points: [
        "Competitive salary from day one",
        "Nationally recognized qualifications",
        "Clear progression pathways",
      ],
      reverse: true,
    },
    {
      image: GraduatesImage,
      title: "Graduates",
      subtitle: "Launch Your Career with DHD",
      points: [
        "Structured 2-year development program",
        "Rotation across multiple departments",
        "Professional qualification support",
      ],
    },
    {
      image: InternImage,
      title: "Internships & Placements",
      subtitle: "Gain Real-World Experience",
      points: [
        "6-12 month placement programs",
        "Direct involvement in real projects",
        "High potential for permanent roles",
      ],
      reverse: true,
    },
    {
      image: DhdDegreeImage,
      title: "DHD Degree",
      subtitle: "Earn While You Learn",
      points: [
        "Earn a BSc degree with no student debt",
        "Gain 4 years of practical work experience",
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
      description:
        "Professional memberships, training, and continuous learning.",
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

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          Careers With Us
        </motion.h1>
      </section>

      {/* Intro Card */}
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="-mt-16 relative z-10 bg-white rounded-2xl shadow-2xl text-center px-6 py-12"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Join Our{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At DHD, our people are our greatest asset. We provide a supportive,
            innovative, and rewarding environment where you can grow, learn, and
            thrive.
          </p>
        </motion.section>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section 1: Career Pathways */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Your Career Journey Starts Here
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore our diverse range of career opportunities designed to
              nurture talent at every stage.
            </motion.p>
          </div>
          <div className="space-y-16 group">
            {pathways.map((pathway, index) => (
              <CareerPathwaySection key={index} {...pathway} />
            ))}
          </div>

          {/* Section 2: Why Choose DHD? */}
          <div className="text-center mt-24 mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose DHD?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We're committed to creating an environment where our people can
              thrive personally and professionally.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
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
          </div>

          {/* Section 3: Who We're Looking For */}
          <div className="text-center mt-24 mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Who We're Looking For
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We seek passionate individuals who share our values and vision for
              a sustainable future.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <Lightbulb size={40} className="mx-auto text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Innovative
              </h3>
              <p className="text-slate-600">
                Creative thinkers who embrace change and drive technological
                advancement.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <Users size={40} className="mx-auto text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Collaborative
              </h3>
              <p className="text-slate-600">
                Team players who thrive in diverse environments and believe in
                collective achievement.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <Briefcase size={40} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Driven</h3>
              <p className="text-slate-600">
                Motivated individuals committed to excellence and making a
                positive impact.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CareersWithUs;
