import "./App.css";
import {
  ContextComponent,
  PrevStateRef,
  Theme,
  UseRef,
  UseMemo,
} from "./Components";

function App() {
  return (
    <div className="App">
      <h1>UserContext and CreateContext</h1>
      <Theme />
      <br />
      <br />
      <ContextComponent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>UseRef</h1>
      {/* 
        useRef -> doesnot kick a render cycel
               -> Access DOM element
               -> contains the previous state. (returns get printed, useEffect updates the value but
                  it doesnot reflect the dom because useRef doesnot rerenders)
               -> on rerender it takes that evaluated value and prints it and then did mount side
                  effect gets called -> again gets computed.
       */}
      <UseRef />
      <br />
      <br />
      <PrevStateRef />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>UseMemo</h1>
      {/* 
        useMemo -> memorization do fib function memoization.
       */}
      <UseMemo />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
