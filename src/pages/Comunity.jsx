import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LuMessageSquareMore } from "react-icons/lu";
import { HiRefresh } from "react-icons/hi";
import { FaCaretDown, FaPaperPlane } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";
import profile1 from "../assets/profile1.png";
import profile from "../assets/profile.png";
import commentimage from "../assets/community.png";
import Sidebar from "../Component/SideBar";
import Sidebar_small from "../Component/Sidbar_small";

// Post Component
function Post({ username, content, image, time, initialLikes }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showPopup, setShowPopup] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showReplies, setShowReplies] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleCommentClick = () => {
    setShowPopup(true);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, user: "Anonymous" }]);
      setNewComment("");
    }
  };

  return (
    <div className="flex flex-col p-4 border-b border-gray-200 dark:border-gray-700 relative font-montserrat bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="flex">
        <div className="mr-4">
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600"
          />
        </div>
        <div className="flex-1">
          <div className="mb-2">
            <span className="font-bold mr-2">{username}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {time}
            </span>
          </div>
          <p className="mb-2 break-words">{content}</p>
          {image && (
            <img
              src={commentimage}
              alt="Post"
              className="w-full h-auto object-cover mb-2 rounded"
            />
          )}
          <div className="flex gap-4 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            <div className="flex items-center">
              <button onClick={handleLike} aria-label="Like post">
                {liked ? <AiFillHeart className="text-red-500" /> : <CiHeart />}
              </button>
              <span className="ml-1">{likes}</span>
            </div>
            <div className="flex items-center">
              <button onClick={handleCommentClick} aria-label="Show comments">
                <LuMessageSquareMore />
              </button>
            </div>
            <div className="flex items-center">
              <HiRefresh />
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setShowReplies(!showReplies)}
                aria-label="Toggle replies"
              >
                <FaCaretDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showReplies && (
        <div className="ml-16 mt-4 space-y-3">
          <div className="space-y-2">
            {comments.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No replies yet.
              </p>
            ) : (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-2 rounded-lg"
                >
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {comment.user}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {comment.text}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a reply..."
              className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
            />
            <button
              onClick={handleAddComment}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
              aria-label="Add reply"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-11/12 max-w-md max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Comments
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                aria-label="Close comments popup"
              >
                <FaCaretDown />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {comments.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  No comments yet.
                </p>
              ) : (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className="mb-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                  >
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {comment.user}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {comment.text}
                    </p>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
                />
                <button
                  onClick={handleAddComment}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600"
                  aria-label="Add comment"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Trending Component
function Trending() {
  const trends = [
    { topic: "DESIGN", threads: "123.8K threads" },
    {
      topic: "MOVIES AND SERIES: Spider-Man: Across the Spider-Verse",
      threads: "93.4K threads",
    },
    { topic: "TECH", threads: "IPHONE 15" },
    { topic: "GAMES", threads: "71.9K threads" },
    { topic: "DESIGN", threads: "#Minimalism" },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        TRENDING TOPICS
      </h2>
      <ul className="space-y-2">
        {trends.map((trend, index) => (
          <li key={index} className="text-sm">
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {trend.topic}
            </p>
            <p className="text-gray-500 dark:text-gray-400">{trend.threads}</p>
          </li>
        ))}
      </ul>
      <a href="#" className="text-blue-500 text-sm mt-4 block">
        See more
      </a>
    </div>
  );
}

// Community Component
function Community() {
  const [posts] = useState([
    {
      username: "Ruchi_shah",
      content:
        "FAILURES are stepping stones to success. Embrace them, learn from them, and keep moving forward",
      time: "49m",
      likes: 1,
    },
    {
      username: "Ruchi_shah",
      content:
        "FAILURES are stepping stones to success. Embrace them, learn from them, and keep moving forward",
      time: "49m",
      likes: 1,
    },
    {
      username: "Ruchi_shah",
      content:
        "FAILURES are stepping stones to success. Embrace them, learn from them, and keep moving forward",
      time: "49m",
      likes: 1,
      image: commentimage,
    },
  ]);

  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  return (
    <div className="flex  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Sidebar />
      <main className="flex-1  p-2 ml-28">
        <div className="w-full  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-4">
          <div className="flex ">
            {/* Small Sidebar */}
            <div className="mr-4 mt-[210px]">
              <Sidebar_small />
            </div>

            {/* Post Feed */}
            <div className="flex-1">
              <div className="flex flex-col mt-6">
                <div className="flex items-center w-full mb-4">
                  <img
                    src={profile1}
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4 border border-gray-300 dark:border-gray-600"
                  />
                  <div className="flex items-center w-full border rounded px-3 py-2 relative bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    <input
                      type="text"
                      placeholder="Share something cool today"
                      className="w-full outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
                    />
                    <div className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 ml-2">
                      <FaPaperPlane />
                    </div>
                  </div>
                </div>
                <div className="ml-16 flex items-center">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mr-2"
                  >
                    <GrAttachment />
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {selectedFileName && (
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Selected file:{" "}
                      <span className="font-medium">{selectedFileName}</span>
                    </span>
                  )}
                </div>
              </div>

              {posts.map((post, index) => (
                <Post
                  key={index}
                  username={post.username}
                  content={post.content}
                  image={post.image}
                  time={post.time}
                  initialLikes={post.likes}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <aside className="hidden lg:block">
        <Trending />
      </aside>
    </div>
  );
}

export default Community;
