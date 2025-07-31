import usePageTitle from "../../hooks/usePageTitle";
import impact from "../../assets/impact.jpg";
const SocialImpactPage = () => {
  usePageTitle("Social Impact");
  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Social Impact
          </h1>
          <img
            src={impact}
            alt="Social Impact"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="text-gray-700 space-y-4">
            <p>
              We are launching "pop-up" training academies under our DHD Real
              Estate Academy scheme in partnership with Building Heroes. These
              on-site academies will deliver social value and new opportunities
              to local communities.
            </p>
            <p>
              The DHD Real Estate Academy will leverage Building Heroes'
              expertise to provide training programs for military veterans and
              collaborate with local authorities to assist individuals facing
              employment challenges.
            </p>
            <p>
              We are dedicated to making a lasting impact by supporting India's
              veterans and underrepresented groups in real estate and long-term
              employment.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SocialImpactPage;
