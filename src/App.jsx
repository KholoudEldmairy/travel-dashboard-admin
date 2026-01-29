import React, { useState } from "react";
import { IoMenu, IoClose, IoAirplane } from "react-icons/io5"; 
import ControlPanel from "./components/controlpanel";
import Dashboard from "./pages/dashboard";
import ManageTours from "./pages/managetour";
import Bookings from "./pages/bookings";
import Customers from "./pages/customers";
import Reports from "./pages/Reports";

const APP = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activeTab) {
      case "Dashboard": return <Dashboard />; 
      case "ManageTours": return <ManageTours />;
      case "Bookings": return <Bookings />;
      case "Customers": return <Customers />;
      case "Reports": return <Reports />;
      default: return <Dashboard />;
    }
  };

  return ( 
    <div className="flex h-screen bg-[#F0F2F5] font-sans overflow-hidden">

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out bg-[#0F172A]
        md:relative md:translate-x-0 md:flex
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <ControlPanel 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false); 
          }} 
        />
      </aside>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#F0F2F5] overflow-hidden">
        
        <header className="md:hidden bg-white px-6 py-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
               <IoAirplane size={20} />
            </div>
            <span className="font-bold text-gray-800">pharaohs-tours Admin</span>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-gray-50 rounded-lg">
            <IoMenu size={26} />
          </button>
        </header>

        <div className="flex-1 p-4 md:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-[1600px] mx-auto w-full">
             {renderPage()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default APP;