import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import React from "react";

export default function PostCard({ post }) {
  const [reactions, setReactions] = useState(post.reactions);
  const [comments, setComments] = useState(post.comments);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [showReactionPicker, setShowReactionPicker] = useState(false);

  const handleReaction = (type) => {
    setReactions({ ...reactions, [type]: reactions[type] + 1 });
    setShowReactionPicker(false);
  };

  const addComment = () => {
    if (!newComment) return;
    setComments([
      ...comments,
      { id: Date.now(), user: "You", text: newComment },
    ]);
    setNewComment("");
  };

  // All available reactions
  const reactionOptions = [
    { type: "like", emoji: "👍" },
    { type: "support", emoji: "🫂" },
    { type: "celebrate", emoji: "🎊" },
    { type: "laugh", emoji: "🤣" },
  ];

  // Calculate total reactions
  const totalReactions = Object.values(reactions).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 relative">
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

      {/* Reaction summary */}
      <div className="text-sm text-gray-600 flex items-center gap-1 mb-2">
        <div className="flex items-center">
          {Object.entries(reactions)
            .filter(([_, count]) => count > 0)
            .map(([type, count]) => {
              const emoji = reactionOptions.find((r) => r.type === type)?.emoji;
              return (
                <span key={type} className="flex items-center gap-1">
                  {emoji}
                </span>
              );
            })}
        </div>
        {totalReactions > 0 && (
          <span className="text-gray-500">{totalReactions} reactions</span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex justify-around text-gray-600 text-sm border-t pt-2 mt-2">
        <div className="relative">
          <button
            onClick={() => setShowReactionPicker(!showReactionPicker)}
            className="hover:text-blue-600 flex items-center gap-1"
          >
            <AiOutlineLike />
            Like
          </button>

          {/* Reaction Picker Popup */}
          {showReactionPicker && (
            <div className="absolute -top-16 left-0 bg-white border rounded-lg shadow-md p-2 flex gap-3 z-50">
              {reactionOptions.map((r) => (
                <button
                  key={r.type}
                  onClick={() => handleReaction(r.type)}
                  className="hover:scale-125 transition text-xl"
                >
                  {r.emoji}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => setShowComments(!showComments)}
          className="hover:text-blue-600 flex items-center gap-1"
        >
          <FaRegCommentDots /> Comments
        </button>
        <button
          onClick={() => alert("Post reposted!")}
          className="hover:text-blue-600 flex items-center gap-1"
        >
          <BiRepost /> Repost
        </button>
        <button
          onClick={() => alert("Post shared!")}
          className="hover:text-blue-600 flex items-center gap-1"
        >
          <IoIosSend /> Send
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
