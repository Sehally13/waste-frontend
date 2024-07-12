import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';     // Import the CSS file

const Register = () => {
  // Handle registration functionality
  const handleRegister = (e) => {
    e.preventDefault();
    // Logic for handling registration
    // Redirect to '/login' or '/home' on successful registration
  };

  return (
    <div className="register-container">
      <h2>Register Page</h2>
      <form onSubmit={handleRegister}>
        <div className="register-form-group">
          <label>Name:</label>
          <input className="register-input" type="text" placeholder="Enter your name" required />
        </div>
        <div className="register-form-group">
          <label>Surname:</label>
          <input className="register-input" type="text" placeholder="Enter your surname" required />
        </div>
        <div className="register-form-group">
          <label>Phone Number:</label>
          <input className="register-input" type="text" placeholder="Enter your phone number" required />
        </div>
        <div className="register-form-group">
          <label>House Number:</label>
          <input className="register-input" type="text" placeholder="Enter your house number" required />
        </div>
        <div className="register-form-group">
          <label>Street Number:</label>
          <input className="register-input" type="text" placeholder="Enter your street number" required />
        </div>
        <button className="register-button" type="submit">Register</button>
      </form>
      <p className="register-note">Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Register;
