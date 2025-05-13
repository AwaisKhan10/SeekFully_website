import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import book from '../assets/book.png';
import whatsapp from '../assets/whatsapp.png';
import file from '../assets/file.png';
import Ai from '../assets/ai.png';
import more from '../assets/more.png';
import color from '../assets/color.png';

const Sidebar = () => {
  const location = useLocation(); // 🧭 Get current path

  // Helper to apply active style
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-screen bg-white shadow-md flex flex-col items-center py-6 fixed">

      {/* Create Button */}
      <Link to="/tool">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold mb-1">
            +
          </div>
          <span className="text-[10px] font-semibold text-red-600 uppercase">Create</span>
        </div>
      </Link>

      {/* Menu Items */}
      <ul className="flex flex-col gap-y-4 text-center">
        
        <Link to="/">
          <li className={`flex flex-col items-center cursor-pointer hover:scale-110 transition-transform`}>
            <div className={`${isActive("/") ? "bg-red-300" : "hover:bg-red-300"} p-2 rounded-lg`}>
              <img src={color} alt="color" className="w-8 h-8" />
            </div>
            <span className="text-[10px] mt-1 text-gray-700 uppercase font-medium">VM</span>
          </li>
        </Link>

        <Link to="/Comunity">
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
            <div className={`${isActive("/Comunity") ? "bg-red-300" : "hover:bg-red-300"} p-2 rounded-lg`}>
              <img src={whatsapp} alt="Community" className="w-8 h-8" />
            </div>
            <span className="text-[10px] mt-3 text-gray-700 uppercase font-medium">Community</span>
          </li>
        </Link>

        <Link to="/study-interlinear">
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
            <div className={`${isActive("/study-interlinear") ? "bg-red-300" : "hover:bg-red-300"} p-2 rounded-lg`}>
              <img src={book} alt="Bible" className="w-8 h-8" />
            </div>
            <span className="text-[10px] mt-3 text-gray-700 uppercase font-medium">Bible</span>
          </li>
        </Link>

        <Link to="/study">
          <li className="flex flex-col mt-3 items-center cursor-pointer hover:scale-110 transition-transform">
            <div className={`${isActive("/study") ? "bg-red-300" : "hover:bg-red-300"} p-2 rounded-lg`}>
              <img src={file} alt="Study" className="w-8 h-8" />
            </div>
            <span className="text-[10px] mt-3 text-gray-700 uppercase font-medium">Study</span>
          </li>
        </Link>

        {/* Static Link without navigation */}
        <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
          <div className="hover:bg-red-300 p-2 rounded-lg">
            <img src={Ai} alt="AI" className="w-8 h-8" />
          </div>
          <span className="text-[10px] mt-3 text-gray-700 uppercase font-medium">Seeker AI</span>
        </li>

        <Link to="/more">
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
            <div className={`${isActive("/more") ? "bg-red-300" : "hover:bg-red-300"} p-2 rounded-lg`}>
              <img src={more} alt="More" className="w-8 h-8" />
            </div>
            <span className="text-[10px] mt-3 text-gray-700 uppercase font-medium">More</span>
          </li>
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;
