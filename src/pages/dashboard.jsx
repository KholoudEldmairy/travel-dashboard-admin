import React from "react";
import Header from "../components/Header";
import StateCardsRow from "../components/statecardsrow";
import BookingChart from "../components/bookingchart";
import Map from "../components/map";

const data = [
  { name: 'Mon', bookings: 60 }, { name: 'Tue', bookings: 140 },
  { name: 'Wed', bookings: 35 }, { name: 'Thu', bookings: 50 },
  { name: 'Fri', bookings: 70 }, { name: 'Sat', bookings: 90 },
  { name: 'Sun', bookings: 95 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Header />
      <StateCardsRow />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <div className="lg:col-span-2 w-full">
            <BookingChart data={data} />
          </div>
          <div className="w-full">
            <Map />
          </div>
      </div>
    </div>
  );
};

export default Dashboard;