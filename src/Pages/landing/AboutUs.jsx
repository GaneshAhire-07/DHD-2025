import usePageTitle from "../../hooks/usePageTitle";
import InfoSection from "../../Pages/landing/InfoSection";
import history from "../../assets/history.jpg";
import whoWeAre from "../../assets/who.webp";
import whatWeDo from "../../assets/what-we-do1.png";
import purpose from "../../assets/purpose.png";
import sustainability from "../../assets/sustainability.webp";
import socialImpact from "../../assets/social.webp";
import physicalImpact from "../../assets/physical.webp";
import qualityStandards from "../../assets/behind.jpg";
import cpdTraining from "../../assets/CPD.webp";
import performanceAppraisals from "../../assets/performance.webp";
import healthSafety from "../../assets/Health.avif";
import equalOpportunities from "../../assets/pari.jpg";
import environmental from "../../assets/environmental.webp";

const images = {
  history: history,
  whoWeAre: whoWeAre,
  whatWeDo: whatWeDo,
  ourPurpose: purpose,
  sustainability: sustainability,
  socialImpact: socialImpact,
  physicalImpact: physicalImpact,
  qualityStandards: qualityStandards,
  cpdTraining: cpdTraining,
  performanceAppraisals: performanceAppraisals,
  healthSafety: healthSafety,
  equalOpportunities: equalOpportunities,
  environmental: environmental,
};

