import React, { useState, useEffect, Fragment } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const navigate = useNavigate();
  /* ------------- data ------------- */
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

  /* -------- state -------- */
  const [chapterSearch, setChapterSearch] = useState("");
  const [verseSearch, setVerseSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");

  /* --- dark mode --- */
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

  /* helpers */
  const chapters = Array.from({ length: totalChapters }, (_, i) => i + 1);
  const verses = Array.from({ length: totalVerses }, (_, i) => i + 1);

  const filteredChapters = chapters.filter((c) =>
    c.toString().includes(chapterSearch)
  );
  const filteredVerses = verses.filter((v) =>
    v.toString().includes(verseSearch)
  );
  const filterBooks = (section) =>
    books[section].filter((b) =>
      b.toLowerCase().includes(bookSearch.toLowerCase())
    );

  /* -------- JSX -------- */
  return (
    <div className="font-montserrat flex min-h-screen bg-[#f9f9f9] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-10 flex h-full w-16 flex-col items-center bg-white dark:bg-gray-800 py-4 shadow-md md:w-20">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="ml-16 flex-1 px-2 pt-4 sm:ml-20 sm:px-4 md:px-6 lg:px-8">
        {/* theme toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsDark((d) => !d)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <div className="relative mb-6 flex items-center text-sm font-normal text-gray-700 dark:text-gray-300 select-none">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left" />
              <button onClick={() => navigate(-1)}>
                <span>Go Back</span>
              </button>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 transform flex space-x-6">
              <button className="border-b-2 border-red-600 pb-1 font-semibold text-red-600">
                Study
              </button>
              <span className="text-gray-300">Study Note</span>
            </div>
            <div className="ml-auto flex items-center space-x-1 text-xs text-gray-400">
              <i className="far fa-clock" />
              <span>KJV</span>
              <i className="fas fa-chevron-down text-xs" />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <input
              type="search"
              placeholder="Search"
              className="flex-grow rounded-md border border-red-100 dark:border-red-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600"
            />

            {/* Book dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex w-36 md:w-40 items-center justify-between rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600">
                Index
                <ChevronDownIcon className="ml-2 h-4 w-4" />
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
                <Menu.Items className="absolute z-20 mt-2 grid w-72 sm:w-80 md:w-96 grid-cols-2 gap-x-4 rounded-md bg-white dark:bg-gray-800 p-4 text-sm shadow-lg">
                  <div className="col-span-2 mb-2">
                    <input
                      type="text"
                      placeholder="Search"
                      value={bookSearch}
                      onChange={(e) => setBookSearch(e.target.value)}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-3 py-1 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600"
                    />
                  </div>
                  {["Old Testament", "New Testament"].map((section) => (
                    <div key={section}>
                      <h4 className="mb-1 font-semibold">{section}</h4>
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
              <Menu.Button className="flex w-28 md:w-40 items-center justify-between rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600">
                Chapter
                <ChevronDownIcon className="ml-2 h-4 w-4" />
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-64 sm:w-72 md:w-80 rounded-md bg-white dark:bg-gray-800 p-4 text-sm shadow-lg">
                  <div className="mb-3 text-center text-lg font-semibold">
                    Chapter
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={chapterSearch}
                    onChange={(e) => setChapterSearch(e.target.value)}
                    className="mb-4 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-3 py-1 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600"
                  />
                  <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Book <span className="font-semibold">Jeremiah</span>
                  </div>
                  <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full rounded-md py-1 text-center text-sm font-medium ${
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
              <Menu.Button className="flex w-28 md:w-40 items-center justify-between rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600">
                Verse
                <ChevronDownIcon className="ml-2 h-4 w-4" />
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-64 sm:w-72 md:w-80 rounded-md bg-white dark:bg-gray-800 p-4 text-sm shadow-lg">
                  <div className="mb-3 text-center text-lg font-semibold">
                    Verse
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={verseSearch}
                    onChange={(e) => setVerseSearch(e.target.value)}
                    className="mb-4 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-3 py-1 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-600"
                  />
                  <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Chapter <span className="font-semibold">30</span>
                  </div>
                  <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full rounded-md py-1 text-center text-sm font-medium ${
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

          {/* Navigation Buttons */}
          <div className="mb-6 flex space-x-3 select-none">
            <Link
              to="/lexicon"
              className="flex-1 rounded-md bg-gray-500 dark:bg-gray-600 py-2 flex justify-center items-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Lexicon
            </Link>
            <Link
              to="/dictionary-detail"
              className="flex-1 rounded-md bg-yellow-500 dark:bg-yellow-600 py-2 lg:py-6 flex justify-center items-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Dictionary
            </Link>
            <Link
              to="/jeremiah"
              className="flex-1 rounded-md bg-blue-300 dark:bg-blue-500 py-2 flex justify-center items-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Commentary
            </Link>
          </div>

          {/* Chapter Title */}
          <h1 className="mb-3 text-2xl md:text-3xl font-semibold select-text">
            Jeremiah 30
          </h1>

          {/* Verses */}
          <div className="space-y-6 text-base md:text-xl leading-6 md:leading-8 text-gray-900 dark:text-gray-100 select-text">
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

export default Dictionary;
