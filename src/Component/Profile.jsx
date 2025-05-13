import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import profilepage from "../assets/profilepage.png";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { LuSquareActivity } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiDonateHeart } from "react-icons/bi";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { TiLightbulb } from "react-icons/ti";
import { CgNotes } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { CiDark } from "react-icons/ci";

function Profile() {
  // State management for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      <div className=" bg-gradient-to-b from-gray-300">
        <div className="flex flex-col items-center justify-center pt-5">
          <img src={profilepage} alt="" />
          <h1 className="text-xl text-black font-bold">Bernard Ward</h1>
          <p className="text-[#000000a9]">BernardWard@gmail.com</p>
        </div>
      </div>
      <div className="text-gray-700 grid grid-cols-2 gap-4 mt-20 px-4 md:px-8 mx-auto w-full max-w-6xl">
        {/* Profile */}
        <Link
          to="/editprofile"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <CgProfile className="text-2xl" />
            <h1 className="text-lg font-semibold">Profile</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </Link>

        {/* Activity Tracker */}
        <Link
          to="/activitytracker"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <LuSquareActivity className="text-2xl" />
            <h1 className="text-lg font-semibold">Activity Tracker</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </Link>

        {/* Notification */}
        <a
          href="#"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <IoIosNotificationsOutline className="text-2xl" />
            <h1 className="text-lg font-semibold">Notification</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </a>

        {/* Giving */}
        <Link
          to="/giftseekfully"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <BiDonateHeart className="text-2xl" />
            <h1 className="text-lg font-semibold">Giving</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </Link>

        {/* Bookmarks */}
        <Link
          to="/bookmark"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <IoBookmarksOutline className="text-2xl" />
            <h1 className="text-lg font-semibold">Bookmarks</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </Link>

        {/* Share Seekfully */}
        <a
          href="#"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <IoShareSocialOutline className="text-2xl" />
            <h1 className="text-lg font-semibold">Share Seekfully</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </a>

        {/* Highlights */}
        <Link
          to="/highlighted"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <TiLightbulb className="text-2xl" />
            <h1 className="text-lg font-semibold">Highlights</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </Link>

        {/* Notes */}
        <Link
          to="/notes"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <CgNotes className="text-2xl" />
            <h1 className="text-lg font-semibold">Notes</h1>
          </div>
          <IoIosArrowForward className="text-xl" />
        </Link>
        <button
          type="button"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
          onClick={toggleDarkMode} // Add your toggle function here
          role="switch"
          aria-checked={isDarkMode} // Add your state variable here
        >
          <div className="flex items-center gap-3">
            <CiDark className="text-2xl" />
            <h1 className="text-lg font-semibold">Switch to Dark Mode</h1>
          </div>

          {/* Toggle Switch */}
          <div className="relative inline-block w-12 h-6 transition-all duration-300">
            <div
              className={`absolute inset-0 rounded-full transition-colors ${
                isDarkMode ? "bg-red-500" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                isDarkMode ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </div>
        </button>

        {/* Logout */}
        <a
          href="#"
          className="flex items-center justify-between w-full p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3 text-red-500">
            <LuLogOut className="text-2xl" />
            <h1 className="text-lg text-red-500 font-semibold">Logout</h1>
          </div>
        </a>
      </div>
    </>
  );
}

export default Profile;
