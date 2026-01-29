import React, { useState } from "react";
import AddTourModal from "../components/AddTourModal"; 
import { IoAddCircle, IoPencil, IoTrash } from "react-icons/io5";

const Manage_Tours = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const initialTourState = {
    title: "",
    destination: "",
    price: "",
    duration: "",
    status: "Active",
    about: "",
    hotelInfo: { name: "", location: "" },
    packageInfo: { type: "" },
    highlights: [],
    childPolicy: [],
    images: []
  };

  const [newTour, setNewTour] = useState(initialTourState);

  const [tours, setTours] = useState([
    {
      id: 1,
      title: "Pyramids of Giza & Sphinx Adventure",
      destination: "Cairo, Egypt",
      price: 299,
      duration: "3 Days / 2 Nights",
      status: "Active",
      about: "Embark on an unforgettable journey to the ancient wonders of Egypt...",
      hotelInfo: { name: "Pyramids View Hotel", location: "Giza, Egypt" },
      packageInfo: { type: "Full Package with Meals" },
      highlights: ["Guided tour of the Pyramids", "Traditional Egyptian lunch"],
      childPolicy: ["Children under 2: Free", "Children 2-12: 50% discount"]
    }
  ]);

  const deleteTour = (id) => {
    if(window.confirm("Are you sure you want to delete this tour?")) {
      setTours(tours.filter(tour => tour.id !== id));
    }
  };

  const handleEditClick = (tour) => {
    setNewTour({ ...tour }); 
    setCurrentId(tour.id);
    setIsEditing(true); 
    setIsModalOpen(true); 
  }; 

  const handleSave = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTours(tours.map(t => t.id === currentId ? { ...newTour, id: currentId } : t));
    } else {
      setTours([...tours, { ...newTour, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setIsEditing(false);
    setNewTour(initialTourState);
  }; 

  return (
    <div className="p-4 animate-in fade-in duration-500">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Tours Management</h1>
          <p className="text-gray-500">Manage detailed travel packages and content</p>
        </div>
        <button
          onClick={() => {
            setIsEditing(false); 
            setNewTour(initialTourState);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-100"
        >
          <IoAddCircle size={22} /> Add New Tour
        </button>
      </header>

      <AddTourModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSave}
        newTour={newTour}
        setNewTour={setNewTour}
      />

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="p-5 text-gray-600 font-semibold text-sm">Tour Package</th>
              <th className="p-5 text-gray-600 font-semibold text-sm">Price</th>
              <th className="p-5 text-gray-600 font-semibold text-sm">Status</th>
              <th className="p-5 text-gray-600 font-semibold text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/30 transition">
                <td className="p-5 align-top">
                      <div className="font-bold text-gray-900 text-lg leading-tight mb-1">
                        {tour.title}
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 font-medium text-xs mb-2">
                        <span className="bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wide">
                          {tour.destination}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 italic">{tour.duration}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] text-gray-500 flex items-center gap-1">
                          <span className="font-semibold text-gray-700">🏨 Hotel:</span> 
                          {tour.hotelInfo?.name || "N/A"}
                        </div>
                        <div className="text-[11px] text-gray-400 flex items-center gap-1">
                          <span className="font-semibold text-gray-600">🍱 Board:</span> 
                          {tour.packageInfo?.type || "Standard"}
                        </div>
                      </div>

                      {tour.about && (
                        <div className="mt-3 text-[10px] text-gray-400 max-w-xs line-clamp-2 border-t pt-2 border-gray-50 italic">
                          "{tour.about}"
                        </div>
                      )}
                    </td>
                <td className="p-5">
                  <div className="text-lg font-bold text-gray-900">${tour.price}</div>
                </td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    tour.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {tour.status}
                  </span>
                </td>
                <td className="p-5">
                  <div className="flex justify-center gap-4 text-gray-400">
                    <button onClick={() => handleEditClick(tour)} className="hover:text-blue-600 transition-all"><IoPencil size={20} /></button>
                    <button onClick={() => deleteTour(tour.id)} className="hover:text-red-600 transition-all"><IoTrash size={20} /></button>
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

export default Manage_Tours;