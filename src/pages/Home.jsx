import React, { useState } from "react";
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

const templateImages = [h1, h2, h3, h4, h5];
const recentImages = [hh4, hh5, hh6, hh7, hh8];
const colors = ['#b91c1c', '#facc15', '#4ade80', '#60a5fa', '#a78bfa'];

const Home = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white relative">
      {/* Sidebar - responsive */}
      <div className="hidden md:block fixed left-0 top-0 h-full z-30">
        <Sidebar />
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setSidebarOpen(true)} className="text-red-700 text-2xl">
          &#9776;
        </button>
      </div>

      {/* Slide-out sidebar for small screens */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setSidebarOpen(false)}>
          <div className="absolute left-0 top-0 w-64 h-full bg-white shadow-xl p-4" onClick={e => e.stopPropagation()}>
            <button className="mb-4 text-lg text-red-600" onClick={() => setSidebarOpen(false)}>✕ Close</button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 md:ml-[160px] p-4 sm:p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-full">
        {/* Header */}
        <header className="relative">
         {/* Login/Register Buttons - Fixed Top Right */}
<div className="fixed top-4 right-4 flex flex-wrap justify-end gap-2 sm:gap-3 z-50">
  <Link to="/login">
    <button className="px-5 py-2 w-[100px] sm:w-[120px] h-[40px] bg-red-700 text-white text-sm sm:text-md rounded-full shadow hover:bg-red-700">
      Login
    </button>
  </Link>
  <Link to="/signup">
    <button className="px-5 py-2 w-[100px] sm:w-[120px] h-[40px] border border-red-800 text-red-700 text-sm rounded-full hover:bg-red-50">
      Register
    </button>
  </Link>
</div>

          {/* Navigation */}
          <nav className="flex justify-center mt-14 sm:mt-16">
            <ul className="flex space-x-6 font-semibold text-lg">
              <Link to="/">
                <li className="text-red-600 border-b-2 border-red-600 pb-1 cursor-pointer">Mapping</li>
              </Link>
              <Link to="/Comunity">
                <li className="text-gray-400 hover:text-red-600 mt-1 cursor-pointer">Community</li>
              </Link>
            </ul>
          </nav>

          {/* Search and Color */}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-3 sm:gap-6">
            <div className="flex w-full sm:w-[700px] rounded-lg border border-red-600 overflow-hidden h-[58px]">
              <div className="flex items-center flex-grow px-4">
                <i className="fas fa-search text-gray-300 text-lg"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-grow ml-3 text-sm text-black placeholder-gray-300 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-center -ms-5 w-20 h-[58px] border border-red-700 rounded-lg"
              >
                <div className="w-8 h-8 rounded-full border border-gray-700" style={{ backgroundColor: selectedColor }} />
                <i className="fas fa-chevron-down text-red-700 text-sm ml-3"></i>
              </button>

              {dropdownOpen && (
                <div className="absolute top-[60px] right-0 bg-white shadow-md border border-gray-800 rounded-md z-50 p-2 flex flex-col gap-2">
                  {colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedColor(color);
                        setDropdownOpen(false);
                      }}
                      className="w-6 h-6 rounded-full border-2 border-white hover:scale-110 transition"
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Templates */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Templates</h2>
            <button className="text-black font-medium">View All</button>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {templateImages.map((src, idx) => {
              const borderColors = ["border-red-700", "border-slate-700", "border-yellow-500", "border-[rgba(205,153,142,1)]", "border-[rgba(142,140,125,1)]"];
              const headerBgColors = ["bg-red-700", "bg-slate-700", "bg-yellow-500", "bg-[rgba(205,153,142,1)]", "bg-[rgba(142,140,125,1)]"];
              return (
                <div key={idx} className={`border-8 ${borderColors[idx % borderColors.length]} rounded-lg overflow-hidden shadow-md bg-white`}>
                  <div className={`text-white text-center py-2 text-sm font-semibold ${headerBgColors[idx % headerBgColors.length]}`}>Verse Mapping Template</div>
                  <div className="aspect-[3/4] w-full">
                    <img src={src} alt={`template-${idx}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent */}
        <section className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recents</h2>
            <button className="text-black font-medium">View All</button>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {recentImages.map((src, idx) => (
              <div key={idx} className="rounded-md overflow-hidden shadow-sm bg-white">
                <div className="bg-gray-200 p-3 rounded-md">
                  <img src={src} alt="recent" className="w-full object-cover rounded-md" />
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
