import React from "react";
import { useState, useEffect } from "react";
import PostsList from "../../components/PostsList";
import ProductsList from "../../components/ProductsList";
import { useSearchParams } from "react-router-dom";
export default function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값을 지정
    const sortBy = searchParams.get("sortBy") ?? "id";
  }, [searchParams]);
  return (
    <div>
      <div>
        <div className="flex gap-2"></div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setSearchParams({ sortBy: "title", order: "asc" });
            }}
            className="border-2 p-2 cursor-pointer"
          >
            게시글 제목(title) 오름차순 오름차순
          </button>
          <button
            onClick={() => {
              setSearchParams({ sortBy: "title", order: "desc" });
            }}
            className="border-2 p-2 cursor-pointer"
          >
            게시글 제목(title) 오름차순 내림차순
          </button>
          <button
            onClick={() => {
              setSearchParams({ sortBy: "id", order: "asc" });
            }}
            className="border-2 p-2 cursor-pointer"
          >
            게시글 ID(id) 오름차순
          </button>
          <button
            onClick={() => {
              setSearchParams({ sortBy: "id", order: "desc" });
            }}
            className="border-2 p-2 cursor-pointer"
          >
            게시글 ID(id) 내림차순
          </button>
        </div>
      </div>
      <PostsList></PostsList>
    </div>
  );
}
