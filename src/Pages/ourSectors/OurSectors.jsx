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
  ShoppingCart,
  X,
} from "lucide-react";
import degree from "../../assets/degree.avif";
import energy from "../../assets/energy.avif";
import environmental from "../../assets/environmental.avif";
import health from "../../assets/health.avif";
import highways from "../../assets/highways.avif";
import industrial from "../../assets/industrial.avif";

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
    image: highways, // Placeholder; replace with actual image
    description:
      "Designing and maintaining world-class leisure facilities and hotels with unique experiences.",
    price: 50,
  },
  {
    id: "local_gov",
    title: "Local Government",
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    image: industrial, // Placeholder; replace with actual image
    description:
      "Assisting councils in maximizing estate value and delivering essential community infrastructure.",
    price: 50,
  },
  {
    id: "offices",
    title: "Offices",
    icon: Building,
    color: "from-blue-600 to-indigo-700",
    image: degree, // Placeholder; replace with actual image
    description:
      "Providing innovative, sustainable, and high-quality office spaces that foster productivity.",
    price: 50,
  },
  {
    id: "rail",
    title: "Rail & Signaling",
    icon: Train,
    color: "from-emerald-600 to-teal-700",
    image: energy, // Placeholder; replace with actual image
    description:
      "Delivering complex rail infrastructure, including new lines, station upgrades, and signaling.",
    price: 50,
  },
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: health, // Placeholder; replace with actual image
    description:
      "Developing diverse residential properties, from luxury homes to affordable housing.",
    price: 50,
  },
];

const SectorCard = ({ sector, onCardClick, onAddToCart }) => (
  <motion.div
    layoutId={`card-${sector.id}`}
    onClick={() => onCardClick(sector)}
    className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div
      className={`h-40 xs:h-44 sm:h-48 bg-gradient-to-br ${sector.color} relative flex items-center justify-center text-white p-4 xs:p-5`}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <sector.icon className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 opacity-80 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-4 xs:p-5 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-800 mb-2">
        {sector.title}
      </h3>
      <p className="text-slate-600 text-sm xs:text-base sm:text-lg leading-relaxed mb-4 flex-grow">
        {sector.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
          <span className="text-sm xs:text-base">View Details</span>
          <ArrowRight className="w-4 xs:w-5 h-4 xs:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
        <motion.button
          className="bg-gradient-to-r from-[#002147] to-[#003366] text-white px-3 xs:px-4 sm:px-5 py-1 xs:py-1.5 sm:py-2 rounded-full font-medium text-sm xs:text-base transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent modal opening when clicking button
            onAddToCart(sector);
          }}
        >
          Add to Cart
        </motion.button>
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
      <div
        className={`h-48 xs:h-56 sm:h-64 bg-gradient-to-br ${sector.color} relative flex items-center justify-center text-white p-4 xs:p-5 sm:p-6`}
      >
        <img
          src={sector.image}
          alt={sector.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="relative z-10 text-center">
          <sector.icon className="w-16 xs:w-18 sm:w-20 h-16 xs:h-18 sm:h-20 mx-auto mb-3 xs:mb-4" />
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
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (sector) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === sector.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === sector.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...sector, quantity: 1 }];
    });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Cart */}
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
          {/* Cart Icon with Badge */}
          <motion.div
            className="absolute top-4 xs:top-5 sm:top-6 right-4 xs:right-5 sm:right-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <div className="relative">
              <ShoppingCart className="w-6 xs:w-7 sm:w-8 md:w-9 h-6 xs:h-7 sm:h-8 md:h-9 text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs xs:text-sm font-bold rounded-full w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </motion.div>
          {/* Cart Dropdown */}
          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                className="absolute top-12 xs:top-14 sm:top-16 md:top-20 right-4 xs:right-5 sm:right-6 bg-white rounded-lg shadow-lg w-64 xs:w-72 sm:w-80 md:w-96 max-h-[70vh] overflow-y-auto z-60"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 xs:p-5 sm:p-6">
                  <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#002147] mb-3 xs:mb-4 sm:mb-5">
                    Your Cart
                  </h2>
                  {cartItems.length > 0 ? (
                    <>
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 xs:gap-4 mb-2 xs:mb-3 sm:mb-4 border-b border-slate-200 pb-2 xs:pb-3"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 object-cover rounded-lg"
                            loading="lazy"
                            onError={(e) =>
                              (e.target.src = "/fallback-image.jpg")
                            } // Fallback image
                          />
                          <div className="flex-1">
                            <p className="text-sm xs:text-base sm:text-lg text-[#002147] font-medium">
                              {item.title}
                            </p>
                            <p className="text-xs xs:text-sm text-slate-600">
                              ${item.price} x {item.quantity}
                            </p>
                          </div>
                          <p className="text-sm xs:text-base sm:text-lg text-[#002147] font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                      <div className="flex justify-between items-center mt-3 xs:mt-4 sm:mt-5">
                        <p className="text-sm xs:text-base sm:text-lg font-bold text-[#002147]">
                          Total
                        </p>
                        <p className="text-sm xs:text-base sm:text-lg font-bold text-[#002147]">
                          ${totalPrice}
                        </p>
                      </div>
                      <motion.button
                        className="w-full bg-gradient-to-r from-[#002147] to-[#003366] text-white px-4 xs:px-5 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 rounded-full font-medium mt-3 xs:mt-4 sm:mt-5 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Checkout
                      </motion.button>
                    </>
                  ) : (
                    <p className="text-sm xs:text-base sm:text-lg text-slate-600">
                      Your cart is empty.
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              onAddToCart={addToCart}
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
