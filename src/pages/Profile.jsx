import React from "react";
import { useTheme } from "../useTheme";
import { Link } from "react-router-dom";
import profilepage from "../assets/profilepage.png";
import { CgProfile, CgNotes } from "react-icons/cg";
import { IoIosArrowForward, IoIosNotificationsOutline } from "react-icons/io";
import { LuSquareActivity, LuLogOut } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";
import { IoBookmarksOutline, IoShareSocialOutline } from "react-icons/io5";
import { TiLightbulb } from "react-icons/ti";
import { CiDark } from "react-icons/ci";
import Sidebar from "../Component/SideBar";

function Profile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="bg-gradient-to-b from-gray-300 to-white dark:from-gray-800 dark:to-gray-900 dark:bg-gradient-to-b p-6">
          <div className="flex flex-col items-center justify-center">
            <img
              src={profilepage}
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <h1 className="text-xl font-bold mt-2">Bernard Ward</h1>
            <p className="text-gray-600 dark:text-gray-400">
              BernardWard@gmail.com
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10 px-4 md:px-8 mx-auto w-full max-w-6xl">
          {/* Utility function for repeated link buttons */}
          {[
            { to: "/editprofile", icon: <CgProfile />, label: "Profile" },
            {
              to: "/activitytracker",
              icon: <LuSquareActivity />,
              label: "Activity Tracker",
            },
            {
              to: "#",
              icon: <IoIosNotificationsOutline />,
              label: "Notification",
            },
            { to: "/giftseekfully", icon: <BiDonateHeart />, label: "Giving" },
            {
              to: "/bookmark",
              icon: <IoBookmarksOutline />,
              label: "Bookmarks",
            },
            {
              to: "#",
              icon: <IoShareSocialOutline />,
              label: "Share Seekfully",
            },
            { to: "/highlighted", icon: <TiLightbulb />, label: "Highlights" },
            { to: "/notes", icon: <CgNotes />, label: "Notes" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="flex items-center justify-between w-full p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{item.icon}</div>
                <h1 className="text-lg font-semibold">{item.label}</h1>
              </div>
              <IoIosArrowForward className="text-xl" />
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-between w-full p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
            role="switch"
          >
            <div className="flex items-center gap-3">
              {theme === "light" ? (
                <CiDark className="text-2xl" />
              ) : (
                <TiLightbulb className="text-2xl" />
              )}
              <h1 className="text-lg font-semibold">
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
              </h1>
            </div>
            <div className="relative inline-block w-12 h-6">
              <div
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                  theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                }`}
              />
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
          </button>

          {/* Logout */}
          <a
            href="#"
            className="flex items-center justify-between w-full p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
          >
            <div className="flex items-center gap-3 text-red-600">
              <LuLogOut className="text-2xl" />
              <h1 className="text-lg font-semibold">Logout</h1>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Profile;
