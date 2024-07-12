import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/waste/add', {
        type,
        description,
      });
      console.log('Waste item added successfully:', response.data);
      alert('Waste item added successfully!');
      setType('');
      setDescription('');
    } catch (error) {
      console.error('Error adding waste item:', error);
      alert('Failed to add waste item. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Welcome to Waste Disposal Dashboard</h2>
      <p>This is your dashboard where you can manage waste disposal services.</p>

      {/* Cards for actions */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Schedule Pickup</h3>
              <p className="card-text">Easily schedule a waste pickup at your convenience.</p>
              <button className="btn btn-primary">Schedule Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Track Pickup</h3>
              <p className="card-text">Track the status of your scheduled pickups.</p>
              <button className="btn btn-primary">Track Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">View Reports</h3>
              <p className="card-text">Access detailed reports on your waste disposal.</p>
              <button className="btn btn-primary">View Reports</button>
            </div>
          </div>
        </div>
      </div>

      {/* Link to Waste Manager */}
      <div className="mt-4">
        <Link to="/wastemanager" className="btn btn-primary">Go to Waste Manager</Link>
      </div>

      <hr />

      {/* Form to add waste item */}
      <h3>Add Waste Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input type="text" className="form-control" id="type" value={type} onChange={handleTypeChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={handleDescriptionChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Waste Item</button>
      </form>
    </div>
  );
};

export default Home;
