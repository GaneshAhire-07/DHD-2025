import usePageTitle from "../../hooks/usePageTitle";

const FeatureCard = ({ title, children }) => (
  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-xl font-bold text-[#002147] mb-3">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

const InfrastructurePage = () => {
  usePageTitle("Infrastructure");
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Infrastructure & Building Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Shaping the built environment for a better, more sustainable future.
        </p>
      </section>

      {/* Introductory Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Excellence in
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Every Sector
          </span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          DHD Group is a global leader in the delivery of sustainable
          infrastructure and building solutions. With a commitment to
          excellence, innovation, and client satisfaction, we provide
          comprehensive services across diverse sectors.
        </p>
      </section>

      {/* Features Grid Section */}
      <main className="bg-white rounded-2xl shadow-xl max-w-4xl mx-auto my-10 px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard title="Infrastructure">
            Execution of complex civil engineering projects on a global scale,
            including transportation, energy, and urban development.
          </FeatureCard>
          <FeatureCard title="Utilities">
            Expert installation and maintenance services for vital utility
            connections like water, energy, and telecommunications.
          </FeatureCard>
          <FeatureCard title="Housing Maintenance">
            Comprehensive services through DHD Places, including repairs,
            planned maintenance, and fire safety compliance for social
            landlords.
          </FeatureCard>
          <FeatureCard title="Rail">
            A critical role in modernizing rail infrastructure with specialized
            signaling and power solutions for safe and efficient operation.
          </FeatureCard>
          <FeatureCard title="Property & Facilities Management">
            We strategically invest, develop, and manage property assets
            globally, ensuring optimal operation through our facilities
            management services.
          </FeatureCard>
          <FeatureCard title="Sustainable Building Design">
            A leader in sustainable construction, prioritizing low-energy
            design, enhanced insulation, and occupant well-being to meet
            environmental targets.
          </FeatureCard>
        </div>
      </main>
    </div>
  );
};

export default InfrastructurePage;
