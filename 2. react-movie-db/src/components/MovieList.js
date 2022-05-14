import React from "react";
import "../styles/movie-list.css";
import MovieCard from "./MovieCard";

function MovieList({ movieList, isloading }) {
  if (isloading) {
    return <h1>Loading Movies please wait...</h1>;
  } else {
    return (
      <div className="movie-list">
        {movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
