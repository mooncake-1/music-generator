import React from 'react';
import Button from '@mui/material/Button';
import './GenreSelectionButton.css';

interface GenreSelectionProps {
  selectedGenre: number | null;
  setSelectedGenre: (value: number | null) => void;
}

const GenreSelection: React.FC<GenreSelectionProps> = ({ selectedGenre, setSelectedGenre }) => {
  const genres = ['Rock', 'Pop', 'Jazz', 'Classical', 'Hip-Hop'];

  return (
    <div className="genre-selection-container">
      <label>Genre</label>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <Button
          variant={selectedGenre === index ? "contained" : "outlined"}
          color={selectedGenre === index ? "primary" : undefined}
          key={index}
          className="genre-button"
          onClick={() => setSelectedGenre(index)}
          >
              {genre}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
