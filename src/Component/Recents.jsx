import React from "react";
import hh4 from "../assets/hh4.png";
import hh5 from "../assets/hh4.png";
import hh6 from "../assets/hh4.png";
import hh7 from "../assets/hh4.png";
import hh8 from "../assets/hh4.png";
import { useState } from "react";

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
const colors = ["[#b91c1c]", "#facc15", "#4ade80", "#60a5fa", "#a78bfa"];

function Recents() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl mt-7 ml-10 font-semibold">Recents</h2>
      </div>
      <section className="mt-12 p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recentImages.map((src, idx) => (
            <div
              key={idx}
              className="rounded-md overflow-hidden shadow-sm bg-white"
            >
              <div className="bg-gray-200 p-3 rounded-md">
                <img
                  src={src}
                  alt="recent"
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="p-2 text-sm">
                <p className="font-semibold">Bible Verse</p>
                <p className="text-gray-900 text-xs">Updated: 5 Months ago</p>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
    </>
  );
}

export default Recents;
