import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightPanel from "./components/RightPanel";

export default function App() {
  return (
    <div className="bg-[#F4F2EE] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <Sidebar />
        <div className="md:col-span-2">
          <Feed />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
