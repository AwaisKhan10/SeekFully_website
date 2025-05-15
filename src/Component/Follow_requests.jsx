import React from "react";
import profile from "../assets/profile1.png";
import Sidebar from "./SideBar";

const users = [
  {
    name: "Victoria",
    role: "UX Researcher",
    details: [
      "🔍 Share various product UX research",
      "📚 UX research-related book publishing",
      "📍 Full member of the UX research society",
    ],
    followers: 1234,
    avatars: [profile, profile, profile],
  },
  {
    name: "Jackson",
    role: "Frontend Developer",
    details: [
      "💻 Building React apps",
      "📘 Open source contributor",
      "📍 Loves Tailwind CSS",
    ],
    followers: 980,
    avatars: [profile, profile, profile],
  },
  {
    name: "Ayesha",
    role: "Product Manager",
    details: [
      "🗂 Drives product vision",
      "🧠 Focused on user-centric design",
      "📍 Agile enthusiast",
    ],
    followers: 1540,
    avatars: [profile, profile, profile],
  },
  {
    name: "Ravi Kumar",
    role: "Data Scientist",
    details: [
      "📊 Loves big data",
      "📚 Published ML papers",
      "📍 Kaggle Grandmaster",
    ],
    followers: 2100,
    avatars: [profile, profile, profile],
  },
];

function Follow_requests() {
  return (
    <div className="flex w-full font-montserrat">
      {/* Sidebar on the left with fixed width */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 p-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <h2 className="text-lg font-semibold mb-3">Follow suggestions</h2>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-start justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3">
                <img
                  src={user.avatars[0]}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-xs text-gray-500">{user.role}</p>
                  <ul className="text-sm mt-1 text-gray-700 space-y-[2px]">
                    {user.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <div className="flex -space-x-2">
                      {user.avatars.map((avatar, i) => (
                        <img
                          key={i}
                          src={avatar}
                          alt="Follower"
                          className="w-5 h-5 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="ml-2">
                      {user.followers.toLocaleString()} Followers
                    </span>
                  </div>
                </div>
              </div>
              <button className="ml-4 px-4 py-1.5 text-sm font-medium text-black bg-white rounded-lg border-2 hover:bg-[#C10201] transition">
                Follow
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Follow_requests;
