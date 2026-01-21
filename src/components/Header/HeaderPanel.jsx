import React from "react";
import { LogOut, Search } from "lucide-react";
import { Link } from "react-router";

const HeaderPanel = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      <h2 className="text-xl font-semibold text-gray-800">
        Dashboard
      </h2>


      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Link to='/'><LogOut /></Link>
    </div>
  );
};

export default HeaderPanel;