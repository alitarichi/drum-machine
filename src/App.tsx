import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h1>Header section</h1>
      </div>
      <div className="main">
        <h1>main</h1>
      </div>
      <div className="footer">
        <h1>footer section</h1>
      </div>
    </>
  );
}

export default App;
