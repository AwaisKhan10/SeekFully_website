import React, { useState } from "react";
import rect from "../assets/rect.png";
import circle from "../assets/circle.png";
import text from "../assets/txt.png";  // Make sure this file exists!
import pen from "../assets/pen.png";
import line from "../assets/line.png";
import img from "../assets/img.png";
import { Link } from "react-router-dom";

const colors = ['#000000', '#f9f9b0', '#8a8b5a', '#000000', '#a7a7a7'];

const Tool = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const tools = [
    { label: 'Square', src: rect },
    { label: 'Circle', src: circle },
    { label: 'Text', src: text },
    { label: 'Pen', src: pen },
    { label: 'Line', src: line },
    { label: 'Image', src: img },
  ];

  // ...


  return (
    <div className="bg-[#e6ecec] min-h-screen flex flex-col relative">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-[#e6ecec] sticky top-0 z-20">
        {/* Go Back */}
    <Link to="/home">   <div className="text-[13px] font-sans text-black">
          <span className="cursor-pointer hover:underline">← Go Back</span>
        </div>
        </Link> 

        {/* Art Board Color */}
        <div className="flex flex-col items-start">
  {/* Label Above Color Box */}
  <span className="text-[14px] ms-2 font-sans font-semibold text-black uppercase select-none mb-1">
    ART BOARD COLOR
  </span>

  {/* Color Selection Box */}
  <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-300 shadow-sm overflow-x-auto max-w-[320px] scrollbar-hide">
    {/* Add Color */}
    <button
      aria-label="Add color"
      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer bg-gradient-to-br from-purple-500 via-green-400 to-yellow-300"
    >
      <span className="text-white text-xs font-bold">+</span>
    </button>

    {/* Color Buttons */}
    {colors.map((color, index) => (
      <button
        key={index}
        aria-label={`Color ${color}`}
        onClick={() => setSelectedColor(color)}
        className={`w-7 h-7 rounded-full border-2 ${
          selectedColor === color ? 'border-purple-600' : 'border-gray-300'
        }`}
        style={{ backgroundColor: color }}
      />
    ))}

    {/* Arrow Up */}
    <button
      aria-label="Arrow up"
      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer"
    >
      <i className="fas fa-arrow-up text-black text-xs"></i>
    </button>
  </div>
</div>

        {/* Selected Color Display */}
        <div>
          <button
            aria-label="Selected color dropdown"
            className="flex items-center justify-center w-14 h-10 rounded-md border border-red-900 bg-white"
          >
            <div
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: selectedColor }}
            ></div>
            <i className="fas fa-caret-down text-gray-700 ml-1 text-sm"></i>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex pt-2">
        {/* Sidebar */}
        <nav className="w-20 mt-10 flex flex-col items-center gap-6 py-4 text-[10px] font-sans text-black bg-[#e6ecec] border-r border-gray-300 h-[calc(100vh-3rem)] sticky top-[3.25rem]">
          {tools.map((tool, index) =>
            tool === 'divider' ? (
              <div key={index} className="w-10 border-t border-gray-400"></div>
            ) : (
              <button
                key={index}
                aria-label={`${tool.label} tool`}
                className="flex flex-col items-center gap-1 cursor-pointer"
              >
                <img
                  alt={`${tool.label} tool icon`}
                  className="w-5 h-5"
                  src={tool.src}
                  width="20"
                  height="20"
                />
                <span>{tool.label}</span>
              </button>
            )
          )}
        </nav>

        {/* Canvas Area */}
        <div className="flex-1 px-4">
          <div className="border border-[#a7c0d8] bg-white rounded-sm min-h-[400px] mt-4"></div>

          {/* Footer */}
          <div className="mt-2 border-t border-gray-300 text-center text-[11px] font-sans text-black py-2 cursor-pointer select-none">
            + Add page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
