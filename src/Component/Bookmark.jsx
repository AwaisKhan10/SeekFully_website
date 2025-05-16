import React from "react";
import { MdDateRange } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";

function Bookmark() {
  const navigate = useNavigate();

  const data = [
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "John 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "John 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    // ... more items
  ];

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 font-montserrat transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* Back Button */}
        <button
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition mb-6"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <AiOutlineArrowLeft className="text-xl" />
          <span className="text-xl font-medium">Bookmark</span>
        </button>

        {/* Bookmarked Items */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 p-4 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 text-lg mb-1">
                <h1 className="italic">{item.title}</h1>
                <p className="font-bold">{item.name}</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {item.bookmark}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold">{item.bookmarkName}</span>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <MdDateRange />
                  <p className="text-xs">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
