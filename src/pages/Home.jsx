import React from "react";
import Sidebar from "../Component/SideBar";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import h5 from "../assets/h5.png";
import hh4 from "../assets/hh4.png";
import hh5 from "../assets/hh4.png";
import hh6 from "../assets/hh4.png";
import hh7 from "../assets/hh4.png";
import hh8 from "../assets/hh4.png";
import { Link } from "react-router-dom";

// hiiii ibrar

const templateImages = [h1, h2, h3, h4, h5];
const recentImages = [hh4, hh5, hh6, hh7, hh8];

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-[160px] p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="relative px-4 py-6 sm:px-8">
          {/* Login and Register Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2 sm:space-x-4">
            <Link to="/login">
              {" "}
              <button className="px-4 py-1 bg-red-600 text-white text-sm sm:text-base rounded-full">
                Login
              </button>
            </Link>
            <Link to="/signup">
              {" "}
              <button className="px-4 py-1 border border-red-500 text-red-600 text-sm sm:text-base rounded-full">
                Register
              </button>
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className="flex flex-col items-center mt-8 sm:mt-12">
            <ul className="flex space-x-6 font-semibold text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
              <Link to="/">
                <li className="text-red-600 border-b-2 border-red-600 pb-1 cursor-pointer">
                  Mapping
                </li>{" "}
              </Link>
              <Link to="/Comunity">
                <li className="cursor-pointer hover:text-red-600 transition">
                  Community
                </li>{" "}
              </Link>
            </ul>
          </nav>

          {/* Centered Search Bar */}
          <div className="flex justify-center max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 py-2 sm:py-3 border border-red-300 outline-none text-sm sm:text-base"
            />
            <button className="px-4 bg-red-600 text-white text-lg">
              &#x25BC;
            </button>
          </div>
        </header>

        {/* Templates Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Templates</h2>
            <button className="text-black font-medium">View All</button>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {templateImages.map((src, idx) => {
              // Define a set of rotating background or border colors
              const borderColors = [
                "border-red-700",
                "border-slate-700", // Tailwind's slate-blue equivalent
                "border-yellow-500",
                "border-[rgba(205,153,142,1)]",
                "border-[rgba(142,140,125,1)]",
              ];

              const headerBgColors = [
                "bg-red-700",
                "bg-slate-700", // Tailwind class for slate-blue
                "bg-yellow-500",
                "bg-[rgba(205,153,142,1)]",
                "bg-[rgba(142,140,125,1)]",
              ];

              return (
                <div
                  key={idx}
                  className={`border-8 ${
                    borderColors[idx % borderColors.length]
                  } rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300 bg-white`}
                >
                  {/* Header */}
                  <div
                    className={`text-white text-center py-2 text-sm font-semibold ${
                      headerBgColors[idx % headerBgColors.length]
                    }`}
                  >
                    Verse Mapping Template
                  </div>

                  {/* Image */}
                  <div className="aspect-[3/4] w-full">
                    <img
                      src={src}
                      alt={`template-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recents</h2>
            <button className="text-black font-medium">View All</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recentImages.map((src, idx) => (
              <div key={idx} className="rounded-md overflow-hidden shadow-sm">
                {/* Gray background only for image */}
                <div className="bg-gray-300 rounded-md p-4">
                  <img
                    src={src}
                    alt="recent"
                    className="w-full object-cover rounded-md"
                  />
                </div>
                <div className="p-2 text-sm">
                  <p className="font-semibold">Bible Verse</p>
                  <p className="text-gray-900 text-xs">Updated: 5 Months ago</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
