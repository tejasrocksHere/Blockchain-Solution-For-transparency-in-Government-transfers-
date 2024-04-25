
import React, { useState } from 'react';
import './LoginOfficer.css';
import ViewInfo from './ViewInfo';
import OptionForm from './optionform.js'

function LoginForOfficers() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Add login logic here
    if (email === 'myemail@gmail.com' && password === 'mypassword') {
      alert('Login successful!');
      setLoggedIn(true);
      //window.location.href = '/optionform';
    } else {
      alert('Invalid email or password.');
    }
  }

  const [showForm, setShowForm] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  const handleFormClick = (event) => {
    event.preventDefault();
    setShowForm(true);
    setShowTransfer(false);
  };

  const handleTransferClick = (event) => {
    event.preventDefault();
    setShowForm(false);
    setShowTransfer(true);
  };

  if (loggedIn) {
    return <>
      <button onClick={handleFormClick}>Fill Form</button>
      <button onClick={handleTransferClick}>View Transfer</button>
      {showForm && (
        <div>
          
          {<OptionForm/>}
        </div>
      )}
      {showTransfer && (
        <div>
          <h2>View Transfer</h2>
          {/*<ViewInfo/>*/
           window.location.href = '/ViewInfo'          
          }
        </div>
      )}
    </> ;
  }

  

  return (
    <div className="login-container1">
      <h1>Officer Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className = "label2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password" className = "label2">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className = "officebutton1" /*onClick = {toOptionForm}*/>Login</button>
      </form>
    </div>
  );
}

export default LoginForOfficers;
