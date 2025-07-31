import green from "../../assets/green.avif";
import usePageTitle from "../../hooks/usePageTitle";
export default function EnvironmentalTargetsPage() {
  usePageTitle("Environmental Targets");
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Environmental Targets
        </h1>
      </section>

      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img
              src={green}
              alt="Sustainable Practices"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Commitment to
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Sustainability
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              DHD collaborates with local authorities to optimize service
              delivery, reduce costs, and achieve critical environmental
              targets. We are committed to sustainable practices and
              environmental stewardship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
