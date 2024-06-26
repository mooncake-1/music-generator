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
    console.log(response.data.message);
    return response.data.pid
  } catch (error) {
    console.error('Error generating music:', error);
    throw error;
  }
};

const stopGeneration = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/stop/');
    console.log(response.data.message);
  } catch (error) {
    console.error('Error stopping generation:', error);
  }
}

const App: React.FC = () => {
  const [valence, setValence] = useState(0);
  const [arousal, setArousal] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!isPlaying) {
      try {
        await generateMusic(valence, arousal);
        setIsPlaying(true);
      } catch (error) {
        console.error('Error starting music generation:', error);
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
        <PlayPauseButton handlePlay={handlePlay} />
      </div>
    </div>
  );
};

export default App;
