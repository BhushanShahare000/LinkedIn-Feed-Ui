import { useState } from "react";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
export default function PostCard({ post }) {
  const [reactions, setReactions] = useState(post.reactions);
  const [comments, setComments] = useState(post.comments);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleReaction = (type) => {
    setReactions({ ...reactions, [type]: reactions[type] + 1 });
  };

  const addComment = () => {
    if (!newComment) return;
    setComments([
      ...comments,
      { id: Date.now(), user: "You", text: newComment },
    ]);
    setNewComment("");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
      {/* User Info */}
      <div className="flex items-center gap-2 mb-3">
        <img src={post.user.avatar} alt="" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{post.user.name}</p>
          <span className="text-gray-500 text-sm">{post.time}</span>
        </div>
      </div>

      {/* Post Content */}
      <p className="mb-2 text-gray-800">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="" className="rounded-lg w-full mb-2" />
      )}

      {/* Reactions */}
      <div className="flex justify-between text-gray-600 text-sm border-t pt-2 mt-2">
        <button
          onClick={() => handleReaction("like")}
          className="hover:text-blue-600"
        >
          👍 {reactions.like}
        </button>
        <button
          onClick={() => handleReaction("support")}
          className="hover:text-blue-600"
        >
          🫂 {reactions.support}
        </button>
        <button
          onClick={() => handleReaction("celebrate")}
          className="hover:text-blue-600"
        >
          🎊 {reactions.celebrate}
        </button>
        <button
          onClick={() => handleReaction("laugh")}
          className="hover:text-blue-600"
        >
          🤣 {reactions.laugh}
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="hover:text-blue-600"
        >
          💬 {comments.length}
        </button>
        <button
          onClick={() => alert("Post shared!")}
          className="hover:text-blue-600"
        >
          🔗 Share
        </button>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="mt-3">
          {comments.map((c) => (
            <p key={c.id} className="text-sm mb-1">
              <b>{c.user}:</b> {c.text}
            </p>
          ))}
          <div className="flex gap-2 mt-2">
            <input
              className="flex-1 border rounded-full px-3 py-1 text-sm"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            />
            <button
              onClick={addComment}
              className="bg-blue-600 text-white px-3 rounded-full text-sm"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
