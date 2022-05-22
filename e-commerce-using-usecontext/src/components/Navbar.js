import React, { useContext } from "react";
import { store } from "../App";

// you have to use create context using createContext => returns an object
// createContext returns an object with 2 properties
// 1. Provider => provides the state to the app
// 2. Consumer => consumes the state from the app
// we would be using returned context.provider to warp out app with it
// so that children have the access to the value without prop driling

const Navbar = ({ items }) => {
  const [state, setState] = useContext(store);
  const { activeCategory } = state;

  return (
    <div className="navbar">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setState({ ...state, activeCategory: item.name })}
            // make a new object -> spread the state(...state) -> over-right the activeCategory property
            className={`navbar-item ${
              activeCategory === item.name ? "is-selected" : " "
            }`}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
