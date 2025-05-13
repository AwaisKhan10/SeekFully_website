import React from 'react';
// import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CreateAccount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="font-[Comfortaa] text-4xl mb-4">SeekFully</h1>
        {/* <img src={logo} alt="SeekFully logo" className="mx-auto mb-6 w-32" /> */}
        <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

        <button className="flex items-center justify-center w-full border rounded-md py-2 mb-4 hover:shadow">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
          <span className="text-sm">Create account with Google</span>
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-sm text-gray-400">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <form className="space-y-4 text-left">
          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Create your password"
                className="w-full border rounded-md p-2 mt-1 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                👁️
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full mt-2 hover:bg-red-700"
          >
            Create an account
          </button>
        </form>

        <p className="text-sm mt-4">
          Already have an account?{' '}
       <Link to="/login"> <a href="#" className="text-red-600 hover:underline">
            Login
          </a>
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
