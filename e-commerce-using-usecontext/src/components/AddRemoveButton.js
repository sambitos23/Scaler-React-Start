import React, { useContext } from "react";
import { store } from "../App";

function AddRemoveButton({ item }) {
  const [state, setState] = useContext(store);
  const { cartItems, totalPrice } = state;
  const itemInCart = cartItems[item.id];
  // for a particular card I want to maintain the state as to how many pets are there

  // cartItems {
  //   cards on which you have clicked plus
  // making a quantitiy key in the object of pets[slectedcardindex]
  // }

  // const x = [a,d,v]
  //  const y = [...x, jj]
  // ...state -> we are using spread operator ->
  // Object.assign({}, objname, {ver})

  function addItem(item) {
    if (cartItems[item.id]) {
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...cartItems[item.id],
            quantity: cartItems[item.id].quantity + 1,
          },
        },
        totalPrice: totalPrice + item.price,
      });
    } else {
      // seting a new state -> you want the previous state's snapshot also so that you dont lose on the previously updated state of some keys
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...item,
            quantity: 1,
          },
        },
        totalPrice: totalPrice + item.price,
      });
    }
  }

  function removeItem(item) {
    if (cartItems[item.id].quantity === 1) {
      const { [item.id]: value, ...newCartItems } = cartItems;
      setState({
        ...state,
        cartItems: newCartItems,
        totalPrice: totalPrice - item.price,
      });
    } else {
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...cartItems[item.id],
            quantity: cartItems[item.id].quantity - 1,
          },
        },
        totalPrice: totalPrice - item.price,
      });
    }
  }

  if (itemInCart) {
    return (
      <div className="button-group">
        <button className="button" onClick={() => removeItem(item)}>
          -
        </button>
        <div className="button-label">{itemInCart.quantity}</div>
        <button className="button" onClick={() => addItem(item)}>
          +
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => addItem(item)} className="button">
      Add to Cart
    </button>
  );
}

export default AddRemoveButton;
