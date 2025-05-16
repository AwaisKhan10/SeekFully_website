import React from "react";
import hh4 from "../assets/hh4.png";
import hh5 from "../assets/hh4.png";
import hh6 from "../assets/hh4.png";
import hh7 from "../assets/hh4.png";
import hh8 from "../assets/hh4.png";
import { IoArrowBack } from "react-icons/io5";

const recentImages = [
  hh4,
  hh5,
  hh6,
  hh7,
  hh8,
  hh4,
  hh5,
  hh6,
  hh7,
  hh8,
  hh4,
  hh5,
  hh6,
  hh7,
  hh8,
];

function Recents() {
  return (
    <>
      <div className="flex items-center mb-4 ml-10 mt-7 space-x-4">
        <button
          onClick={() => window.history.back()}
          className="text-gray-700  dark:text-gray-300 hover:text-gray-900 dark:hover:text-red-400 transition-colors duration-200 flex items-center space-x-1"
        >
          <h2 className="text-3xl flex items-center gap-3 dark:hover:text-red-400 font-semibold text-gray-900 dark:text-gray-100">
            <IoArrowBack />
            Recents
          </h2>
        </button>
      </div>
      <section className="mt-12 p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recentImages.map((src, idx) => (
            <div
              key={idx}
              className="rounded-md overflow-hidden shadow-sm bg-white dark:bg-gray-800 transition-colors duration-300"
            >
              <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md">
                <img
                  src={src}
                  alt="recent"
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="p-2 text-sm">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  Bible Verse
                </p>
                <p className="text-gray-900 dark:text-gray-300 text-xs">
                  Updated: 5 Months ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Recents;
