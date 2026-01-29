import React, { useState } from "react";
import { IoMail, IoCall, IoStatsChart, IoPersonCircle } from "react-icons/io5";

const Customers = () => {
  const [customers] = useState([
    { id: 1, name: "Ziad El-Sayed", email: "ziad@example.com", phone: "+2010123456", totalTrips: 12, totalSpent: "$2,400", status: "VIP" },
    { id: 2, name: "Mariam Ali", email: "mariam@example.com", phone: "+2011987654", totalTrips: 3, totalSpent: "$450", status: "Regular" },
    { id: 3, name: "Omar Hassan", email: "omar@example.com", phone: "+2012456789", totalTrips: 1, totalSpent: "$120", status: "New" },
  ]);

  return (
    <div className="p-4 animate-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Customers Directory</h1>
        <p className="text-gray-500">Track customer loyalty and spending habits.</p>
      </header>

      {/* جدول العملاء */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-5 text-gray-600 font-semibold">Customer info</th>
              <th className="p-5 text-gray-600 font-semibold">Trips</th>
              <th className="p-5 text-gray-600 font-semibold">Total Spent</th>
              <th className="p-5 text-gray-600 font-semibold">Status</th>
              <th className="p-5 text-gray-600 font-semibold">Contact</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-50 hover:bg-blue-50/20 transition">
                <td className="p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{customer.name}</div>
                    <div className="text-xs text-gray-400">{customer.email}</div>
                  </div>
                </td>
                <td className="p-5 text-gray-700 font-medium">{customer.totalTrips} Trips</td>
                <td className="p-5 text-green-600 font-bold">{customer.totalSpent}</td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    customer.status === "VIP" ? "bg-purple-100 text-purple-700 border border-purple-200" :
                    customer.status === "Regular" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="p-5">
                  <div className="flex gap-2">
                      <a
                        href={`mailto:${customer.email}`}
                        className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        title={`Send email to ${customer.name}`}
                      >
                        <IoMail size={18} />
                      </a>

                      <a
                        href={`tel:${customer.phone}`}
                        className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-green-600 hover:text-white transition-all shadow-sm"
                        title={`Call ${customer.phone}`}
                      >
                        <IoCall size={18} />
                      </a>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;