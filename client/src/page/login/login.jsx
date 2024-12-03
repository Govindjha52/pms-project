// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';  // Keep the CSS file specific to this login page

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
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

    console.log('Form submitted with:', username, password, role);
    navigate('/home'); 
  };

  return (
    <div id="login-page">
      <form id="login-form" onSubmit={handleSubmit}>
        <h2 id="form-title">Proxy Management System</h2>
        <hr />
        <br />

        <div id="role-section">
          <label htmlFor="role-select">Role</label>
          <select id="role-select" value={role} onChange={handleRoleChange} required>
            <option value="Admin">Admin</option>
            <option value="client">Teacher</option>
          </select>
        </div>

        <div id="username-section">
          <label htmlFor="username-input">Username</label>
          <input
            id="username-input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required // HTML5 validation
          />
        </div>

        <div id="password-section">
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required // HTML5 validation
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