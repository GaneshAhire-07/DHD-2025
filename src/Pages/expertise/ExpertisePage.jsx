import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import usePageTitle from "../../hooks/usePageTitle";
import { Leaf, Building, Droplets, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { FaTree, FaSeedling, FaCity } from "react-icons/fa";

// Import your images
import heroBg from "../../assets/b1.jpeg"; // You'll need a good hero image
import horticulture from "../../assets/Holticulture.jpg";
import architecture from "../../assets/Architecture.jpg";
import development from "../../assets/LandscapeArchitech.jpg";
import verticalGarden from "../../assets/VerticalGarden.jpg";
import corporateGreen from "../../assets/CorporateGreenSolution.jpg";
import gardenDesign from "../../assets/garderDesign.jpg";
import grass from "../../assets/GrassPlantation.jpg";
import terrace from "../../assets/TeraceGarden.jpg";
import kitchen from "../../assets/KitchenGarden .jpg";
import infrastructure from "../../assets/Infrastructure.jpg";
import utilities from "../../assets/utilities.jpg";
import housing from "../../assets/housing.jpg";
import rail from "../../assets/rail.jpeg";
import property from "../../assets/property.jpg";
import fm from "../../assets/FacilitiesManagement.jpg";


// --- Data for the Page ---
const horticultureServices = {
    main: [
        { id: 'design', title: 'Landscape Architecture & Design', image: architecture, description: 'Master planning, site analysis, and conceptual designs that harmonize with the environment.' },
        { id: 'construction', title: 'Landscape Development', image: development, description: 'Turnkey solutions from site prep and planting to hardscaping and irrigation installation.' },
        { id: 'vertical-gardens', title: 'Vertical Gardens & Bio Walls', image: verticalGarden, description: 'Innovative green solutions that maximize space, promote biodiversity, and improve air quality.' },
        { id: 'corporate-green', title: 'Corporate Green Solutions', image: corporateGreen, description: 'Tailored "Plants on Rent" and "Maali on Rent" programs to enhance work environments.' },
        { id: 'garden-design', title: 'Garden Design & Maintenance', image: gardenDesign, description: 'Comprehensive design and maintenance, ensuring vibrant and thriving landscapes year-round.' },
    ],
    specialized: [
        { id: 'grass-plantation', title: 'Grass Plantation', image: grass, description: 'A diverse selection of high-quality grasses for lawns, sports fields, and erosion control.' },
        { id: 'terrace', title: 'Terrace Gardening', image: terrace, description: 'Creating functional and aesthetically pleasing terrace gardens to maximize outdoor living space.' },
        { id: 'kitchen', title: 'Kitchen Gardening', image: kitchen, description: 'Enabling clients to cultivate fresh, organic produce in limited urban spaces.' },
    ]
};
const infrastructureServices = [
    { title: "Infrastructure", image: infrastructure, description: "Executing complex civil engineering projects on a global scale, from transportation to urban development." },
    { title: "Utilities", image: utilities, description: "Expert installation and maintenance for vital water, energy, and telecommunications networks." },
    { title: "Housing Maintenance", image: housing, description: "Comprehensive maintenance services to social landlords, including repairs and fire safety compliance." },
    { title: "Rail", image: rail, description: "Providing specialized signaling and power solutions to modernize critical rail infrastructure." },
    { title: "Property", image: property, description: "Strategically investing in and developing property assets to create thriving spaces for communities." },
    { title: "Facilities Management", image: fm, description: "Ensuring the optimal operation of buildings through maintenance, energy management, and security." },
];
const subNavLinks = [
    { to: '#horticulture-intro', label: 'Overview' },
    { to: '#main-services', label: 'Main Services' },
    { to: '#specialized-services', label: 'Specialized Services' },
    { to: '#our-expertise', label: 'Our Expertise' }
];

// --- Reusable Components ---
const ServiceCard = ({ image, title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
        <div className="h-56 overflow-hidden"><img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm flex-grow">{description}</p>
        </div>
    </motion.div>
);

const StickySubNav = ({ links }) => (
    <div className="sticky top-28 hidden lg:block">
        <h3 className="text-sm font-semibold uppercase text-slate-400 mb-4">On this page</h3>
        <nav>
            <ul className="space-y-3">
                {links.map(link => (
                    <li key={link.to}>
                        <HashLink
                            smooth
                            to={link.to}
                            className="block pl-4 border-l-2 border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-500 transition-all"
                        >
                            {link.label}
                        </HashLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);


const ExpertisePage = () => {
    usePageTitle("Our Expertise - DHD");
    const [activeTab, setActiveTab] = useState('horticulture');

    const tabs = [
        { id: 'horticulture', label: 'Horticulture Services', icon: Leaf },
        { id: 'infrastructure', label: 'Infrastructure & Building', icon: Building },
    ];

    return (
        <div className="bg-slate-50 font-sans text-slate-800">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 bg-black"><img src={heroBg} alt="DHD Expertise" className="w-full h-full object-cover opacity-30" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Our Expertise</h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-md">Leveraging a diverse portfolio of skills to deliver comprehensive solutions and exceed expectations.</p>
                </motion.div>
            </section>

            {/* Sticky Tab Navigation */}
            <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-gray-200">
                <div className="container mx-auto px-4 max-w-7xl"><div className="relative flex justify-center">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative flex items-center gap-2 py-4 px-6 text-sm font-medium transition-colors ${activeTab === tab.id ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"}`}><tab.icon size={16} />{tab.label}{activeTab === tab.id && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" layoutId="tab-underline" />}</button>))}</div></div>
            </nav>

            <main className="container mx-auto max-w-7xl py-12 sm:py-16 px-4">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>

                        {/* Horticulture Content */}
                        {activeTab === 'horticulture' && (
                            <div className="lg:grid lg:grid-cols-4 lg:gap-12">
                                <div className="lg:col-span-1"><StickySubNav links={subNavLinks}/></div>
                                <div className="lg:col-span-3 space-y-20">
                                    <section id="horticulture-intro">
                                        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
                                            <img src={horticulture} alt="Horticulture" className="w-full md:w-1/3 rounded-lg" />
                                            <div className="flex-1">
                                                <h2 className="text-3xl font-bold text-[#002147] mb-4">Cultivating Life's Landscapes</h2>
                                                <p className="text-slate-600">DHD is a leading provider of comprehensive horticulture and landscape solutions. We specialize in creating sustainable and aesthetically pleasing green spaces that enhance the built environment.</p>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="main-services">
                                        <h3 className="text-3xl font-bold text-slate-800 text-center mb-10">Main Services</h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{horticultureServices.main.map(s => <ServiceCard key={s.id} {...s} />)}</div>
                                    </section>
                                    <section id="specialized-services">
                                        <h3 className="text-3xl font-bold text-slate-800 text-center mb-10">Specialized Services</h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{horticultureServices.specialized.map(s => <ServiceCard key={s.id} {...s} />)}</div>
                                    </section>
                                    <section id="our-expertise">
                                        <h3 className="text-3xl font-bold text-slate-800 text-center mb-10">Our Expertise</h3>
                                        <div className="grid md:grid-cols-3 gap-8 text-center">
                                            <div className="bg-white p-8 rounded-2xl shadow-lg"><FaTree className="text-4xl mx-auto text-green-600 mb-4" /><h4 className="text-xl font-semibold mb-2">Deep Knowledge</h4><p className="text-slate-600 text-sm">Our team comprises experienced horticulturists with in-depth knowledge of plant selection, care, and maintenance.</p></div>
                                            <div className="bg-white p-8 rounded-2xl shadow-lg"><Droplets className="w-10 h-10 mx-auto text-blue-500 mb-4" /><h4 className="text-xl font-semibold mb-2">Sustainable Practices</h4><p className="text-slate-600 text-sm">We are committed to water-efficient irrigation, organic fertilizers, and integrated pest management.</p></div>
                                            <div className="bg-white p-8 rounded-2xl shadow-lg"><Wrench className="w-10 h-10 mx-auto text-slate-600 mb-4" /><h4 className="text-xl font-semibold mb-2">Customer-Centric</h4><p className="text-slate-600 text-sm">We prioritize building strong client relationships and providing personalized service to ensure complete satisfaction.</p></div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )}

                        {/* Infrastructure Content */}
                        {activeTab === 'infrastructure' && (
                           <div>
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Infrastructure & Building Solutions</h2>
                                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Delivering excellence across diverse sectors, from complex civil engineering to facilities management.</p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {infrastructureServices.map(s => <ServiceCard key={s.title} {...s} />)}
                                </div>
                           </div>
                        )}

                    </motion.div>
                </AnimatePresence>
            </main>
            
            <section className="container mx-auto max-w-7xl pb-16 px-4">
                <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white rounded-2xl p-12 text-center shadow-2xl">
                    <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-4">Our Mission</motion.h3>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-slate-200 max-w-4xl mx-auto">To be the preferred partner for creating and maintaining exceptional green spaces and robust infrastructure that enhance the quality of life and promote a sustainable future.</motion.p>
                </div>
            </section>

        </div>
    );
};

export default ExpertisePage;