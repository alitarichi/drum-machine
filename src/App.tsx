import { useState } from "react";
import "./App.css";
import SoundButton from "./SoundButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h1>Header section</h1>
      </div>
      <div className="main">
        <h1>main</h1>
        <div className="app">
          <SoundButton soundFile="/Cev_H2.mp3" label="Sound 1" />
          <SoundButton soundFile="/Heater-1.mp3" label="Sound 2" />
          <SoundButton soundFile="/Heater-2.mp3" label="Sound 3" />
          <SoundButton soundFile="/Heater-3.mp3" label="Sound 4" />
          <SoundButton soundFile="/Heater-4_1.mp3" label="Sound 5" />
          <SoundButton soundFile="/Heater-6.mp3" label="Sound 6" />
          <SoundButton soundFile="/Kick_n_Hat.mp3" label="Sound 7" />
          <SoundButton soundFile="/RP4_KICK_1.mp3" label="Sound 8" />
        </div>
      </div>
      <div className="footer">
        <h1>footer section</h1>
      </div>
    </>
  );
}

export default App;
