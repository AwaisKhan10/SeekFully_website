import React, { useState, Fragment } from "react";
import Sidebar from "./SideBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Interlinear = () => {
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
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 min-h-screen font-montserrat transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-full md:w-24 flex flex-col items-center md:min-h-screen fixed md:static z-10 dark:bg-gray-900">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-13 p-4 sm:p-6 pt-24 sm:pt-6 w-full">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 max-w-6xl mx-auto transition-colors duration-300">
          {/* Header */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center text-sm font-normal text-gray-700 dark:text-gray-300 mb-6 select-none">
            <button className="flex items-center space-x-1 hover:underline mb-2 sm:mb-0">
              <i className="fas fa-arrow-left"></i>
              <Link to="/study-interlinear">
                <span>Go Back</span>
              </Link>
            </button>
            <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 flex space-x-6">
              <button className="text-red-600 dark:text-red-400 font-semibold border-b-2 border-red-600 dark:border-red-400 pb-1">
                Study
              </button>
              <button className="text-gray-300 cursor-default select-none">
                Study Note
              </button>
            </div>
            <div className="sm:ml-auto flex items-center space-x-1 text-gray-400 dark:text-gray-500 text-xs cursor-default select-none mt-2 sm:mt-0">
              <i className="fas fa-globe-asia"></i>
              <span>KJV</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-3 lg:space-y-0 mb-6">
            <div className="flex w-full lg:w-[560px] rounded-lg border border-red-300 overflow-hidden">
              <div className="flex items-center flex-grow px-4 w-full">
                <i className="fas fa-search text-gray-300 text-lg"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-grow ml-3 py-3 text-sm text-black placeholder-gray-300 bg-transparent outline-none font-sans h-[58px] sm:h-auto"
                />
              </div>
            </div>

            <DropdownMenu label="Index" items={filterBooks} sections={books} search={bookSearch} setSearch={setBookSearch} />
            <DropdownMenu label="Chapter" items={filteredChapters} search={chapterSearch} setSearch={setChapterSearch} title="Chapter" />
            <DropdownMenu label="Verse" items={filteredVerses} search={verseSearch} setSearch={setVerseSearch} title="Verse" />
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 select-none">
            <Link to="/lexicon" className="bg-[#B33A36]  text-white rounded-md h-16 font-semibold text-sm hover:opacity-90 transition flex items-center justify-center text-center">
             Interlinear
            </Link>
            <Link to="/sermon-mount" className="bg-[#8B8E7D]  text-white rounded-md h-20 font-semibold text-sm hover:opacity-90 transition flex items-center justify-center text-center">
               Lexicon 
            </Link>
            <Link to="/cross-reference" className="bg-[#D9A79E] text-white rounded-md h-16 font-semibold text-sm hover:opacity-90 transition flex items-center justify-center text-center">
              Cross Reference
            </Link>
          </div>

 {/* Chapter Title */}
          <h1 className="text-4xl font-bold mb-5 text-gray-900 dark:text-gray-100 select-text">
            Jeremiah 30
          </h1>

           {/* Sample Verses */}
      <div className="text-xl text-gray-900 dark:text-gray-200 select-text space-y-1 montserrat">
        <p>1. In the beginning God created the heavens and the earth.</p>
        <p>
          2. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.
        </p>
        <p>3. And God said, “Let there be light,” and there was light.</p>
        <p>
          4. God saw that the light was good, and he separated the light from the darkness.
        </p>
        <p>
          5. God called the light “day,” and the darkness he called “night.” And there was evening, and there was morning—the first day.
        </p>
        <p>
          6. And God said, “Let there be a vault between the waters to separate water from water.”
        </p>
        <p>
          7. So God made the vault and separated the water under the vault from the water above it. And it was so.
        </p>
        <p>
          8. God called the vault “sky.” And there was evening, and there was morning—the second day.
        </p>
        <p>9. And God said, “Let dry ground appear,” and it was so.</p>
      </div>
        </div>
      </main>
    </div>
  );
};

// DropdownMenu Component
const DropdownMenu = ({ label, items, sections, search, setSearch, title }) => (
  <Menu as="div" className="relative w-full sm:w-auto">
    <Menu.Button className="flex items-center justify-between w-full sm:w-30 border border-gray-200 dark:border-gray-400 bg-white dark:bg-gray-800 rounded-full px-3 py-2 text-sm text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700">
      {label}
      <ChevronDownIcon className="w-4 h-4 ml-2" />
    </Menu.Button>
    <Transition as={Fragment} {...transitionProps}>
      <Menu.Items className="absolute z-20 mt-2 w-full min-w-[12rem] sm:w-80 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-md p-4 text-sm">
        {title && <div className="text-center font-semibold text-lg mb-3 text-gray-700 dark:text-gray-200">{title}</div>}
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-sm mb-4 text-gray-700 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-700"
        />
        {sections ? (
          <div className="grid grid-cols-2 gap-x-6">
            {Object.keys(sections).map((section) => (
              <div key={section}>
                <h4 className="font-semibold mb-1 text-gray-700 dark:text-gray-300">{section}</h4>
                <ul className="space-y-1">
                  {items(section).map((book) => (
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
          </div>
        ) : (
          <div className="grid grid-cols-6 gap-2">
            {items.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    className={`w-full py-1 rounded-md text-center text-sm font-medium ${
                      active
                        ? "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        )}
      </Menu.Items>
    </Transition>
  </Menu>
);

const transitionProps = {
  enter: "transition ease-out duration-100",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "transition ease-in duration-75",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
};

export default Interlinear;
