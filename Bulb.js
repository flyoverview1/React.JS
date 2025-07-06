import React, { useState } from 'react';

function Bulb() {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => setIsOn(true);
  const turnOff = () => setIsOn(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '20px auto',
          backgroundColor: isOn ? 'red' : 'gray',
          boxShadow: isOn ? '0 0 20px red' : 'none',
        }}
      ></div>

      <button onClick={turnOn} style={{ marginRight: '10px' }}>ON</button>
      <button onClick={turnOff}style={{ margineRight: '10px'}}>OFF</button>
    </div>
  );
}

export default Bulb;

