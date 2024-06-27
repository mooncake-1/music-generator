import React from "react";
import Slider from "react-slider";
import "./ArousalSlider.css";

interface ArousalSliderProps {
  arousal: number;
  setArousal: (value: number) => void;
}

const ArousalSlider: React.FC<ArousalSliderProps> = ({ arousal, setArousal }) => {
  return (
    <div className="arousal-slider-container">
      <label>Arousal</label>
      <div className="arousal-slider-wrapper">
        <Slider
          className="arousal-slider"
          thumbClassName="arousal-thumb"
          trackClassName="arousal-track"
          orientation="vertical"
          invert={true}
          min={-10}
          max={10}
          step={1}
          value={arousal}
          onChange={setArousal}
        />
        <div
          className="slider-fill-arousal"
          style={{ height: `${((arousal + 10) / 20) * 100}%` }}
        ></div>
      </div>
      <div className="arousal-value">{arousal}</div>
    </div>
  );
};

export default ArousalSlider;
