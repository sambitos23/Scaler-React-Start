import { useState } from "react";
import "./App.css";
import { Navbar, MovieList } from "./components";
import axios from "axios";

const API_BASE_URL = "https://www.omdbapi.com";
const apikey = "aa660442";

function App() {
  const [isloading, setIsloading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const search = async (e) => {
    if (e.code === "Enter") {
      setIsloading(true);
      console.log(inputValue, "<- this is our search term");
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=" + apikey
      );
      console.log(response.data, "<- this is our response from api");
      setMovies(response.data.Search);
      setIsloading(false);
    }
  };
  return (
    <div className="App">
      <Navbar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <MovieList movieList={movies} isloading={isloading} />
    </div>
  );
}

export default App;
