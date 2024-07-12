import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // Handle registration functionality
  const handleRegister = () => {
    // Logic for handling registration
    // Redirect to '/home' on successful registration
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister}>
        {/* Registration form fields */}
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
};

export default Register;
