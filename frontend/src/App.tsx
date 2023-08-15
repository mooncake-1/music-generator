import React, { useState } from 'react';
import ModelComplexitySlider from './components/Sliders/ModelComplexitySlider/ModelComplexitySlider';
import GenreSelection from './components/Buttons/GenreSelectionButton/GenreSelectionButton';
import ValenceSlider from './components/Sliders/ValenceSlider/ValenceSlider';
import ArousalSlider from './components/Sliders/ArousalSlider/ArousalSlider';
import PlayPauseButton from './components/Buttons/PlayPauseButton/PlayPauseButton';
import axios from 'axios';
import './App.css';

const generateMusic = async (valence: number, arousal: number, complexity: number, genre: string) => {
  try {
    console.log('Sending request with parameters:', { valence, arousal, complexity, genre });
    const response = await axios.post('http://localhost:8000/api/generate/', {
      valence,
      arousal,
      complexity,
      genre,
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
  const [complexity, setComplexity] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      generateMusic(valence, arousal, complexity, selectedGenre === null ? 'random' : selectedGenre.toString());
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <div className="App-header">
        <ValenceSlider valence={valence} setValence={setValence} />
        <ArousalSlider arousal={arousal} setArousal={setArousal} />
        <ModelComplexitySlider complexity={complexity} setComplexity={setComplexity} />
        <GenreSelection selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <PlayPauseButton handlePlay={handlePlay} />
      </div>
    </div>
  );
};

export default App;
