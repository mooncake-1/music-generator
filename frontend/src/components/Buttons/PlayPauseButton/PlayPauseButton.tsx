import React, { useState } from 'react';

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
        {isPlaying ? 'Pause' : 'Play'} {isPlaying ? '▌▌' : '►'}
      </button>
    </div>
  );
};

export default PlayPauseButton;
