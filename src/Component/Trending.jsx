import React from "react";

function Trending() {
  return (
    <div className="hidden lg:block w-full bg-white shadow-md p-4 rounded-lg mt-14 sm:mt-28 md:mt-48">
      <h3 className="font-bold text-lg mb-4">Trending Topics</h3>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>DESIGN</li>
        <li>MOVIES AND SERIES</li>
        <li>Spider-Man: Across the Spider-Verse</li>
        <li>TECH</li>
        <li>iPhone 15</li>
        <li>GAMES</li>
        <li>DESIGN</li>
        <li>#Minimalism</li>
        <li className="text-blue-500 hover:underline cursor-pointer">
          See more
        </li>
      </ul>
    </div>
  );
}

export default Trending;
