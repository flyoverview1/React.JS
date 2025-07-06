
import React, { useState } from 'react';

const ColorChange = () => {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h2>Change Background Color</h2>
      <button onClick={() => setBgColor('lightblue')}>Blue Background</button>
      <button onClick={() => setBgColor('lightcoral')}>Red Background</button>

      {/* // Inline Function Creating */}
    </div>
  );
};

export default ColorChange;
