import React from "react";
import { CiLollipop } from "react-icons/ci";

function Seeking_section() {
  return (
    <div className="flex-1 space-y-4">
      {/* Header Section */}
      <div>
        <h3 className="text-6xl seeking-font text-gray-800 text-center">
          Seeking
        </h3>
        <p className="text-xl text-gray-600 text-center mt-8">
          Seek the Kingdom of God above all else, and live righteously, and He
          will give you everything you need.
        </p>
        <p className="text-md text-gray-500 text-center mt-3">
          Matthew 6:33 (NLT)
        </p>
      </div>

      {/* Main Icon and Count */}
      <div className="flex justify-center">
        <div className="flex items-center text-5xl mt-5 font-semibold text-gray-900">
          <CiLollipop className="text-red-500 mr-2" />
          <span>15</span>
        </div>
      </div>

      {/* Streak Info */}
      <div className="text-center">
        <p className="text-3xl font-semibold text-gray-800">Seek Streak</p>
        <div className="text-4xl text-gray-800 font-medium flex justify-center items-center space-x-1">
          <CiLollipop className="mt-8 text-red-500" />
          <span className="mt-8">222 Best</span>
        </div>
        <p className="text-lg text-gray-600 mt-5 ">231 weeks in a row</p>
      </div>

      {/* Bottom Message */}
      <div className="text-center ">
        <p className="text-sm text-gray-600">9 Perfect weeks</p>
        <p className="text-sm text-gray-600 mt-3">Keep Seeking...</p>
      </div>
    </div>
  );
}

export default Seeking_section;
