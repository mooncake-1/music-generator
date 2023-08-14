import React, { useState } from 'react';
import './PlayPauseButton.css';

const PlayPauseButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="play-pause-container">
      <button
        className="play-pause-button"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? 'Pause' : 'Play'} {isPlaying ? '▌▌' : '►'}
      </button>
    </div>
  );
};

export default PlayPauseButton;
