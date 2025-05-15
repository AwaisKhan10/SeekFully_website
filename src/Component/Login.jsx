import React, { useState } from "react";
import logo from "../assets/logo2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 font-montserrat">
      <div className="w-full max-w-md text-center ">
        <img
          src={logo}
          alt="SeekFully logo"
          className="mx-auto mb-16 w-[200px] h-[60px]"
        />
        <h2 className="text-3xl font-bold text-black mb-2">Login</h2>

        <button className="flex items-center justify-center w-[300px] h-[40px] border border-gray-300 rounded-md py-2 mb-4 hover:shadow-sm mx-auto">
          <span className="text-sm">Login with Google</span>
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 ms-2"
          />
        </button>

        <div className="flex items-center justify-center my-4">
          <div className="w-24 h-0.5 bg-gray-300" />
          <span className="mx-3 text-base text-gray-600">Or</span>
          <div className="w-24 h-0.5 bg-gray-300" />
        </div>

        <form className="space-y-4 text-left">
          <div>
            <label className="text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded-md p-2 mt-1 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border rounded-md p-2 mt-1 pr-10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <span
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-[340px] h-[44px] bg-red-700 text-white py-2 ms-14 rounded-full mt-2 hover:bg-red-700"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-red-700 font-bold  hover:underline"
          >
            Register
          </Link>
        </p>

        <div className="flex justify-center space-x-6 mt-4 text-gray-600 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
