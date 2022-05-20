import React, { useEffect, useRef, useState } from "react";
// import { render } from "react-dom";

// useRef: It is just like a useState only difference it carries that in every render if doesnot
//         change any state but it pursist, during the re-reder.
//      => It is used to store the value of the component and it is not affected by the re-render.
//      => It returns a same object there is no change in the object's ref and hence no rerender
//         on call useRef.

const UseRef = () => {
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   console.log(value);
  //   setValue(value);
  // });

  const renderVal = useRef(0);
  // an object => {renderVal: 0} => ref remains same on every render
  useEffect(() => {
    renderVal.current++;
  });
  // didMount -> what happens after I gets mounted

  const inputRef = useRef();
  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = "I have been entered"; // ref doesnot update the state
  };
  // refs are also use to access DOM element
  // if you pass a ref object, to a react element it will see .current to the co-responponding DOM
  // document query selector

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="input here"
      />
      <br />I have been rendered for {renderVal.current}
      <br />
      <button onClick={focus}>Focus</button>
      <br />
      The value that got entered is {value}
    </div>
  );
};

export default UseRef;
