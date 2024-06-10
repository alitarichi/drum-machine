import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Header section</h1>
      </div>
      <div>main</div>
      <div>footer</div>
    </>
  );
}

export default App;
