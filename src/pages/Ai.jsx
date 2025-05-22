import React, { useState } from "react";
import ailogo from "../assets/ailogo.png";
import Sidebar from "../Component/SideBar";
import { TiArrowUpThick } from "react-icons/ti";

function Ai() {
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <Sidebar />
        <main className="flex-1 p-2 ml-28">
          <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-colors duration-300">
            <div className="text-center space-y-6 font-montserrat w-full max-w-[900px]">
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
              <div className="flex items-center p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden w-full h-[70px] bg-white dark:bg-gray-800 transition-colors duration-300">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message SeekerAI"
                  className="flex-grow px-4 py-2 outline-none text-sm bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button className="flex items-center bg-red-600 p-4 size-[50px] text-white hover:bg-red-700 rounded-lg transition-colors duration-200">
                  <TiArrowUpThick className="font-bold size-12" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Ai;
