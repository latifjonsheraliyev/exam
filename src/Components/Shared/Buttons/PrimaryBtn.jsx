import React from "react";

const PrimaryBtn = ({ children, width, height, color, size }) => {
  return (
    <button
      className={`bg-[#F45E0C]
              hover:bg-[#bb4819]
              transition
              ${size}
              ${color}
              ${width}
              ${height}
              text-center rounded-lg
              py-2 px-4
              `}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
