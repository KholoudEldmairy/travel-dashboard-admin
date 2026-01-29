import React from "react";

const StatCard = ({ title, value, change, color }) => {
return( 
   <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <p className="text-gray-500 text-sm mb-1">{title}</p>
    <div className="flex items-end gap-2">
      <h2 className="text-2xl font-black text-gray-800">{value}</h2>
      <span className={`text-xs font-bold mb-1 ${color}`}>{change}</span>
    </div>
  </div>
);
}

export default StatCard