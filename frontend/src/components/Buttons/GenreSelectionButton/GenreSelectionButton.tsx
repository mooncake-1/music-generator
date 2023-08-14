import React, { useState } from 'react';
import './GenreSelectionButton.css';

const GenreSelection: React.FC = () => {
  const genres = ['Rock', 'Pop', 'Jazz', 'Classical', 'Hip-Hop'];
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  return (
    <div className="genre-selection-container">
      <label>Select Genre:</label>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`genre-button ${selectedGenre === index ? 'selected' : ''}`}
            onClick={() => setSelectedGenre(index)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
