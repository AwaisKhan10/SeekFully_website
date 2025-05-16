import React, { useState, useEffect } from "react";

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getMonthData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth, year, month };
  };

  const { firstDay, daysInMonth, year, month } = getMonthData(currentDate);

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const renderDays = () => {
    const days = [];
    const isTodayMonth =
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isTodayMonth && day === today.getDate();

      days.push(
        <div
          key={day}
          className={`font-montserrat w-10 h-10 flex items-center justify-center rounded-full text-base font-medium transition-all duration-200 hover:bg-pink-100 dark:hover:bg-pink-200
            ${
              isToday
                ? "text-gray-800 dark:text-gray-200 font-semibold border-2 border-red-500"
                : "text-gray-600 dark:text-gray-300"
            }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex-1 font-montserrat">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center transition-colors duration-300">
        <button
          onClick={prevMonth}
          className="text-white hover:text-gray-200 transition-colors duration-200 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <span className="text-base font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          onClick={nextMonth}
          className="text-white hover:text-gray-200 transition-colors duration-200 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-pink-50 dark:bg-gray-800 border border-pink-200 dark:border-gray-700 p-4 rounded-b-lg transition-colors duration-300">
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">{renderDays()}</div>
      </div>
    </div>
  );
}

export default Calendar;
