import React from "react";
import NavItem from "./navitem";
import { IoGrid, IoAirplane, IoPeople, IoSettings, IoLogOut, IoStatsChart, IoEarth, IoTicket } from "react-icons/io5";

const ControlPanel = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="h-full bg-[#0F172A] text-white flex flex-col p-6 shadow-xl w-full">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
          <IoAirplane size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight">Terhall Admin</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto scrollbar-hide">
        <NavItem 
          icon={<IoGrid />} label="Dashboard" 
          active={activeTab === "Dashboard"}
          onClick={() => setActiveTab("Dashboard")} 
        />
        <NavItem 
          icon={<IoEarth />} label="Manage Tours"
          active={activeTab === "ManageTours"} 
          onClick={() => setActiveTab("ManageTours")}
        />
        <NavItem 
          icon={<IoTicket />} label="Bookings" 
          active={activeTab === "Bookings"} 
          onClick={() => setActiveTab("Bookings")}
        />
        <NavItem 
          icon={<IoPeople />} label="Customers" 
          active={activeTab === "Customers"} 
          onClick={() => setActiveTab("Customers")}
        />
        <NavItem 
          icon={<IoStatsChart />} label="Reports" 
          active={activeTab === "Reports"} 
          onClick={() => setActiveTab("Reports")}
        />
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <NavItem 
          icon={<IoSettings />} label="Settings" 
          active={activeTab === "Settings"} 
          onClick={() => setActiveTab("Settings")}
        />
        <NavItem 
          icon={<IoLogOut />} label="Logout" 
          active={activeTab === "Logout"} 
          onClick={() => setActiveTab("Logout")}
          className="text-red-400"
        />
      </div>
    </aside>
  );
};

export default ControlPanel;