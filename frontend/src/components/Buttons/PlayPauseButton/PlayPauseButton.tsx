import React, { useState } from 'react';
import './PlayPauseButton.css';

interface PlayPauseButtonProps {
  handlePlay: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ handlePlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    handlePlay();
  };

  return (
    <div className="play-pause-container">
      <button
        className="play-pause-button"
        onClick={handleClick}
      >
        {isPlaying ? '\u23F8' : '\u23F5'}
      </button>
    </div>
  );
};

export default PlayPauseButton;
