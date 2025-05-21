import React, { useState } from "react";
import { GrHome } from "react-icons/gr";
import {
  IoPersonOutline,
  IoHeartOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

function Sidebar_small() {
  // State to track the active icon
  const [activeIcon, setActiveIcon] = useState("home"); // Default to "home" as active

  // Function to handle icon clicks and update the active state
  const handleIconClick = (iconName) => {
    console.log(`Icon clicked: ${iconName}, setting activeIcon to ${iconName}`); // Debugging log
    setActiveIcon(iconName);
  };

  return (
    <div className="w-16 bg-white dark:bg-gray-800 flex flex-col items-center justify-center min-h-screen">
      {/* Profile Image with Link */}
      <Link to="/editprofile">
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 mb-6"
        />
      </Link>

      <div className="flex flex-col gap-6">
        {/* Home Icon */}
        <div
          className={`p-2 rounded-full cursor-pointer ${
            activeIcon === "home"
              ? "bg-red-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleIconClick("home")}
        >
          <Link to="/comunity" onClick={() => setIsOpen(false)}>
            <GrHome size={20} />
          </Link>
        </div>

        {/* Person Icon */}
        <div
          className={`p-2 rounded-full cursor-pointer ${
            activeIcon === "person"
              ? "bg-red-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleIconClick("person")}
        >
          <Link to="/follow_requests" onClick={() => setIsOpen(false)}>
            <IoPersonOutline size={20} />
          </Link>
        </div>

        {/* Heart Icon */}
        <div
          className={`p-2 rounded-full cursor-pointer ${
            activeIcon === "heart"
              ? "bg-red-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleIconClick("heart")}
        >
          <Link to="/likes" onClick={() => setIsOpen(false)}>
            <IoHeartOutline size={20} />
          </Link>
        </div>

        {/* Chat Icon */}
        <div
          className={`p-2 rounded-full cursor-pointer ${
            activeIcon === "chat"
              ? "bg-red-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleIconClick("chat")}
        >
          <Link to="/chat">
            <IoChatbubbleOutline size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar_small;
