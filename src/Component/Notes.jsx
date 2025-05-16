import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import Sidebar from "./SideBar";

function Notes() {
  const [notes, setNotes] = useState([
    {
      name: "Matthew 5:16",
      bookmark:
        "16 Let your light shine before others, that they may see your good deeds and glorify your Father in heaven",
      bookmarkName: "Matthew 5:16 NIV",
      note: "Let your light shine",
      date: "20th Aug 2023 10:24 AM",
    },
    {
      name: "Matthew 5:16",
      bookmark:
        "16 Let your light shine before others, that they may see your good deeds and glorify your Father in heaven",
      bookmarkName: "Matthew 5:16 NIV",
      note: "Let your light shine",
      date: "20th Aug 2023 10:24 AM",
    },
    {
      name: "Matthew 5:16",
      bookmark:
        "16 Let your light shine before others, that they may see your good deeds and glorify your Father in heaven",
      bookmarkName: "Matthew 5:16 NIV",
      note: "Let your light shine",
      date: "20th Aug 2023 10:24 AM",
    },
    {
      name: "Matthew 5:16",
      bookmark:
        "16 Let your light shine before others, that they may see your good deeds and glorify your Father in heaven",
      bookmarkName: "Matthew 5:16 NIV",
      note: "Let your light shine",
      date: "20th Aug 2023 10:24 AM",
    },
    {
      name: "Matthew 5:16",
      bookmark:
        "16 Let your light shine before others, that they may see your good deeds and glorify your Father in heaven",
      bookmarkName: "Matthew 5:16 NIV",
      note: "Let your light shine",
      date: "20th Aug 2023 10:24 AM",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({
    name: "",
    bookmark: "",
    bookmarkName: "",
    note: "",
    date: "",
  });

  const handleSave = () => {
    if (
      newNote.name.trim() &&
      newNote.bookmark.trim() &&
      newNote.bookmarkName.trim() &&
      newNote.note.trim() &&
      newNote.date.trim()
    ) {
      setNotes([...notes, newNote]);
      setNewNote({
        name: "",
        bookmark: "",
        bookmarkName: "",
        note: "",
        date: "",
      });
      setShowModal(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 font-montserrat transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Search Bar */}
        <div className="flex justify-center p-6">
          <input
            type="text"
            placeholder="Search"
            className="w-3/4 border-2 border-red-200 dark:border-red-700 rounded-lg px-4 py-2 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
          />
        </div>

        {/* Notes List */}
        <div className="space-y-4 px-6">
          {notes.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300"
            >
              <div className="text-[15px] mb-1">
                You Added note on <span className="font-bold">{item.name}</span>
              </div>
              <div className="italic text-sm text-gray-700 dark:text-gray-300 mb-3">
                {item.bookmark}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">{item.bookmarkName}</span>
                <span className="flex items-center gap-1">
                  <MdDateRange />
                  {item.date}
                </span>
              </div>
              <div className="text-xs text-black dark:text-gray-100 h-6 flex items-center pl-3 bg-gray-300 dark:bg-gray-700 mt-2 rounded">
                {item.note}
              </div>
            </div>
          ))}
        </div>

        {/* Add Note Button */}
        <div className="flex justify-center my-10">
          <button
            className="bg-red-600 dark:bg-red-700 text-white px-8 py-2 rounded-full hover:bg-red-700 dark:hover:bg-red-800 transition-colors duration-300"
            onClick={() => setShowModal(true)}
          >
            Create Notes
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-lg transition-colors duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Add New Note
            </h2>

            <input
              type="text"
              placeholder="Verse (e.g. Matthew 5:16)"
              className="w-full mb-2 px-4 py-2 border rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
              value={newNote.name}
              onChange={(e) => setNewNote({ ...newNote, name: e.target.value })}
            />
            <textarea
              placeholder="Verse text"
              className="w-full mb-2 px-4 py-2 border rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
              rows={3}
              value={newNote.bookmark}
              onChange={(e) =>
                setNewNote({ ...newNote, bookmark: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Bookmark name (e.g. Matthew 5:16 NIV)"
              className="w-full mb-2 px-4 py-2 border rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
              value={newNote.bookmarkName}
              onChange={(e) =>
                setNewNote({ ...newNote, bookmarkName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Note (e.g. Let your light shine)"
              className="w-full mb-2 px-4 py-2 border rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
              value={newNote.note}
              onChange={(e) => setNewNote({ ...newNote, note: e.target.value })}
            />
            <input
              type="text"
              placeholder="Date (e.g. 20th Aug 2023 10:24 AM)"
              className="w-full mb-4 px-4 py-2 border rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
              value={newNote.date}
              onChange={(e) => setNewNote({ ...newNote, date: e.target.value })}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded-md text-sm hover:bg-red-700 dark:hover:bg-red-800 transition-colors duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
