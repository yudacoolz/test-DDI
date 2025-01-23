import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardItem = ({ icon, number, label }) => {
  return (
    <div className={"bg-white text-slate-500 rounded p-6"}>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={icon}
          className="text-xl rounded-full text-white bg-[#1094ef] py-3 px-3.5 w-4 h-4"
        />
        <div className="text-md font-bold">{label}</div>
      </div>
      <div className="text-2xl mt-3 font-bold">{number}</div>
    </div>
  );
};

export default CardItem;
