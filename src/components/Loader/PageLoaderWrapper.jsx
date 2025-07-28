import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const PageLoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loader
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <div className="animate-fade-in">{children}</div>;
};

export default PageLoaderWrapper;
