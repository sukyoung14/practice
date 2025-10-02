import React from "react";

export default function Comment({ comment }) {
  return (
    <div>
      <div className="border p-4 m-5">
        <p className="text-gray-600 mb-3">{comment.body}</p>
        <div className=" gap-4 text-sm text-gray-500">
          <p>{comment.user.username}</p>
          <p>{comment.likes}</p>
        </div>
      </div>
    </div>
  );
}
