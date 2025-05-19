import React, { useState, Fragment } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const BibleStudyPage = () => {
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
    <div className="flex bg-[#f9f9f9] dark:bg-gray-950 min-h-screen font-montserrat transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-48 fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-4 pl-2 min-h-screen">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-48 flex justify-center items-start px-4">
        <div className="p-6 w-full">
          {/* Header */}
          <div className="relative flex items-center text-sm font-normal text-gray-700 dark:text-gray-300 mb-6 select-none">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left"></i>
              <Link to="/study-interlinear">
                <span>Go Back</span>
              </Link>
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
              <button className="text-red-600 dark:text-red-400 font-semibold border-b-2 border-red-600 dark:border-red-400 pb-1">
                Study
              </button>
              <button className="text-gray-300 cursor-default select-none">
                Study Note
              </button>
            </div>
            <div className="ml-auto flex items-center space-x-1 text-gray-400 dark:text-gray-500 text-xs cursor-default select-none">
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
              className="flex-grow border border-red-100 dark:border-red-900 bg-white dark:bg-gray-800 rounded-md px-4 py-2 text-sm placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700"
            />

            {/* Book Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700">
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
                <Menu.Items className="absolute z-20 mt-2 w-96 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-md p-4 text-sm grid grid-cols-2 gap-x-6">
                  <div className="col-span-2 mb-2">
                    <input
                      type="text"
                      placeholder="Search"
                      value={bookSearch}
                      onChange={(e) => setBookSearch(e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700"
                    />
                  </div>
                  {["Old Testament", "New Testament"].map((section) => (
                    <div key={section}>
                      <h4 className="font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        {section}
                      </h4>
                      <ul className="space-y-1">
                        {filterBooks(section).map((book) => (
                          <Menu.Item key={book}>
                            {({ active }) => (
                              <button
                                className={`w-full text-left ${
                                  active
                                    ? "text-red-500 dark:text-red-400"
                                    : "text-gray-700 dark:text-gray-200"
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
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700">
                Chapter
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>

              <Transition as={Fragment} {...transitionProps}>
                <Menu.Items className="absolute right-0 z-20 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-md p-4 text-sm">
                  <div className="text-center font-semibold text-lg mb-3 text-gray-700 dark:text-gray-200">
                    Chapter
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={chapterSearch}
                    onChange={(e) => setChapterSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-sm mb-4 text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700"
                  />
                  <div className="mb-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Book
                    </span>{" "}
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Jeremiah
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
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
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700">
                Verse
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>

              <Transition as={Fragment} {...transitionProps}>
                <Menu.Items className="absolute right-0 z-20 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-md p-4 text-sm">
                  <div className="text-center font-semibold text-lg mb-3 text-gray-700 dark:text-gray-200">
                    Verse
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={verseSearch}
                    onChange={(e) => setVerseSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-sm mb-4 text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700"
                  />
                  <div className="mb-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Chapter
                    </span>{" "}
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      30
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
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

          {/* Navigation Buttons */}
          <div className="flex space-x-3 mb-6 select-none">
            <Link
              to="/lexicon"
              className="flex-1 bg-gray-500 text-white rounded-md py-6 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Lexicon
            </Link>

            <Link
              to="/sermon-mount"
              className="flex-1 bg-red-500 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Interlinear
            </Link>

            <Link
              to="/cross-reference"
              className="flex-1 bg-rose-300 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Cross Reference
            </Link>
          </div>

          {/* Chapter Title */}
          <h1 className="text-3xl font-semibold mb-3 text-gray-900 dark:text-gray-100 select-text">
            Jeremiah 30
          </h1>

          {/* Sample Verses */}
          <div className="text-xl leading-5 text-gray-900 dark:text-gray-200 select-text space-y-6">
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
            <p>9. And God said, “Let dry ground appear,” and it was so.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper transition config
const transitionProps = {
  enter: "transition ease-out duration-100",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "transition ease-in duration-75",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
};

export default BibleStudyPage;
