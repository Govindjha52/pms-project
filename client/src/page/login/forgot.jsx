// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgot.css';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    if (!email || !newPassword || !confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Perform action if all validations pass
    console.log('Password changed for:', email);
    navigate('/login'); // Redirect back to login after password change
  };

  return (
    <form id="forgot-password-form" onSubmit={handleSubmit}>
      <h2 id="form-title">Reset Password</h2><hr /><br />

      <div id="email-section">
        <label htmlFor="forgot-email-input">Enter your email</label>
        <input
          id="forgot-email-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // HTML5 validation
        />
      </div>

      <div id="new-password-section">
        <label htmlFor="forgot-new-password-input">New Password</label>
        <input
          id="forgot-new-password-input"
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required // HTML5 validation
        />
      </div>

      <div id="confirm-password-section">
        <label htmlFor="forgot-confirm-password-input">Confirm New Password</label>
        <input
          id="forgot-confirm-password-input"
          type="password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required // HTML5 validation
        />
      </div>

      <button id="forgot-button" type="submit">Submit</button>
    </form>
  );
};

export default Forgot;