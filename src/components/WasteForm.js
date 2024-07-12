import React, { useState } from 'react';

const WasteForm = ({ onSubmit }) => {
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newWaste = { type, description };

        fetch('/api/waste/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWaste),
        })
        .then(response => response.json())
        .then(data => {
            onSubmit(data); // Handle the response in parent component
            setType('');
            setDescription('');
        })
        .catch(error => console.error('Error adding waste:', error));
    };

    return (
        <div>
            <h2>Add Waste</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Type:</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default WasteForm;
