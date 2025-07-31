import usePageTitle from "../../hooks/usePageTitle";
const Loader = () => {
  usePageTitle("Loading....");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
