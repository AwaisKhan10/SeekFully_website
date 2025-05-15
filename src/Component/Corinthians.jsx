import React, { useState, Fragment } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const Corinthians = () => {
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
      <aside className="w-20 bg-white shadow-md flex flex-col items-center py-4 fixed h-full z-10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 flex justify-center items-start px-4">
        <div className="p-6 w-full">
          {/* Header */}
          <div className="relative flex items-center text-sm font-normal text-gray-700 mb-6 select-none">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left"></i>
              <Link to="/study-interlinear">
                {" "}
                <span>Go Back</span>{" "}
              </Link>
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
              className="flex-grow border border-red-100 rounded-md px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300"
            />

            {/* Book Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
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
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-80 bg-white shadow-lg rounded-md p-4 text-sm">
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
                  <div className="grid grid-cols-6 gap-2">
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
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300">
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-80 bg-white shadow-lg rounded-md p-4 text-sm">
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
                  <div className="grid grid-cols-6 gap-2">
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

          <div className="flex space-x-3 mb-6 select-none">
            <Link
              to="/lexicon"
              className="flex-1 bg-gray-500 text-white rounded-md py-6 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Lexicon
            </Link>

            <Link
              to="/sermon-mount"
              className="flex-1 bg-rose-300 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Cross Reference
            </Link>

            <Link
              to="/jeremiah"
              className="flex-1 bg-red-500 text-white rounded-md py-2 font-semibold text-sm hover:opacity-90 transition text-center flex items-center justify-center"
            >
              Interlinear
            </Link>
          </div>

          {/* Main Passage */}
          <div className="text-xl leading-6 text-gray-900 select-text mb-4">
            <p className="font-semibold">
              Main Passage: 1 Corinthians 13:4–8 (NIV)
            </p>
            <p className="text-lg text-gray-700 mt-2">
              4 Love is patient, love is kind. It does not envy, it does not
              boast, it is not proud. 5 It does not dishonor others, it is not
              self-seeking, it is not easily angered, it keeps no record of
              wrongs. 6 Love does not delight in evil but rejoices with the
              truth. 7 It always protects, always trusts, always hopes, always
              perseveres. 8 Love never fails. But where there are prophecies,
              they will cease; where there are tongues, they will be stilled;
              where there is knowledge, it will pass away.
            </p>
          </div>

          {/* Cross-Reference Passages */}
          <div className="text-2xl text-gray-900 select-text">
            <p className="font-semibold mb-2">Cross-Reference Passages</p>

            <div className="grid grid-cols-12 border-t border-gray-300 text-lg font-semibold text-left py-2">
              <div className="col-span-3 px-2">Passage</div>
              <div className="col-span-9 px-2">Content</div>
            </div>

            <div className="grid grid-cols-12 border-t border-gray-200 py-2 text-lg">
              <div className="col-span-3 px-2">1. John 4:7–8</div>
              <div className="col-span-9 px-2">
                Dear friends, let us love one another, for love comes from God.
                Everyone who loves has been born of God and knows God. Whoever
                does not love does not know God, because God is love.
              </div>
            </div>
            <div className="grid grid-cols-12 border-t border-gray-200 py-2 text-lg">
              <div className="col-span-3 px-2">2. John 4:7–8</div>
              <div className="col-span-9 px-2">
                Dear friends, let us love one another, for love comes from God.
                Everyone who loves has been born of God and knows God. Whoever
                does not love does not know God, because God is love.
              </div>
            </div>
            <div className="grid grid-cols-12 border-t border-gray-200 py-2 text-lg">
              <div className="col-span-3 px-2">3. John 4:7–8</div>
              <div className="col-span-9 px-2">
                Dear friends, let us love one another, for love comes from God.
                Everyone who loves has been born of God and knows God. Whoever
                does not love does not know God, because God is love.
              </div>
            </div>
            <div className="grid grid-cols-12 border-t border-gray-200 py-2 text-lg">
              <div className="col-span-3 px-2">4. John 4:7–8</div>
              <div className="col-span-9 px-2">
                Dear friends, let us love one another, for love comes from God.
                Everyone who loves has been born of God and knows God. Whoever
                does not love does not know God, because God is love.
              </div>
            </div>
            <div className="grid grid-cols-12 border-t border-gray-200 py-2 text-lg">
              <div className="col-span-3 px-2">5. John 4:7–8</div>
              <div className="col-span-9 px-2">
                Dear friends, let us love one another, for love comes from God.
                Everyone who loves has been born of God and knows God. Whoever
                does not love does not know God, because God is love.
              </div>
            </div>
            <div className="grid grid-cols-12 border-t border-gray-200 py-2 text-lg">
              <div className="col-span-3 px-2">6. John 4:7–8</div>
              <div className="col-span-9 px-2">
                Dear friends, let us love one another, for love comes from God.
                Everyone who loves has been born of God and knows God. Whoever
                does not love does not know God, because God is love.
              </div>
            </div>
            <div className="grid grid-cols-12 border-t border-gray-200 py-2 text-lg">
              <div className="col-span-3 px-2">7. John 4:7–8</div>
              <div className="col-span-9 px-2">
                Dear friends, let us love one another, for love comes from God.
                Everyone who loves has been born of God and knows God. Whoever
                does not love does not know God, because God is love.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Corinthians;
