import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import Seeking_section from "./Seeking_section";
import Sidebar from "./SideBar";

function Activity_tracker() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar on the left */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className=" ">
        <div className="bg-white relative">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-black transition"
          >
            <AiOutlineArrowLeft className="text-xl" />
            <span className="text-xl font-medium ml-2">Activity</span>
          </button>

          {/* Main Content */}
          <div className="flex space-x-8 pt-16 w-full h-full">
            <Calendar />
            <Seeking_section />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity_tracker;
