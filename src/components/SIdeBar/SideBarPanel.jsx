import React from "react";
import { BarChart2, Gamepad2 } from "lucide-react";
import { Link } from "react-router";

const SideBarPanel = () => {
  return (
    <div className="w-64 h-screen bg-white border-r p-6">

      <h1 className="text-2xl font-bold text-blue-500 mb-8">
        Admin Panel
      </h1>


      <ul className="space-y-4">
        <Link to='/admin' className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-blue-500">
          <BarChart2 size={20} />
          <span className="text-lg">Dashboard</span>
        </Link>

        <Link to='/games' className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-blue-500">
          <Gamepad2 size={20} />
          <span className="text-lg">Games</span>
        </Link>
      </ul>
    </div>
  );
};

export default SideBarPanel;