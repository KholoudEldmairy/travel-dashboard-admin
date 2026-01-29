import React, { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    { id: 101, customer: "Ahmed Aly", tour: "Cairo Pyramids", date: "2024-05-10", amount: "$150", status: "Confirmed" },
    { id: 102, customer: "Sara Khan", tour: "Sharm Trip", date: "2024-05-12", amount: "$200", status: "Pending" },
    { id: 103, customer: "John Doe", tour: "Nile Cruise", date: "2024-05-15", amount: "$300", status: "Cancelled" },
    { id: 104, customer: "Mona Zaki", tour: "Luxor Temple", date: "2024-05-18", amount: "$180", status: "Pending" },
  ]);

  const [filter, setFilter] = useState("All");

  const toggleStatus = (id, newStatus) => {
    if (newStatus === "Cancelled") {
      const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
      if (!confirmCancel) return;
    }

    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );

    setBookings(updatedBookings);
  };

  const filteredData = filter === "All" 
    ? bookings 
    : bookings.filter((b) => b.status === filter);

  return (
    <div className="p-4 animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bookings Management</h1>
        <p className="text-gray-500 mt-2">Manage customer reservations and status updates.</p>
      </header>

      <div className="flex gap-4 mb-8 bg-white p-2 rounded-2xl w-fit shadow-sm border border-gray-100">
        {["All", "Confirmed", "Pending", "Cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
              filter === status 
                ? "bg-blue-600 text-white shadow-md scale-105" 
                : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="p-5 text-gray-600 font-semibold">Customer</th>
              <th className="p-5 text-gray-600 font-semibold">Tour & Date</th>
              <th className="p-5 text-gray-600 font-semibold">Amount</th>
              <th className="p-5 text-gray-600 font-semibold">Action (Status)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((booking) => (
              <tr key={booking.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/30 transition">
                <td className="p-5">
                  <div className="font-bold text-gray-800">{booking.customer}</div>
                  <div className="text-xs text-blue-500 font-medium italic">Order ID #{booking.id}</div>
                </td>
                <td className="p-5">
                  <div className="text-gray-700 font-medium">{booking.tour}</div>
                  <div className="text-sm text-gray-400">{booking.date}</div>
                </td>
                <td className="p-5 font-bold text-gray-900">{booking.amount}</td>
                <td className="p-5">
                  <select
                    value={booking.status}
                    onChange={(e) => toggleStatus(booking.id, e.target.value)}
                    className={`p-2 pr-8 rounded-xl text-xs font-bold border-none outline-none cursor-pointer transition-all shadow-sm ${
                      booking.status === "Confirmed" ? "bg-green-100 text-green-700 focus:ring-green-300" :
                      booking.status === "Pending" ? "bg-orange-100 text-orange-700 focus:ring-orange-300" :
                      "bg-red-100 text-red-700 focus:ring-red-300"
                    }`}
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <div className="p-10 text-center text-gray-400">
            No {filter} bookings found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;