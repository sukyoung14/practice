import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function PostDetail() {
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(postId);
    async function getPosts() {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      console.log(response.data);

      setPosts(response.data);
    }
    getPosts();
  }, [postId]);
  return (
    <div>
      <div>
        제목 - {posts.title}
        <br />
        내용 - {posts.body}
      </div>
    </div>
  );
}
