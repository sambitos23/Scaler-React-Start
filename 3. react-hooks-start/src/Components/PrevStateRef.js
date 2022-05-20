import React, { useEffect, useRef, useState } from "react";

/*
  useRef -> doesnot kick a render cycel
  why?
  => useRef returns the same Object

  what do you mean by returning the same Object?
  => React does a object.is comparison to see if aything new happend, If the object refference
  is the same as before, it wont kick a re-render cycle. which happen with our useRef
  => useRef parsist the state between re renders and its separate from live cycle methods.

  useState also parsist rerenders but why does it kicks a rerender cycle onChange?
  => useState gives a totally different state with diff refrence
*/

const PrevStateRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  });
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Input"
      />
      <br />
      my current name is {name}
      <br />
      my previous name is {prevName.current}
    </div>
  );
};

// how it is work (Layman based)?
// return -> useEffect gets called -> updated Ref -> It will not rerender
// return -> useState gets called -> update the state -> rerender
export default PrevStateRef;
