import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Zap,
  Leaf,
  Heart,
  Construction,
  Factory,
  Hotel,
  Building2,
  Building,
  Train,
  Home,
  ArrowRight,
  X,
} from "lucide-react";

// Import images
import degree from "../../assets/degree.avif";
import energy from "../../assets/energy.avif";
import environmental from "../../assets/environmental.avif";
import health from "../../assets/health.avif";
import highways from "../../assets/highways.avif";
import industrial from "../../assets/industrial.avif";
import leisure from "../../assets/leisure.jpg"; // Replace with actual image
import localGov from "../../assets/government.jpg"; // Replace with actual image
import offices from "../../assets/offices.jpg"; // Replace with actual image
import rail from "../../assets/rail.jpg"; // Replace with actual image
import residential from "../../assets/recidential.jpg"; // Replace with actual image

const allSectorsData = [
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    image: degree,
    description:
      "Delivering over $1 billion in world-leading school and university facilities.",
    highlights: [
      {
        title: "Inspiring Learning Spaces",
        desc: "First-class facilities from early years to higher education.",
      },
      {
        title: "Cutting-Edge Innovation",
        desc: "Leveraging 3D and BIM for enhanced delivery and optimized costs.",
      },
      {
        title: "Seamless Live Environment Work",
        desc: "Minimizing disruption with meticulous planning and safety.",
      },
      {
        title: "Comprehensive Facilities Management",
        desc: "Ongoing maintenance, cleaning, security, and groundskeeping.",
      },
    ],
    price: 100,
  },
  {
    id: "energy",
    title: "Energy",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    image: energy,
    description:
      "Enhancing innovation and delivering value across electricity and gas networks.",
    highlights: [
      {
        title: "Reliable Electricity Networks",
        desc: "Enhancing power distribution, substation upgrades, and emergency response.",
      },
      {
        title: "Comprehensive Gas Services",
        desc: "Full range of services across all pressure networks.",
      },
      {
        title: "Pioneering Innovation",
        desc: "At the forefront of renewable energy, EV infrastructure, and battery storage.",
      },
      {
        title: "Customer Service Excellence",
        desc: "Dedicated training and a multi-utility approach for top-tier service.",
      },
    ],
    price: 100,
  },
  {
    id: "environmental",
    title: "Environmental",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    image: environmental,
    description:
      "Achieving cost savings and environmental targets through efficient waste management.",
    highlights: [
      {
        title: "Cost-Effective Waste Solutions",
        desc: "Maximizing value for refuse and recycling for over 3.2 million households.",
      },
      {
        title: "Optimized Recycling",
        desc: "Using technology to maximize recycled materials and minimize landfill.",
      },
      {
        title: "Comprehensive Environmental Services",
        desc: "Delivering street cleaning, grounds maintenance, and commercial waste services.",
      },
      {
        title: "Long-Term Partnerships",
        desc: "Collaborating with public and private clients for sustainable outcomes.",
      },
    ],
    price: 100,
  },
  {
    id: "health",
    title: "Health",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    image: health,
    description:
      "Delivering innovative building solutions for healthcare providers.",
    highlights: [
      {
        title: "Trusted Healthcare Partner",
        desc: "Over 200 projects delivered, aligning with healthcare providers' aims.",
      },
      {
        title: "Working in Live Environments",
        desc: "Expertise in hospital refurbishments with minimal disruption.",
      },
      {
        title: "Advanced Innovation",
        desc: "Utilizing BIM Level 2 and offsite construction for efficiency.",
      },
      {
        title: "Clinical Understanding",
        desc: "Deep understanding of clinical requirements for optimized facilities.",
      },
    ],
    price: 100,
  },
  {
    id: "highways",
    title: "Highways & Bridges",
    icon: Construction,
    color: "from-gray-600 to-slate-700",
    image: highways,
    description:
      "Maintaining and improving critical road infrastructure with a focus on safety.",
    highlights: [
      {
        title: "Comprehensive Infrastructure",
        desc: "Delivering a wide array of road, bridge, and tunnel projects.",
      },
      {
        title: "Collaborative Innovation",
        desc: "Implementing cutting-edge solutions with clients and partners.",
      },
      {
        title: "Strategic Maintenance",
        desc: "Expertise in routine maintenance to enhance road networks.",
      },
      {
        title: "Future-Ready Transportation",
        desc: "At the forefront of technological advancements in transportation.",
      },
    ],
    price: 100,
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: Factory,
    color: "from-purple-600 to-indigo-700",
    image: industrial,
    description:
      "End-to-end solutions for warehouses, manufacturing plants, and data centers.",
    highlights: [
      {
        title: "End-to-End Industrial Solutions",
        desc: "From site identification and feasibility to turnkey design and build.",
      },
      {
        title: "Diverse Industrial Expertise",
        desc: "Projects from trade counters to large-scale logistics facilities.",
      },
      {
        title: "Advanced Warehousing",
        desc: "Delivering state-of-the-art warehouse projects up to one million sq ft.",
      },
      {
        title: "Specialized Data Centers",
        desc: "Overcoming challenges with sophisticated M&E installations.",
      },
    ],
    price: 100,
  },
  {
    id: "leisure",
    title: "Leisure & Hospitality",
    icon: Hotel,
    color: "from-teal-500 to-cyan-600",
    image: leisure,
    description:
      "Designing and maintaining world-class leisure facilities and hotels with unique experiences.",
    price: 50,
  },
  {
    id: "local_gov",
    title: "Local Government",
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    image: localGov,
    description:
      "Assisting councils in maximizing estate value and delivering essential community infrastructure.",
    price: 50,
  },
  {
    id: "offices",
    title: "Offices",
    icon: Building,
    color: "from-blue-600 to-indigo-700",
    image: offices,
    description:
      "Providing innovative, sustainable, and high-quality office spaces that foster productivity.",
    price: 50,
  },
  {
    id: "rail",
    title: "Rail & Signaling",
    icon: Train,
    color: "from-emerald-600 to-teal-700",
    image: rail,
    description:
      "Delivering complex rail infrastructure, including new lines, station upgrades, and signaling.",
    price: 50,
  },
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Developing diverse residential properties, from luxury homes to affordable housing.",
    price: 50,
  },
];

