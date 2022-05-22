import React, { useContext } from "react";
import { pets } from "../data";
import { store } from "../App";
import AddRemoveButton from "./AddRemoveButton";

const CardGrid = () => {
  const [state] = useContext(store);
  const { activeCategory } = state;
  // cartItems would consist of the cards on which + was clciked
  // if already have that item then  + 1
  // the cart items does not have that card and you guys have to add that card

  // why ? ...state?
  // {
  // activeCaregory: "cats"
  // quantity: 2}

  var filteredPets = null;
  if (activeCategory === "all") {
    filteredPets = pets;
  } else {
    filteredPets = pets.filter((pet) => pet.category === activeCategory);
  }

  return (
    <div className="products">
      {filteredPets.map((item) => {
        return (
          <div key={item.id} className="product-item">
            <img alt={item.name} src={item.poster} />
            <div className="product-detail">
              <div className="product-title">{item.name}</div>
              <div className="product-purchase">
                <span>₹{item.price}</span>
                <AddRemoveButton item={item} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
