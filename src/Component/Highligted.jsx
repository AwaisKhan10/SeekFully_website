import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import Sidebar from "./SideBar";

function Highligted() {
  const navigate = useNavigate();
  const data = [
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
      date: "20th August 2024 10:24 AM",
    },
    {
      title: "You Bookmarked",
      name: "Mathew 3:16",
      bookmark: "16 For God so loved the world, that he gave his only Son....",
      bookmarkName: "Mathew 3:16 NIV",
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

      {/* Main content */}
      <div className="flex-1 p-6 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* Back Button */}
        <button
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <AiOutlineArrowLeft className="text-xl" />
          <span className="text-xl font-medium">Highlighted</span>
        </button>

        {/* Highlighted Items */}
        <div>
          {data.map((items, index) => (
            <div
              key={index}
              className="flex flex-col border-2 rounded-xl border-gray-200 dark:border-gray-700 ml-20 mt-4 mr-20 p-4 bg-white dark:bg-gray-800 transition-colors duration-300"
            >
              <div className="flex items-center ml-14 gap-3 text-[20px]">
                <h1 className="italic">{items.title}</h1>
                <p className="font-bold">{items.name}</p>
              </div>
              <div className="bg-green-300 dark:bg-green-700 flex items-center ml-14 text-gray-700 dark:text-gray-200 text-[15px] p-2 rounded">
                <p>{items.bookmark}</p>
              </div>
              <div className="flex justify-between items-center gap-3 ml-14 mt-2">
                <h1 className="text-[15px] font-bold">{items.bookmarkName}</h1>
                <div className="flex items-center gap-2">
                  <MdDateRange className="text-gray-500 dark:text-gray-400" />
                  <p className="text-[12px] text-gray-500 dark:text-gray-400">
                    {items.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highligted;
