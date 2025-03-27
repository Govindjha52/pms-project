// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';  

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    if (!username || !password) {
      alert('Both username and password are required!');
      return;
    }
    if(role=='Admin' && username=='Govind' && password=='12345'){
      console.log('Form submitted with:', username, password, role);
      navigate('/home'); 
    }
    else{
      alert('Your Credentials is wrong..');
    }

  };

  return (
    <div id="login-page">
      <form id="login-form" onSubmit={handleSubmit}>
        <h2 id="form-title">Proxy Management System (Login)</h2>
        <hr />
        <br />

        <div id="role-section">
          {/* <label htmlFor="role-select">Role: </label> */}
          <select id="role-select" value={role} onChange={handleRoleChange} required>
            <option value="select">Select Role: </option>
            <option value="Admin">Admin</option>
            <option value="client">Teacher</option>
          </select>
        </div>

        <div id="username-section">
          {/* <label htmlFor="username-input">Username: </label> */}
          <input
          className='user'
          placeholder='Enter User Name: '
            id="username-input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required 
          />
        </div>

        <div id="password-section">
          {/* <label htmlFor="password-input">Password: </label> */}
          <input
          className='pass'
          placeholder='Enter Password here: '
            id="password-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required 
          />
        </div>

        <button id="login-button" type="submit">Login</button>

        <Link to="/registration">
          <button id="register-button" type="button">Register</button>
        </Link>

        <Link to="/forgot-password">
          <button id="forgot-password-button" type="button">Forgot Password</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;