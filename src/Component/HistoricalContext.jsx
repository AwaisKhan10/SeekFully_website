import React, { useState, Fragment } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HistoricalContext = () => {
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
    <div className="flex bg-[#f9f9f9] dark:bg-gray-900 min-h-screen font-montserrat text-gray-900 dark:text-gray-300">
      {/* Sidebar */}
      <aside className="fixed z-10 h-full bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-4 w-16 sm:w-20">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-16 sm:ml-20 flex justify-center items-start px-2 sm:px-4 py-6">
        <div className="w-full max-w-7xl px-2 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="relative flex items-center text-sm font-normal text-gray-700 dark:text-gray-300 mb-6 select-none">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left"></i>
              <button onClick={() => navigate(-1)}>
                <span>Go Back</span>
              </button>
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 sm:space-x-6">
              <button className="text-red-600 font-semibold border-b-2 border-red-600 pb-1">
                Study
              </button>
              <button className="text-gray-300 cursor-default select-none">
                Study Note
              </button>
            </div>
            <div className="ml-auto flex items-center space-x-1 text-gray-400 dark:text-gray-400 text-xs cursor-default select-none">
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
              className="flex-grow border border-red-100 dark:border-red-700 rounded-md px-4 py-2 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-500"
            />

            {/* Book Dropdown */}
            <Menu as="div" className="relative w-full sm:w-40">
              <Menu.Button className="flex items-center justify-between w-full sm:w-40 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-500">
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
                <Menu.Items className="absolute z-20 mt-2 w-full sm:w-96 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 text-sm grid grid-cols-2 gap-x-6">
                  <div className="col-span-2 mb-2">
                    <input
                      type="text"
                      placeholder="Search"
                      value={bookSearch}
                      onChange={(e) => setBookSearch(e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-500"
                    />
                  </div>
                  {["Old Testament", "New Testament"].map((section) => (
                    <div key={section}>
                      <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-300">
                        {section}
                      </h4>
                      <ul className="space-y-1 max-h-60 overflow-auto">
                        {filterBooks(section).map((book) => (
                          <Menu.Item key={book}>
                            {({ active }) => (
                              <button
                                className={`w-full text-left ${
                                  active
                                    ? "text-red-500 dark:text-red-400"
                                    : "text-gray-700 dark:text-gray-300"
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
            <Menu as="div" className="relative w-full sm:w-40">
              <Menu.Button className="flex items-center justify-between w-full sm:w-40 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-500">
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-full sm:w-80 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 text-sm max-h-96 overflow-auto">
                  <div className="text-center font-semibold text-lg mb-3 text-gray-900 dark:text-gray-300">
                    Chapter
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={chapterSearch}
                    onChange={(e) => setChapterSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-500"
                  />
                  <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Jeremiah</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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
            <Menu as="div" className="relative w-full sm:w-40">
              <Menu.Button className="flex items-center justify-between w-full sm:w-40 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-500">
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-full sm:w-80 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 text-sm max-h-96 overflow-auto">
                  <div className="text-center font-semibold text-lg mb-3 text-gray-900 dark:text-gray-300">
                    Verse
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={verseSearch}
                    onChange={(e) => setVerseSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-500"
                  />
                  <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">30</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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
              className="flex-1 bg-gray-500 dark:bg-gray-700 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Dictionary
            </Link>

            <Link
              to="/historical-detail"
              className="flex-1 bg-red-300 dark:bg-red-600 text-white rounded-md py-6 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Historical Context
            </Link>

            <Link
              to="/word-study"
              className="flex-1 bg-blue-300 dark:bg-blue-700 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Word Study
            </Link>
          </div>

          {/* Chapter Title */}
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3 select-text text-gray-900 dark:text-gray-100">
            Jeremiah 30
          </h1>

          {/* Verses */}
          <div className="text-base sm:text-xl leading-5 select-text space-y-6 text-gray-900 dark:text-gray-200">
            <p>1. In the beginning God created the heavens and the earth.</p>
            <p>
              2. Now the earth was formless and empty, darkness was over the
              surface of the deep, and the Spirit of God was hovering over the
              waters.
            </p>
            <p>3. And God said, “Let there be light,” and there was light.</p>
            <p>
              4. God saw that the light was good, and he separated the light
              from the darkness.
            </p>
            <p>
              5. God called the light “day,” and the darkness he called “night.”
              And there was evening, and there was morning—the first day.
            </p>
            <p>
              6. And God said, “Let there be a vault between the waters to
              separate water from water.”
            </p>
            <p>
              7. So God made the vault and separated the water under the vault
              from the water above it. And it was so.
            </p>
            <p>
              8. God called the vault “sky.” And there was evening, and there
              was morning—the second day.
            </p>
            <p>9. And God said, “’ground appear.”</p>
            <p>10. God called the</p>
            <p>11. 12. 13. ... 925.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoricalContext;
