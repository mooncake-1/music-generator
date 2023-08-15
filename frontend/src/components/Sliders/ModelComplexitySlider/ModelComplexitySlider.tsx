import React from 'react';
import Slider from 'react-slider';
import './ModelComplexitySlider.css';

interface ModelComplexitySliderProps {
  complexity: number;
  setComplexity: (value: number) => void;
}

const ModelComplexitySlider: React.FC<ModelComplexitySliderProps> = ({ complexity, setComplexity }) => {
  return (
    <div className="model-complexity-container">
      <label>Model Complexity</label>
      <Slider
        className="complexity-slider"
        thumbClassName="complexity-thumb"
        trackClassName="complexity-track"
        min={0}
        max={2}
        step={1}
        value={complexity}
        onChange={setComplexity}
      />
      <div className="marker-container">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>
    </div>
  );
};


export default ModelComplexitySlider;