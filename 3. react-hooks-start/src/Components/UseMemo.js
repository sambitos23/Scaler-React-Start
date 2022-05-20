import React, { useMemo, useState } from "react";

// useMemo is used for memoization -> it is callback function => function(arg), [dependency array]
// useMemo -> input -> depend array's value has not changed then it will not be re-rendered
//            It will not affect the re-render cycle of other components

// It u have previously computed value it will not be rerendered the component
// It also check Object.is comparison like useRef

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const UseMemo = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);
  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo example
      </h1>
      <h2>
        {" "}
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default UseMemo;
