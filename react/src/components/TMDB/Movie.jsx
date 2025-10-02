import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <div className="border p-4">
        <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-600 mb-3">{movie.overview}</p>
        <p className="text-gray-600 mb-3">개봉일 : {movie.release_date}</p>
        <p className="text-gray-600 mb-3">
          영화 평균 평점 : {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
