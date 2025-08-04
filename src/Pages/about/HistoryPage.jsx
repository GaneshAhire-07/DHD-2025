import { motion } from "framer-motion";
import usePageTitle from "../../hooks/usePageTitle";
import history from "../../assets/history.jpg";
import whoWeAre from "../../assets/who.webp";
import whatWeDo from "../../assets/what-we-do1.png";
import sustainability from "../../assets/sustainability.webp";

const images = {
  history: history,
  whoWeAre: whoWeAre,
  whatWeDo: whatWeDo,
  sustainability: sustainability,
};

// Animation variants for sections revealing on scroll
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Reusable animated InfoSection component
const InfoSection = ({ title, imageSrc, alt, children, reverse = false }) => (
  <motion.section
    className="bg-white shadow-lg rounded-xl mb-16 overflow-hidden"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the card is in view
    whileHover={{ y: -8, transition: { duration: 0.2 } }} // Add a subtle lift on hover
  >
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/3 h-64 md:h-auto">
        <img className="h-full w-full object-cover" src={imageSrc} alt={alt} />
      </div>
      <div className="md:w-2/3 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-oxford-blue mb-4">{title}</h2>
        <div className="text-gray-600 space-y-4 text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </motion.section>
);

// Animation variants for lists
const listContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const HistoryPage = () => {
  usePageTitle("History");
  return (
    <div className="bg-light-gray min-h-screen">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <motion.h1
          className="text-3xl md:text-5xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h1>
      </section>

      {/* Intro card with animation */}
      <motion.section
        className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
          The journey of DHD Group from a two-person team to an
          <span className="block sm:inline bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-bold ml-1">
            industry leader.
          </span>
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          DHD has grown significantly from its humble beginnings as a two-person
          team to a thriving company with over 300 employees. Led by a highly
          experienced management team with expertise across all property
          sectors, DHD continues to benefit from the guidance of its two
          founders, who remain actively involved in the business.
          <br className="hidden sm:block my-2" />
          We are committed to creating value and delivering uncompromising
          quality throughout every stage of development. Our foundation is built
          on long-term partnerships, an integrated approach, and a commitment to
          shared success with all our collaborators.
        </p>
      </motion.section>

      <main className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-8">
        <InfoSection
          title="Our Story"
          imageSrc={images.history}
          alt="DHD history"
        >
          <p>
            DHD has grown significantly from its humble beginnings as a
            two-person team to a thriving company with over 300 employees. Led
            by a highly experienced management team with expertise across all
            property sectors, DHD continues to benefit from the guidance of its
            two founders, who remain actively involved in the business.
          </p>
          <p>
            We are committed to creating value and delivering uncompromising
            quality throughout every stage of development. Our foundation is
            built on long-term partnerships, an integrated approach, and a
            commitment to shared success with all our collaborators.
          </p>
        </InfoSection>

        {/* Vision & Mission card with animation */}
        <motion.section
          className="bg-white shadow-lg rounded-xl mb-16 p-8 md:p-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Our Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg">
                To be a leading and innovative global property developer,
                fostering sustainability and well-being for all.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h3>
              <motion.ul
                className="space-y-2 text-gray-600 list-disc list-inside"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  "Embrace diverse talents and expertise to foster effective collaboration.",
                  "Cultivate a knowledge-driven culture through technology and research.",
                  "Create innovative living solutions that exceed stakeholder expectations.",
                  "Continuously strive for advancement and the highest global standards.",
                ].map((item, index) => (
                  <motion.li key={index} variants={listItemVariants}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.section>

        <InfoSection
          title="Who We Are"
          imageSrc={images.whoWeAre}
          alt="Who we are"
          reverse={true}
        >
          <p>
            DHD is a leading privately owned mixed-use real estate developer in
            India, specializing in residential-led projects. We focus on "for
            sale" and "build to rent" residential schemes, incorporating
            mixed-use opportunities such as hotels, flexible workspaces, retail,
            and logistics.
          </p>
          <p>
            Our entrepreneurial approach and passion for transforming India
            drive us to seek value and maximize opportunities for our partners
            in unexpected places.
          </p>
        </InfoSection>

        <InfoSection
          title="What We Do"
          imageSrc={images.whatWeDo}
          alt="What we do"
        >
          <p>
            We specialize in residential-led mixed-use developments
            characterized by bespoke design and exceptional quality, with a
            focus on enhancing the local environment.
          </p>
          <p>
            DHD operates across the entire asset lifecycle, prioritizing
            customer-centricity in all our endeavors. Our services encompass
            land assembly, land use and planning strategy, stakeholder
            engagement, sales and marketing, construction, customer care, and
            asset management.
          </p>
        </InfoSection>

        <InfoSection
          title="Sustainability"
          imageSrc={images.sustainability}
          alt="Sustainability at DHD"
          reverse={true}
        >
          <p>
            For 25 years, we have contributed to India's transformation and
            recognized the importance of delivering value to the communities we
            serve. Our sustainability program, "Transforming India," includes:
          </p>
          <motion.ul
            className="space-y-2 text-gray-600 list-disc list-inside mt-4"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Launching the DHD Real Estate Academy program for veterans and those facing employment challenges.",
              "Committing to environmental improvements that support India's Green agenda.",
              "Delivering net-zero carbon developments by 2030 through intelligent design.",
            ].map((item, index) => (
              <motion.li key={index} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </InfoSection>
      </main>
    </div>
  );
};

export default HistoryPage;
