import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClipboardList,
  faClipboardCheck,
  faBookOpen,
  faMagnifyingGlass,
  faChartColumn,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/react.svg";
import { useState } from "react";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const optionPerencanaan = [
    { nama: "Rencana Audit", link: "rencana-audit" },
    { nama: "Tim Audit", link: "#" },
    { nama: "PKA", link: "#" },
    { nama: "Anggaran", link: "#" },
    { nama: "Rencana Audit", link: "#" },
  ];

  return (
    <div className="bg-[#10183c] sticky top-0 left-0 z-10 h-screen p-4 w-60 text-slate-500 ">
      <div className="flex items-center gap-3 mb-5">
        <img src={logo} alt="" />
        <h2 className="text-3xl text-white font-bold">Logo</h2>
      </div>
      <div className="flex flex-col gap-2">
        {/* Dashboard */}
        <Link
          to="/"
          className="hover:text-white hover:bg-[#1395ed] rounded-lg p-2 transition-all flex items-center  gap-3 "
        >
          <FontAwesomeIcon icon={faHouse} className="" />
          Dashboard
        </Link>

        {/* Rencana Audit */}
        <Link
          to="#"
          className="hover:text-white transition-all flex items-center p-2 gap-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faClipboardList} className="" />
          Perencanaan
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className="text-sm pt-1"
          />
        </Link>
        {isOpen && (
          <div className="flex flex-col gap-4">
            {optionPerencanaan.map((item, index) => (
              <Link
                to={`/${item.link}`}
                key={index}
                className="hover:text-white hover:bg-[#1395ed]  rounded-lg py-2 px-8 transition-all flex items-center  gap-3"
              >
                {item.nama}
              </Link>
            ))}
          </div>
        )}

        {/*Eksekusi */}
        <Link
          to="#"
          className="hover:text-white transition-all flex items-center p-2 gap-3"
        >
          <FontAwesomeIcon icon={faClipboardCheck} className="" />
          Eksekusi
          <FontAwesomeIcon icon={faChevronUp} className="text-sm pt-1" />
        </Link>

        {/*Pelaporan */}
        <Link
          to="#"
          className="hover:text-white transition-all flex items-center p-2 gap-3"
        >
          <FontAwesomeIcon icon={faBookOpen} className="" />
          Pelaporan
          <FontAwesomeIcon icon={faChevronUp} className="text-sm pt-1" />
        </Link>

        {/*Pemantauan */}
        <Link
          to="#"
          className="hover:text-white transition-all flex items-center p-2 gap-3"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
          Pemantauan
          <FontAwesomeIcon icon={faChevronUp} className="text-sm pt-1" />
        </Link>

        {/*Parameter */}
        <Link
          to="#"
          className="hover:text-white transition-all flex items-center p-2 gap-3"
        >
          <FontAwesomeIcon icon={faChartColumn} className="" />
          Parameter
          <FontAwesomeIcon icon={faChevronUp} className="text-sm pt-1" />
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
