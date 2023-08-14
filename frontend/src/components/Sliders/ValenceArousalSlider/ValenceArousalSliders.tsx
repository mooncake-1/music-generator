import React, { useState } from 'react';
import './ValenceArousalSliders.css';

const ValenceArousalSliders: React.FC = () => {
  const [valence, setValence] = useState(0);
  const [arousal, setArousal] = useState(0);

  return (
    <div className="container">
      <div className="slider-container">
        <label>Valence</label>
        <input
          type="range"
          min="-10"
          max="10"
          step="1"
          value={valence}
          onChange={(e) => setValence(e.target.valueAsNumber)}
          style={{ '--fill-factor': `${((valence + 10) / 20) * 100}%` } as React.CSSProperties}
        />
        {valence}
      </div>
      <div className="slider-container">
        <label>Arousal</label>
        <input
          type="range"
          min="-10"
          max="10"
          step="1"
          value={arousal}
          onChange={(e) => setArousal(e.target.valueAsNumber)}
          style={{ '--fill-factor': `${((arousal + 10) / 20) * 100}%` } as React.CSSProperties}
        />
        {arousal}
      </div>
    </div>
  );
};

export default ValenceArousalSliders;
