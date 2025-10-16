import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값을 지정
    const sortBy = searchParams.get("sortBy") ?? "id";
    const skip = searchParams.get("skip") ?? 0;
    async function getPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}&limit=5&skip=${skip}`
      );
      const data = response.data.posts;
      console.log(data);
      setPosts(data);
    }
    getPosts();
  }, [searchParams]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/dummy/postDetail/${post.id}`}>
              No.{post.id} - {post.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
