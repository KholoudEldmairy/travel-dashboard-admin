import React from "react";
import StatCard from "./statecard";

const StateCardsRow=()=>{
  return(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Total Tours" value="32" change="+2 new" color="text-blue-600" />
                    <StatCard title="Daily Visitors" value="1,240" change="+15%" color="text-purple-600" />
                    <StatCard title="Active Bookings" value="85" change="+5 today" color="text-green-600" />
                    <StatCard title="Revenue" value="$12.4k" change="+12%" color="text-amber-600" />
                  </div>
  )
}

export default StateCardsRow;