import React from "react";
import "../styles/movie-list.css";
import MovieCard from "./MovieCard";

function MovieList({ movieList }) {
  return (
    <div className="movie-list">
      {movieList.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
