import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-14 w-full justify-between  items-center px-1 md:px-6  border-b border-slate-200 ">
      <Link to='/'>
        <img
          src="https://primrose.health/wp-content/uploads/2023/10/primrose-logo-md.svg"
          width={200}
        />
      </Link>
      <button
        type="button"
        className="focus:outline-none text-white bg-[#F07036]  font-medium rounded-lg text-sm px-6 py-2 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
