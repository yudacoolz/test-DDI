import React from "react";

const DropdownComponent = ({ bars, notif, user }) => {
  return (
    <div className="bg-white  border-2 border-black rounded p-2">
      {bars ? (
        <div className="flex flex-col items-center">
          <p className="text-black">Bars</p>
        </div>
      ) : notif ? (
        <div className="flex flex-col items-center">
          {" "}
          <p className="text-black">Notif</p>
        </div>
      ) : user ? (
        <div className="flex flex-col items-center">
          {" "}
          <p className="text-black">User</p>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownComponent;
