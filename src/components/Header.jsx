import React from "react";



const Header=()=>{
  return(
    <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hello, Admin 👋</h1>
            <p className="text-gray-500 text-sm">Here's what's happening with your tours today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white shadow-sm overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin" alt="profile" />
            </div>
          </div>
        </header>

  )
}

export default Header;