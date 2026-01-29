import React from "react";
import { IoClose } from "react-icons/io5";

const AddTourModal = ({ isOpen, onClose, onSave, newTour, setNewTour }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0">
          <h2 className="text-xl font-bold text-gray-800">Edit Tour Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <IoClose size={24} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-8 overflow-y-auto space-y-6">

          {/* Title & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Tour Title</label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none transition-all"
                value={newTour.title || ""}
                onChange={(e) => setNewTour({ ...newTour, title: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Price ($)</label>
              <input
                type="number"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none transition-all"
                value={newTour.price || ""}
                onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
              />
            </div>
          </div>

          {/* Destination & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Destination</label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none"
                value={newTour.destination || ""}
                onChange={(e) => setNewTour({ ...newTour, destination: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Duration</label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none"
                value={newTour.duration || ""}
                onChange={(e) => setNewTour({ ...newTour, duration: e.target.value })}
              />
            </div>
          </div>

          {/* About */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">About the Tour</label>
            <textarea
              rows="4"
              className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none resize-none text-sm leading-relaxed"
              value={newTour.about || ""}
              onChange={(e) => setNewTour({ ...newTour, about: e.target.value })}
            />
          </div>

          {/* Hotel & Package Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t-2 border-dashed">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Hotel Name</label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none"
                value={newTour.hotelInfo?.name || ""}
                onChange={(e) => setNewTour({ 
                  ...newTour, 
                  hotelInfo: { ...newTour.hotelInfo, name: e.target.value } 
                })}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Package Type</label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none"
                value={newTour.packageInfo?.type || ""}
                onChange={(e) => setNewTour({ 
                  ...newTour, 
                  packageInfo: { ...newTour.packageInfo, type: e.target.value } 
                })}
              />
            </div>
          </div>

          {/* Highlights & Policy Areas */}
          <div className="space-y-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Tour Highlights (One per line)</label>
              <textarea
                rows="4"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none text-xs font-mono bg-gray-50"
                value={newTour.highlights?.join('\n') || ""}
                onChange={(e) => setNewTour({ ...newTour, highlights: e.target.value.split('\n') })}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Child Policy (One per line)</label>
              <textarea
                rows="3"
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none text-xs font-mono bg-gray-50"
                value={newTour.childPolicy?.join('\n') || ""}
                onChange={(e) => setNewTour({ ...newTour, childPolicy: e.target.value.split('\n') })}
              />
            </div>
          </div>

          {/* Status Select */}
          <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Visibility Status</label>
              <select
                className="w-full border-2 border-gray-100 rounded-2xl p-3 focus:border-blue-500 outline-none font-bold"
                value={newTour.status}
                onChange={(e) => setNewTour({ ...newTour, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex gap-4 bg-white sticky bottom-0">
          <button onClick={onClose} className="flex-1 py-4 border-2 border-gray-100 rounded-2xl font-bold text-gray-500 hover:bg-gray-50 transition">
            Discard
          </button>
          <button onClick={onSave} className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-100">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTourModal;