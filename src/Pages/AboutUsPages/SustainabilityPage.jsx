import usePageTitle from "../../hooks/usePageTitle";
const Sustainability = new URL(
  "../../assets/Sustainability1.webp",
  import.meta.url
).href;
const SustainabilityPage = () => {
  usePageTitle("Sustainability");
  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sustainability
          </h1>
          <img
            src={Sustainability}
            alt="Sustainability"
            className="w-full h-64 object-contain rounded-xl mb-6"
          />
          <div className="text-gray-700 space-y-4">
            <p>
              For 25 years, we have contributed to India's transformation and
              recognized the importance of delivering value to the communities
              we serve. Our sustainability program, "Transforming India,"
              includes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Launching the DHD Real Estate Academy program, targeting
                veterans and individuals facing employment challenges.
              </li>
              <li>
                Committing to environmental improvements that support India's
                Green agenda.
              </li>
              <li>
                Delivering net-zero carbon developments by 2030 through embodied
                carbon reduction and intelligent design.
              </li>
              <li>
                Partnering with sustainability consultancy Greengage to develop
                a comprehensive net-zero roadmap and action plan.
              </li>
              <li>
                Joining the UK Green Building Council to collaborate on
                improving the built environment's sustainability.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SustainabilityPage;
