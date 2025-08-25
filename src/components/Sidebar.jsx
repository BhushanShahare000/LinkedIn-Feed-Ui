import React from "react";
export default function Sidebar() {
  return (
    <aside className="bg-white sticky rounded-lg shadow-sm border p-4">
      <div className="flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/100?img=10"
          alt="avatar"
          className="w-20 h-20 rounded-full border-2 border-white -mt-10 shadow"
        />
        <h2 className="mt-2 font-semibold text-lg">Bhushan Shahare</h2>
        <p className="text-sm text-gray-500">Web Developer</p>
      </div>
      <hr className="my-4" />
      <p className="text-sm text-gray-600 mb-1">
        Connections: <b>120</b>
      </p>
      <p className="text-sm text-gray-600">
        Profile views: <b>89</b>
      </p>
    </aside>
  );
}
