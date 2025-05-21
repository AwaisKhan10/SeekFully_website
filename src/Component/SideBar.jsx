import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMessage } from "react-icons/md";
import { LiaBibleSolid } from "react-icons/lia";
import { PiNotebookBold } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import color from "../assets/color.png";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);

  /* helper to keep the “active OR hover” background logic DRY */
  const tileBg = (active) =>
    `${
      active
        ? "bg-red-300/70 dark:bg-red-800/60"
        : "hover:bg-red-300/40 dark:hover:bg-red-800/40"
    }`;

  return (
    <>
      {/* ── Hamburger (mobile) ─────────────────────────── */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-50 text-red-600 dark:text-red-400"
      >
        <GiHamburgerMenu className="text-3xl" />
      </button>

      {/* ── Sidebar ───────────────────────────────────── */}
      <aside
        className={`
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          transition-transform duration-300 ease-in-out
          w-20 sm:w-24 md:w-28 lg:w-36
          h-screen 
          flex flex-col items-center py-16 overflow-y-auto scrollbar-hide
        
        `}
      >
        {/* Create button */}
        <Link to="/tool" onClick={() => setIsOpen(false)}>
          <div className="flex flex-col items-center mb-4">
            <div className="bg-red-600 dark:bg-red-500 size-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
              +
            </div>
            <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 uppercase pt-1">
              Create
            </span>
          </div>
        </Link>

        {/* Menu tiles */}
        <ul className="flex flex-col gap-y-4 text-center w-full items-center">
          {/* Verse Mapping */}
          <NavTile
            to="/"
            isActive={isActive("/")}
            icon={<img src={color} alt="color" className="w-8 h-8" />}
            label="VM"
            tileBg={tileBg}
            close={() => setIsOpen(false)}
          />

          {/* Community */}
          <NavTile
            to="/Comunity"
            isActive={isActive("/Comunity")}
            icon={<MdOutlineMessage className="text-4xl" />}
            label="Community"
            tileBg={tileBg}
            close={() => setIsOpen(false)}
          />

          {/* Bible */}
          <NavTile
            to="/bible"
            isActive={isActive("/bible")}
            icon={<LiaBibleSolid className="text-[45px]" />}
            label="Bible"
            tileBg={tileBg}
            close={() => setIsOpen(false)}
          />

          {/* Study */}
          <NavTile
            to="/study-interlinear"
            isActive={isActive("/study-interlinear")}
            icon={<PiNotebookBold className="text-4xl" />}
            label="Study"
            tileBg={tileBg}
            close={() => setIsOpen(false)}
          />

          {/* Seeker AI */}
          <NavTile
            to="/seeker-ai"
            isActive={isActive("/seeker-ai")}
            icon={<span className="text-3xl font-semibold">AI</span>}
            label="Seeker AI"
            tileBg={tileBg}
            close={() => setIsOpen(false)}
          />

          {/* More / profile */}
          <NavTile
            to="/profile"
            isActive={isActive("/profile")}
            icon={<GrAppsRounded className="text-4xl" />}
            label="More"
            tileBg={tileBg}
            close={() => setIsOpen(false)}
          />
        </ul>
      </aside>
    </>
  );
};

/* ------------------------------------------------------------- */
/* ↳  A small helper component to avoid repetition               */
function NavTile({ to, isActive, icon, label, tileBg, close }) {
  return (
    <Link to={to} onClick={close}>
      <li className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
        <div
          className={`${tileBg(
            isActive
          )} p-2 rounded-lg text-gray-700 dark:text-gray-200`}
        >
          {icon}
        </div>
        <span className="text-[10px] mt-1 font-medium uppercase text-gray-700 dark:text-gray-300">
          {label}
        </span>
      </li>
    </Link>
  );
}

export default Sidebar;
