import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Eye,
  Target,
  Leaf,
  ShieldCheck,
  Award,
  GraduationCap,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  X,
} from "lucide-react";
import usePageTitle from "../../hooks/usePageTitle";
import { Heart } from "lucide-react";

// Import all your images
import history from "../../assets/history.jpg";
import visionMission from "../../assets/b1.jpeg"; // You may need to add this image
import whoWeAre from "../../assets/who.jpg";
import whatWeDo from "../../assets/team.jpg";
import purpose from "../../assets/purpose.jpg";
import sustainability from "../../assets/sustainability.webp";
import socialImpact from "../../assets/social.webp";
import physicalImpact from "../../assets/physical.webp";
import qualityStandards from "../../assets/behind.jpg";
import cpdTraining from "../../assets/CPD.webp";
import performanceAppraisals from "../../assets/performance.webp";
import healthSafety from "../../assets/Health.avif";
import equalOpportunities from "../../assets/pari.jpg";
import environmental from "../../assets/environmental.webp";

// --- Structured Data for the Cards ---
const aboutUsTopics = [
  // Category: Profile
  {
    id: "history",
    category: "Profile",
    title: "Our History",
    image: history,
    icon: BookOpen,
    summary:
      "From a humble two-person team to a thriving company with over 300 employees.",
    details: {
      content: (
        <p>
          DHD has grown significantly from its humble beginnings, led by an
          experienced management team while still benefiting from the guidance
          of its two founders. Our foundation is built on long-term
          partnerships, an integrated approach, and a commitment to shared
          success.
        </p>
      ),
    },
  },
  {
    id: "vision-mission",
    category: "Profile",
    title: "Vision & Mission",
    image: visionMission,
    icon: Eye,
    summary:
      "To be a leading and innovative global property developer fostering well-being for all.",
    details: {
      content: (
        <div>
          <h4 class="font-bold mb-2">Our Vision:</h4>
          <p class="mb-4">
            To be a leading and innovative global property developer, fostering
            sustainability and well-being for all.
          </p>
          <h4 class="font-bold mb-2">Our Mission:</h4>
          <ul class="list-disc list-inside space-y-1">
            <li>Embrace diverse talents for collaboration.</li>
            <li>Cultivate a knowledge-driven culture.</li>
            <li>Create innovative living solutions.</li>
            <li>Strive for the highest global standards.</li>
          </ul>
        </div>
      ),
    },
  },
  {
    id: "who-we-are",
    category: "Profile",
    title: "Who We Are",
    image: whoWeAre,
    icon: Users,
    summary:
      "A leading privately owned mixed-use real estate developer in India.",
    details: {
      content: (
        <p>
          We specialize in "for sale" and "build to rent" residential schemes,
          incorporating mixed-use opportunities such as hotels, flexible
          workspaces, and retail. Our entrepreneurial approach drives us to seek
          value and maximize opportunities for our partners.
        </p>
      ),
    },
  },
  {
    id: "what-we-do",
    category: "Profile",
    title: "What We Do",
    image: whatWeDo,
    icon: Target,
    summary:
      "Specializing in developments with bespoke design and exceptional quality.",
    details: {
      content: (
        <p>
          We operate across the entire asset lifecycle, from land assembly and
          planning to construction and asset management. Our expertise in
          navigating India\'s complex planning rules benefits both DHD and our
          partners.
        </p>
      ),
    },
  },

  // Category: Our Impact
  {
    id: "sustainability",
    category: "Our Impact",
    title: "Sustainability",
    image: sustainability,
    icon: Leaf,
    summary:
      'Our program, "Transforming India," is our commitment to a greener future.',
    details: {
      content: (
        <p>
          For 25 years, we have delivered value to the communities we serve. Our
          initiatives include launching the DHD Real Estate Academy, committing
          to India\'s Green agenda, and delivering net-zero carbon developments
          by 2030.
        </p>
      ),
    },
  },
  {
    id: "social-impact",
    category: "Our Impact",
    title: "Social Impact",
    image: socialImpact,
    icon: Heart,
    summary:
      "Launching training academies to deliver social value and new opportunities.",
    details: {
      content: (
        <p>
          In partnership with Building Heroes, our on-site academies provide
          training programs for military veterans and collaborate with local
          authorities to assist individuals facing employment challenges, making
          a lasting impact in real estate.
        </p>
      ),
    },
  },
  {
    id: "physical-impact",
    category: "Our Impact",
    title: "Physical Impact",
    image: physicalImpact,
    icon: Globe,
    summary:
      "Delivering net-zero developments and promoting biodiversity across our projects.",
    details: {
      content: (
        <p>
          We are committed to reducing embodied carbon through intelligent
          design while maintaining the bespoke aesthetics that define DHD. We
          take a leading role in transforming India\'s biodiversity by creating
          better, greener spaces.
        </p>
      ),
    },
  },

  // Category: Our Policies
  {
    id: "quality",
    category: "Our Policies",
    title: "Quality Standards",
    image: qualityStandards,
    icon: Award,
    summary:
      "Regular internal quality audits and dedicated staff ensure operational excellence.",
    details: {
      content: (
        <p>
          Internal quality audits are carried out regularly and a full-time
          staff member is dedicated to ensuring the implementation of agreed
          operational procedures.
        </p>
      ),
    },
  },
  {
    id: "training",
    category: "Our Policies",
    title: "CPD & Training",
    image: cpdTraining,
    icon: GraduationCap,
    summary:
      "Complying with the RICS Code of Conduct to ensure a highly qualified team.",
    details: {
      content: (
        <p>
          DHD\'s policy is to comply with the Royal Institution of Chartered
          Surveyors Code of Professional Conduct, which obligates us to provide
          adequate resources in terms of qualified staff and works undertaken.
        </p>
      ),
    },
  },
  {
    id: "appraisals",
    category: "Our Policies",
    title: "Performance Appraisals",
    image: performanceAppraisals,
    icon: TrendingUp,
    summary:
      "Twice-yearly appraisals to assess progress and identify development needs.",
    details: {
      content: (
        <p>
          Staff performance appraisals are held on a twice-yearly basis to
          assess progress and identify any training and development needs. All
          appraisals are private and confidential.
        </p>
      ),
    },
  },
  {
    id: "safety",
    category: "Our Policies",
    title: "Health & Safety",
    image: healthSafety,
    icon: ShieldCheck,
    summary:
      "A legal duty of care towards protecting the Health and Safety of our employees.",
    details: {
      content: (
        <p>
          The management of DHD recognizes its legal duty of care towards
          protecting the Health and Safety of its employees and others who may
          be affected by the Firm\'s activities.
        </p>
      ),
    },
  },
];

