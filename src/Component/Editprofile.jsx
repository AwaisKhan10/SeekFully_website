import React from "react";
import postImage from "../assets/post-img.png";
import profilepage from "../assets/profilepage.png";
import Sidebar from "./SideBar";

function Editprofile() {
  return (
    <div className="bg-[#f7f9fa] min-h-screen flex">
      {/* Sidebar - fixed width */}
      <div className="w-36">
        <Sidebar />
      </div>

      {/* Main content - takes the remaining space */}
      <main className="flex-1 p-2 ">
        <div className="bg-white min-h-screen p-6 shadow-xl rounded-2xl ">
          {/* Header */}
          <header className="pt-6 px-6 pb-2 flex items-center space-x-3">
            <button aria-label="Back" className="text-gray-700 text-lg">
              <i className="fas fa-arrow-left"></i>
            </button>
            <h1 className="text-gray-700 font-normal text-lg">Profile</h1>
          </header>

          {/* Profile section */}
          <section className="flex flex-col items-center pt-6 pb-4 px-6">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={profilepage}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-4 font-semibold text-gray-800 text-base leading-5">
              Bernard Ward
            </h2>
            <p className="text-xs text-gray-400 mt-1">BernardWard@gmail.com</p>
          </section>

          {/* Navigation */}
          <nav className="flex justify-center text-sm text-gray-500 font-normal">
            <button className="relative px-6 py-3 text-gray-800 font-semibold after:absolute after:-bottom-px after:left-0 after:right-0 after:h-[1.5px] after:bg-gray-800">
              Posts
            </button>
            <button className="px-6 py-3">Friends</button>
          </nav>

          {/* Posts */}
          <section className="px-4 pt-4 pb-8 space-y-6">
            {/* Post 1 */}
           <article className="relative bg-white rounded-lg border border-gray-100  overflow-hidden">
  {/* Header */}
  <header className="px-4 pt-4 pb-2 flex items-center space-x-3">
  <img
    src={profilepage} // replace with your actual profile image variable or URL
    alt="Profile"
    className="w-8 h-8 rounded-full object-cover"
  />
  <div>
    <h3 className="text-xs font-semibold text-gray-800">Bernard Ward</h3>
    <p className="text-xs text-gray-400">Minnesota, US</p>
  </div>
</header>


  {/* Post Image */}
  <img
    src={postImage}
    alt="Post 1"
    className="w-[96%] object-cover ms-5 rounded-sm"
    style={{ height: "200px" }}
  />

  {/* Footer */}
  <footer className="relative px-4 pt-2 pb-10 text-xs text-gray-400">
    <div>
      <p className="mb-1">
        <span className="font-semibold text-gray-800">Joshua_l</span><br />
        For God so love the world and he gave us his only begotten son.
      </p>
     <div className="flex space-x-4">
  <div className="flex items-center space-x-1">
    <i className="far fa-heart text-base"></i>
    <span>300</span>
  </div>
  <div className="flex items-center space-x-1">
    <i className="far fa-comment text-base"></i>
    <span>20</span>
  </div>
</div>

      </div>
        {/* Bottom-right stacked time and comment icon */}
    <div className="absolute bottom-9 right-4 flex flex-col items-end space-y-1 text-xs text-gray-400">
      <time>3m ago</time>
      <button aria-label="More options">
        <i className="far fa-share-square"></i>

      </button>
    </div>
  </footer>
</article>


            {/* Post 2 */}
<article className="rounded-lg border border-gray-100 overflow-hidden bg-white shadow-sm">
  {/* Header */}
  <header className="flex items-center px-4 pt-4 pb-2 space-x-3">
    <img
      src={profilepage}
      alt="Profile"
      className="w-8 h-8 rounded-full object-cover"
    />
    <div>
      <h3 className="text-xs font-semibold text-gray-800">Bernard Ward</h3>
      <p className="text-xs text-gray-400">Minnesota, US</p>
    </div>
  </header>

  {/* Post Image */}
  <img
    src={postImage}
    alt="Post"
    className="w-full rounded-sm object-cover"
    style={{ height: "200px" }}
  />

  {/* Footer */}
  <footer className="relative px-4 pt-2 pb-10 text-xs text-gray-400">
    <div>
      <p className="mb-1">
        <span className="font-semibold text-gray-800">Joshua_l</span><br />
        For God so love the world and he gave us his only begotten son.
      </p>

      <div className="flex space-x-4">
        <div className="flex items-center space-x-1">
          <i className="far fa-heart text-base"></i>
          <span>300</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="far fa-comment text-base"></i>
          <span>20</span>
        </div>
      </div>
    </div>

    {/* Bottom-right stacked time and share icon */}
    <div className="absolute bottom-3 right-4 flex flex-col items-end space-y-1 text-xs text-gray-400">
      <time>3m ago</time>
      <button aria-label="Share">
        <i className="far fa-share-square"></i>
      </button>
    </div>
  </footer>
</article>


          </section>
        </div>
      </main>
    </div>
  );
}

export default Editprofile;
