import React from "react";



const NavItem = ({ icon, label, active ,onClick }) => (
  <div
  onClick={onClick} 
  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}>
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);


export default NavItem;