import React from "react";
import box2 from "../assets/box2.png";
import circle2 from "../assets/circle2.png";
import text2 from "../assets/txt2.png";
import pen2 from "../assets/pen2.png";
import line from "../assets/line2.png";
import img from "../assets/img4.png";
import { Link } from "react-router-dom";
import { FaArrowUp, FaChevronDown } from "react-icons/fa";

const Tool = () => {
  const tools = [
 { label: "Square", src: box2 }, 
    { label: "Circle", src: circle2 },
    { label: "Text", src: text2 },
    { label: "Pen", src: pen2 },
    { label: "Line", src: line },
    { label: "Image", src: img },
  ];

  const colors = [
    "#000000", "#4B0082", "#FFF9B0", "#BDB76B", "#A9A9A9", "#000000", "#FFFFFF",
  ];

  return (
    <div className="bg-[#e6ecec] min-h-screen flex flex-col relative font-montserrat">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between px-4 py-2 border-b border-gray-300 bg-[#e6ecec] sticky top-0 z-20 gap-2 sm:gap-0">
        {/* Go Back */}
        <Link to="/">
          <div className="text-[13px] font-Nunito text-black">
            <span className="cursor-pointer hover:underline">← Go Back</span>
          </div>
        </Link>

        {/* ART BOARD COLOR */}
        <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
          <span className="text-[14px] ms-2 font-semibold text-black uppercase select-none mb-1 whitespace-nowrap">
            ART BOARD COLOR
          </span>

          <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-300 shadow-sm overflow-x-auto max-w-[340px] scrollbar-hide">
            {/* Add Color Button */}
            <div
              className="w-7 h-7 rounded-full relative cursor-pointer flex-shrink-0"
              style={{
                background: "conic-gradient(magenta,red,yellow,aqua,blue)",
              }}
            >
              <div className="absolute inset-[5px] bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-[16px] ">+</span>
              </div>
            </div>

            {/* Color Buttons */}
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0"
              >
                <div
                  className="w-10 h-7 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}

            {/* Arrow Button */}
            <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer flex-shrink-0">
              <FaArrowUp className="text-black text-xs" />
            </div>
          </div>
        </div>

        {/* Color Dropdown (Design Only) */}
        <div className="relative mt-2 sm:mt-0">
          <div className="flex items-center justify-center -ms-5 w-20 h-[46px] border border-red-700 rounded-lg bg-white cursor-pointer">
            <div
              className="w-8 h-8 rounded-full border border-red-700"
              style={{ backgroundColor: "#b91c1c" }}
            />
            <FaChevronDown className="text-red-700 text-sm ml-3" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row pt-2">
        {/* Sidebar */}
        <nav className="w-full sm:w-20 mt-4 sm:mt-10 flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-6 py-4 text-[10px] font-sans text-black bg-[#e6ecec] border-t sm:border-t-0 border-gray-300 sm:border-r h-auto sm:h-[calc(100vh-3rem)] sticky top-[3.25rem] overflow-x-auto sm:overflow-visible">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 cursor-pointer min-w-[50px]"
            >
              <img
                alt={`${tool.label} tool icon`}
                className="w-5 h-5"
                src={tool.src}
                width="20"
                height="20"
              />
              <span className="whitespace-nowrap">{tool.label}</span>
            </div>
          ))}
        </nav>

        {/* Canvas Area */}
        <div className="flex-1 px-4 overflow-x-auto">
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









// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { Plus, ChevronUp, Palette } from 'lucide-react';
// import {
//   RectangleHorizontal,
//   Circle,
//   Text,
//   Pencil,
//   Minus,
//   Image,
// } from 'lucide-react';

// const Tool = () => {
//   const [activeTool, setActiveTool] = useState(null);
//   const [canvasColor, setCanvasColor] = useState('#ffffff');
//   const [drawingColor, setDrawingColor] = useState('#000000');
//   const canvasRef = useRef(null);
//   const [showColorPicker, setShowColorPicker] = useState(false);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

//   const tools = [
//     { label: 'Rectangle', icon: <RectangleHorizontal className="w-5 h-5" />, value: 'rectangle' },
//     { label: 'Circle', icon: <Circle className="w-5 h-5" />, value: 'circle' },
//     { label: 'Text', icon: <Text className="w-5 h-5" />, value: 'text' },
//     { label: 'Pen', icon: <Pencil className="w-5 h-5" />, value: 'pen' },
//     { label: 'Line', icon: <Minus className="w-5 h-5 rotate-45" />, value: 'line' },
//     { label: 'Image', icon: <Image className="w-5 h-5" />, value: 'image' },
//   ];

//   const colors = [
//     '#000000', '#4B0082', '#FFF9B0', '#BDB76B', '#A9A9A9', '#FFFFFF',
//     '#800000', '#FF0000', '#FF4500', '#FFA500', '#FFFF00', '#808000',
//     '#008000', '#00FFFF', '#0000FF', '#4169E1', '#800080', '#EE82EE',
//     '#FFC0CB', '#FF69B4', '#F0E68C', '#D3D3D3', '#DCDCDC', '#C0C0C0',
//   ];

