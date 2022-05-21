import React, { useReducer } from "react";

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 20;

/**
 * useReducer => It is a hook just like useState.
 *               const [state, dispatch] = useReducer(reducer, initialState)
 *
 * what is dispatch?
 * => dispatch is nothing but a eventlistener. It act like a event firing fuction.
 * -> eventlistener is a function that gets called when the event happens.
 *
 * reducer -> reduces something. But what?
 * one is your state and the other is the action -> reducer -> new state.
 *
 * action -> which event has been fired.
 */

const reducer = (state, action) => {
  // action should be an object => {type: , payload: {json.data}}
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const UseReducer = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });
  // dispatch -> is a function which says fire this event
  // action -> catches the dispaches we made
  // dispatch function returns to us from the useReducer.

  return (
    <div>
      <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}>useReducer Example</h1>
      <div>
        <span>r</span>
        <button onClick={() => dispatch({ type: "INCREMENT_R" })}>+</button>
        {/*
          type always be unique
          The type is -> the type of action.
        */}
        <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
      </div>
      <div>
        <span>g</span>
        <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
      </div>
      <div>
        <span>b</span>
        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
      </div>
    </div>
  );
};

export default UseReducer;
