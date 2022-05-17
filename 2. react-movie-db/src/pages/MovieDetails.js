import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../styles/movie-details.css";

function MovieDetails() {
  const [isloading, setIsloading] = useState(true);
  const [movieDetails, setMovieDetails] = useState(null);
  // useParams : It is important to use this hook to get the params from the url
  //             and then use it in the component and it is import from react-router.
  const { imdbID } = useParams();
  console.log(imdbID, "<- this is our imdbID");

  const fetchMovieDetails = async () => {
    setIsloading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=aa660442`
    );
    // we use `` to make the string to be dynamic like ${imdbID}
    console.log(response.data, "<- this is our response from api");
    setMovieDetails(response.data);
    setIsloading(false);
  };

  useEffect(() => {
    // I can not use async because effect callback synchronus in useEffect
    fetchMovieDetails();
  }, [imdbID]);

  if (isloading) {
    return <h1>Loading Movie Details please wait...</h1>;
  } else if (movieDetails) {
    return (
      <div className="movie-details">
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <h1>{movieDetails.Title}</h1>
        <p>Actors: {movieDetails.Actors}</p>
        <p>Awards: {movieDetails.Awards}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default MovieDetails;

/**
 * const obj = {imbDBID: "tt0111161", name: "The Shawshank Redemption"}
 * const imbDBID = obj["imbDBID"] // this is old way of doing it
 * const {imbDBID} = obj // this is new way of doing it
 */
