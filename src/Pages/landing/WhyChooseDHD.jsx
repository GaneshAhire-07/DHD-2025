import React from "react";
import bannerImg from "../../assets/banner-img1-710x750.png";
import {
  FaCheck,
  FaLeaf,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

// Data for the features list for cleaner code
const featuresData = [
  {
    icon: <FaCheck />,
    title: "Proven Expertise",
    description: "Across 15+ sectors with a track record of success.",
    delay: "100",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability-First",
    description: "Committed to Net Zero by 2030 and eco-friendly practices.",
    delay: "200",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Partnerships",
    description:
      "We build lasting relationships that create local community value.",
    delay: "300",
  },
  {
    icon: <FaChartLine />,
    title: "Modern Construction",
    description: "Integrating BIM and the latest technologies for efficiency.",
    delay: "400",
  },
  {
    icon: <FaShieldAlt />,
    title: "Certified & Safe",
    description: "ISO 14001:2015 certified governance and safety standards.",
    delay: "500",
  },
];

// A dedicated component for each feature item
const FeatureItem = ({ icon, title, description, delay }) => (
  <div
    className="flex items-start gap-4"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
      {React.cloneElement(icon, { className: "text-xl" })}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

function WhyChooseDHD() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:max-w-2xl" data-aos="fade-right">
            {/* --- MODIFIED HEADER SECTION --- */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Why Choose DHD
              </h2>
            </div>
            {/* --- END OF MODIFIED HEADER SECTION --- */}

            <p className="text-lg text-gray-600 mb-10">
              Our commitment to excellence, sustainability, and client
              satisfaction sets us apart. We leverage deep industry expertise
              and modern technology to deliver projects that not only meet but
              exceed expectations.
            </p>

            <div className="space-y-8">
              {featuresData.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-green-200/20 rounded-full blur-3xl opacity-60 animate-pulse animation-delay-4000"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.03] transition-transform duration-500 z-10">
                <img
                  src={bannerImg}
                  alt="A professional discussing plans on a construction site"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseDHD;