const AboutUs = () => {
  usePageTitle("About Us");

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          About Us
        </h1>
      </section>

      {/* Intro Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Uncovering the{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            DHD Story
          </span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Learn about our journey, vision, mission, and what drives us to
          transform India's real estate landscape.
        </p>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <InfoSection
          title="Our History"
          imageSrc={images.history}
          alt="DHD History"
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

        {/* Vision and Mission Section */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
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
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Embrace diverse talents and expertise to foster effective
                  collaboration.
                </li>
                <li>
                  Cultivate a knowledge-driven culture through technology,
                  research, and information sharing.
                </li>
                <li>
                  Create innovative living solutions that exceed stakeholder
                  expectations and respect the environment.
                </li>
                <li>
                  Continuously strive for advancement and the development of the
                  highest global standards.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <InfoSection
          title="Who We Are"
          imageSrc={images.whoWeAre}
          alt="Who We Are"
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
          alt="What We Do"
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
          <p>
            Our integrated approach emphasizes design and delivery as
            fundamental elements throughout the development lifecycle. We are
            committed to creating India's most aesthetically pleasing spaces for
            living, working, and leisure. Our expertise in navigating India's
            complex planning rules and regulations benefits both DHD and our
            partners.
          </p>
        </InfoSection>

        <InfoSection
          title="Our Purpose"
          imageSrc={images.ourPurpose}
          alt="Our Purpose"
          reverse={true}
        >
          <p>
            Driven by our passion for transforming India and unlocking value, we
            identify opportunities in unexpected locations, targeting
            high-quality investments of all sizes, scales, and values across the
            country. Our focus on quality, innovation, long-term partnerships,
            and a fully integrated approach enables us to deliver sustainable
            developments throughout India.
          </p>
        </InfoSection>

        {/* Sustainability, Social Impact, and Physical Impact Sections */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Our Impact
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sustainability
              </h3>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                  src={images.sustainability}
                  alt="Sustainability"
                  className="w-full md:w-1/3 rounded-lg object-cover"
                />
                <div className="flex-1 text-gray-600 space-y-2">
                  <p>
                    For 25 years, we have contributed to India's transformation
                    and recognized the importance of delivering value to the
                    communities we serve. Our sustainability program,
                    "Transforming India," includes:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      Launching the DHD Real Estate Academy program, targeting
                      veterans and individuals facing employment challenges.
                    </li>
                    <li>
                      Committing to environmental improvements that support
                      India's Green agenda.
                    </li>
                    <li>
                      Delivering net-zero carbon developments by 2030 through
                      embodied carbon reduction and intelligent design.
                    </li>
                    <li>
                      Partnering with sustainability consultancy Greengage to
                      develop a comprehensive net-zero roadmap and action plan.
                    </li>
                    <li>
                      Joining the UK Green Building Council to collaborate on
                      improving the built environment's sustainability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Social Impact
              </h3>
              <div className="flex flex-col md:flex-row-reverse items-start gap-6">
                <img
                  src={images.socialImpact}
                  alt="Social Impact"
                  className="w-full md:w-1/3 rounded-lg object-cover"
                />
                <div className="flex-1 text-gray-600 space-y-2">
                  <p>
                    We are launching "pop-up" training academies under our DHD
                    Real Estate Academy scheme in partnership with Building
                    Heroes. These on-site academies will deliver social value
                    and new opportunities to local communities.
                  </p>
                  <p>
                    The DHD Real Estate Academy will leverage Building Heroes'
                    expertise to provide training programs for military veterans
                    and collaborate with local authorities to assist individuals
                    facing employment challenges.
                  </p>
                  <p>
                    We are dedicated to making a lasting impact by supporting
                    India's veterans and underrepresented groups in real estate
                    and long-term employment.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Physical Impact
              </h3>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                  src={images.physicalImpact}
                  alt="Physical Impact"
                  className="w-full md:w-1/3 rounded-lg object-cover"
                />
                <div className="flex-1 text-gray-600 space-y-2">
                  <p>
                    We are committed to delivering net-zero carbon developments
                    by 2030 by reducing embodied carbon, focusing on intelligent
                    design, and maintaining the bespoke aesthetics and
                    exceptional qualities that define DHD.
                  </p>
                  <p>
                    We will promote biodiversity across our developments and
                    local areas, benefiting both communities and the environment
                    while supporting India's Green agenda. We believe in taking
                    a leading role in transforming India's biodiversity through
                    innovative design to deliver better and greener spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Policies Section */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Our Policies
          </h2>
          <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto">
            DHD is committed to high standards of corporate governance and
            investment in staff. Our policies and guidelines ensure quality,
            development, and a responsible approach to our work.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Standards",
                img: images.qualityStandards,
                content:
                  "Internal quality audits are carried out regularly and a full-time staff member is dedicated to ensuring the implementation of agreed operational procedures.",
              },
              {
                title: "Continuing Professional Development and Training",
                img: images.cpdTraining,
                content:
                  "DHD's general policy is to comply with the Royal Institution of Chartered Surveyors Code of Professional Conduct which places an obligation on the Partners to provide adequate resources in terms of qualified staff and works undertaken by the Firm. The practice meets the requirements by: Ensuring appropriately qualified staff are recruited; Maintaining records of staff qualification and experience; Formulating and implementing a policy for staff training; Individual members of staff have a responsibility to ensure all necessary training is identified and requested where appropriate.",
              },
              {
                title: "Staff Performance Appraisals",
                img: images.performanceAppraisals,
                content:
                  "Staff performance appraisals are held on a twice-yearly basis to assess progress and identify any training and development needs. All appraisals are private and confidential and include self-assessment in respect of professional requirements, further education and personal ambitions.",
              },
              {
                title: "Health and Safety",
                img: images.healthSafety,
                content:
                  "The management of DHD Property and Construction Consultants recognizes that it has a legal duty of care towards protecting the Health and Safety of its employees and others who may be affected by the Firm’s activities. Management will bring the health and safety policy statement to the attention of all employees and seek their co-operation in supporting the management in its efforts to establish and maintain a safe and healthy working environment.",
              },
              {
                title: "Equal Opportunities",
                img: images.equalOpportunities,
                content:
                  "DHD is an equal opportunity employer. We are committed to ensuring within the framework of the law that our workplaces are free from unlawful or unfair discrimination on the grounds of disability, color, race, nationality, ethnic or national origin, sex-gender, sexual orientation, age, marital status, religious or other similar philosophical belief. We ensure that our employees achieve their full potential and all employment decisions are taken without reference to discriminatory criteria.",
              },
              {
                title: "Environmental",
                img: images.environmental,
                content:
                  "Impaired environments affect the quality of life and the well-being of everyone. DHD believes that every commercial organization has its part to play in ensuring sustainable development in the long term. In recognition of our environmental responsibilities, DHD is accredited under ISO 14001:2015 which reflects our commitment to best practice and continuous environmental improvement.",
              },
            ].map((policy, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <img
                  src={policy.img}
                  alt={policy.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-oxford-blue mb-2">
                  {policy.title}
                </h3>
                <p className="text-slate-600 text-sm">{policy.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
