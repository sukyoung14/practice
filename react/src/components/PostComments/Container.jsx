import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Comment from "./Comment";
export default function Container() {
  const [posts, setPosts] = useState([]); // 상품 목록 상태
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [id, setId] = useState(1);
  const BASE_URL = "https://dummyjson.com";

  useEffect(() => {
    fetchPosts(id);
    fetchComments(id);
  }, []);
  async function fetchPosts(id) {
    const url = `${BASE_URL}/posts/${id}`;
    const response = await axios.get(url);
    setPosts(response["data"]);
    //console.log(response["data"]);
    // setSkip(response["data"]["skip"]);
    // setSkipend(response["data"]["total"] - limit);
  }
  async function fetchComments(id) {
    const url = `${BASE_URL}/comments/post/${id}`;
    //console.log(url);
    const response = await axios.get(url);
    setComments(response["data"]["comments"]);
    console.log(response["data"]["comments"]);
  }
  function handleClick() {
    fetchPosts(id);
    fetchComments(id);
  }
  function handleChange(e) {
    setId(e.target.value);
  }
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <p>글번호</p>
        <input
          type="text"
          className="border-2"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          검색
        </button>
      </div>
      <div className="space-y-4">
        <Post key={posts.id} post={posts} />
      </div>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
