// import React, { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/movie-card.css";

function MovieCard({ movie }) {
  // const [borderRadius, setBorderRadius] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setBorderRadius(borderRadius + 1);
  //   }, 1000);
  // }, [borderRadius]);  // this is for animation

  return (
    <Link to={`/movie-list/${movie.imdbID}`}>
      {/* if we use a tag we have to rerender the page but using Link it will just update the page content*/}
      <div
        // style={{ borderRadius: borderRadius }} // style content dynamically
        className="movie-card"
      >
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Title}</p>
        <p>Year: {movie.Year}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
