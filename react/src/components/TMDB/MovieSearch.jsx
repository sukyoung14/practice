import { useState } from "react";
import axios from "axios";
import Movie from "./Movie";
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
const BASE_URL = `https://api.themoviedb.org/3`;

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  async function fetchData(event) {
    event.preventDefault();

    const config = {
      method: "GET",
      url: `${BASE_URL}/search/movie`,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "ko-KR",
        query: query,
      },
    };

    const res = await axios(config);

    setMovies(res["data"]["results"]);
  }

  function handleChange(event) {
    setQuery(event["target"]["value"]);
  }

  return (
    <div>
      <h1>영화 검색</h1>
      <form onSubmit={fetchData}>
        <input
          className="border"
          type="text"
          placeholder="영화 검색"
          value={query}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <button
          type="submit"
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
        >
          검색
        </button>
      </form>

      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie}></Movie>
        ))}
      </ul>
    </div>
  );
}
