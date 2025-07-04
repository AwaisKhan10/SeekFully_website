import React, { useState, Fragment } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HistoricalDetail = () => {
  const navigate = useNavigate();
  const books = {
    "Old Testament": [
      "Genesis",
      "Exodus",
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Joshua",
      "Judges",
      "Ruth",
      "1 Samuel",
      "2 Samuel",
      "1 Chronicles",
      "2 Chronicles",
    ],
    "New Testament": [
      "Matthew",
      "Mark",
      "Luke",
      "John",
      "Acts",
      "Romans",
      "1 Corinthians",
      "2 Corinthians",
      "Galatians",
      "Ephesians",
      "Philippians",
    ],
  };

  const totalChapters = 29;
  const totalVerses = 36;

  const [chapterSearch, setChapterSearch] = useState("");
  const [verseSearch, setVerseSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");

  const chapters = Array.from({ length: totalChapters }, (_, i) => i + 1);
  const verses = Array.from({ length: totalVerses }, (_, i) => i + 1);

  const filteredChapters = chapters.filter((ch) =>
    ch.toString().includes(chapterSearch)
  );

  const filteredVerses = verses.filter((v) =>
    v.toString().includes(verseSearch)
  );

  const filterBooks = (section) =>
    books[section].filter((book) =>
      book.toLowerCase().includes(bookSearch.toLowerCase())
    );

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen font-montserrat">
      {/* Sidebar */}
      <aside className="hidden sm:flex w-20 bg-white shadow-md flex-col items-center py-4 fixed h-full z-10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 sm:ml-20 flex justify-center items-start px-4 py-6">
        <div className="p-4 w-full max-w-5xl">
          {/* Header */}
          <div className="relative flex items-center text-sm font-normal text-gray-700 mb-6 select-none">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left"></i>
              <button onClick={() => navigate(-1)}>
                <span> Go Back</span>
              </button>
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
              <button className="text-red-600 font-semibold border-b-2 border-red-600 pb-1">
                Study
              </button>
              <button className="text-gray-300 cursor-default select-none">
                Study Note
              </button>
            </div>
            <div className="ml-auto flex items-center space-x-1 text-gray-400 text-xs cursor-default select-none">
              <i className="far fa-clock"></i>
              <span>KJV</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
            <input
              type="search"
              placeholder="Search"
              className="flex-grow border border-red-100 rounded-md px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300"
            />

            {/* Book Dropdown */}
            <Menu as="div" className="relative w-full sm:w-auto">
              <Menu.Button className="flex items-center justify-between w-full sm:w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
                Index
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-20 mt-2 w-full sm:w-96 bg-white shadow-lg rounded-md p-4 text-sm grid grid-cols-2 gap-x-6 max-h-96 overflow-auto">
                  <div className="col-span-2 mb-2">
                    <input
                      type="text"
                      placeholder="Search"
                      value={bookSearch}
                      onChange={(e) => setBookSearch(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-red-300"
                    />
                  </div>
                  {["Old Testament", "New Testament"].map((section) => (
                    <div key={section}>
                      <h4 className="font-semibold mb-1">{section}</h4>
                      <ul className="space-y-1 max-h-56 overflow-auto">
                        {filterBooks(section).map((book) => (
                          <Menu.Item key={book}>
                            {({ active }) => (
                              <button
                                className={`w-full text-left ${
                                  active ? "text-red-500" : "text-gray-700"
                                }`}
                              >
                                {book}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Chapter Dropdown */}
            <Menu as="div" className="relative w-full sm:w-auto">
              <Menu.Button className="flex items-center justify-between w-full sm:w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
                Chapter
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-20 mt-2 w-full sm:w-80 bg-white shadow-lg rounded-md p-4 text-sm max-h-96 overflow-auto">
                  <div className="text-center font-semibold text-lg mb-3">
                    Chapter
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={chapterSearch}
                    onChange={(e) => setChapterSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm mb-4 focus:outline-none focus:ring-1 focus:ring-red-300"
                  />
                  <div className="mb-2 text-sm">
                    <span className="text-gray-500">Book</span>{" "}
                    <span className="font-semibold">Jeremiah</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2 max-h-48 overflow-auto">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 text-red-600"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {ch}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Verse Dropdown */}
            <Menu as="div" className="relative w-full sm:w-auto">
              <Menu.Button className="flex items-center justify-between w-full sm:w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
                Verse
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-20 mt-2 w-full sm:w-80 bg-white shadow-lg rounded-md p-4 text-sm max-h-96 overflow-auto">
                  <div className="text-center font-semibold text-lg mb-3">
                    Verse
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={verseSearch}
                    onChange={(e) => setVerseSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm mb-4 focus:outline-none focus:ring-1 focus:ring-red-300"
                  />
                  <div className="mb-2 text-sm">
                    <span className="text-gray-500">Chapter</span>{" "}
                    <span className="font-semibold">30</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2 max-h-48 overflow-auto">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 text-red-600"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {v}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-6 select-none">
            <Link
              to="/dictionary"
              className="flex-1 bg-gray-500 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Dictionary
            </Link>

            <Link
              to="/historical-context"
              className="flex-1 bg-red-300 text-white rounded-md py-2 sm:py-6 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Historical Context
            </Link>

            <Link
              to="/word-study"
              className="flex-1 bg-blue-300 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Word Study
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoricalDetail;
