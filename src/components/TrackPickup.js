import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios

const TrackPickup = () => {
  const [pendingPickups, setPendingPickups] = useState([]);

  useEffect(() => {
    fetchPendingPickups();  // Fetch data on component mount
  }, []);

  const fetchPendingPickups = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/waste/list'); // Adjust URL to match your API endpoint
      setPendingPickups(response.data);
    } catch (error) {
      console.error('Error fetching pending pickups:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Track Pickup Page</h2>
      <p className="lead">Track your waste disposal pickups here.</p>

      <div className="row">
        {pendingPickups.map((pickup) => (
          <div key={pickup.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Pending Pickup #{pickup.id}</h3>
                <p className="card-text">{pickup.details}</p>
                {/* Additional details as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackPickup;
