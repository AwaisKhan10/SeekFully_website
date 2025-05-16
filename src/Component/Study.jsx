import React, { useState } from "react";
import Sidebar from "./SideBar";
import img from "../assets/hh4.png";
import { Link } from "react-router-dom";

const notes = Array(6).fill({
  title: "Bible Verse",
  date: "Updated -5 Months ago",
  imgSrc: img,
});

export default function NotesPage() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [folderOpen, setFolderOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex font-montserrat">
      <Sidebar />

      <main className="flex-1 ml-[160px] p-6 bg-white min-h-screen rounded-xl shadow-xl">
        <div className="max-w-7xl mx-auto rounded-lg  p-3">
          <Link to="/">
            <a
              href="#"
              className="inline-flex items-center font-bold text-black text-sm font-normal mb-6 select-none"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Go Back
            </a>
          </Link>

         <div
              className="flex w-[700px] rounded-lg border border-red-600 overflow-hidden mb-6 ms-32"
              style={{ height: "46px" }}
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

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Buttons Column */}
            <div className="flex flex-col space-y-3 w-full md:w-1/4">
              <button
                type="button"
                className="flex items-center space-x-2 text-xs font-semibold text-red-600 bg-red-50 rounded-md py-2 px-4"
              >
                <i className="fas fa-plus text-xs bg-red-600 w-6 h-6 rounded-full p-1.5 text-white font-bold"></i>
                <span>Create new note</span>
              </button>
              <button
                type="button"
                onClick={() => setFolderOpen(!folderOpen)}
                className="flex items-center justify-between text-xs font-semibold text-red-600 bg-red-50 rounded-md py-2 px-4"
              >
                <span className="flex items-center space-x-2">
                  <i className="fas fa-folder text-sm w-6 h-6 rounded-full p-1.5 font-bold"></i>
                  <span>Folders</span>
                </span>
                <i
                  className={`fas fa-chevron-${
                    folderOpen ? "down" : "right"
                  } ml-2 text-xs`}
                ></i>
              </button>

              {folderOpen && (
                <div className="mt-2 w-full bg-white rounded-md border border-gray-200 shadow-sm text-sm text-gray-700 space-y-2 py-2 px-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-2">
                      <i className="fas fa-bars text-xs"></i>
                      <span>All Notes</span>
                    </span>
                    <span className="text-xs text-gray-500">112</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-2">
                      <i className="fas fa-heart text-xs"></i>
                      <span>Favourites</span>
                    </span>
                    <span className="text-xs text-gray-500">112</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-2">
                      <i className="fas fa-trash text-xs"></i>
                      <span>Recently Deleted</span>
                    </span>
                    <span className="text-xs text-gray-500">112</span>
                  </div>

                  <div className="text-xs font-semibold pt-2 text-gray-500">
                    My Folders
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-2">
                      <i className="fas fa-folder-open text-xs text-orange-500"></i>
                      <span>Wajahat’s Notes</span>
                    </span>
                    <span className="text-xs text-gray-500">112</span>
                  </div>
                </div>
              )}
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-[660px]">
              {notes.map((note, index) => (
                <div key={index} className="flex flex-col">
                  {/* Card Box */}
                  <div className="relative border border-gray-200 rounded-md p-2 bg-gray-100">
                    {/* Menu Button */}
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() =>
                          setActiveMenu(activeMenu === index ? null : index)
                        }
                        className="text-black hover:text-gray-800"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                      {activeMenu === index && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-20 text-sm">
                          <ul>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <i className="fas fa-external-link-alt mr-2"></i>{" "}
                              Open
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <i className="fas fa-share mr-2"></i> Share
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <i className="fas fa-clone mr-2"></i> Duplicate
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <i className="fas fa-heart mr-2"></i> Favourite
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <i className="fas fa-folder mr-2"></i> Move to
                              Folder
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              <i className="fas fa-file-alt mr-2"></i> Save to
                              File
                            </li>
                            <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                              <i className="fas fa-trash mr-2"></i> Delete
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Image aligned to top-right */}
                 <div className="flex justify-center items-center h-[220px] p-4">
  <img
    src={note.imgSrc}
    alt={note.title}
    className="h-full object-contain rounded"
  />
</div>
</div>


                  {/* Title & Date Outside */}
                  <div className="mt-2 px-1">
                    <h4 className="text-lg font-bold text-gray-700">
                      {note.title}
                    </h4>
                    <p className="text-xs font-bold text-gray-700">
                      {note.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
