import React from 'react';

interface GenreSelectionProps {
  selectedGenre: number | null;
  setSelectedGenre: (value: number | null) => void;
}

const GenreSelection: React.FC<GenreSelectionProps> = ({ selectedGenre, setSelectedGenre }) => {
  const genres = ['Rock', 'Pop', 'Jazz', 'Classical', 'Hip-Hop'];

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
