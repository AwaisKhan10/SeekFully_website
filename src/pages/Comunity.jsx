import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LuMessageSquareMore } from "react-icons/lu";
import { HiRefresh } from "react-icons/hi";
import { FaCaretDown, FaPaperPlane, FaTimes, FaSearch } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";
import profile1 from "../assets/profile1.png";
import profile from "../assets/profile.png";
import commentimage from "../assets/community.png";
import Trending from "../Component/Trending";
import { Link } from "react-router-dom";
import Sidebar from "../Component/SideBar";

function Post({ username, content, image, time, initialLikes }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showPopup, setShowPopup] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showReplies, setShowReplies] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(0);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
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
    <div className="flex flex-col p-4 border-b border-gray-200 relative">
      <div className="flex">
        <div className="mr-4">
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex-1">
          <div className="mb-2">
            <span className="font-bold mr-2">{username}</span>
            <span className="text-gray-500 text-sm">{time}</span>
          </div>
          <p className="mb-2 break-words">{content}</p>
          {image && (
            <img
              src={commentimage}
              alt="Post"
              className="w-full h-auto object-cover mb-2 rounded"
            />
          )}
          <div className="flex gap-4 text-gray-500 text-sm sm:text-base">
            <div className="flex items-center">
              <button onClick={handleLike}>
                {liked ? <AiFillHeart className="text-red-500" /> : <CiHeart />}
              </button>
              <span className="ml-1">{likes}</span>
            </div>
            <div className="flex items-center">
              <button onClick={handleCommentClick}>
                <LuMessageSquareMore />
              </button>
            </div>
            <div className="flex items-center">
              <HiRefresh />
            </div>
            <div className="flex items-center">
              <button onClick={() => setShowReplies(!showReplies)}>
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
              <p className="text-sm text-gray-500">No replies yet.</p>
            ) : (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-100 p-2 rounded-lg"
                >
                  <p className="text-sm font-medium text-gray-700">
                    {comment.user}
                  </p>
                  <p className="text-sm text-gray-600">{comment.text}</p>
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
              className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddComment}
              className="text-gray-600 hover:text-blue-600"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {comments.length === 0 ? (
                <p className="text-gray-500 text-center">No comments yet.</p>
              ) : (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <p className="text-sm font-medium text-gray-700">
                      {comment.user}
                    </p>
                    <p className="text-sm text-gray-600">{comment.text}</p>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAddComment}
                  className="p-2 text-gray-600 hover:text-blue-600"
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

function Community() {
  const [posts] = useState([
    {
      username: "Ruchi_Shah",
      content:
        "Failures are stepping stones to success. Embrace them, learn from them, and keep moving forward",
      time: "49m",
      likes: 0,
    },
    {
      username: "Ruchi_Shah",
      content:
        "Failures are stepping stones to success. Embrace them, learn from them, and keep moving forward",
      time: "49m",
      likes: 0,
    },
    {
      username: "Ruchi_Shah",
      content:
        "Failures are stepping stones to success. Embrace them, learn from them, and keep moving forward",
      time: "49m",
      likes: 0,
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
    <div className="flex w-full">
      <div className="w-64">
        <Sidebar />
      </div>
      <main className="flex-1 p-4">
        <div className="mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <h1 className="text-[#C10201] text-2xl lg:text-3xl font-semibold">
              Welcome Jackson...
            </h1>
            <div className="lg:ml-28 mt-2 lg:mt-0 flex gap-8 text-[#29272780] font-semibold">
          <Link to="/">   <a
                href="#"
                className="relative inline-block font-bold hover:text-red-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                Mapping
              </a></Link> 
              <a
                href="#"
                className="relative inline-block font-bold hover:text-red-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                Community
              </a>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Link to="/follow_requests">
              <div className="relative w-full lg:w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="flex items-center w-full mb-4">
            <img
              src={profile1}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex items-center w-full border rounded px-3 py-2 relative">
              <input
                type="text"
                placeholder="Share something cool today"
                className="w-full outline-none"
              />
              <div className="cursor-pointer text-gray-600 hover:text-gray-800 ml-2">
                <FaPaperPlane />
              </div>
            </div>
          </div>
          <div className="ml-16 flex items-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-gray-600 hover:text-gray-800 mr-2"
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
              <span className="text-sm text-gray-600">
                Selected file: <span className="font-medium">{selectedFileName}</span>
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
      </main>
      <aside className="hidden lg:block w-64">
        <Trending />
      </aside>
    </div>
  );
}

export default Community;
