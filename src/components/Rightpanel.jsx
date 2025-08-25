import React from "react";
export default function RightPanel() {
  return (
    <aside className="bg-white rounded-lg shadow-sm border p-4 hidden md:block">
      <h2 className="font-bold mb-3">Trending Topics</h2>
      <ul className="text-sm text-blue-700 space-y-2">
        <li className="hover:underline cursor-pointer">#ReactJS</li>
        <li className="hover:underline cursor-pointer">#WebDevelopment</li>
        <li className="hover:underline cursor-pointer">#AI</li>
        <li className="hover:underline cursor-pointer">#NextJS</li>
      </ul>
    </aside>
  );
}
