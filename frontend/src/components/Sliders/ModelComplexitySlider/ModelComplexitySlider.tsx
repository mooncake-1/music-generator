import React from "react";
import Slider from "react-slider";
import "./ModelComplexitySlider.css";

interface ModelComplexitySliderProps {
  complexity: number;
  setComplexity: (value: number) => void;
}


const complexityValues = [1, 5, 10, 46, 145];
const complexityLabels = ["1M", "5M", "10M", "46M", "145M"];

const ModelComplexitySlider: React.FC<ModelComplexitySliderProps> = ({ complexity, setComplexity }) => {
  return (
    <div className="model-complexity-container">
      <label>Model Complexity</label>
      <Slider
        className="complexity-slider"
        thumbClassName="complexity-thumb"
        trackClassName="complexity-track"
        min={0}
        max={complexityValues.length - 1}
        step={1}
        value={complexity}
        onChange={setComplexity}
      />
      <div className="marker-container">
        {complexityLabels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  );
};


export default ModelComplexitySlider;