//   const handleToolSelect = useCallback((toolValue) => {
//     setActiveTool(toolValue);
//     if (canvasRef.current) {
//       switch (toolValue) {
//         case 'text':
//           canvasRef.current.style.cursor = 'text';
//           break;
//         case 'pen':
//         case 'line':
//         case 'rectangle':
//         case 'circle':
//           canvasRef.current.style.cursor = 'crosshair';
//           break;
//         case 'image':
//           canvasRef.current.style.cursor = 'pointer';
//           break;
//         default:
//           canvasRef.current.style.cursor = 'default';
//       }
//     }
//   }, []);

//   const handleColorSelect = useCallback((color) => {
//     setDrawingColor(color);
//   }, []);

//   const handleCanvasColorSelect = useCallback((color) => {
//     setCanvasColor(color);
//   }, []);

//   const handleAddPage = useCallback(() => {
//     console.log('Add new page');
//   }, []);

//   useEffect(() => {
//     if (canvasRef.current) {
//       canvasRef.current.style.backgroundColor = canvasColor;
//     }
//   }, [canvasColor]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (canvasRef.current) {
//         setDimensions({
//           width: canvasRef.current.parentElement?.clientWidth || 800,
//           height: canvasRef.current.parentElement?.clientHeight || 600,
//         });
//       }
//     };

//     handleResize(); // Initial run
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="bg-[#f0f0f0] min-h-screen flex flex-col relative">
//       {/* Top Bar */}
//       <div className="flex flex-col sm:flex-row items-center sm:justify-between px-4 py-2 border-b border-gray-300 bg-[#f0f0f0] sticky top-0 z-20 gap-2 sm:gap-0">
//         <Link to="/">
//           <div className="text-sm font-Nunito text-black hover:underline cursor-pointer">
//             <span>← Go Back</span>
//           </div>
//         </Link>

//         <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
//           <span className="text-xs font-semibold text-black uppercase select-none mb-1 whitespace-nowrap">
//             ART BOARD COLOR
//           </span>

//           <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-300 shadow-sm overflow-x-auto max-w-[340px] scrollbar-hide">
//             <div
//               className="w-7 h-7 rounded-full relative cursor-pointer flex-shrink-0"
//               style={{
//                 background: 'conic-gradient(magenta,red,yellow,aqua,blue)',
//               }}
//               onClick={() => setShowColorPicker(true)}
//             >
//               <div className="absolute inset-[5px] bg-white rounded-full flex items-center justify-center">
//                 <Plus className="text-black text-sm" />
//               </div>
//             </div>

//             {colors.map((color, index) => (
//               <div
//                 key={index}
//                 className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0"
//                 onClick={() => handleCanvasColorSelect(color)}
//               >
//                 <div
//                   className="w-7 h-7 rounded-full border border-gray-300"
//                   style={{ backgroundColor: color }}
//                 />
//               </div>
//             ))}

//             <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer flex-shrink-0">
//               <ChevronUp className="text-black text-xs" />
//             </div>
//           </div>
//         </div>

//         <div className="relative mt-2 sm:mt-0">
//           <div
//             className="flex items-center justify-center w-20 h-10 border border-gray-300 rounded-lg bg-white cursor-pointer"
//             onClick={() => setShowColorPicker(true)}
//           >
//             <div
//               className="w-8 h-8 rounded-full border border-gray-300"
//               style={{ backgroundColor: drawingColor }}
//             />
//             <Palette className="text-gray-600 text-sm ml-3" />
//           </div>

//           {showColorPicker && (
//             <div className="absolute top-12 left-0 bg-white border border-gray-300 rounded-md p-2 shadow-md z-10">
//               <div className="grid grid-cols-6 gap-2">
//                 {colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className="w-6 h-6 rounded-full cursor-pointer"
//                     style={{ backgroundColor: color }}
//                     onClick={() => {
//                       handleColorSelect(color);
//                       setShowColorPicker(false);
//                     }}
//                   />
//                 ))}
//               </div>
//               <button
//                 onClick={() => setShowColorPicker(false)}
//                 className="mt-2 text-xs text-gray-500 hover:underline"
//               >
//                 Close
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row pt-2">
//         <nav className="w-full sm:w-20 mt-4 sm:mt-10 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-6 py-4 text-xs font-sans text-black bg-[#f0f0f0] border-t sm:border-t-0 border-gray-300 sm:border-r h-auto sm:h-[calc(100vh-3rem)] sticky top-[3.25rem] overflow-x-auto sm:overflow-visible">
//           {tools.map((tool) => (
//             <div
//               key={tool.value}
//               className={`flex flex-col items-center gap-1 cursor-pointer min-w-[50px] ${
//                 activeTool === tool.value ? 'text-blue-600' : ''
//               }`}
//               onClick={() => handleToolSelect(tool.value)}
//             >
//               {tool.icon}
//               <span className="whitespace-nowrap">{tool.label}</span>
//             </div>
//           ))}
//         </nav>

//         <div className="flex-1 px-4 overflow-x-auto" style={{ width: '100%', height: '100%' }}>
//           <div
//             className="border border-[#a7c0d8] bg-white rounded-sm mt-4 touch-none relative"
//             ref={canvasRef}
//             style={{
//               cursor: 'default',
//               width: dimensions.width,
//               height: dimensions.height,
//             }}
//           >
//             {/* Drawing logic goes here */}
//           </div>

//           <div
//             className="mt-2 border-t border-gray-300 text-center text-xs font-sans text-black py-2 cursor-pointer select-none hover:underline"
//             onClick={handleAddPage}
//           >
//             + Add page
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tool;

