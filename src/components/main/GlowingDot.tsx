import React from "react";

const GlowingDot = ({ isGreen = false }) => {
  const colorClass = isGreen ? "bg-green-600" : "bg-red-600";
  const shadowColor = isGreen ? "green" : "red";

  return <div className={`w-1.5 h-1.5 rounded-full ${colorClass}`}></div>;
};

export default GlowingDot;
