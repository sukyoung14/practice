import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
export default function Container() {
  const [posts, setPosts] = useState([]); // 상품 목록 상태
  const [skip, setSkip] = useState(0); // 상품 시작 인덱스 상태
  const [skipend, setSkipend] = useState(0); // 상품 시작 인덱스 상태
  const limit = 5; // 한 페이지에 표시할 상품 수
  const BASE_URL = "https://dummyjson.com";

  useEffect(() => {
    fetchPosts(skip);
  }, [skip]);
  async function fetchPosts(skip) {
    const url = `${BASE_URL}/posts?limit=${limit}&skip=${skip}&select=title,reactions,userId`;
    const response = await axios.get(url);
    setPosts(response["data"]["posts"]);
    setSkip(response["data"]["skip"]);
    setSkipend(response["data"]["total"] - limit);
  }
  function handleClick(skip) {
    console.log(`skip${skip}`);
    console.log(`limit${limit}`);
    console.log(`skipend${skipend}`);
    // if (skip - limit >= 0) {
    //   alert("이전 페이지가 없습니다.");
    // } else if (skip - limit <= skipend) {
    //   alert("마지막 페이지가 없습니다.");
    // } else {
    //   setSkip(skip);
    // }
    setSkip(skip);
    //fetchPosts(skip);
  }
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          onClick={(e) => {
            handleClick("0");
          }}
        >
          처음으로
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={(e) => {
            handleClick(skip - limit);
          }}
        >
          이전
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={(e) => {
            handleClick(skip + limit);
          }}
        >
          다음
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          onClick={(e) => {
            handleClick(skipend);
          }}
        >
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
