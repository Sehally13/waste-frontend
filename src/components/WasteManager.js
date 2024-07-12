import React, { useState, useEffect } from 'react';
import { addWaste, getAllWaste, deleteWaste } from './apiService';

const WasteManager = () => {
  const [wastes, setWastes] = useState([]);
  const [newWaste, setNewWaste] = useState({ location: '', wasteDate: '', phone: '' });

  useEffect(() => {
    fetchAllWaste();
  }, []);

  const fetchAllWaste = async () => {
    try {
      const data = await getAllWaste();
      setWastes(data);
    } catch (error) {
      console.error('Error fetching waste:', error);
    }
  };

  const handleAddWaste = async (e) => {
    e.preventDefault();
    try {
      const addedWaste = await addWaste(newWaste);
      setWastes([...wastes, addedWaste]);
      setNewWaste({ location: '', wasteDate: '', phone: '' });
    } catch (error) {
      console.error('Error adding waste:', error);
    }
  };

  const handleDeleteWaste = async (id) => {
    try {
      await deleteWaste(id);
      setWastes(wastes.filter(waste => waste.id !== id));
    } catch (error) {
      console.error('Error deleting waste:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWaste({ ...newWaste, [name]: value });
  };

  return (
    <div>
      <h1>Waste Manager</h1>
      <div>
        <h2>Add Waste</h2>
        <form onSubmit={handleAddWaste}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newWaste.location}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="wasteDate"
            placeholder="Date"
            value={newWaste.wasteDate}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newWaste.phone}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Waste</button>
        </form>
      </div>
      <div>
        <h2>Waste List</h2>
        <ul>
          {wastes.map(waste => (
            <li key={waste.id}>
              {waste.location} - {waste.wasteDate} - {waste.phone}
              <button onClick={() => handleDeleteWaste(waste.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WasteManager;
