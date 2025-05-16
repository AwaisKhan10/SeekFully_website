import React, { useState } from "react";
import ailogo from "../assets/ailogo.png";
import Sidebar from "../Component/SideBar";
const [message, setMessage] = useState("");
import { IoIosSend } from "react-icons/io";

function Ai() {
  return (
    <>
      <Sidebar />
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 shadow-md p-6 transition-colors duration-300">
        <div className="text-center space-y-6 font-montserrat">
          {/* SeekerAI Logo */}
          <div className="flex justify-center">
            <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center">
              <img src={ailogo} alt="logo" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-semibold text-gray-800 dark:text-gray-100">
            Get help from SeekerAI
          </h1>

          {/* Input box */}
          <div className="flex items-center p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden w-[900px] h-[70px] bg-white dark:bg-gray-800 transition-colors duration-300">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message SeekerAI"
              className="flex-grow px-4 py-2 outline-none text-sm bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button className="bg-red-600 p-2 text-white hover:bg-red-700">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ai;
