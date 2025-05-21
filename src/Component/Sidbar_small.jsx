import React from "react";
import { GrHome } from "react-icons/gr";
import {
  IoPersonOutline,
  IoHeartOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import { FiPlus } from "react-icons/fi"; // plus icon
import profile from "../assets/profile.png";
import { Link, useLocation } from "react-router-dom";

// Icon configuration with plus button after Follow Requests
const navItems = [
  {
    path: "/comunity",
    icon: <GrHome size={20} />,
    label: "Community",
  },
  {
    path: "/follow_requests",
    icon: <IoPersonOutline size={20} />,
    label: "Follow Requests",
  },
  {
    path: null,
    icon: <FiPlus size={20} />,
    label: "Add New",
    isButton: true,
  },
  {
    path: "/likes",
    icon: <IoHeartOutline size={20} />,
    label: "Likes",
  },
  {
    path: "/chat",
    icon: <IoChatbubbleOutline size={20} />,
    label: "Chat",
  },
];

function Sidebar_small() {
  const location = useLocation();
  const tileBg = "bg-red-500";

  const handleClose = () => {
    console.log("Sidebar closed");
  };

  const isActive = (path) => location.pathname === path;

  // Handler for plus button click — now does nothing
  const handlePlusClick = () => {
    // No action on click for now
  };

  return (
    <div className="w-16 bg-white dark:bg-gray-800 flex flex-col items-center py-6 min-h-screen">
      {/* Profile Section */}
      <Link to="/editprofile" onClick={handleClose}>
        <div
          className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
            isActive("/editprofile")
              ? `${tileBg} border-transparent`
              : "border-gray-300 dark:border-gray-600"
          } mb-8`}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Navigation Icons including plus button */}
      <div className="flex flex-col gap-6">
        {navItems.map((item) =>
          item.isButton ? (
            // Render plus as a button, not Link
            <button
              key="plus-btn"
              onClick={handlePlusClick}
              title={item.label}
              className="p-2 rounded-full flex items-center justify-center transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {item.icon}
            </button>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleClose}
              title={item.label}
              className={`p-2 rounded-full flex items-center justify-center transition-colors duration-200
              ${
                isActive(item.path)
                  ? `${tileBg} text-white`
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {item.icon}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Sidebar_small;
