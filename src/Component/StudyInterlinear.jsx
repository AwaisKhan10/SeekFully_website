import React from "react";
import Sidebar from "./SideBar"; // Your custom sidebar
import img from "../assets/pro.png";
import { Link } from "react-router-dom";

export default function StudyInterliner() {
  return (
    <div className="flex bg-[#f9f9f9] min-h-screen">
      {/* Fixed Left Sidebar */}
      <aside className="w-20 bg-white shadow-md flex flex-col items-center py-4 min-h-screen fixed top-0 left-0">
        <Sidebar />
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 ml-24">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <nav className="flex space-x-6 text-sm font-medium">
              <Link to="/study">
                <button
                  aria-current="page"
                  className="text-[#B33A36] border-b-2 border-[#B33A36] pb-1"
                >
                  Study
                </button>
              </Link>
              <Link to="/study-notes">
                <button className="text-[#B7B7B7]">Study Note</button>
              </Link>
            </nav>

            <Link to="/profile">
              <div className="flex items-center space-x-2">
                <img
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src={img}
                />
                <span className="text-sm font-semibold text-[#0B1F3F]">
                  Jackson D.
                </span>
              </div>
            </Link>
          </header>

          {/* Search Bar */}
          <form className="mb-10">
            <div className="relative">
              <input
                className="w-full border border-[#F4DADA] rounded-md py-2 pl-10 pr-4 text-sm text-[#B7B7B7] placeholder-[#B7B7B7] focus:outline-none focus:ring-1 focus:ring-[#B33A36]"
                placeholder="Search"
                type="search"
              />
              <i
                aria-hidden="true"
                className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-[#B7B7B7] text-sm pointer-events-none"
              ></i>
            </div>
          </form>

          {/* Button Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link to="/jeremiah">
              <StudyButton color="#B33A36" label="Interlinear" />
            </Link>
            <Link to="/cross-reference">
              <StudyButton color="#D9A79E" label="Cross Reference" />
            </Link>
            <Link to="/lexicon">
              <StudyButton color="#8B8E7D" label="Lexicon" />
            </Link>
            <StudyButton color="#1F3B4A" label="Commentary" />
            <Link to="/dictionary">
              <StudyButton color="#D19B1E" label="Dictionary" />
            </Link>
            <Link to="/historical-context">
              <StudyButton color="#B33A36" label="Historical Context" />
            </Link>
            <Link to="/word-study">
              <StudyButton color="#D9A79E" label="Word Study" />
            </Link>
            <Link to="/scripture-study">
              <StudyButton color="#8B8E7D" label="Scripture Study" />
            </Link>
            <Link to="/bible-book-study">
              <StudyButton color="#1F3B4A" label="Bible Book Study" />
            </Link>
            <Link to="/theological-implication">
              <StudyButton color="#D19B1E" label="Theological Implication" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

function StudyButton({ color, label }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      className="text-white rounded-lg py-8 px-4 text-center text-base font-medium h-28 w-full"
    >
      {label}
    </button>
  );
}
