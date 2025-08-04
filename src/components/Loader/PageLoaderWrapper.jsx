import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const PageLoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="animate-fade-in duration-500">{children}</div>
  );
};

export default PageLoaderWrapper;
