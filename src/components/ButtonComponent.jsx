import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonComponent = ({ color, gambar, label }) => {
  return (
    <button
      className={`text-white font-semibold text-lg p-2 rounded ${color} h-[50px] min-w-[50px] `}
    >
      <FontAwesomeIcon icon={gambar} /> {label}
    </button>
  );
};

export default ButtonComponent;
