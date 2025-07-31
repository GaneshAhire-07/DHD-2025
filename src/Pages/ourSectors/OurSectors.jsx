import React from "react";
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
} from "lucide-react";
import degree from "../../assets/degree.avif";
import energy from "../../assets/energy.avif";
import environmental from "../../assets/environmental.avif";
import health from "../../assets/health.avif";
import highways from "../../assets/highways.avif";
import industrial from "../../assets/industrial.avif";

const OurSectors = () => {
  const primaryColor = "#002C59"; // Kept for reference

  const sectorData = [
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600",
      image: degree,
      description:
        "DHD | APGC is a world-leading provider of school and university buildings, delivering over $1 billion worth of educational facilities and fostering inspiring learning environments across all levels.",
      highlights: [
        {
          title: "Inspiring Learning Spaces",
          desc: "Decades of experience in constructing and maintaining first-class educational facilities from early years to higher education.",
        },
        {
          title: "Cutting-Edge Innovation",
          desc: "Leveraging 3D and BIM technologies for enhanced delivery, optimized costs, and comprehensive ICT infrastructure design.",
        },
        {
          title: "Seamless Live Environment Work",
          desc: "Minimizing disruption in operational schools and colleges with meticulous planning and rigorous safety protocols.",
        },
        {
          title: "Comprehensive Facilities Management",
          desc: "Ensuring ongoing maintenance, repair, cleaning, security, and groundskeeping for the entire educational estate.",
        },
      ],
    },
    {
      id: "energy",
      title: "Energy",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      image: energy,
      description:
        "In the dynamic energy sector, DHD | APGC enhances customer service, fosters innovation, and delivers exceptional value across electricity and gas networks, including emerging markets.",
      highlights: [
        {
          title: "Reliable Electricity Networks",
          desc: "Enhancing power distribution, cable and connect solutions (LV to 132kV+), substation upgrades, and emergency response.",
        },
        {
          title: "Comprehensive Gas Services",
          desc: "Full range of services across low, intermediate, and high-pressure networks, including mains replacement and new connections.",
        },
        {
          title: "Pioneering Innovation",
          desc: "At the forefront of renewable energy, EV infrastructure, battery storage, and advanced operational practices.",
        },
        {
          title: "Customer Service Excellence",
          desc: "Dedicated training and a multi-utility approach ensure top-tier service and seamless project delivery.",
        },
      ],
    },
    {
      id: "environmental",
      title: "Environmental",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      image: environmental,
      description:
        "DHD | APGC partners with local authorities to achieve significant cost savings and environmental targets through efficient waste management, recycling, and comprehensive street services.",
      highlights: [
        {
          title: "Cost-Effective Waste Solutions",
          desc: "Reducing expenditures and maximizing value for refuse and recycling services for over 3.2 million households.",
        },
        {
          title: "Optimized Recycling",
          desc: "Leveraging technology and logistical expertise to maximize the value of recycled materials and minimize landfill.",
        },
        {
          title: "Comprehensive Environmental Services",
          desc: "Delivering frontline street cleaning, grounds maintenance, and commercial waste services.",
        },
        {
          title: "Long-Term Partnerships",
          desc: "Collaborating with over 20 public and private sector clients to achieve sustainable environmental outcomes.",
        },
      ],
    },
    {
      id: "health",
      title: "Health",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      image: health,
      description:
        "DHD collaborates with healthcare providers to deliver innovative building solutions, from strategic estates to ward refurbishments, prioritizing patient well-being and efficient delivery.",
      highlights: [
        {
          title: "Trusted Healthcare Partner",
          desc: "Over 200 projects delivered in 15 years, aligning with healthcare providers' aims and navigating procurement frameworks.",
        },
        {
          title: "Working in Live Environments",
          desc: "Expertise in hospital and clinic refurbishments with minimal disruption to critical healthcare services.",
        },
        {
          title: "Advanced Innovation",
          desc: "Utilizing BIM Level 2 standards and championing offsite construction for enhanced efficiency and reduced disruption.",
        },
        {
          title: "Clinical Understanding",
          desc: "Deep understanding of clinical requirements and integration within broader healthcare networks for optimized facilities.",
        },
      ],
    },
    {
      id: "highways",
      title: "Highways & Bridges",
      icon: Construction,
      color: "from-gray-600 to-slate-700",
      image: highways,
      description:
        "As a leading highways service provider for over 25 years, DHD | APGC maintains and improves critical road infrastructure, from major schemes to routine maintenance, with a focus on safety and sustainability.",
      highlights: [
        {
          title: "Comprehensive Infrastructure",
          desc: "Delivering a wide array of road, bridge, and tunnel projects, from planning and programming to operations.",
        },
        {
          title: "Collaborative Innovation",
          desc: "Fostering knowledge sharing and implementing cutting-edge solutions with clients and supply chain partners.",
        },
        {
          title: "Strategic Maintenance",
          desc: "Expertise in routine maintenance and proactive operations to enhance road networks and support communities.",
        },
        {
          title: "Future-Ready Transportation",
          desc: "At the forefront of technological advancements transforming transportation infrastructure.",
        },
      ],
    },
    {
      id: "industrial",
      title: "Industrial",
      icon: Factory,
      color: "from-purple-600 to-indigo-700",
      image: industrial,
      description:
        "DHD | APGC provides comprehensive end-to-end solutions for the industrial sector, from site identification to facilities management, including warehouses, manufacturing plants, and data centers.",
      highlights: [
        {
          title: "End-to-End Industrial Solutions",
          desc: "Complete services from site identification and feasibility to turnkey design, build, fit-out, and facilities management.",
        },
        {
          title: "Diverse Industrial Expertise",
          desc: "Projects ranging from small trade counter units to large-scale logistics, manufacturing, and data center facilities.",
        },
        {
          title: "Advanced Warehousing",
          desc: "Delivering state-of-the-art warehouse projects, including facilities up to one million square feet.",
        },
        {
          title: "Specialized Data Centers",
          desc: "Overcoming unique challenges with sophisticated M&E installations and high-quality fit-outs for critical infrastructure.",
        },
      ],
    },
  ];

  const additionalSectors = [
    {
      title: "Leisure & Hospitality",
      icon: Hotel,
      color: "from-teal-500 to-cyan-600",
      desc: "DHD specializes in designing, constructing, and maintaining world-class leisure facilities and hotels, focusing on unique experiences and sustainable practices.",
    },
    {
      title: "Local Government",
      icon: Building2,
      color: "from-amber-500 to-orange-600",
      desc: "DHD assists local councils in maximizing estate value and reducing service costs by delivering essential community infrastructure and public services efficiently.",
    },
    {
      title: "Offices",
      icon: Building,
      color: "from-blue-600 to-indigo-700",
      desc: "DHD | APGC provides innovative, sustainable, and high-quality office spaces that foster productivity and transform urban landscapes.",
    },
    {
      title: "Rail & Signaling",
      icon: Train,
      color: "from-emerald-600 to-teal-700",
      desc: "With over 25 years of experience, DHD delivers complex rail infrastructure, including new lines, station upgrades, and advanced signaling systems.",
    },
    {
      title: "Residential",
      icon: Home,
      color: "from-rose-500 to-pink-600",
      desc: "DHD develops and maintains diverse residential properties, from luxury homes to affordable housing, creating sustainable and thriving communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section for Our Sectors Page */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5 relative overflow-hidden">
        {/* Subtle background pattern for visual interest */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="relative z-10">
          {" "}
          {/* Ensure text is above background pattern */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold mb-4">
            Our Sectors
          </h2>
        </div>
      </section>

      {/* Floating Introduction Section */}
      <section className="-mt-20 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0d0d0e]">
          DHD | APGC :{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Building a Better World
          </span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto">
          DHD | APGC is a leading construction and infrastructure company with a
          proven track record of delivering exceptional projects across diverse
          sectors. We are committed to innovation, sustainability, and customer
          satisfaction in everything we do. Our expertise spans a wide range of
          services, from design and construction to facilities management and
          maintenance.
        </p>
      </section>

      {/* Main Sectors Display */}
      <section className="relative bottom-5 container mx-auto px-4 py-16 lg:py-24">
        <div className="space-y-20">
          {" "}
          {/* Vertical spacing between sector cards */}
          {sectorData.map((sector, index) => (
            <div key={sector.id} className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse" // Alternating layout
                  }`}
                >
                  {/* Content Area */}
                  <div className="lg:w-3/5 p-8 lg:p-16">
                    <div className="flex items-center mb-8">
                      {/* Sector Icon with gradient background */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${sector.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <sector.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-black text-[#002C59]">
                        {sector.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {sector.description}
                    </p>

                    {/* Highlights/Sub-sections */}
                    <div className="space-y-6">
                      {sector.highlights.map((highlight, idx) => (
                        <div key={idx} className="group/item">
                          <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                            {/* Small decorative dot */}
                            <div className="w-2 h-2 bg-gradient-to-r from-[#002C59] to-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                            <div>
                              <h4 className="text-xl font-bold text-[#002C59] mb-2 group-hover/item:text-blue-600 transition-colors">
                                {highlight.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed">
                                {highlight.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="h-80 lg:h-full relative">
                      <img
                        src={sector.image}
                        alt={`${sector.title} sector`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      {/* Overlay text on image */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center text-white">
                          <sector.icon className="w-6 h-6 mr-3" />
                          <span className="font-semibold text-lg">
                            {sector.title} Excellence
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Sectors Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-[#002C59] mb-4">
              Additional Sectors
            </h2>
            {/* Decorative underline */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#002C59] to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expanding our expertise across diverse industries to meet every
              construction and infrastructure need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalSectors.map((sector, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${sector.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Subtle background pattern for card header */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                      backgroundSize: "15px 15px",
                    }}
                  ></div>
                  <div className="relative z-10 flex items-center justify-center h-full text-white">
                    <div className="text-center">
                      {/* Sector Icon for additional sectors */}
                      <sector.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold">{sector.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {sector.desc}
                  </p>
                  <div className="flex items-center text-[#002C59] font-semibold group-hover:text-blue-600 transition-colors">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSectors;
