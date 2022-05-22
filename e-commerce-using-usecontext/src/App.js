import "./styles.scss";
import { CardGrid, CardPopup, Navbar } from "./components";
import { navbar } from "./data";
import { createContext, useState } from "react";

// context of store has been created
// we can use this provider or a consumer

// store is an object
// store.provider => providing the whole state to the app
export const store = createContext([
  { activeCategory: "dogs", cartItems: {}, totalPrice: 0 },
  (obj) => obj,
]);

function App() {
  // useState returns a array of values and updates function
  const state = useState({
    activeCategory: "all",
    cartItems: {},
    totalPrice: 0,
  });

  return (
    <store.Provider value={state}>
      <div className="app">
        <div className="app-header">
          <Navbar items={navbar} />
          <CardPopup />
        </div>
        <CardGrid />
      </div>
    </store.Provider>
  );
}

export default App;
