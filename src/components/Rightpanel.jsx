import React from "react";
export default function RightPanel() {
  return (
    <div>
      <aside className="bg-white rounded-lg shadow-sm p-4 hidden md:block space-y-6">
        <div>
          <h2 className="font-bold mb-3">LinkedIn News</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="hover:underline cursor-pointer">
              OpenAI to launch first India office <br />
              <span className="text-xs text-gray-500">
                5h ago • 73,939 readers
              </span>
            </li>
            <li className="hover:underline cursor-pointer">
              Mahindra Susten appoints new chief <br />
              <span className="text-xs text-gray-500">
                16m ago • 9,704 readers
              </span>
            </li>
            <li className="hover:underline cursor-pointer">
              AI-focused upskilling surges <br />
              <span className="text-xs text-gray-500">
                5h ago • 3,695 readers
              </span>
            </li>
            <li className="hover:underline cursor-pointer">
              India’s next semiconductor leap <br />
              <span className="text-xs text-gray-500">
                5h ago • 6,464 readers
              </span>
            </li>
            <li className="hover:underline cursor-pointer">
              Benefits or pay — what matters more? <br />
              <span className="text-xs text-gray-500">
                5h ago • 5,960 readers
              </span>
            </li>
          </ul>
          <p className="text-xs text-blue-600 mt-2 cursor-pointer hover:underline">
            Show more
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Jobs for you</h2>
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="hover:bg-gray-50 p-2 rounded cursor-pointer">
              <p className="font-medium">Frontend Developer (ReactJS)</p>
              <p className="text-xs text-gray-500">Google • Bengaluru, India</p>
            </li>
            <li className="hover:bg-gray-50 p-2 rounded cursor-pointer">
              <p className="font-medium">AI/ML Engineer</p>
              <p className="text-xs text-gray-500">OpenAI • Remote</p>
            </li>
            <li className="hover:bg-gray-50 p-2 rounded cursor-pointer">
              <p className="font-medium">Next.js Full Stack Developer</p>
              <p className="text-xs text-gray-500">
                Microsoft • Hyderabad, India
              </p>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="bg-white rounded-lg mt-3 shadow-sm p-4 hidden md:block space-y-6">
        <div>
          <h2 className="font-bold mb-3">Today’s puzzles</h2>
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="cursor-pointer">
              <img
                src="https://dummyimage.com/250x100/cccccc/000000&text=Mini+Sudoku"
                alt="Mini Sudoku"
                className="rounded-md"
              />
              <p className="text-xs text-gray-500 mt-1">
                Crafted by the originators of “Sudoku” and the 3x World Sudoku
                Champion
              </p>
            </li>
            <li className="cursor-pointer">
              <img
                src="https://dummyimage.com/250x100/cccccc/000000&text=Zip+Puzzle"
                alt="Zip Puzzle"
                className="rounded-md"
              />
              <p className="text-xs text-gray-500 mt-1">
                Solve in 60s or less!
              </p>
            </li>
          </ul>
        </div>

        {/* Trending Topics */}
        <div>
          <h2 className="font-bold mb-3">Trending Topics</h2>
          <ul className="text-sm text-blue-700 space-y-2">
            <li className="hover:underline cursor-pointer">#ReactJS</li>
            <li className="hover:underline cursor-pointer">#WebDevelopment</li>
            <li className="hover:underline cursor-pointer">#AI</li>
            <li className="hover:underline cursor-pointer">#NextJS</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
