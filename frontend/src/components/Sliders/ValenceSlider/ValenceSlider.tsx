import React from "react";
import Slider from "react-slider";
import "./ValenceSlider.css";

interface ValenceSliderProps {
  valence: number;
  setValence: (value: number) => void;
}

const ValenceSlider: React.FC<ValenceSliderProps> = ({ valence, setValence }) => {
  return (
    <div className="valence-slider-container">
      <label>Valence</label>
      <div className="valence-slider-wrapper">
        <Slider
          className="valence-slider"
          thumbClassName="valence-thumb"
          trackClassName="valence-track"
          orientation="vertical"
          min={-10}
          max={10}
          step={1}
          value={-valence}
          onChange={(value: number) => setValence(-value)}
        />
        <div
          className="slider-fill"
          style={{ height: `${((valence + 10) / 20) * 100}%` }}
        ></div>
      </div>
      <div className="valence-value">{valence}</div>
    </div>
  );
};

export default ValenceSlider;
