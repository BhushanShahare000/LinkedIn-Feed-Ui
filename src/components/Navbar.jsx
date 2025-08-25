import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl text-center p-1 rounded w-10 font-bold text-white bg-[#0A66C2]">
            in
          </h1>
          <div className="relative hidden md:block w-full max-w-xs">
            {/* Search Icon */}
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

            {/* Input */}
            <input
              type="text"
              placeholder="Search"
              className="w-full border px-11 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-7  text-gray-600">
          <button className="flex flex-col items-center justify-center hover:text-black text-gray-600">
            <IoHomeSharp className="text-xl mb-1" />
            <p className="text-sm hidden md:block underline decoration-2 underline-offset-8">
              Home
            </p>
          </button>

          <button className="flex flex-col items-center justify-center hover:text-black text-gray-600">
            <IoPeople className="text-xl mb-1" />
            <p className="text-sm hidden md:block">My Network</p>
          </button>
          <button className="flex flex-col items-center justify-center hover:text-black text-gray-600">
            <IoIosBriefcase className="text-xl mb-1" />
            <p className="text-sm hidden md:block">Jobs</p>
          </button>
          <button className="flex flex-col items-center justify-center hover:text-black text-gray-600">
            <AiFillMessage className="text-xl mb-1" />
            <p className="text-sm hidden md:block">Messaging</p>
          </button>
          <button className="flex flex-col items-center justify-center hover:text-black text-gray-600">
            <FaBell className="text-xl mb-1" />
            <p className="text-sm hidden md:block">Notifications</p>
          </button>

          <button className="flex flex-col items-center justify-center hover:text-black text-gray-600">
            <GoPersonFill className="text-xl mb-1" />
            <p className="text-sm hidden md:block">Me</p>
          </button>
        </div>
      </div>
    </nav>
  );
}
