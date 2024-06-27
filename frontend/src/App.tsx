import React, { useState } from "react";
import ValenceSlider from "./components/Sliders/ValenceSlider/ValenceSlider";
import ArousalSlider from "./components/Sliders/ArousalSlider/ArousalSlider";
import ModelComplexitySlider from "./components/Sliders/ModelComplexitySlider/ModelComplexitySlider";
import PlayPauseButton from "./components/Buttons/PlayPauseButton/PlayPauseButton";
import axios from "axios";
import "./App.css";

const generateMusic = async (valence: number, arousal: number, complexity: number) => {
  try {
    console.log("Sending request with parameters:", { valence, arousal, complexity });
    const response = await axios.post("http://localhost:8000/api/generate/", {
      valence,
      arousal,
      complexity
    });
    console.log(response.data.message);
    return response.data.pid
  } catch (error) {
    console.error("Error generating music:", error);
    throw error;
  }
};

const stopGeneration = async () => {
  try {
    const response = await axios.post("http://localhost:8000/api/stop/");
    console.log(response.data.message);
  } catch (error) {
    console.error("Error stopping generation:", error);
  }
}

const App: React.FC = () => {
  const [valence, setValence] = useState(0);
  const [arousal, setArousal] = useState(0);
  const [complexity, setComplexity] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!isPlaying) {
      try {
        await generateMusic(valence, arousal, complexity);
        setIsPlaying(true);
      } catch (error) {
        console.error("Error starting music generation:", error);
      }
    } else {
      await stopGeneration();
      setIsPlaying(false);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <ValenceSlider valence={valence} setValence={setValence} />
        <ArousalSlider arousal={arousal} setArousal={setArousal} />
        <ModelComplexitySlider complexity={complexity} setComplexity={setComplexity} />
        <PlayPauseButton handlePlay={handlePlay} />
      </div>
    </div>
  );
};

export default App;
