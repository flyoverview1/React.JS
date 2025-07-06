import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </nav>

      <div className="login-container">
        <h2>Login Form</h2>
        <form>
          <label>Username:</label>
          <input type="text" placeholder="Enter username" />

          <label>Mobile No:</label>
          <input type="tel" placeholder="Enter mobile number" />

          <label>Address:</label>
          <textarea placeholder="Enter address" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

