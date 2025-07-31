import corporate from "../../assets/corporate.avif";
import usePageTitle from "../../hooks/usePageTitle";

export default function FacilitiesManagementPage() {
  usePageTitle("Facilities Management");
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Facilities Management
        </h1>
      </section>

      <section className="-mt-16 relative z-10 mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-500 to-sky-600 bg-clip-text text-transparent">
                {" "}
                Operational Support
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              DHD Places provides comprehensive facilities management services,
              ensuring the optimal operation of buildings and infrastructure.
              Our services encompass building maintenance, energy management,
              security, and sustainability initiatives.
            </p>
          </div>
          <div>
            <img
              src={corporate}
              alt="Facilities Management Services"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
