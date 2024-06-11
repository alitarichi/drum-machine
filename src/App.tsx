import "./App.css";
import SoundButton from "./SoundButton";

function App() {
  return (
    <>
      <div className="header">
        <h1>Header section</h1>
      </div>
      <div className="main">
        <h1>Try Now!</h1>
        <div className="app">
          <SoundButton soundFile="/Cev_H2.mp3" label="q" triggerKey="q" />
          <SoundButton soundFile="/Heater-1.mp3" label="w" triggerKey="w" />
          <SoundButton soundFile="/Heater-2.mp3" label="e" triggerKey="e" />
          <SoundButton soundFile="/Heater-3.mp3" label="r" triggerKey="r" />
          <SoundButton soundFile="/Heater-4_1.mp3" label="a" triggerKey="a" />
          <SoundButton soundFile="/Heater-6.mp3" label="s" triggerKey="s" />
          <SoundButton soundFile="/Kick_n_Hat.mp3" label="d" triggerKey="d" />
          <SoundButton soundFile="/RP4_KICK_1.mp3" label="f" triggerKey="f" />
        </div>
      </div>
      <div className="footer">
        <h1 className="footer-text">
          Created By <a href="https://alitarichi.netlify.app/">Ali Tarichi</a>
        </h1>
      </div>
    </>
  );
}

export default App;
