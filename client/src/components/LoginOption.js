import React, { useState } from 'react';
import './LoginOption.css';
import './LoginOfficer';

function LoginOption() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLoginClick = () => {
    if (selectedOption === 'admin') {
      // handle admin login
      window.location.href = '/AdminLogin';
    } else if (selectedOption === 'officer') {
      // handle officer login
      window.location.href = '/OfficerLogin';
    } else {
      // handle invalid selection
      console.log('Please select a login option');
    }
  };

  return (
    <div className="login-container2">
    <div className="cont1">
      <h2>Login As</h2>
      <div className="radio-container2">
        <label className="radio-label2">
          <input
            type="radio"
            value="admin"
            checked={selectedOption === 'admin'}
            onChange={handleOptionChange}
          />
          Admin
        </label>
      </div>
      <div className="radio-container2">
        <label className="radio-label2">
          <input
            type="radio"
            value="officer"
            checked={selectedOption === 'officer'}
            onChange={handleOptionChange}
          />
          Officer
        </label>
      </div>
      <button className="login-button2" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default LoginOption;
