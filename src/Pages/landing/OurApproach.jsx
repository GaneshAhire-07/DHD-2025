import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Heart, Zap, ShieldCheck, Users, Leaf, X } from "lucide-react";

// Import your images
import localImpactImage from "../../assets/localImpactImage.jpeg";
import commitmentImage from "../../assets/commitment.jpeg";
import modernMethodsImage from "../../assets/modernMethodsImage.jpg";
import covidResponseImage from "../../assets/covid.webp";
import careerEventsImage from "../../assets/careerEventsImage.avif";
import offsiteMethodsImage from "../../assets/offsiteMethodsImage.jpg";
import bimIntegrationImage from "../../assets/bimIntegrationImage.jpg";
import bimTechnologyImage from "../../assets/bimTechnologyImage.jpg";
import bimCollaborationImage from "../../assets/bimCollaborationImage.jpg";
import supplyChainImage from "../../assets/supplyChainImage.jpg";
import paymentPracticesImage from "../../assets/paymentPracticesImage.jpg";
import sustainableWorldImage from "../../assets/sustainableWorldImage.jpg";
import sustainabilityFrameworkImage from "../../assets/sustainabilityFrameworkImage.jpg";

// --- Structured Data for the Story Flow ---
const approachData = [
  {
    id: "philosophy",
    icon: Eye,
    title: "Our Core Philosophy",
    summary:
      "A consistent commitment to excellence, leveraging expertise and experience to generate social value in every community we serve.",
    details: {
      content: (
        <>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Commitment to Excellence
          </h3>
          <p className="mb-6">
            DHD approaches each project with a consistent commitment to
            excellence, regardless of sector or client. We leverage our
            specialized expertise, extensive experience, and forward-thinking
            approach to deliver innovative and effective solutions. Central to
            our ethos is a dedication to generating social value, ensuring that
            our work benefits local communities.
          </p>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Local Roots, National Impact
          </h3>
          <p>
            We are a company with strong local roots and a national presence. In
            every community we serve, we aim to leave a positive legacy by
            contributing to the economic, social, and environmental well-being.
            This commitment has been a core value of DHD for decades.
          </p>
        </>
      ),
      images: [
        { src: commitmentImage, alt: "Commitment to Excellence" },
        { src: localImpactImage, alt: "Local Roots and National Impact" },
      ],
    },
  },
  {
    id: "socialValue",
    icon: Heart,
    title: "Social Value in Action",
    summary:
      "Our response to the COVID-19 pandemic showcases our unwavering mission to support communities with critical infrastructure and resources.",
    details: {
      content: (
        <>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Our COVID-19 Response
          </h3>
          <p className="mb-4">
            DHD is committed to serving communities worldwide, and our response
            to the COVID-19 pandemic exemplifies this. Our support extends
            beyond project delivery, providing essential assistance where most
            needed:
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 pl-5 space-y-2">
            <li>Establishing homeless shelters in various towns.</li>
            <li>Donating laptops to schools to support remote education.</li>
            <li>
              Providing daily hot meals to vulnerable families and elderly
              residents.
            </li>
          </ul>
          <p className="mb-4">
            Furthermore, we conducted virtual career events to engage the next
            generation, inspiring young people to contribute to the post-COVID
            economic recovery. Our commitment was recognized by the Headteacher
            of Hayle Academy, who praised the valuable work experience we
            provided.
          </p>
        </>
      ),
      images: [
        { src: covidResponseImage, alt: "COVID-19 Response" },
        { src: careerEventsImage, alt: "Virtual Career Events" },
      ],
    },
  },
  {
    id: "innovation",
    icon: Zap,
    title: "Innovation & Technology",
    summary:
      "We are at the forefront of modern construction, using BIM and offsite methods to enhance quality, safety, and sustainability.",
    details: {
      content: (
        <>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Modern Construction & BIM
          </h3>
          <p className="mb-4">
            DHD embraces methods that revolutionize the industry, delivering a
            40% increase in productivity and virtually eliminating on-site
            waste. We design, plan, and pre-assemble components offsite—from
            service risers to complete modular units.
          </p>
          <p className="mb-6">
            We are also proactively integrating Building Information Modeling
            (BIM) across all projects. BIM fosters a collaborative environment,
            unlocks efficiencies, and enhances productivity for everyone
            involved. Our commitment to BIM is formally recognized through BSI
            Certification to BIM Level 2.
          </p>
        </>
      ),
      images: [
        { src: modernMethodsImage, alt: "Modern Construction Methods" },
        { src: bimIntegrationImage, alt: "BIM Integration" },
        { src: offsiteMethodsImage, alt: "Offsite Manufacturing" },
        { src: bimTechnologyImage, alt: "BIM Technology" },
        { src: bimCollaborationImage, alt: "BIM Collaboration" },
      ],
    },
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Supply Chain Collaboration",
    summary:
      "Our success is built on strong, collaborative partnerships with a diverse network of suppliers, from local SMEs to specialized providers.",
    details: {
      content: (
        <>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Working Together
          </h3>
          <p className="mb-4">
            We view our supply chain as an extension of DHD, integral to every
            project's success. We strive to build high-performing teams with
            partners who share our commitment to safety, quality, and
            innovation. Over 80% of our supply chain consists of regional SMEs,
            combining local knowledge with specialized skills.
          </p>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Fair Payment Practices
          </h3>
          <p className="mb-4">
            DHD maintains open and transparent payment practices with all our
            supply chain partners, fostering trust and long-term relationships.
          </p>
        </>
      ),
      images: [
        { src: supplyChainImage, alt: "Supply Chain Collaboration" },
        { src: paymentPracticesImage, alt: "Payment Practices" },
      ],
    },
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Building Sustainably",
    summary:
      "Sustainability is not a trend; it's a mindset. Our framework focuses on creating a resilient environment, community, and business.",
    details: {
      content: (
        <>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            At the Core of Our Purpose
          </h3>
          <p className="mb-4">
            Our framework, "Building for a Sustainable World," focuses on our
            strong foundation of environmental protection and social value. We
            view sustainability as a mindset that safeguards three vital
            pillars: a resilient environment, a resilient community, and
            resilient profits.
          </p>
          <p className="mb-4">
            This is broken down into two core components: environmental
            sustainability (addressing critical challenges to minimize our
            footprint) and social sustainability (ensuring a healthy workforce,
            an ethical supplier base, and strong customer relationships).
          </p>
        </>
      ),
      images: [
        { src: sustainableWorldImage, alt: "A Sustainable World" },
        {
          src: sustainabilityFrameworkImage,
          alt: "Our Sustainability Framework",
        },
      ],
    },
  },
];

