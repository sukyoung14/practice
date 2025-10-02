import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/EventHandling/Form";
import UserCardContainer from "./components/UserCard/UserCardContainer";
import Container from "./components/PostComments/Container";
import MovieSearch from "./components/TMDB/MovieSearch";
export default function App() {
  return (
    <div>
      <MovieSearch></MovieSearch>
    </div>
  );
}
