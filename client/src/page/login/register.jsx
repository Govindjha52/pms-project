// Register.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Admin'); // Add role state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    if (!username || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Perform action if all validations pass
    console.log('Form submitted with:', username, password, role);
    navigate('/login'); // Redirect back to login after registration
  };

  return (
    <form id="register-form" onSubmit={handleSubmit}>
      <h2 id="form-title">Register for Proxy Management System</h2>
      <hr />
      <br />

      {/* Dropdown for Role Selection */}
      <div className="form-group" id="role-section">
        <label htmlFor="role-select">Select Role:</label>
        <select
          id="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required // HTML5 validation
        >
          <option value="Admin">Admin</option>
          <option value="client">Teacher</option>
        </select>
      </div>

      <div className="form-group" id="username-section">
        <label htmlFor="register-username-input">Username:</label>
        <input
          id="register-username-input"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required // HTML5 validation
        />
      </div>

      <div className="form-group" id="password-section">
        <label htmlFor="register-password-input">Password:</label>
        <input
          id="register-password-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // HTML5 validation
        />
      </div>

      <div className="form-group" id="confirm-password-section">
        <label htmlFor="register-confirm-password-input">Confirm Password:</label>
        <input
          id="register-confirm-password-input"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required // HTML5 validation
        />
      </div>

      <button id="register-button" type="submit">
        Register
      </button>

      <button
        id="back-to-login-button"
        type="button"
        onClick={() => navigate('/login')}
      >
        Back to Login
      </button>
    </form>
  );
};

export default Register;