const SectorCard = ({ sector, onCardClick }) => (
  <motion.div
    layoutId={`card-${sector.id}`}
    className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div
      className="h-40 xs:h-44 sm:h-48 relative"
      onClick={() => onCardClick(sector)}
    >
      <img
        src={sector.image}
        alt={sector.title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
      />
    </div>
    <div className="p-4 xs:p-5 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-800 mb-2">
        {sector.title}
      </h3>
      <p className="text-slate-600 text-sm xs:text-base sm:text-lg leading-relaxed mb-4 flex-grow">
        {sector.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div
          className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors cursor-pointer"
          onClick={() => onCardClick(sector)}
        >
          <span className="text-sm xs:text-base">View Details</span>
          <ArrowRight className="w-4 xs:w-5 h-4 xs:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </motion.div>
);

const SectorDetailModal = ({ sector, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 xs:p-5 sm:p-6"
    onClick={onClose}
  >
    <motion.div
      layoutId={`card-${sector.id}`}
      onClick={(e) => e.stopPropagation()}
      className="bg-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
    >
      <div className="h-48 xs:h-56 sm:h-64 relative">
        <img
          src={sector.image}
          alt={sector.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 xs:p-5 sm:p-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold">
            {sector.title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 xs:top-5 right-4 xs:right-5 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-5 xs:w-6 h-5 xs:h-6" />
        </button>
      </div>
      <div className="p-4 xs:p-6 sm:p-8 overflow-y-auto">
        <p className="text-sm xs:text-base sm:text-lg text-slate-700 mb-6 xs:mb-8">
          {sector.description}
        </p>
        {sector.highlights && (
          <div>
            <h3 className="text-xl xs:text-2xl font-bold text-slate-800 mb-3 xs:mb-4">
              Key Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              {sector.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 xs:p-4 rounded-lg border"
                >
                  <h4 className="font-bold text-slate-800 text-sm xs:text-base mb-1 xs:mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-slate-600 text-xs xs:text-sm sm:text-base">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const OurSectors = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-16 xs:py-20 sm:py-24 px-4 xs:px-5 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="relative z-10">
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Sectors
          </motion.h1>
        </div>
      </section>

      {/* Introduction */}
      <motion.section
        className="-mt-12 xs:-mt-16 sm:-mt-20 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-xl text-center px-4 xs:px-5 sm:px-6 py-8 xs:py-10 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-slate-800">
          Building a Better World,{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Across Every Sector
          </span>
        </h2>
        <p className="text-slate-600 text-base xs:text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-4">
          Our expertise spans a wide range of industries, delivering innovative
          and sustainable projects from design and construction to facilities
          management.
        </p>
      </motion.section>

      {/* Sectors Grid */}
      <main className="container mx-auto px-4 xs:px-5 sm:px-6 py-12 xs:py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-8">
          {allSectorsData.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              onCardClick={setSelectedSector}
            />
          ))}
        </div>
      </main>

      {/* Modal for displaying sector details */}
      <AnimatePresence>
        {selectedSector && (
          <SectorDetailModal
            sector={selectedSector}
            onClose={() => setSelectedSector(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurSectors;
