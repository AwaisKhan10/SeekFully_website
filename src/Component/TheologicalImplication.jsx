import React, { useState, useEffect, Fragment } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TheologicalImplication = () => {
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

  /* ---------- dark-mode state ---------- */
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  /* ------------------------------------ */

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
    <div className="font-montserrat flex bg-[#f9f9f9] dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-4 fixed h-full z-10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 flex flex-col items-center px-4 py-6">
        {/* theme toggle */}
        <div className="w-full flex justify-end mb-4">
          <button
            onClick={() => setIsDark((d) => !d)}
            aria-label="Toggle theme"
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDark ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="p-6 w-full max-w-7xl">
          {/* Header */}
          <div className="relative flex items-center text-sm font-normal text-gray-700 dark:text-gray-300 mb-6 select-none">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left" />
              <button onClick={() => navigate(-1)}>
                <span>Go Back</span>
              </button>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 flex space-x-6">
              <button className="text-red-600 font-semibold border-b-2 border-red-600 pb-1">
                Study
              </button>
              <span className="text-gray-300 cursor-default select-none">
                Study Note
              </span>
            </div>
            <div className="ml-auto flex items-center space-x-1 text-gray-400 text-xs cursor-default select-none">
              <i className="far fa-clock" />
              <span>KJV</span>
              <i className="fas fa-chevron-down text-xs" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
            <input
              type="search"
              placeholder="Search"
              className="flex-grow border border-red-100 dark:border-red-700 rounded-md px-4 py-2 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600 bg-white dark:bg-gray-800"
            />

            {/* Book dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600">
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
                <Menu.Items className="absolute z-20 mt-2 w-96 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 text-sm grid grid-cols-2 gap-x-6">
                  <div className="col-span-2 mb-2">
                    <input
                      type="text"
                      placeholder="Search"
                      value={bookSearch}
                      onChange={(e) => setBookSearch(e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600"
                    />
                  </div>
                  {["Old Testament", "New Testament"].map((section) => (
                    <div key={section}>
                      <h4 className="font-semibold mb-1">{section}</h4>
                      <ul className="space-y-1">
                        {filterBooks(section).map((book) => (
                          <Menu.Item key={book}>
                            {({ active }) => (
                              <button
                                className={`w-full text-left rounded px-1 py-0.5 ${
                                  active
                                    ? "text-red-500 bg-red-50 dark:bg-red-900"
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

            {/* Chapter dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600">
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 text-sm">
                  <div className="text-center font-semibold text-lg mb-3">
                    Chapter
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={chapterSearch}
                    onChange={(e) => setChapterSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600"
                  />
                  <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Book</span>{" "}
                    <span className="font-semibold">Jeremiah</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 text-red-600 dark:bg-red-900"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
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

            {/* Verse dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600">
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 text-sm">
                  <div className="text-center font-semibold text-lg mb-3">
                    Verse
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={verseSearch}
                    onChange={(e) => setVerseSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600"
                  />
                  <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Chapter</span>{" "}
                    <span className="font-semibold">30</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 text-red-600 dark:bg-red-900"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
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

          {/* Nav Buttons */}
          <div className="flex space-x-3 mb-6 select-none">
            <Link
              to="/bible-book-study"
              className="flex-1 bg-blue-600 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Bible Book Study
            </Link>

            <Link
              to="/theological-detail"
              className="flex-1 bg-yellow-600 text-white rounded-md py-6 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Theological Implication
            </Link>

            <Link
              to="/jeremiah"
              className="flex-1 bg-red-500 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Interlinear
            </Link>
          </div>

          {/* Chapter Title */}
          <h1 className="text-3xl font-semibold mb-3 select-text">
            Jeremiah 30
          </h1>

          {/* Verses */}
          <div className="text-xl leading-5 text-gray-900 dark:text-gray-100 select-text space-y-6">
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

export default TheologicalImplication;
