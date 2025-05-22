import React, { useState, Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

const BibleJeremiah30Page = () => {
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
    <div className="bg-gray-100 text-gray-900 min-h-screen flex font-montserrat">
      <Sidebar />
      <div className="flex flex-col md:flex-row flex-1 max-w-screen-xl mx-auto pl-[100px]">
        <div className="flex flex-col flex-1 p-6 bg-white rounded-xl shadow-md m-4">
          {/* Top Bar */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-red-700 font-semibold text-xl select-none">
              Bible
            </div>
            <input
              type="search"
              placeholder="Search"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <button className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white hover:bg-red-50 hover:text-red-700 transition">
              <span>KJV</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <button className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white hover:bg-red-50 hover:text-red-700 transition">
              <span>Language</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-700 transition">
              <i className="fas fa-sliders-h"></i>
            </button>
            <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-700 transition">
              <i className="fas fa-bookmark"></i>
            </button>
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Book Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white hover:ring-2 hover:ring-red-300 transition">
                Index
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Transition as={Fragment}>
                <Menu.Items className="absolute z-20 mt-2 w-96 bg-white shadow-xl rounded-md p-4 text-sm grid grid-cols-2 gap-x-6 ring-1 ring-red-100">
                  <div className="col-span-2 mb-2">
                    <input
                      type="text"
                      placeholder="Search books..."
                      value={bookSearch}
                      onChange={(e) => setBookSearch(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-red-300"
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
                                className={`w-full text-left px-2 py-1 rounded-md transition ${
                                  active
                                    ? "bg-red-100 text-red-700"
                                    : "text-gray-700"
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
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white hover:ring-2 hover:ring-red-300 transition">
                Chapter
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Transition as={Fragment}>
                <Menu.Items className="absolute z-20 mt-2 w-80 bg-white shadow-xl rounded-md p-4 text-sm ring-1 ring-red-100">
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
                  <div className="grid grid-cols-6 gap-2">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium transition ${
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
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white hover:ring-2 hover:ring-red-300 transition">
                Verse
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Transition as={Fragment}>
                <Menu.Items className="absolute z-20 mt-2 w-80 bg-white shadow-xl rounded-md p-4 text-sm ring-1 ring-red-100">
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
                  <div className="grid grid-cols-6 gap-2">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium transition ${
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

          {/* Chapter Text */}
          <h1 className="font-extrabold text-2xl mb-4 select-none">
            Jeremiah 30
          </h1>
          <div className="relative flex-1 overflow-y-auto pr-2 space-y-2">
            {[
              "In the beginning God created the heavens and the earth.",
              "Now the earth was formless and empty, darkness was over the surface of the deep...",
              'And God said, "Let there be light," and there was light.',
              "God saw that the light was good...",
            ].map((verse, i) => (
              <p
                key={i}
                className={`text-sm leading-6 px-2 py-1 rounded ${
                  i % 2 === 0 ? "bg-red-100" : "bg-blue-100"
                }`}
              >
                {i + 1}. {verse}
              </p>
            ))}

            {/* Audio Play Button */}
            <button
              aria-label="Play audio"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            >
              <i className="fas fa-play text-black text-lg"></i>
            </button>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-center space-x-6 py-2">
              <button className="text-gray-600 hover:text-red-600 transition">
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              <div className="font-semibold text-gray-900">Jeremiah 30</div>
              <button className="text-gray-600 hover:text-red-600 transition">
                <i className="fas fa-chevron-right text-lg"></i>
              </button>
              <button className="text-gray-600 hover:text-red-600 transition">
                <i className="fas fa-volume-up text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="hidden md:flex flex-col flex-1 p-6 border-l border-gray-200 bg-white shadow-inner rounded-xl m-4">
          <button className="self-start bg-red-700 text-white text-sm font-semibold rounded px-4 py-1 mb-4 hover:bg-red-800 transition">
            <span>Notes</span>
            <i className="fas fa-arrow-right ml-1"></i>
          </button>
          <div className="text-sm leading-5 mb-4">
            <span className="font-bold">Galatians 5:22-24</span>
            <br />
            But the fruit of the <span className="font-bold">Spirit</span> is
            love, joy, peace, forbearance, kindness...
          </div>
          <button className="mt-auto bg-red-700 text-white text-sm font-semibold rounded-full py-2 w-full hover:bg-red-800 transition">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BibleJeremiah30Page;
