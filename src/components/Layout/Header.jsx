import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
// import setActiveDropdown from "../../redux/slices/DropdownSlices";
import { useSelector } from "react-redux";
import {
  setBarsDropdown,
  setNotifDropdown,
  setUserDropdown,
  clearDropdown,
} from "../../redux/slices/DropdownSlices";
import DropdownComponent from "../DropdownComponent";
import { useEffect, useRef } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const Bars = useSelector((state) => state.dropdown.isDropdownBars);
  const Notif = useSelector((state) => state.dropdown.isNotification);
  const User = useSelector((state) => state.dropdown.isDropdownUser);

  const dropdownRef = useRef(null); // Ref to the dropdown container

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown container
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        (Bars || Notif || User)
      ) {
        dispatch(clearDropdown());
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [Bars, Notif, User, dispatch]);

  console.log(Bars, Notif, User);

  return (
    <div className="sticky top-0 left-0 w-[85vw] z-0 flex justify-between items-center text-xl py-5 pl-6 pr-20 border-b-2 bg-[#262f4e] text-white ">
      <div className="relative">
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl"
          onClick={() => dispatch(setBarsDropdown())}
        />
        {Bars && (
          <div className="absolute top-10 left-0  w-32">
            <DropdownComponent bars={Bars} />
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 divide-x-2">
        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="pr-4 "
            onClick={() => dispatch(setNotifDropdown())}
          />
          {Notif && (
            <div className="absolute top-10 right-0  w-32">
              <DropdownComponent notif={Notif} />
            </div>
          )}
        </div>
        <div
          className="flex items-center gap-4 relative"
          onClick={() => dispatch(setUserDropdown())}
        >
          <FontAwesomeIcon
            className="py-2 px-2.5 border rounded-full"
            icon={faUser}
          />
          <p>SuperAdmin</p>
          <FontAwesomeIcon className="text-lg" icon={faCaretDown} />
          {User && (
            <div className="absolute top-10 right-0  w-32">
              <DropdownComponent user={User} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
