import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Visa_card from "../assets/Visa_card.png";
import Sidebar from "./SideBar";

function GiftSeekfully() {
  const navigate = useNavigate();

  const [isRecurring, setIsRecurring] = useState(false);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 font-montserrat transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 text-gray-800 dark:text-gray-100">
        {/* Back Button and Heading */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-red-600 hover:text-red-700 transition mr-3 text-2xl flex items-center gap-3"
            aria-label="Go back"
          >
            <IoMdArrowRoundBack />
            <h2 className="text-2xl font-bold">Gift Seekfully</h2>
          </button>
        </div>

        {/* Amount Input */}
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Amount
        </label>
        <input
          type="number"
          placeholder="$0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* Recurring Toggle */}
        <div className="flex justify-between items-center p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg mb-6">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Recurring
          </span>
          <div
            onClick={() => setIsRecurring(!isRecurring)}
            className={`w-14 h-8 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 ${
              isRecurring ? "bg-red-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
                isRecurring ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Payment Methods */}
        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
          Payment Method
        </h3>
        {["Paypal", "Card"].map((method) => (
          <div
            key={method}
            className={`flex justify-between items-center border p-3 rounded-lg mb-2 cursor-pointer transition ${
              paymentMethod === method
                ? "border-red-500 bg-red-50 dark:bg-red-900/30"
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            }`}
            onClick={() => setPaymentMethod(method)}
          >
            <span className="text-gray-700 dark:text-gray-200">{method}</span>
            <input type="radio" checked={paymentMethod === method} readOnly />
          </div>
        ))}

        {/* Add New Payment Method */}
        <p
          className="text-center text-sm text-red-500 underline cursor-pointer mt-3 flex items-center justify-center gap-x-2"
          onClick={() => setShowModal(true)}
        >
          <FaPlusCircle /> Add New Payment Method
        </p>

        {/* Submit Button */}
        <div className="mt-10 text-center">
          <button className="bg-red-600 text-white px-10 py-3 rounded-full hover:bg-red-700 transition">
            Make Payment
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-[90%] max-w-lg text-gray-800 dark:text-gray-100">
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowModal(false)}
                className="text-red-600 font-bold text-lg mr-4"
              >
                <IoMdArrowRoundBack />
              </button>
              <h2 className="text-xl font-semibold text-center flex-1">
                Add Payment Method
              </h2>
            </div>

            {/* Card Preview Image */}
            <div className="relative w-full rounded-xl overflow-hidden mb-6">
              <img
                src={Visa_card}
                alt="Visa Card Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-6 left-6 text-white text-sm">
                <p className="opacity-70">CARD HOLDER</p>
                <p className="font-semibold">Eddy Cusuma</p>
              </div>
              <div className="absolute top-6 right-6 text-white text-sm text-right">
                <p className="opacity-70">VALID THRU</p>
                <p className="font-semibold">12/22</p>
              </div>
              <div className="absolute bottom-6 left-6 text-white text-lg tracking-widest font-semibold">
                3778 **** **** 1234
              </div>
            </div>

            {/* Card Form */}
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Card Number
            </label>
            <input
              type="number"
              placeholder="1234 **** **** ****"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="Enter CVV"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Expiry Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition">
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GiftSeekfully;