// --- Main OurApproach Component ---
const OurApproach = () => {
  const [selectedApproach, setSelectedApproach] = useState(null);

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <motion.h1
          className="text-3xl md:text-5xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Approach
        </motion.h1>
      </section>

      {/* Intro Section */}
      <motion.section
        className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Building with{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Purpose & Precision
          </span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Discover the core pillars that guide our work—from initial concept to
          final delivery, ensuring excellence, innovation, and lasting social
          value in every project.
        </p>
      </motion.section>

      {/* The Story Flow / Timeline */}
      <main className="container mx-auto px-4 py-24">
        <div className="relative max-w-5xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-200 hidden md:block" />

          <div className="relative flex flex-col gap-16">
            {approachData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex items-center justify-between w-full md:w-1/2 ${
                  index % 2 === 0
                    ? "md:self-start md:pr-8"
                    : "md:self-end md:pl-8"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Connector dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-300 rounded-full hidden md:block"
                  style={index % 2 === 0 ? { right: "-9px" } : { left: "-9px" }}
                />

                {/* The Card */}
                <motion.div
                  layoutId={`card-${item.id}`}
                  className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 w-full"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">{item.summary}</p>
                  <button
                    onClick={() => setSelectedApproach(item)}
                    className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Read More →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* The Modal for Details */}
      <AnimatePresence>
        {selectedApproach && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedApproach(null)}
          >
            <motion.div
              layoutId={`card-${selectedApproach.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="p-8 flex-shrink-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                    <selectedApproach.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    {selectedApproach.title}
                  </h2>
                </div>
              </div>
              <div className="p-8 pt-0 overflow-y-auto">
                <div className="prose max-w-none text-slate-700">
                  {selectedApproach.details.content}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  {selectedApproach.details.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg shadow-sm object-cover w-full h-40"
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedApproach(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition"
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurApproach;
