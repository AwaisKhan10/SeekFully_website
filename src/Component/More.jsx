import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./SideBar";

export default function More() {
  const [noteText, setNoteText] = useState("");

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar - 20% */}
      <div className="w-1/5 bg-white border-r shadow-sm">
        <Sidebar />
      </div>

      {/* Main Content - 80% */}
      <div className="w-4/5 p-6 bg-white overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <button className="text-xl text-gray-700">
              <i className="fas fa-arrow-left"></i>
            </button>
            <Link to="/study-notes">
              <h2 className="text-lg font-medium text-gray-800">Study Note</h2>
            </Link>
          </div>
          <button className="text-sm font-semibold text-black">DONE</button>
        </div>

        {/* Bible Verse Block */}
        <div className="bg-gray-100 rounded-md p-3 mb-4">
          <p className="font-bold text-sm text-gray-800 mb-1">Galatians 5 22-24</p>
          <p className="text-sm text-gray-700">
            But the fruit of the Spirit is love, joy, peace, forbearance, kindness,
          </p>
        </div>

        {/* Notes Textarea */}
        <textarea
          className="w-full min-h-[300px] border-none outline-none text-base text-gray-800 placeholder-gray-400 resize-none"
          placeholder="Type your notes here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
