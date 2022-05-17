import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import axios from "axios";
import {
  BrowserRouter as Router, // BrowserRouter as Router -> It is just for renaming
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";

const API_BASE_URL = "https://www.omdbapi.com";
const apikey = "aa660442";

function App() {
  const [isloading, setIsloading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  console.log(response);

  const search = async (e) => {
    if (e.code === "Enter") {
      setIsloading(true);
      console.log(inputValue, "<- this is our search term");
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=" + apikey
      );
      console.log(response.data, "<- this is our response from api");
      setMovies(response.data.Search);
      setResponse(response.data.Response);
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
      <Router>
        <Routes>
          <Route
            path="/movie-list"
            element={
              <Movie
                isloading={isloading}
                response={response}
                movies={movies}
              />
            }
          />
          <Route
            path="/movie-list/:imdbID" // to make dynamic route in react route we use `:`
            element={<MovieDetails />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
