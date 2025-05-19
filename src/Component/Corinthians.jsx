// Updated responsive Corinthians component
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
    <div className="flex min-h-screen bg-[#f9f9f9] font-montserrat transition-colors duration-300 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-10 flex h-full w-16 flex-col items-center bg-white py-4 shadow-md dark:bg-gray-900 sm:w-20">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="ml-16 flex-1 px-2 pt-4 sm:ml-20 sm:px-4 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <div className="relative mb-6 flex items-center select-none text-sm font-normal text-gray-700 dark:text-gray-300">
            <button className="flex items-center space-x-1 hover:underline">
              <i className="fas fa-arrow-left" />
              <Link to="/study-interlinear">
                <span>Go Back</span>
              </Link>
            </button>
            <div className="ml-auto flex items-center space-x-1 text-xs text-gray-400 dark:text-gray-500">
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
              className="flex-grow rounded-md border border-red-100 bg-white px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:border-red-900 dark:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:ring-red-700"
            />
            {/* Book dropdown */}
            <Dropdown
              label="Index"
              width="w-32 sm:w-36 md:w-40"
              searchValue={bookSearch}
              setSearchValue={setBookSearch}
            >
              {["Old Testament", "New Testament"].map((section) => (
                <div key={section}>
                  <h4 className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
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
            </Dropdown>
            {/* Chapter dropdown */}
            <Dropdown
              label="Chapter"
              width="w-28 sm:w-32 md:w-40"
              searchValue={chapterSearch}
              setSearchValue={setChapterSearch}
            >
              <DropdownTitle title="Chapter" />
              <DropdownSubTitle label="Book" value="1 Corinthians" />
              <GridOptions options={filteredChapters} />
            </Dropdown>
            {/* Verse dropdown */}
            <Dropdown
              label="Verse"
              width="w-28 sm:w-32 md:w-40"
              searchValue={verseSearch}
              setSearchValue={setVerseSearch}
            >
              <DropdownTitle title="Verse" />
              <DropdownSubTitle label="Chapter" value="13" />
              <GridOptions options={filteredVerses} />
            </Dropdown>
          </div>

          {/* Nav Buttons */}
          <div className="mb-6 flex select-none space-x-3">
            <NavButton to="/lexicon" label="Lexicon" bg="bg-gray-500" />
            <NavButton
              to="/sermon-mount"
              label="Cross Reference"
              bg="bg-rose-300"
            />
            <NavButton to="/jeremiah" label="Interlinear" bg="bg-red-500" />
          </div>

          {/* Main Passage */}
          <section className="mb-6 select-text text-base leading-6 text-gray-900 dark:text-gray-200 md:text-xl md:leading-8">
            <p className="font-semibold md:text-lg">
              Main Passage: 1 Corinthians 13:4–8 (NIV)
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              4 Love is patient, love is kind. It does not envy, it does not
              boast, it is not proud. 5 It does not dishonor others, it is not
              self-seeking, it is not easily angered, it keeps no record of
              wrongs. 6 Love does not delight in evil but rejoices with the
              truth. 7 It always protects, always trusts, always hopes, always
              perseveres. 8 Love never fails. But where there are prophecies,
              they will cease; where there are tongues, they will be stilled;
              where there is knowledge, it will pass away.
            </p>
          </section>

          {/* Cross References */}
          <section className="select-text text-lg text-gray-900 dark:text-gray-100 md:text-2xl">
            <p className="mb-2 font-semibold">Cross-Reference Passages</p>
            <div className="grid grid-cols-12 border-t border-gray-300 py-2 text-left font-semibold dark:border-gray-600">
              <div className="col-span-4 px-2 sm:col-span-3">Passage</div>
              <div className="col-span-8 px-2 sm:col-span-9">Content</div>
            </div>
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className="grid grid-cols-12 border-t border-gray-200 py-2 text-base dark:border-gray-700 md:text-lg"
              >
                <div className="col-span-4 px-2 sm:col-span-3">
                  {i + 1}. John 4:7–8
                </div>
                <div className="col-span-8 px-2 sm:col-span-9">
                  Dear friends, let us love one another, for love comes from
                  God. Everyone who loves has been born of God and knows God.
                  Whoever does not love does not know God, because God is love.
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

// Helper Components ---------------------------------------------
const NavButton = ({ to, label, bg }) => (
  <Link
    to={to}
    className={`flex-1 rounded-md ${bg} py-2 text-center text-sm font-semibold text-white transition hover:opacity-90 lg:py-6`}
  >
    {label}
  </Link>
);

const Dropdown = ({ label, width, searchValue, setSearchValue, children }) => (
  <Menu as="div" className="relative">
    <Menu.Button
      className={`flex items-center justify-between ${width} rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-red-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-red-700`}
    >
      {label}
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
      <Menu.Items className="absolute z-20 mt-2 w-64 rounded-md border border-gray-100 bg-white p-4 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:w-72 md:w-80">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-red-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder:text-gray-500 dark:focus:ring-red-700"
        />
        {children}
      </Menu.Items>
    </Transition>
  </Menu>
);

const DropdownTitle = ({ title }) => (
  <div className="mb-2 text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
    {title}
  </div>
);

const DropdownSubTitle = ({ label, value }) => (
  <div className="mb-2 text-sm">
    <span className="text-gray-500 dark:text-gray-400">{label} </span>
    <span className="font-semibold text-gray-800 dark:text-gray-200">
      {value}
    </span>
  </div>
);

const GridOptions = ({ options }) => (
  <div className="grid grid-cols-5 gap-2 sm:grid-cols-6">
    {options.map((opt) => (
      <Menu.Item key={opt}>
        {({ active }) => (
          <button
            className={`w-full rounded-md py-1 text-center text-sm font-medium ${
              active
                ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            {opt}
          </button>
        )}
      </Menu.Item>
    ))}
  </div>
);

export default Corinthians;
