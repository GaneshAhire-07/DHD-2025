import usePageTitle from "../../hooks/usePageTitle";
import history from "../../assets/history.jpg";
import who from "../../assets/who.webp";
import we from "../../assets/we.jpg";
const History = () => {
  usePageTitle("History");
  return (
    <>
      <div className="bg-gray-50 min-h-screen mt-20">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">About DHD</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Our History */}
          <section className="bg-white shadow rounded-lg mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={history}
                  alt="DHD history"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our History
                </h2>
                <p className="text-gray-600">
                  DHD has grown significantly from its humble beginnings as a
                  two-person team to a thriving company with over 300 employees.
                  Led by a highly experienced management team with expertise
                  across all property sectors, DHD continues to benefit from the
                  guidance of its two founders, who remain actively involved in
                  the business.
                </p>
                <p className="text-gray-600 mt-4">
                  We are committed to creating value and delivering
                  uncompromising quality throughout every stage of development.
                  Our foundation is built on long-term partnerships, an
                  integrated approach, and a commitment to shared success with
                  all our collaborators.
                </p>
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section className="bg-white shadow rounded-lg mb-8 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be a leading and innovative global property developer,
              fostering sustainability and well-being for all.
            </p>
          </section>

          {/* Our Mission */}
          <section className="bg-white shadow rounded-lg mb-8 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  Embrace diverse talents and expertise to foster effective
                  collaboration.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  Cultivate a knowledge-driven culture through technology,
                  research, and information sharing.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  Create innovative living solutions that exceed stakeholder
                  expectations and respect the environment.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  Continuously strive for advancement and the development of the
                  highest global standards.
                </span>
              </li>
            </ul>
          </section>

          {/* Who We Are */}
          <section className="bg-white shadow rounded-lg mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={who}
                  alt="DHD team"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Who We Are
                </h2>
                <p className="text-gray-600">
                  DHD is a leading privately owned mixed-use real estate
                  developer in India, specializing in residential-led projects.
                  We focus on "for sale" and "build to rent" residential
                  schemes, incorporating mixed-use opportunities such as hotels,
                  flexible workspaces, retail, and logistics.
                </p>
                <p className="text-gray-600 mt-4">
                  Our entrepreneurial approach and passion for transforming
                  India drive us to seek value and maximize opportunities for
                  our partners in unexpected places.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="bg-white shadow rounded-lg mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={we}
                  alt="DHD projects"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What We Do
                </h2>
                <p className="text-gray-600">
                  We specialize in residential-led mixed-use developments
                  characterized by bespoke design and exceptional quality, with
                  a focus on enhancing the local environment.
                </p>
                <p className="text-gray-600 mt-4">
                  DHD operates across the entire asset lifecycle, prioritizing
                  customer-centricity in all our endeavors. Our services
                  encompass land assembly, land use and planning strategy,
                  stakeholder engagement, sales and marketing, construction,
                  customer care, and asset management.
                </p>
                <p className="text-gray-600 mt-4">
                  Our integrated approach emphasizes design and delivery as
                  fundamental elements throughout the development lifecycle. We
                  are committed to creating India's most aesthetically pleasing
                  spaces for living, working, and leisure.
                </p>
              </div>
            </div>
          </section>

          {/* Our Purpose */}
          <section className="bg-white shadow rounded-lg mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://picsum.photos/seed/dhd-purpose/800/600.jpg"
                  alt="DHD purpose"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Purpose
                </h2>
                <p className="text-gray-600">
                  Driven by our passion for transforming India and unlocking
                  value, we identify opportunities in unexpected locations,
                  targeting high-quality investments of all sizes, scales, and
                  values across the country.
                </p>
                <p className="text-gray-600 mt-4">
                  Our focus on quality, innovation, long-term partnerships, and
                  a fully integrated approach enables us to deliver sustainable
                  developments throughout India.
                </p>
              </div>
            </div>
          </section>

          {/* Sustainability */}
          <section className="bg-white shadow rounded-lg mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://picsum.photos/seed/dhd-sustainability/800/600.jpg"
                  alt="DHD sustainability"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sustainability
                </h2>
                <p className="text-gray-600 mb-4">
                  For 25 years, we have contributed to India's transformation
                  and recognized the importance of delivering value to the
                  communities we serve. Our sustainability program,
                  "Transforming India," includes:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Launching the DHD Real Estate Academy program, targeting
                      veterans and individuals facing employment challenges.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Committing to environmental improvements that support
                      India's Green agenda.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Delivering net-zero carbon developments by 2030 through
                      embodied carbon reduction and intelligent design.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Partnering with sustainability consultancy Greengage to
                      develop a comprehensive net-zero roadmap and action plan.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Joining the UK Green Building Council to collaborate on
                      improving the built environment's sustainability.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Social Impact */}
          <section className="bg-white shadow rounded-lg mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://picsum.photos/seed/dhd-social/800/600.jpg"
                  alt="DHD social impact"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Social Impact
                </h2>
                <p className="text-gray-600">
                  We are launching "pop-up" training academies under our DHD
                  Real Estate Academy scheme in partnership with Building
                  Heroes. These on-site academies will deliver social value and
                  new opportunities to local communities.
                </p>
                <p className="text-gray-600 mt-4">
                  The DHD Real Estate Academy will leverage Building Heroes'
                  expertise to provide training programs for military veterans
                  and collaborate with local authorities to assist individuals
                  facing employment challenges.
                </p>
                <p className="text-gray-600 mt-4">
                  We are dedicated to making a lasting impact by supporting
                  India's veterans and underrepresented groups in real estate
                  and long-term employment.
                </p>
              </div>
            </div>
          </section>

          {/* Physical Impact */}
          <section className="bg-white shadow rounded-lg mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="https://picsum.photos/seed/dhd-physical/800/600.jpg"
                  alt="DHD physical impact"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Physical Impact
                </h2>
                <p className="text-gray-600">
                  We are committed to delivering net-zero carbon developments by
                  2030 by reducing embodied carbon, focusing on intelligent
                  design, and maintaining the bespoke aesthetics and exceptional
                  qualities that define DHD.
                </p>
                <p className="text-gray-600 mt-4">
                  We will promote biodiversity across our developments and local
                  areas, benefiting both communities and the environment while
                  supporting India's Green agenda. We believe in taking a
                  leading role in transforming India's biodiversity through
                  innovative design to deliver better and greener spaces.
                </p>
              </div>
            </div>
          </section>

          {/* Our Policies */}
          <section className="bg-white shadow rounded-lg mb-8 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Policies
            </h2>

            {/* Quality Standards */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="https://picsum.photos/seed/dhd-quality/100/100.jpg"
                  alt="Quality Standards"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Quality Standards
                </h3>
              </div>
              <p className="text-gray-600 pl-16">
                Internal quality audits are carried out regularly and a
                full-time staff member is dedicated to ensuring the
                implementation of agreed operational procedures.
              </p>
            </div>

            {/* Continuing Professional Development */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="https://picsum.photos/seed/dhd-training/100/100.jpg"
                  alt="Continuing Professional Development"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Continuing Professional Development and Training
                </h3>
              </div>
              <p className="text-gray-600 pl-16 mb-4">
                DHD's general policy is to comply with the Royal Institution of
                Chartered Surveyors Code of Professional Conduct which places an
                obligation on the Partners to provide adequate resources in
                terms of qualified staff and works undertaken by the Firm. The
                practice meets the requirements by:
              </p>
              <ul className="space-y-2 text-gray-600 pl-16">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Ensuring appropriately qualified staff are recruited
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Maintaining records of staff qualification and experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Formulating and implementing a policy for staff training
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 pl-16 mt-4">
                Individual members of staff have a responsibility to ensure all
                necessary training is identified and requested where
                appropriate.
              </p>
            </div>

            {/* Staff Performance Appraisals */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="https://picsum.photos/seed/dhd-performance/100/100.jpg"
                  alt="Staff Performance Appraisals"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Staff Performance Appraisals
                </h3>
              </div>
              <p className="text-gray-600 pl-16">
                Staff performance appraisals are held on a twice-yearly basis to
                assess progress and identify any training and development needs.
                All appraisals are private and confidential and include
                self-assessment in respect of professional requirements, further
                education and personal ambitions.
              </p>
            </div>

            {/* Health and Safety */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="https://picsum.photos/seed/dhd-safety/100/100.jpg"
                  alt="Health and Safety"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Health and Safety
                </h3>
              </div>
              <p className="text-gray-600 pl-16">
                The management of DHD Property and Construction Consultants
                recognizes that it has a legal duty of care towards protecting
                the Health and Safety of its employees and others who may be
                affected by the Firm's activities.
              </p>
              <p className="text-gray-600 pl-16 mt-4">
                Management will bring the health and safety policy statement to
                the attention of all employees and seek their co-operation in
                supporting the management in its efforts to establish and
                maintain a safe and healthy working environment.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-inner mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © 2023 DHD. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default History;
