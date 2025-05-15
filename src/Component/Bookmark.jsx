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
    // Repeat as needed...
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ">
        {/* Back Button */}
        <button
          className="flex items-center gap-3 text-gray-600 hover:text-black transition mb-6"
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft className="text-xl" />
          <span className="text-xl font-medium">Bookmark</span>
        </button>

        {/* Bookmarked Items */}
        <div className="space-y-4">
          {data.map((items, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl bg-white p-4"
            >
              <div className="flex items-center gap-3 text-lg mb-1">
                <h1 className="italic">{items.title}</h1>
                <p className="font-bold">{items.name}</p>
              </div>
              <p className="text-gray-500 text-sm mb-2">{items.bookmark}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold">{items.bookmarkName}</span>
                <div className="flex items-center gap-2 text-gray-500">
                  <MdDateRange />
                  <p className="text-xs">{items.date}</p>
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
