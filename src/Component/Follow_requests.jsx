import React from "react";
import {
  FiSearch,
  FiBook,
  FiUsers,
  FiMapPin,
  FiCpu,
  FiGitBranch,
  FiStar,
  FiLayers,
  FiActivity,
  FiDatabase,
  FiFileText,
  FiAward,
} from "react-icons/fi";
import {
  MdLightbulb,
  MdComputer,
  MdLibraryBooks,
  MdDesignServices,
  MdDateRange,
} from "react-icons/md";
import profile from "../assets/profile1.png";
import Sidebar from "./SideBar";
import Sidebar_small from "./Sidbar_small";

const users = [
  {
    name: "Victoria",
    role: "UX Researcher",
    details: [
      { icon: <FiSearch />, text: "Share various product UX research" },
      { icon: <FiBook />, text: "UX research-related book publishing" },
      { icon: <FiUsers />, text: "Full member of the UX research society" },
    ],
    followers: 1234,
    avatars: [profile, profile, profile],
  },
  {
    name: "Jackson",
    role: "Frontend Developer",
    details: [
      { icon: <MdComputer />, text: "Building React apps" },
      { icon: <FiGitBranch />, text: "Open source contributor" },
      { icon: <FiStar />, text: "Loves Tailwind CSS" },
    ],
    followers: 980,
    avatars: [profile, profile, profile],
  },
  {
    name: "Ayesha",
    role: "Product Manager",
    details: [
      { icon: <FiLayers />, text: "Drives product vision" },
      { icon: <MdDesignServices />, text: "Focused on user-centric design" },
      { icon: <FiActivity />, text: "Agile enthusiast" },
    ],
    followers: 1540,
    avatars: [profile, profile, profile],
  },
  {
    name: "Ravi Kumar",
    role: "Data Scientist",
    details: [
      { icon: <FiDatabase />, text: "Loves big data" },
      { icon: <FiFileText />, text: "Published ML papers" },
      { icon: <FiAward />, text: "Kaggle Grandmaster" },
    ],
    followers: 2100,
    avatars: [profile, profile, profile],
  },
];

function Follow_requests() {
  return (
    <>
      <div className="flex">
        <div className="w-64 bg-white dark:bg-gray-800">
          <Sidebar />
        </div>

        <div className="flex w-full font-montserrat bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Sidebar on the left with fixed width */}

          {/* Main content */}
          <main className="flex-1 p-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
            />
            <h2 className="text-lg font-semibold mb-3">Follow suggestions</h2>
            <div className="space-y-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-4 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-3">
                    <img
                      src={user.avatars[0]}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">
                        {user.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user.role}
                      </p>
                      <ul className="text-sm mt-1 text-gray-700 dark:text-gray-300 space-y-[2px]">
                        {user.details.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="text-red-600 dark:text-red-400">
                              {item.icon}
                            </span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex -space-x-2">
                          {user.avatars.map((avatar, i) => (
                            <img
                              key={i}
                              src={avatar}
                              alt="Follower"
                              className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-900"
                            />
                          ))}
                        </div>
                        <span className="ml-2">
                          {user.followers.toLocaleString()} Followers
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="ml-4 px-4 py-1.5 text-sm font-medium text-black dark:text-white bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-[#C10201] hover:text-white transition-colors duration-300">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Follow_requests;
