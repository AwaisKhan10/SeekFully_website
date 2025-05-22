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
import { useState } from "react";

const templateImages = [h1, h2, h3, h4, h5];
const recentImages = [hh4, hh5, hh6, hh7, hh8];

const colors = ["#b91c1c", "#facc15", "#4ade80", "#60a5fa", "#a78bfa"];

const Home = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen font-montserrat transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-full md:w-24 flex flex-col items-center md:min-h-screen fixed md:static">
        <Sidebar />
      </aside>

      <main className="flex-1 sm:p-6 md:pt-3">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-8 max-w-6xl mx-auto transition-colors duration-300">
          {/* Header */}
          <header className="relative px-4 py-6 sm:px-8">
            {/* Login/Register */}
            <div className="absolute top-6 right-6 flex space-x-3">
              <Link to="/login">
                <button className="px-5 py-2 w-[120px] h-[40px] bg-red-700 text-white text-md rounded-full shadow hover:bg-red-800">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2 w-[120px] h-[40px] border border-red-800 text-red-700 dark:text-red-400 text-sm rounded-full hover:bg-red-50 dark:hover:bg-gray-700">
                  Register
                </button>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex justify-center mt-14 sm:mt-16">
              <ul className="flex space-x-6 font-semibold text-lg">
                <Link to="/">
                  <li className="text-red-600 border-b-2 border-red-600 pb-1 cursor-pointer">
                    Mapping
                  </li>
                </Link>
                <Link to="/Comunity">
                  <li className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 cursor-pointer mt-1">
                    Community
                  </li>
                </Link>
              </ul>
            </nav>

            {/* Search & Color Picker */}
            <div className="flex flex-wrap gap-2 items-center mt-9 sm:ms-24 justify-center sm:justify-start">
              <div
                className="flex flex-grow min-w-[250px] sm:w-[500px] md:w-[600px] lg:w-[700px] rounded-lg border border-red-600 overflow-hidden"
                style={{ height: "58px" }}
              >
                <div className="flex items-center flex-grow px-4">
                  <i className="fas fa-search text-gray-300 text-lg"></i>
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow ml-3 py-3 text-sm text-black dark:text-white placeholder-gray-300 dark:placeholder-gray-500 bg-transparent outline-none font-sans"
                  />
                </div>
              </div>

              {/* Color Dropdown */}
              <div className="relative" style={{ height: "58px" }}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-center w-20 h-full bg-white dark:bg-gray-700 border border-red-700 rounded-lg cursor-pointer"
                >
                  <div
                    className="w-8 h-8 rounded-full border border-gray-700"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <i className="fas fa-chevron-down text-red-700 text-sm ml-1"></i>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-[52px] right-0 bg-white dark:bg-gray-700 shadow-md border border-gray-800 rounded-md z-50 p-2 flex flex-col gap-2">
                    {colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedColor(color);
                          setDropdownOpen(false);
                        }}
                        className="w-6 h-6 rounded-full border-2 border-white hover:scale-110 transition"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Templates */}
          <section className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Templets</h2>
              <Link
                to="/templets"
                className="text-black dark:text-white font-medium"
              >
                View All
              </Link>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {templateImages.map((src, idx) => {
                const borderColors = [
                  "border-red-700",
                  "border-slate-700",
                  "border-yellow-500",
                  "border-[rgba(205,153,142,1)]",
                  "border-[rgba(142,140,125,1)]",
                ];
                const headerBgColors = [
                  "bg-red-700",
                  "bg-slate-700",
                  "bg-yellow-500",
                  "bg-[rgba(205,153,142,1)]",
                  "bg-[rgba(142,140,125,1)]",
                ];
                return (
                  <div
                    key={idx}
                    className={`border-8 ${
                      borderColors[idx % borderColors.length]
                    } rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-700`}
                  >
                    <div
                      className={`text-white text-center py-2 text-sm font-semibold ${
                        headerBgColors[idx % headerBgColors.length]
                      }`}
                    >
                      Verse Mapping Template
                    </div>
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

          {/* Recents */}
          <section className="mt-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recents</h2>
              <Link to="/recents">
                <button className="text-black dark:text-white font-medium">
                  View All
                </button>
              </Link>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {recentImages.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-md overflow-hidden shadow-sm bg-white dark:bg-gray-700"
                >
                  <div className="bg-gray-200 dark:bg-gray-600 p-3 rounded-md">
                    <img
                      src={src}
                      alt="recent"
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="p-2 text-sm">
                    <p className="font-semibold">Bible Verse</p>
                    <p className="text-gray-900 dark:text-gray-300 text-xs">
                      Updated: 5 Months ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
