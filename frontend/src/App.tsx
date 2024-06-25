import React, { useState } from 'react';
import ValenceSlider from './components/Sliders/ValenceSlider/ValenceSlider';
import ArousalSlider from './components/Sliders/ArousalSlider/ArousalSlider';
import PlayPauseButton from './components/Buttons/PlayPauseButton/PlayPauseButton';
import axios from 'axios';
import './App.css';

const generateMusic = async (valence: number, arousal: number) => {
  try {
    console.log('Sending request with parameters:', { valence, arousal });
    const response = await axios.post('http://localhost:8000/api/generate/', {
      valence,
      arousal
    });
    // TODO: Play music
    console.log(response.data.message);
  } catch (error) {
    // TODO: Show error message
    console.error('Error generating music:', error);
  }
};

const App: React.FC = () => {
  const [valence, setValence] = useState(0);
  const [arousal, setArousal] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      generateMusic(valence, arousal);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <div className="App-header">
        <ValenceSlider valence={valence} setValence={setValence} />
        <ArousalSlider arousal={arousal} setArousal={setArousal} />
        <PlayPauseButton handlePlay={handlePlay} />
      </div>
    </div>
  );
};

export default App;
