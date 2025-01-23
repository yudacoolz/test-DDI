import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import {
  faEnvelope,
  faPlay,
  faListCheck,
  faArrowDownWideShort,
  faMagnifyingGlass,
  faPlus,
  faChevronDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RencanaAudit = () => {
  return (
    <div>
      <div className="flex justify-between items-center font-semibold text-xl text-slate-500">
        <p>Rencana Audit</p>
        <div>
          Perencanaan /{" "}
          <Link to="/rencana-audit" className="text-blue-400">
            Rencana Audit
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <ButtonComponent color="bg-[#1395eb]" gambar={faArrowDownWideShort} />
          <div className="flex gap-2 items-center border border-slate-300 p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" placeholder="Cari Data" />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <button className="rounded bg-[#ecb988] text-white p-4 flex items-center gap-3">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Export Annual Report
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <ButtonComponent
            color="bg-[#1395eb]"
            gambar={faPlus}
            label={"Tambah"}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 my-5">
        <button className="rounded border border-slate-300  p-4 flex items-center gap-3">
          Audit Types
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className="rounded border border-slate-300  p-4 flex items-center gap-3">
          Audit Objects
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className="rounded border border-slate-300  p-4 flex items-center gap-3">
          Audit Statues
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className="rounded border border-slate-300  p-4 flex items-center gap-3">
          Audit Years
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-[#d2e9f7] ">
            <th className="font-medium border border-slate-300 p-4">No</th>
            <th className="font-medium border border-slate-300 p-4">
              Audit Objective Umum
            </th>
            <th className="font-medium border border-slate-300 p-4">
              Audit Type
            </th>
            <th className="font-medium border border-slate-300 p-4">
              Audit Object
            </th>
            <th className="font-medium border border-slate-300 p-4">
              Estimated Auditors
            </th>
            <th className="font-medium border border-slate-300 p-4">Year</th>
            <th className="font-medium border border-slate-300 p-4">
              Audit Status
            </th>
            <th className="font-medium border border-slate-300 p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-4">1</td>
            <td className="border border-slate-300 p-4">
              Survailance ISO 27001
            </td>
            <td className="border border-slate-300 p-4">
              Audit Investigatif Fdraud
            </td>
            <td className="border border-slate-300 p-4">Audit Internal Q5</td>
            <td className="border border-slate-300 p-4">4</td>
            <td className="border border-slate-300 p-4">2024</td>
            <td className="border border-slate-300 p-4">
              <label className="bg-[#c9f2d8] text-[#44936e] font-semibold rounded p-2 w-full">
                Finished
              </label>
            </td>
            <td className="border border-slate-300 p-4 flex gap-2">
              <ButtonComponent color="bg-[#1395eb]" gambar={faListCheck} />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4">1</td>
            <td className="border border-slate-300 p-4">Audit Pemeriksaan</td>
            <td className="border border-slate-300 p-4">Audit Keuangan</td>
            <td className="border border-slate-300 p-4">Cabang Surabaya </td>
            <td className="border border-slate-300 p-4">5</td>
            <td className="border border-slate-300 p-4">2025</td>
            <td className="border border-slate-300 p-4">
              <label className="bg-[#c9f2d8] text-[#44936e] font-semibold rounded p-2 w-full">
                Finished
              </label>
            </td>
            <td className="border border-slate-300 p-4 flex gap-2">
              <ButtonComponent color="bg-[#1395eb]" gambar={faListCheck} />
              <ButtonComponent color="bg-[#27a845]" gambar={faEnvelope} />
              <ButtonComponent color="bg-[#13b392]" gambar={faPlay} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RencanaAudit;
