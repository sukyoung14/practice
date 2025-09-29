import React from "react";

export default function UserCard() {
  const userData = {
    name: "김철수",
    age: 28,
    email: "kimcs@example.com",
    profileImage: "https://picsum.photos/id/237/200/300",
  };
  return (
    <>
      <div class="w-80 bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-6">
          <div class="flex justify-center mb-4">
            <img
              class="w-24 h-24 rounded-full object-cover"
              src="https://picsum.photos/id/237/200/300"
              alt="사용자 프로필"
            />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-900 mb-2">김철수</h2>
            <p class="text-gray-600 mb-1">28세</p>
            <p class="text-blue-600 font-medium">kimcs@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
