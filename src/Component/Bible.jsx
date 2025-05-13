import React, { useState, Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const books = {
  "Old Testament": [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
    "1 Chronicles", "2 Chronicles"
  ],
  "New Testament": [
    "Matthew", "Mark", "Luke", "John", "Acts",
    "Romans", "1 Corinthians", "2 Corinthians",
    "Galatians", "Ephesians", "Philippians"
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
    <div className="bg-white font-sans text-gray-900 min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col md:flex-row flex-1 max-w-screen-xl mx-auto pl-[140px]">
        <div className="flex flex-col flex-1 p-4 md:p-6 max-w-full md:max-w-[600px]">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-red-700 font-normal text-lg select-none">Bible</div>
            <input
              type="search"
              placeholder="Search"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-red-700"
            />
            <button className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-700">
              <span>KJV</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <button className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-700">
              <span>Language</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <button className="border border-gray-300 rounded-md p-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-700">
              <i className="fas fa-sliders-h"></i>
            </button>
            <button className="border border-gray-300 rounded-md p-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-700">
              <i className="fas fa-bookmark"></i>
            </button>
          </div>

          {/* Dropdown Menu Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Book Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
                Index
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Transition as={Fragment}>
                <Menu.Items className="absolute z-20 mt-2 w-96 bg-white shadow-lg rounded-md p-4 text-sm grid grid-cols-2 gap-x-6">
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
                      <ul className="space-y-1">
                        {filterBooks(section).map((book) => (
                          <Menu.Item key={book}>
                            {({ active }) => (
                              <button
                                className={`w-full text-left ${active ? "text-red-500" : "text-gray-700"}`}
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
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
                Chapter
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Transition as={Fragment}>
                <Menu.Items className="absolute z-20 mt-2 w-80 bg-white shadow-lg rounded-md p-4 text-sm">
                  <div className="text-center font-semibold text-lg mb-3">Chapter</div>
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
                  <div className="grid grid-cols-6 gap-2">
                    {filteredChapters.map((ch) => (
                      <Menu.Item key={ch}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-700"
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
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
                Verse
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Menu.Button>
              <Transition as={Fragment}>
                <Menu.Items className="absolute z-20 mt-2 w-80 bg-white shadow-lg rounded-md p-4 text-sm">
                  <div className="text-center font-semibold text-lg mb-3">Verse</div>
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
                  <div className="grid grid-cols-6 gap-2">
                    {filteredVerses.map((v) => (
                      <Menu.Item key={v}>
                        {({ active }) => (
                          <button
                            className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                              active ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-700"
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

          {/* Content */}
          <h1 className="font-extrabold text-2xl mb-3 select-none">Jeremiah 30</h1>
          <div className="relative flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: "thin" }}>
            <p className="text-sm leading-6 mb-1 bg-red-200 rounded px-1 select-text">
              1. In the beginning God created the heavens and the earth.
            </p>
            <p className="text-sm leading-6 mb-1 bg-blue-200 rounded px-1 select-text">
              2. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.
            </p>
            <p className="text-sm leading-6 mb-1 bg-red-200 rounded px-1 select-text">
              3. And God said, "Let there be light," and there was light.
            </p>
            <p className="text-sm leading-6 mb-1 select-text">
              4. God saw that the light was good, and he separated the light from the darkness.
            </p>
            <p className="text-sm leading-6 mb-1 bg-red-200 rounded px-1 select-text">
              5. God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.
            </p>
            <p className="text-sm leading-6 mb-1 bg-red-200 rounded px-1 select-text">
              6. And God said, "Let there be a vault between the waters to separate water from water."
            </p>
            <p className="text-sm leading-6 mb-1 bg-red-200 rounded px-1 select-text">
              7. So God made the vault and separated the water under the vault from the water above it. And it was so.
            </p>

            {/* Audio Controls */}
            <button
              aria-label="Play audio"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <i className="fas fa-play text-black text-lg ml-0.5"></i>
            </button>

            {/* Footer Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-center space-x-6 py-2 select-none" style={{ height: "48px" }}>
              <button aria-label="Previous" className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-700 rounded">
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              <div className="font-semibold text-gray-900 select-none">Jeremiah 30</div>
              <button aria-label="Next" className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-700 rounded">
                <i className="fas fa-chevron-right text-lg"></i>
              </button>
              <button aria-label="Mute audio" className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-700 rounded">
                <i className="fas fa-volume-up text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Notes section */}
        <div className="hidden md:flex flex-col flex-1 p-6 border-l border-gray-200">
          <button className="self-start bg-red-700 text-white text-sm font-semibold rounded px-4 py-1 mb-4 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 flex items-center space-x-1">
            <span>Notes</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <div className="text-sm leading-5 mb-4">
            <span className="font-bold">Galatians </span>
            <span className="font-bold">5 22-24</span>
            <br />
            But the fruit of the <span className="font-bold">Spirit</span> is love, joy, peace, forbearance, kindness,
          </div>
          <button className="mt-auto bg-red-700 text-white text-sm font-semibold rounded-full py-2 w-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BibleJeremiah30Page;
