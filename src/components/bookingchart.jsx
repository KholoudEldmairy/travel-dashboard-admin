import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';


const BookingChart=({data})=>{
  return(
    <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm">
                      <h3 className="font-bold text-gray-700 mb-6">Booking Analytics</h3>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />                            
                            <Bar dataKey="bookings" fill="#3B82F6" radius={[6, 6, 0, 0]} barSize={35} />

                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
  )
}

export default BookingChart;