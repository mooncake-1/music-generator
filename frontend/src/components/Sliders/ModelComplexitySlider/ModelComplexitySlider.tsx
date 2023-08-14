import React from 'react';

interface ModelComplexitySliderProps {
  complexity: number;
  setComplexity: (value: number) => void;
}

const ModelComplexitySlider: React.FC<ModelComplexitySliderProps> = ({ complexity, setComplexity }) => {
  const complexityLabels = ['Low', 'Medium', 'High'];

  return (
    <div className="model-complexity-container">
      <label>Model Complexity:</label>
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value={complexity}
        onChange={(e) => setComplexity(e.target.valueAsNumber)}
      />
      <div>{complexityLabels[complexity]}</div>
    </div>
  );
};

export default ModelComplexitySlider;
