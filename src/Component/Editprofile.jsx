import React, { useState } from "react";
import { FiEdit, FiSave, FiUpload, FiArrowLeft } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import postImage from "../assets/post-img.png";
import profilepage from "../assets/profilepage.png";
import Sidebar from "./SideBar";

function Editprofile() {
  const navigate = useNavigate();
  const [isEditingName, setIsEditingName] = useState(false);
  const [profileImage, setProfileImage] = useState("default-avatar.jpg");
  const [name, setName] = useState("Bernard Ward");
  const [email] = useState("BernardWard@gmail.com");
  const [location, setLocation] = useState("Minnesota, US");
  const [bio, setBio] = useState(
    "For God so loved the world that he gave his only begotten Son."
  );
  const [selectedTab, setSelectedTab] = useState("posts");

  const [posts] = useState([
    {
      id: 1,
      name: "Bernard Ward",
      time: "Just now",
      content: bio,
      image: postImage,
    },
    {
      id: 2,
      name: "Bernard Ward",
      time: "2 hours ago",
      content: "This is another great day to praise God!",
      image: postImage,
    },
  ]);

  const [friends] = useState([
    {
      id: 1,
      name: "Ralph Edwards",
      detail: "TCPA Compliance",
      image: profilepage,
    },
    {
      id: 2,
      name: "Jerome Bell",
      detail: "Speech Recognition",
      image: profilepage,
    },
    {
      id: 3,
      name: "Ronald Richards",
      detail: "Quality Monitoring",
      image: profilepage,
    },
    { id: 4, name: "Guy Hawkins", detail: "Voicestream", image: profilepage },
    {
      id: 5,
      name: "Kristin Watson",
      detail: "UC Integrations",
      image: profilepage,
    },
    {
      id: 6,
      name: "Floyd Miles",
      detail: "Preview Dialer",
      image: profilepage,
    },
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex w-full m-0 p-0 font-montserrat">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-5xl p-4 md:p-6 bg-white rounded-lg mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-2xl font-semibold"
          >
            <FiArrowLeft className="text-2xl" />
            Back
          </button>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="relative group">
            <img
              src={profilepage}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-red-100 cursor-pointer"
            />
            <label
              htmlFor="image-upload"
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
            >
              <FiUpload className="text-red-600" />
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-4 mb-2">
              {isEditingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-2xl font-bold border-b-2 border-red-500 outline-none"
                />
              ) : (
                <h1 className="text-2xl font-bold">{name}</h1>
              )}
              <button
                onClick={() => setIsEditingName(!isEditingName)}
                className="text-red-600 hover:text-red-800"
              >
                {isEditingName ? <FiSave size={20} /> : <FiEdit size={20} />}
              </button>
            </div>
            <p className="text-gray-600 mb-1">{email}</p>
            <p className="text-gray-600">{location}</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Bio</h3>
          <p className="text-gray-600">{bio}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b mb-6 justify-center md:justify-start">
          <button
            className={`py-2 px-4 font-semibold ${
              selectedTab === "posts"
                ? "border-b-2 border-red-600 text-red-600"
                : "text-gray-600 hover:text-red-600"
            }`}
            onClick={() => setSelectedTab("posts")}
          >
            Posts
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              selectedTab === "friends"
                ? "border-b-2 border-red-600 text-red-600"
                : "text-gray-600 hover:text-red-600"
            }`}
            onClick={() => setSelectedTab("friends")}
          >
            Friends
          </button>
        </div>

        {/* Posts */}
        {selectedTab === "posts" && (
          <div className="mb-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src={profilepage}
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">{post.name}</h4>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full rounded-lg mb-4 max-h-[400px] object-cover"
                  />
                )}
                <div className="flex gap-6 text-gray-500">
                  <button className="flex items-center gap-1 hover:text-blue-600">
                    <AiOutlineLike className="text-xl" /> 300
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-600">
                    <BiCommentDetail className="text-xl" /> 20
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Friends */}
        {selectedTab === "friends" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={friend.image}
                    alt={friend.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <h4 className="font-semibold">{friend.name}</h4>
                    <p className="text-gray-600 text-sm">{friend.detail}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">6k followers</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Editprofile;
