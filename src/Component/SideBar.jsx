import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMessage } from "react-icons/md";
import { LiaBibleSolid } from "react-icons/lia";
import { PiNotebookBold } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import color from "../assets/color.png";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger menu for small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu className="text-3xl text-red-600" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out
            w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-screen fixed top-0 left-0
            flex flex-col items-center py-16 overflow-y-auto bg-white z-40 scrollbar-hide`}
      >
        {/* Create Button */}
        <Link to="/tool" onClick={() => setIsOpen(false)}>
          <div className="flex flex-col items-center text-center mb-4">
            <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              +
            </div>
            <span className="text-[10px] font-semibold text-red-600 uppercase pt-1">
              Create
            </span>
          </div>
        </Link>

        {/* Menu Items */}
        <ul className="flex flex-col gap-y-4 text-center w-full items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
              <div
                className={`${
                  isActive("/") ? "bg-red-300" : "hover:bg-red-300"
                } p-2 rounded-lg`}
              >
                <img src={color} alt="color" className="w-8 h-8" />
              </div>
              <span className="text-[10px] mt-1 text-gray-700 uppercase font-medium">
                VM
              </span>
            </li>
          </Link>

          <Link to="/Comunity" onClick={() => setIsOpen(false)}>
            <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
              <div
                className={`${
                  isActive("/Comunity") ? "bg-red-300" : "hover:bg-red-300"
                } p-2 rounded-lg`}
              >
                <MdOutlineMessage className="text-4xl text-gray-700" />
              </div>
              <span className="text-[10px] text-gray-700 uppercase font-semibold">
                Community
              </span>
            </li>
          </Link>

          <Link to="/study-interlinear" onClick={() => setIsOpen(false)}>
            <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
              <div
                className={`${
                  isActive("/study-interlinear")
                    ? "bg-red-300"
                    : "hover:bg-red-300"
                } p-2 rounded-lg`}
              >
                <LiaBibleSolid className="text-[45px] text-gray-700" />
              </div>
              <span className="text-[10px] mt-1 text-gray-700 uppercase font-medium">
                Bible
              </span>
            </li>
          </Link>

          <Link to="/study" onClick={() => setIsOpen(false)}>
            <li className="flex flex-col mt-3 items-center cursor-pointer hover:scale-110 transition-transform">
              <div
                className={`${
                  isActive("/study") ? "bg-red-300" : "hover:bg-red-300"
                } p-2 rounded-lg`}
              >
                <PiNotebookBold className="text-4xl text-gray-700" />
              </div>
              <span className="text-[10px] mt-1 text-gray-700 uppercase font-medium">
                Study
              </span>
            </li>
          </Link>

          <Link to="/seeker-ai" onClick={() => setIsOpen(false)}>
            <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
              <div
                className={`${
                  isActive("/seeker-ai") ? "bg-red-300" : "hover:bg-red-300"
                } p-2 rounded-lg`}
              >
                <h1 className="text-3xl font-semibold">AI</h1>
              </div>
              <span className="text-[10px] mt-1 text-gray-700 uppercase font-medium">
                Seeker AI
              </span>
            </li>
          </Link>

          <Link to="/profile" onClick={() => setIsOpen(false)}>
            <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
              <div
                className={`${
                  isActive("/profile") ? "bg-red-300" : "hover:bg-red-300"
                } p-2 rounded-lg`}
              >
                <GrAppsRounded className="text-4xl" />
              </div>
              <span className="text-[10px] mt-1 text-gray-700 uppercase font-medium">
                More
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
