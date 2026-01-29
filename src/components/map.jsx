import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';
import { IoGrid, IoAirplane, IoPeople, IoSettings, IoLogOut, IoStatsChart, IoEarth, IoTicket } from "react-icons/io5";


const Map=()=>{
  return(
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                  <h3 className="font-bold text-gray-700 mb-4">Tour Locations</h3>
                  <div className="h-72 bg-blue-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-blue-100">
                    <IoEarth size={50} className="text-blue-300 mb-2"/>
                    <p className="text-blue-400 text-sm font-medium">Map Interface Integration</p>
                  </div>
                </div>
  )
}

export default Map;