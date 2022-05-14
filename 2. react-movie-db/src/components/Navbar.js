import React from "react";
import "../styles/navbar.css";

function Navbar({ setInputValue, inputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">MOVIE DB</span>
      <input
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Search....."
        className="search-bar"
      />
    </div>
  );
}

export default Navbar;
