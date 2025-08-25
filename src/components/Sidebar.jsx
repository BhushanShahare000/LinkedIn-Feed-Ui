import React from "react";
import { TiGroup } from "react-icons/ti";
import { FaNewspaper } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";

import { IoMdSave } from "react-icons/io";
export default function Sidebar() {
  return (
    <div>
      <aside className="bg-white sticky rounded-lg shadow-sm  p-4">
        <div className="flex flex-col items-center mt-10">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="avatar"
            className="w-20 h-20 rounded-full border-2 border-white -mt-10 shadow"
          />
          <h2 className="mt-2 font-semibold text-lg">Bhushan Shahare</h2>
          <p className="text-sm font-medium text-gray-500">
            SWE @Techsnap Web Developer
          </p>
          <p className="text-sm text-gray-500 font-light">
            Nagpur , Maharastra
          </p>
        </div>
      </aside>
      <aside className="bg-white sticky mt-4 rounded-lg shadow-sm  p-4">
        <div className="flex flex-col  ">
          <p className="text-sm flex justify-between text-gray-600 mb-1">
            <span className="font-semibold">Profile Viewer </span>
            <b className="text-blue-400">120</b>
          </p>
          <p className=" flex justify-between text-gray-600">
            <span className="text-sm font-semibold"> Post Connection </span>
            <b className="text-blue-400">167</b>
          </p>
        </div>
      </aside>
      <aside className="bg-white hidden md:block sticky mt-4 rounded-lg shadow-sm  p-4">
        <div className="flex flex-col text-sm gap-3 justify-between text-gray-600 ">
          <span className="font-semibold flex items-center gap-2 ">
            <IoMdSave className=" " />
            <p className="hover:underline cursor-pointer">Saved Items</p>
          </span>
          <span className="font-semibold flex items-center gap-2 ">
            <TiGroup className="" />
            <p className="hover:underline cursor-pointer"> Groups</p>
          </span>
          <span className="font-semibold flex items-center gap-2 ">
            <FaNewspaper className="  " />
            <p className="hover:underline cursor-pointer"> Articles</p>
          </span>
          <span className="font-semibold flex text-base items-center gap-2 ">
            <MdEventNote className="" />
            <p className="hover:underline cursor-pointer"> Events</p>
          </span>
        </div>
      </aside>
    </div>
  );
}
