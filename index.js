import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Bulb from "./Bulb";
// import Counter from './Counter';
// import Login from './Login';
// import './Login.css';
// import ColorChange from './ColorChange';
// import Userinput from './Userinput';
// import Grade from './Grade';
import CurrencyConverter from './CurrencyConverter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Bulb /> */}
    {/* <Counter/> */}
    {/* <Login/> */}
    {/* <ColorChange/> */}
    {/* <Userinput/> */}
    {/* <Grade/> */}
    <CurrencyConverter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
