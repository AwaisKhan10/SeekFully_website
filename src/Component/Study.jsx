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

      <main className="ml-48 w-full p-4">
        <div className="max-w-7xl mx-auto rounded-lg border border-gray-200 p-6">
          <Link to="/home">
            <a
              href="#"
              className="inline-flex items-center text-gray-700 text-sm font-normal mb-6 select-none"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Go Back
            </a>
          </Link>

          <form className="mb-6">
            <input
              type="search"
              placeholder="Search"
              className="w-full max-w-md text-xs text-gray-300 placeholder-gray-300 bg-white border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </form>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Buttons Column */}
            <div className="flex flex-col space-y-3 w-full md:w-1/4">
              <button
                type="button"
                className="flex items-center space-x-2 text-xs font-semibold text-red-600 bg-red-100 rounded-md py-2 px-4"
              >
                <i className="fas fa-plus text-xs"></i>
                <span>Create new note</span>
              </button>
              <button
                type="button"
                onClick={() => setFolderOpen(!folderOpen)}
                className="flex items-center justify-between text-xs font-semibold text-red-600 bg-red-100 rounded-md py-2 px-4"
              >
                <span className="flex items-center space-x-2">
                  <i className="fas fa-folder text-sm"></i>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {notes.map((note, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md p-2 relative"
                >
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() =>
                        setActiveMenu(activeMenu === index ? null : index)
                      }
                      className="text-gray-500 hover:text-gray-800"
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
                  <img
                    src={note.imgSrc}
                    alt={note.title}
                    className="rounded-md mb-2"
                  />
                  <h4 className="text-sm font-semibold text-gray-700">
                    {note.title}
                  </h4>
                  <p className="text-xs text-gray-400">{note.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
