import React, { useState } from 'react';
import './ModelComplexitySlider.css';

const ModelComplexitySlider: React.FC = () => {
  const [complexity, setComplexity] = useState(0);

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
      <div>{complexityLabels[complexity]}</div> {/* This is the label that changes */}
    </div>
  );
};

export default ModelComplexitySlider;
