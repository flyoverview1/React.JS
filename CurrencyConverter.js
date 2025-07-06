import React, { useState } from 'react';

function CurrencyConvert() {
  const [currency, setCurrency] = useState('INR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const rate = 83;

  const convert = () => {

    const num = parseFloat(amount);

    if (!isNaN(num)) 
      {
      const output =
        currency === 'INR' ? `${(num / rate).toFixed(2)} USD` : `₹${(num * rate).toFixed(2)} INR`;
      setResult(output);
    }
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '25px' }}>

      <h2>Currency Converter</h2>

      <div>
        <button onClick={() => setCurrency('INR')}>INR</button>

        <button onClick={() => setCurrency('USD')} style={{ marginLeft:19 }}>USD</button>
      </div>

      <input type="text" placeholder={`Enter amount in ${currency}`} value={amount}
 
         onChange={(e) => setAmount(e.target.value)}
         
         style={{ marginTop: 20, padding: 10 }}
      />
   
     <br/>
     <br/> 

      <button style={{ padding:3.5 }} onClick={convert}>Convert</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default CurrencyConvert;
