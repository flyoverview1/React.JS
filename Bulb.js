import React, { useState } from 'react';

function Bulb() {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => setIsOn(true);
  const turnOff = () => setIsOn(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '70px',
          boxShadow: isOn ? '0 0 20px red' : 'none',
          height: '50px',
          margin: '20px auto',
          backgroundColor: isOn ? 'red' : 'gray',
           borderRadius: '50%',
        }}
      ></div>

      <button onClick={turnOn} style={{ marginRight: '10px' }}>ON</button>
      <button onClick={turnOff}style={{ margineRight: '10px'}}>OFF</button>
    </div>
  );
}

export default Bulb;

