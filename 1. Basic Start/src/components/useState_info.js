import React, { useState } from "react";

function UseStateInfo() {
  const [count, setCount] = useState(0); // [value, function]
  // the set fuction is provided by the useState itself. It has some logic/algo that tells react
  // when calling the set, it will pass a new value to it. And a new value always rerender for us
  return (
    <div>
      All Todo
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me the count will increase - {count}
      </button>
    </div>
  );
}

export default UseStateInfo;

// Cool array structure in JS
/**
 * const arr = [1,2,3,4]
 * const firstVal = arr[0]; // firstVal -> 1
 * const [firstVal, secondVal] = arr; // 1, 2
 */

// Object Structure
/**
 * const obj = {name: "sunny", age: 24}
 * const {name} = obj // name => sunny
 */
