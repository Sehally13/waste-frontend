import React, { useState } from 'react';
// import './stylen.css';    // Import the CSS file

const SchedulePickup = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const upcomingServiceDate = '2024-07-15';

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for scheduling pickup
    console.log('Pickup scheduled for:', selectedDate);
  };

  return (
    <div className="container">
      <h2>Schedule Pickup</h2>
      <p>Upcoming service date: {upcomingServiceDate}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pickup-date">Choose Pickup Date:</label>
          <input
            type="date"
            id="pickup-date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <button type="submit">Schedule Pickup</button>
      </form>
    </div>
  );
};

export default SchedulePickup;
