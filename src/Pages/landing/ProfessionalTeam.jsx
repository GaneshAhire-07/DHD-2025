import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import johnSmith from "../../assets/mbr-1-816x544.jpg";
import sarahPalmer from "../../assets/mbr-3-596x397.jpg";
import jamesSwift from "../../assets/man.avif";
import helenSmith from "../../assets/mbr-596x401.jpeg";

const teamMembers = [
  {
    name: "John Smith",
    role: "Trader",
    image: johnSmith,
    description:
      "Specializing in real estate investments with a decade of market expertise.", // Updated description
    profileLink: "https://mobiri.se",
    bio: "John has over 10 years of experience in trading and financial markets, specializing in real estate investments.",
    contact: "john.smith@example.com | +1-234-567-890",
  },
  {
    name: "Sarah Palmer",
    role: "Manager",
    image: sarahPalmer,
    description:
      "Leads our management team with 15 years in project oversight and coordination.", // Updated description
    profileLink: "https://mobiri.se",
    bio: "Sarah leads our management team with 15 years of experience in project oversight and team coordination.",
    contact: "sarah.palmer@example.com | +1-234-567-891",
  },
  {
    name: "James Swift",
    role: "Trader",
    image: jamesSwift,
    description:
      "Expert in global trading strategies with a focus on sustainable development.", // Updated description
    profileLink: "https://mobiri.se",
    bio: "James brings expertise in global trading strategies with a focus on sustainable development.",
    contact: "james.swift@example.com | +1-234-567-892",
  },
  {
    name: "Helen Smith",
    role: "Manager",
    image: helenSmith,
    description:
      "Excels in operational management with a passion for innovative property solutions.", // Updated description
    profileLink: "https://mobiri.se",
    bio: "Helen excels in operational management with a passion for innovative property solutions.",
    contact: "helen.smith@example.com | +1-234-567-893",
  },
];

const ProfessionalTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <section className="bg-slate-50 font-sans text-slate-800">
      <section className="w-full bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Our Professional Team
        </h1>
      </section>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4  tracking-tight text-gray-800 font-montserrat">
              Our Professional
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                team!
              </span>
            </h2>
            <p className="text-lg text-gray-600 mt-2 font-roboto max-w-xl mx-auto">
              Meet the experts driving our success with passion and expertise.
            </p>
          </section>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative bottom-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-bold text-gray-800 font-lato uppercase">
                  {member.name}
                </h5>
                <h6 className="text-base font-medium text-gray-500 font-roboto mb-3">
                  {member.role}
                </h6>
                <p className="text-sm text-gray-600 font-roboto mb-4">
                  {member.description}
                </p>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="inline-block px-6 py-2 bg-transparent border-2 border-red-600 text-red-600 font-medium rounded-full hover:bg-red-600 hover:text-white transition duration-300"
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedMember && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-0">
                  <h4 className="text-2xl font-bold text-gray-800 font-lato uppercase">
                    {selectedMember.name}
                  </h4>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    &times;
                  </button>
                </div>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-base text-gray-600 font-roboto mb-2">
                  <strong>Role:</strong> {selectedMember.role}
                </p>
                <p className="text-base text-gray-600 font-roboto mb-2">
                  <strong>Bio:</strong> {selectedMember.bio}
                </p>
                <p className="text-base text-gray-600 font-roboto mb-4">
                  <strong>Contact:</strong> {selectedMember.contact}
                </p>
                <a
                  href={selectedMember.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition duration-300"
                >
                  Visit Profile
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProfessionalTeam;
