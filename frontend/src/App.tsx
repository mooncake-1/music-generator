import React from 'react';
import ValenceArousalSliders from './components/Sliders/ModelComplexitySlider/ModelComplexitySlider';
import ModelComplexitySlider from './components/Sliders/ValenceArousalSlider/ValenceArousalSliders';
import GenreSelection from './components/Buttons/GenreSelectionButton/GenreSelectionButton';
import PlayPauseButton from './components/Buttons/PlayPauseButton/PlayPauseButton';

const App: React.FC = () => {
  return (
    <div className="container">
      <ValenceArousalSliders />
      <ModelComplexitySlider />
      <GenreSelection />
      <PlayPauseButton />
    </div>
  );
};

export default App;
