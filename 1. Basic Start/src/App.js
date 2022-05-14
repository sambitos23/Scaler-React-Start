import "./App.css";
import { Navbar, Background, UseStateInfo, UseEffectTodo } from "./components";

function App() {
  return (
    <div className="main">
      {/* <Background/> */}
      <Navbar />
      <UseStateInfo/>
      <UseEffectTodo/>
    </div>
  );
}

export default App;
