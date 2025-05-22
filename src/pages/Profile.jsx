import React, { useEffect } from "react";
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

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col md:flex-row bg-gray-200 dark:bg-gray-900 text-black dark:text-white min-h-screen font-montserrat transition-colors duration-300 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-24 flex-shrink-0 fixed md:static z-10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 sm:p-6 md:pt-3">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md max-w-6xl mx-auto p-4">
          {/* Profile Header */}
          <div className="flex flex-col items-center p-6 rounded-2xl">
            <img
              src={profilepage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <h1 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">
              Bernard Ward
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              BernardWard@gmail.com
            </p>
          </div>

          {/* Grid Menu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
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
              {
                to: "/giftseekfully",
                icon: <BiDonateHeart />,
                label: "Giving",
              },
              {
                to: "/bookmark",
                icon: <IoBookmarksOutline />,
                label: "Bookmark",
              },
              {
                to: "#",
                icon: <IoShareSocialOutline />,
                label: "Share Seekfully",
              },
              {
                to: "/highlighted",
                icon: <TiLightbulb />,
                label: "Highlights",
              },
              { to: "/notes", icon: <CgNotes />, label: "Note" },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl bg-gray-200 dark:bg-gray-700 p-2 rounded-xl">
                    {item.icon}
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </span>
                </div>
                <IoIosArrowForward className="text-xl text-gray-400 dark:text-gray-500" />
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              role="switch"
            >
              <div className="flex items-center gap-3">
                {theme === "light" ? (
                  <CiDark className="text-2xl bg-gray-100 dark:bg-gray-700 p-2 rounded-full" />
                ) : (
                  <TiLightbulb className="text-2xl bg-gray-100 dark:bg-gray-700 p-2 rounded-full" />
                )}
                <span className="text-base font-medium text-gray-900 dark:text-white">
                  Switch to {theme === "light" ? "Dark" : "Light"} mode
                </span>
              </div>

              <div className="relative inline-block w-10 h-5">
                <div
                  className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                    theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                  }`}
                />
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    theme === "dark" ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </button>

            {/* Logout */}
            <a
              href="#"
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 rounded-xl shadow transition"
            >
              <LuLogOut className="text-2xl mr-2" />
              <span className="text-base font-semibold">Logout</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
