import React from "react";
import "../styles/movie-card.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
      <p>Year: {movie.Year}</p>
    </div>
  );
}

export default MovieCard;
