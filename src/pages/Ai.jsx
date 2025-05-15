import React from "react";
import ailogo from "../assets/ailogo.png";
import Sidebar from "../Component/SideBar";
const [message, setMessage] = useState("");
import { IoIosSend } from "react-icons/io";

function Ai() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center space-y-6">
          {/* SeekerAI Logo */}
          <div className="flex justify-center">
            <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center">
              {/* Replace with actual SVG/icon if needed */}
              <span className="text-white text-2xl font-bold">g</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800">
            Get help from SeekerAI
          </h1>

          {/* Input box */}
          <div className="flex items-center justify-center max-w-md mx-auto border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message SeekerAI"
              className="flex-grow px-4 py-2 outline-none text-sm"
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
