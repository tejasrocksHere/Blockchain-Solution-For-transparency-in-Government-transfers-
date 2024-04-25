import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

import './Login.css';
import './ViewInfo.js';
//import Offices from './Offices';

//import { Link } from 'react-router-dom';

function LoginAdmin({state}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add login logic here
    if (email === 'myemail@gmail.com' && password === 'mypassword') {
      alert('Login successful!');
      window.location.href = '/ViewInfo';
    } else {
      alert('Invalid email or password.');
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        
      </form>
      
    </div>
  );
}

export default LoginAdmin;
/*<button type="submit" onClick={officeInfo}>Get Info</button> */

/*<Offices state={state}></Offices>*/