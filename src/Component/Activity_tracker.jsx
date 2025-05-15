import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import Seeking_section from "./Seeking_section";
import Sidebar from "./SideBar";

function Activity_tracker() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen font-montserrat bg-gradient-to-br from-gray-50 to-white">
      {/* Sidebar on the left */}
      <div className="w-64 shadow-lg bg-white">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        <div className="relative bg-white rounded-xl shadow-lg p-6">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-indigo-600 transition duration-300 hover:scale-105"
          >
            <AiOutlineArrowLeft className="text-2xl" />
            <span className="text-xl font-semibold ml-2">Activity</span>
          </button>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 pt-20 w-full h-full">
            <div className="flex-1 hover:shadow-md hover:ring-1 hover:ring-indigo-200 rounded-lg transition duration-300">
              <Calendar />
            </div>
            <div className="flex-1 hover:shadow-md hover:ring-1 hover:ring-indigo-200 rounded-lg transition duration-300">
              <Seeking_section />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity_tracker;
