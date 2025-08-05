import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import usePageTitle from "../../hooks/usePageTitle";
import {
  Leaf,
  Users,
  Globe,
  Handshake,
  Building,
  ArrowDown,
} from "lucide-react";

// You can use your existing image or a new, more impactful one for the hero
import sustainabilityHeroImage from "../../assets/Sustainability1.webp";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Data for the commitment cards
const sustainabilityCommitments = [
  {
    icon: Users,
    title: "DHD Real Estate Academy",
    description:
      "Launching programs targeting veterans and individuals facing employment challenges to provide new opportunities.",
  },
  {
    icon: Globe,
    title: "Supporting India's Green Agenda",
    description:
      "Actively committing to environmental improvements that align with and support national sustainability goals.",
  },
  {
    icon: Leaf,
    title: "Net-Zero Carbon Developments",
    description:
      "A firm commitment to delivering net-zero carbon projects by 2030 through intelligent design and carbon reduction.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Partnering with sustainability consultancy Greengage to develop a comprehensive net-zero roadmap and action plan.",
  },
  {
    icon: Building,
    title: "Industry Collaboration",
    description:
      "Joining the UK Green Building Council to collaborate on improving the sustainability of the entire built environment.",
  },
];

const SustainabilityPage = () => {
  usePageTitle("Sustainability - DHD Group");

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* NEW DHD THEME HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black">
          <img
            src={sustainabilityHeroImage}
            alt="Sustainable urban development"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 p-4"
        >
          <div className="inline-block border-2 border-green-400/50 rounded-full p-4 mb-6">
            <Leaf className="w-12 h-12 text-green-300" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-xl">
            Building for a <br /> Sustainable World
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 drop-shadow-lg">
            Our sustainability program, "Transforming India," is our commitment
            to creating lasting value for the communities we serve.
          </p>
          <HashLink smooth to="/about/purpose/sustainability#main-content">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#002147] font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-slate-200 transition-colors"
            >
              Learn About Our Commitments
            </motion.button>
          </HashLink>
        </motion.div>

        <HashLink
          smooth
          to="/about/purpose/sustainability#main-content"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </HashLink>
      </section>

      {/* Main Content Section */}
      <main id="main-content" className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Commitments
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              For 25 years, we have contributed to India's transformation. Here
              are the key pillars of our sustainability program:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityCommitments.map((commitment, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-block bg-green-100 text-green-600 p-4 rounded-full mb-6">
                  <commitment.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default SustainabilityPage;
