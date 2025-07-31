import usePageTitle from "../../hooks/usePageTitle";
const PhysicalImpactPage = () => {
  usePageTitle("Physical Impact")
  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Physical Impact
          </h1>
          <img 
            src="https://picsum.photos/seed/dhd-about-physical/800/600" 
            alt="Physical Impact"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="text-gray-700 space-y-4">
            <p>
              We are committed to delivering net-zero carbon developments by 2030 by reducing embodied carbon, focusing on intelligent design, and maintaining the bespoke aesthetics and exceptional qualities that define DHD.
            </p>
            <p>
              We will promote biodiversity across our developments and local areas, benefiting both communities and the environment while supporting India's Green agenda. We believe in taking a leading role in transforming India's biodiversity through innovative design to deliver better and greener spaces.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PhysicalImpactPage;
