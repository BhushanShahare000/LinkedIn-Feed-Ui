import { useState } from "react";
import React from "react";
export default function PostBox({ onPost }) {
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text) return;
    onPost({
      id: Date.now(),
      user: { name: "You", avatar: "https://i.pravatar.cc/100?img=12" },
      content: text,
      image: "",
      reactions: { like: 0, support: 0, celebrate: 0, laugh: 0 },
      comments: [],
      time: "Just now",
    });
    setText("");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm  p-4 mb-4">
      <div className="flex gap-2">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Start a post..."
          className="flex-1 border rounded-full px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex justify-between mt-3 text-gray-600 text-sm">
        <button className="hover:text-blue-600">📷 Photo</button>
        <button className="hover:text-blue-600">🎥 Video</button>
        <button className="hover:text-blue-600">📄 Document</button>
        <button
          onClick={handlePost}
          className="text-blue-600 font-semibold hover:underline"
        >
          Post
        </button>
      </div>
    </div>
  );
}
