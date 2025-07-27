// This file is the same as the one in the previous response.
// It uses the content from your requirements document and serves as a great template for other static pages.
import React from "react";

const images = {
  history: "https://picsum.photos/seed/dhd-history/800/600",
  whoWeAre: "https://picsum.photos/seed/dhd-who/800/600",
  whatWeDo: "https://picsum.photos/seed/dhd-do/800/600",
  sustainability: "https://picsum.photos/seed/dhd-sustainability/800/600",
};

const InfoSection = ({ title, imageSrc, alt, children, reverse = false }) => (
  <section className="bg-white shadow-lg rounded-xl mb-12 overflow-hidden">
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/3">
        <img className="h-full w-full object-cover" src={imageSrc} alt={alt} />
      </div>
      <div className="md:w-2/3 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-oxford-blue mb-4">{title}</h2>
        <div className="text-gray-600 space-y-4 text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const HistoryPage = () => {
  return (
    <div className="bg-light-gray min-h-screen">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Our History
        </h1>
      </section>

      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
          The journey of DHD Group from a two-person team to an
          <span className="block md:inline bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-bold ml-1">
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
      </section>

      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
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
                  Cultivate a knowledge-driven culture through technology and
                  research.
                </li>
                <li>
                  Create innovative living solutions that exceed stakeholder
                  expectations.
                </li>
                <li>
                  Continuously strive for advancement and the highest global
                  standards.
                </li>
              </ul>
            </div>
          </div>
        </section>

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
          <ul className="space-y-2 text-gray-600 list-disc list-inside mt-4">
            <li>
              Launching the DHD Real Estate Academy program for veterans and
              those facing employment challenges.
            </li>
            <li>
              Committing to environmental improvements that support India's
              Green agenda.
            </li>
            <li>
              Delivering net-zero carbon developments by 2030 through
              intelligent design.
            </li>
          </ul>
        </InfoSection>
      </main>
    </div>
  );
};

export default HistoryPage;
