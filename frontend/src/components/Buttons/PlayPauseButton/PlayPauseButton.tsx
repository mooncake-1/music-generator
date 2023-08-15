import React, { useState } from 'react';
import { Button } from '@mui/material';
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
      <Button 
          variant="contained" 
          className="play-pause-button"
          sx={{
              backgroundColor: '#00ADB5',
              '&:hover': {
                  backgroundColor: '#FF5722',
              },
              color: '#EEEEEE',
          }}
          onClick={handleClick}
      >
          {isPlaying ? '\u23F8' : '\u23F5'}
      </Button>
    </div>
  );
};

export default PlayPauseButton;
