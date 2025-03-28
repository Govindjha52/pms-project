// Register.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import role1 from '../../assests/role.png';
import user1 from '../../assests/user.png';
import pass1 from '../../assests/password.png';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    if (!username || !password || !conformPassword) {
      alert('All fields are required!');
      return;
    }
  
    if (password !== conformPassword) {
      alert('Passwords do not match');
      return;
    }
    // Perform action if all validations pass
    if(password.length >=5){
      alert("Registered successfully completed..") 
      navigate('/login'); 
    }
    else{
      alert("Password size must Should be Greater Than 5")
    }
  };

  return (
    <form id="register-form" onSubmit={handleSubmit}>
      <h2 id="form-title">Register Page for PMS System</h2>
      <br />

      {/* Dropdown for Role Selection */}
      <div className="form-group" id="role-section">
        {/* <label htmlFor="role-select">Select Role:</label> */}
        <select
        className='role'
          id="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required > 

          <option value="select">Select Role Types</option>
          <option value="Admin">Admin</option>
          <option value="client">Teacher</option>
        </select>

        <img src={role1} alt="Role Logo" />
      </div>

      <div className="form-group" id="username-section">
        {/* <label htmlFor="register-username-input">Username:</label> */}
        <input
         className='user'
          id="register-username-input"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
          <img src={user1} alt="Role Logo" />
      </div>

      <div className="form-group" id="password-section">
        {/* <label htmlFor="register-password-input">Password:</label> */}
        <input
         className='pass'
          id="register-password-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
          <img src={pass1} alt="Role Logo" />
      </div>

      <div className="form-group" id="confirm-password-section">
        {/* <label htmlFor="register-confirm-password-input">Confirm Password:</label> */}
        <input
        className='pass'
          id="register-confirm-password-input"
          type="password"
          placeholder="Conform your password"
          value={conformPassword}
          onChange={(e) => setConformPassword(e.target.value)}
          required />
          
          <img src={pass1} alt="password img" />
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