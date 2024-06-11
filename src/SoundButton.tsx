import React, { FC, useEffect } from "react";

interface SoundButtonProps {
  soundFile: string;
  label: string;
  triggerKey: string;
}

const SoundButton: FC<SoundButtonProps> = ({
  soundFile,
  label,
  triggerKey,
}) => {
  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === triggerKey) {
        playSound();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [triggerKey, soundFile]);

  return <button style={buttonStyle}>{label}</button>;
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "white",
  border: "2px solid black",
  borderRadius: "5px",
  margin: "5px",
  transition: "background-color 0.3s",
};

export default SoundButton;
