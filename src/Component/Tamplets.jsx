import React from "react";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import h5 from "../assets/h5.png";
import { HiArrowLeft } from "react-icons/hi"; // left arrow icon
import { useNavigate } from "react-router-dom";
const templateImages = [h1, h2, h3, h4, h5, h2, h4, h3, h1, h5];

const borderColors = [
  "border-red-700",
  "border-slate-700",
  "border-yellow-500",
  "border-[rgba(205,153,142,1)]",
  "border-[rgba(142,140,125,1)]",
];

const headerBgColors = [
  "bg-red-700",
  "bg-slate-700",
  "bg-yellow-500",
  "bg-[rgba(205,153,142,1)]",
  "bg-[rgba(142,140,125,1)]",
];

const Tamplets = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back button */}
      <div className="flex items-center mt-6 ml-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-4 text-gray-800 dark:text-gray-100 hover:text-red-600 transition text-3xl"
        >
          <HiArrowLeft size={28} />
          Templets
        </button>
      </div>

      {/* Heading */}

      {/* Template Grid */}
      <section className="p-10 md:p-20 font-montserrat bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {templateImages.map((src, idx) => {
            const borderColor = borderColors[idx % borderColors.length];
            const headerColor = headerBgColors[idx % headerBgColors.length];

            return (
              <div
                key={idx}
                className={`border-8 ${borderColor} rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-colors duration-300`}
              >
                <div
                  className={`text-white text-center py-2 text-sm font-semibold ${headerColor}`}
                >
                  Verse Mapping Template
                </div>
                <div className="aspect-[3/4] w-full">
                  <img
                    src={src}
                    alt={`template-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tamplets;
