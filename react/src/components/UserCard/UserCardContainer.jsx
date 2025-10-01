import React from "react";
import UserCard from "./UserCard";

export default function () {
  const userData = {
    name: "김철수",
    age: 28,
    email: "kimcs@example.com",
    profileImage: `https://picsum.photos/id/237/200/300`,
  };

  const userData2 = {
    name: "이영희",
    age: 25,
    email: "leeyh@example.com",
    profileImage: `https://picsum.photos/id/238/200/300`,
  };

  const userData3 = {
    name: "홍길동",
    age: 30,
    email: "parkcs@example.com",
    profileImage: `https://picsum.photos/id/239/200/300`,
  };

  return (
    <div>
      <UserCard></UserCard>
      <UserCard></UserCard>
      <UserCard></UserCard>
    </div>
  );
}