const filterCategories = ["All", "Profile", "Our Impact", "Our Policies"];

// --- New Small Card Component ---
const InfoCard = ({ topic, onCardClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={topic.image}
        alt={topic.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-3">
        <topic.icon className="w-5 h-5 text-indigo-500" />
        <h3 className="text-lg font-bold text-slate-800">{topic.title}</h3>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
        {topic.summary}
      </p>
      <button
        onClick={() => onCardClick(topic)}
        className="mt-auto text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors self-start inline-flex items-center group/button"
      >
        View Details
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

// --- Modal Component for Details ---
const InfoDetailModal = ({ topic, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${topic.id}`}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
      >
        <div className="relative h-60">
          <img
            src={topic.image}
            alt={topic.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="relative p-6 h-full flex flex-col justify-end text-white">
            <topic.icon className="w-10 h-10 mb-2" />
            <h2 className="text-3xl font-bold">{topic.title}</h2>
          </div>
        </div>
        <div className="p-8 overflow-y-auto prose max-w-none text-slate-700">
          {topic.details.content}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors"
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

// --- Main AboutUs Component ---
const HistoryPage = () => {
  usePageTitle("About Us - DHD");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTopics =
    activeFilter === "All"
      ? aboutUsTopics
      : aboutUsTopics.filter((topic) => topic.category === activeFilter);

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Us
        </motion.h1>
      </section>

      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="-mt-16 relative z-10 bg-white rounded-2xl shadow-2xl text-center px-6 py-12"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Uncovering the{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              DHD Story
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn about our journey, vision, mission, and the core principles
            that drive us to transform India's real estate landscape.
          </p>
        </motion.section>
      </div>

      <main className="container mx-auto px-4 py-16 sm:py-24">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#002147] text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Small Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredTopics.map((topic) => (
              <InfoCard
                key={topic.id}
                topic={topic}
                onCardClick={setSelectedTopic}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* The Modal */}
      {selectedTopic && (
        <InfoDetailModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </div>
  );
};

export default HistoryPage;
