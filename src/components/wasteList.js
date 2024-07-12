// Example of fetching data in React component using fetch

import React, { useState, useEffect } from 'react';

const WasteList = () => {
    const [wastes, setWastes] = useState([]);

    useEffect(() => {
        fetch('/api/waste/list')
            .then(response => response.json())
            .then(data => setWastes(data))
            .catch(error => console.error('Error fetching wastes:', error));
    }, []);

    return (
        <div>
            <h2>List of Wastes</h2>
            <ul>
                {wastes.map(waste => (
                    <li key={waste.id}>
                        Type: {waste.type}, Description: {waste.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WasteList;
