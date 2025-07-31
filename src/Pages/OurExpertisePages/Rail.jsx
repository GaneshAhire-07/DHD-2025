import usePageTitle from "../../hooks/usePageTitle";
export default function Rail() {
  usePageTitle("Rail");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient hero section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Rail
        </h1>
      </section>

      {/* Overlapping content card section */}
      <section className="-mt-16 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 sm:px-8 py-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
          Modernizing Rail
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            {" "}
            Infrastructure
          </span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
          DHD plays a critical role in the development and modernization of rail
          infrastructure. We provide specialized signaling and power solutions,
          ensuring the safe and efficient operation of this vital transportation
          mode.
        </p>
      </section>
    </div>
  );
}
