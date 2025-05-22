import React, { useState, Fragment, useEffect } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LexiconDetail = () => {
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
  const [darkMode, setDarkMode] = useState(() => {
    // Default to system preference or false
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
    <div className="flex min-h-screen font-montserrat bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-20 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-4 fixed h-full z-10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 md:ml-40 flex justify-center items-start px-4">
        <div className="p-6 w-full max-w-7xl">
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Header */}
          <div className="relative flex items-center text-sm font-normal text-gray-700 dark:text-gray-300 mb-6 select-none">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left"></i>
              <button onClick={() => navigate(-1)}>
                {" "}
                <span>Go Back</span>{" "}
              </button>
            </button>

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
              className="flex-grow border border-red-100 rounded-md px-4 py-2 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500
                text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700
                focus:outline-none focus:ring-1 focus:ring-red-300"
            />

            {/* Book Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300">
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
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm text-gray-800 dark:text-gray-200
                        bg-white dark:bg-gray-700
                        focus:outline-none focus:ring-1 focus:ring-red-300"
                    />
                  </div>
                  {["Old Testament", "New Testament"].map((section) => (
                    <div key={section}>
                      <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                        {section}
                      </h4>
                      <ul className="space-y-1">
                        {filterBooks(section).map((book) => (
                          <Menu.Item key={book}>
                            {({ active }) => (
                              <button
                                className={`w-full text-left ${
                                  active
                                    ? "text-red-500"
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
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300">
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
                  <div className="text-center font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
                    Chapter
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={chapterSearch}
                    onChange={(e) => setChapterSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm mb-4 text-gray-800 dark:text-gray-200
                      bg-white dark:bg-gray-700
                      focus:outline-none focus:ring-1 focus:ring-red-300"
                  />
                  <div className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-gray-500 dark:text-gray-400">
                      Book
                    </span>{" "}
                    <span className="font-semibold">Jeremiah</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 text-red-600"
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

            {/* Verse Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300">
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
                  <div className="text-center font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
                    Verse
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={verseSearch}
                    onChange={(e) => setVerseSearch(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm mb-4 text-gray-800 dark:text-gray-200
                      bg-white dark:bg-gray-700
                      focus:outline-none focus:ring-1 focus:ring-red-300"
                  />
                  <div className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-gray-500 dark:text-gray-400">
                      Chapter
                    </span>{" "}
                    <span className="font-semibold">30</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active
                                ? "bg-red-100 text-red-600"
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

          <div className="flex space-x-3 mb-6 select-none">
            <Link
              to="/corinthians"
              className="flex-1 bg-rose-300 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Cross Reference
            </Link>

            <Link
              to="/lexicon"
              className="flex-1 bg-gray-500 text-white rounded-md py-6 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Lexicon
            </Link>

            <Link
              to="/jeremiah"
              className="flex-1 bg-red-500 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Interlinear
            </Link>
          </div>

          {/* Lexical Table */}
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-sm text-left border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700 text-2xl text-gray-800 dark:text-gray-200">
                <tr>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Strong's Number
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Hebrew
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Greek
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    Transliterated
                  </th>
                  <th className="px-4 py-2 border dark:border-gray-700">
                    English Equivalent
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg text-gray-900 dark:text-gray-300">
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-700">
                    G3114
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">-</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    μακροθυμεῖ
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    makrothymei
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    is patient
                  </td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-700">
                    G5541
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">-</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    χρηστεύεται
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    chrēsteuetai
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    is kind
                  </td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-700">
                    G2206
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">-</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    ζηλοῖ
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    zēloi
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    envies
                  </td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-700">
                    G4068
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">-</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    περπερεύεται
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    perpereuetai
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    boasts
                  </td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-700">
                    G2718
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">-</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    φυσιῶται
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    physiōtai
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    is proud
                  </td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-700">
                    G2695
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">-</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    ἀσχημονεῖ
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    aschēmonei
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    does not behave itself unseemly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LexiconDetail;
