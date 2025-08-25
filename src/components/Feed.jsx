import { useState } from "react";
import PostCard from "./PostCard";
import PostBox from "./PostBox";
import React from "react";

const initialPosts = [
  {
    id: 1,
    user: { name: "Jane Doe", avatar: "https://i.pravatar.cc/100?img=7" },
    content: "Learning GraphQL is so much fun 😍",
    image: "",
    reactions: { like: 5, support: 0, celebrate: 2, laugh: 3 },
    comments: [{ id: 1, user: "Mark", text: "True that! 🔥" }],
    time: "5h ago",
  },
  {
    id: 2,
    user: {
      name: "Bhushan Shahare",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    content: "Excited to share my new React project 🚀",
    image: "https://placekitten.com/600/300",
    reactions: { like: 2, support: 1, celebrate: 1, laugh: 0 },
    comments: [
      { id: 1, user: "John", text: "Awesome work! 🔥" },
      { id: 2, user: "Sarah", text: "Congrats 👏" },
    ],
    time: "2h ago",
  },
];

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <section>
      <PostBox onPost={handleNewPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
