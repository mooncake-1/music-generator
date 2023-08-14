import React, { useState } from 'react';
import ModelComplexitySlider from './components/Sliders/ModelComplexitySlider/ModelComplexitySlider';
import ValenceArousalSliders from './components/Sliders/ValenceArousalSlider/ValenceArousalSliders';
import GenreSelection from './components/Buttons/GenreSelectionButton/GenreSelectionButton';
import PlayPauseButton from './components/Buttons/PlayPauseButton/PlayPauseButton';
import axios from 'axios';
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
    <div className="container">
      <ValenceArousalSliders valence={valence} arousal={arousal} setValence={setValence} setArousal={setArousal} />
      <ModelComplexitySlider complexity={complexity} setComplexity={setComplexity} />
      <GenreSelection selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <PlayPauseButton handlePlay={handlePlay} />
    </div>
  );
};

export default App;
