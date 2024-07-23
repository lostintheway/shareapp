import React from "react";

const GlowingDot = ({ isGreen = false }) => {
  const colorClass = isGreen ? "bg-green-600" : "bg-red-600";
  const shadowColor = isGreen ? "green" : "red";

  return (
    <div
      className={`w-2 h-2 rounded-full ${colorClass}`}
      style={{
        boxShadow: `0 0 5px ${shadowColor}, 0 0 10px ${shadowColor}, 0 0 15px ${shadowColor}`,
      }}
    ></div>
  );
};

export default GlowingDot;
