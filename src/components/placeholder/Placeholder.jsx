import React from "react";

const Placeholder = ({ height = "100px", width = "100%", borderRadius = "8px" }) => {
  return (
    <div
      className="animate-pulse bg-gray-300"
      style={{
        height,
        width,
        borderRadius,
      }}
    />
  );
};

export default Placeholder;
