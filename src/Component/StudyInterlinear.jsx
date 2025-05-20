import React from "react";
import Sidebar from "./SideBar";
import img from "../assets/pro.png";
import { Link } from "react-router-dom";

export default function StudyInterliner() {
  return (
    <div className="flex flex-col md:flex-row bg-[#f9f9f9] dark:bg-gray-900 min-h-screen font-montserrat transition-colors duration-300">
      {/* ── Sidebar ──────────────────────────────────────────────── */}
      <aside className="w-full md:w-24  flex flex-col items-center py-4 md:min-h-screen fixed md:static">
        <Sidebar />
      </aside>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main className="flex-1  sm:p-6 md:pt-3">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 max-w-6xl mx-auto transition-colors duration-300">
          
         {/* Header */}
<header className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 text-center">
  <nav className="flex space-x-6 text-sm font-bold">
    <Link to="/study">
      <button
        aria-current="page"
        className="text-[#B33A36] dark:text-red-400 border-b-2 border-[#B33A36] dark:border-red-400 pb-1"
      >
        Study
      </button>
    </Link>
    <Link to="/study-notes">
      <button className="text-[#B7B7B7] dark:text-gray-400">
        Study Note
      </button>
    </Link>
  </nav>

  {/* Profile (optional: keep it aligned right in larger screens) */}
  <Link to="/profile" className="sm:absolute sm:right-8">
    <div className="flex items-center space-x-2 -mt-6">
      <img
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover"
        src={img}
      />
      <span className="text-sm font-semibold text-[#0B1F3F] dark:text-gray-100">
        Jackson D.
      </span>
    </div>
  </Link>
</header>

{/* Search Bar */}
<div className="flex justify-center mb-12">
  <div
    className="flex w-full sm:w-[700px] rounded-lg border border-red-600 overflow-hidden"
    style={{ height: "50px" }}
  >
    <div className="flex items-center flex-grow px-4">
      <i className="fas fa-search text-gray-300 text-lg"></i>
      <input
        type="text"
        placeholder="Search"
        className="flex-grow ml-3 py-3 text-sm text-black placeholder-gray-300 bg-transparent outline-none font-sans"
        style={{ height: "58px" }}
      />
    </div>
  </div>
</div>


          {/* Button Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-6 ">
            <Link to="/Interlinear">
              <StudyButton
                color="#B33A36"
                darkColor="#7f1d1d"
                label="Interlinear"
              />
            </Link>
            <Link to="/cross-reference">
              <StudyButton
                color="#D9A79E"
                darkColor="#74493f"
                label="Cross Reference"
              />
            </Link>
            <Link to="/lexicon">
              <StudyButton
                color="#8B8E7D"
                darkColor="#4b4d42"
                label="Lexicon"
              />
            </Link>
            <StudyButton
              color="#1F3B4A"
              darkColor="#0f1e27"
              label="Commentary"
            />
            <Link to="/dictionary">
              <StudyButton
                color="#D19B1E"
                darkColor="#935f0c"
                label="Dictionary"
              />
            </Link>
            <Link to="/historical-context">
              <StudyButton
                color="#B33A36"
                darkColor="#7f1d1d"
                label="Historical Context"
              />
            </Link>
            <Link to="/word-study">
              <StudyButton
                color="#D9A79E"
                darkColor="#74493f"
                label="Word Study"
              />
            </Link>
            <Link to="/scripture-study">
              <StudyButton
                color="#8B8E7D"
                darkColor="#4b4d42"
                label="Scripture Study"
              />
            </Link>
            <Link to="/bible-book-study">
              <StudyButton
                color="#1F3B4A"
                darkColor="#0f1e27"
                label="Bible Book Study"
              />
            </Link>
            <Link to="/theological-implication">
              <StudyButton
                color="#D19B1E"
                darkColor="#935f0c"
                label="Theological Implication"
              />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------------- */
function StudyButton({ color, darkColor, label }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      className={`text-white rounded-lg px-4 text-center text-base font-semibold 
                  h-32 sm:h-36 w-[100%] mx-auto flex items-center justify-center
                  dark:bg-[${darkColor}] transition-colors duration-300`}
    >
      {label}
    </button>
  );
}



