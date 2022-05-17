import React from "react";
import { MovieList } from "../components";

function Movie({ isloading, response, movies }) {
  return (
    <div>
      {isloading ? (
        <h1>Loading Movies please wait...</h1>
      ) : (
        <>
          {response === "False" ? (
            <h1>Sorry no movie found</h1>
          ) : (
            <MovieList movieList={movies} />
          )}
        </>
      )}
    </div>
  );
}

export default Movie;
