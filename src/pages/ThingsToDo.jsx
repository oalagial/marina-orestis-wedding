import React from 'react';

const thingsToDo = [
    {
        title: 'Explore the Old Town',
        description: 'Wander through the charming streets, discover local shops, and enjoy the vibrant atmosphere.',
    },
    {
        title: 'Visit the Beach',
        description: 'Relax on the sandy shores, swim in the crystal-clear waters, or try some water sports.',
    },
    {
        title: 'Enjoy Local Cuisine',
        description: 'Taste traditional dishes at nearby tavernas and experience authentic flavors.',
    },
    {
        title: 'Take a Boat Tour',
        description: 'See the coastline from a new perspective and visit nearby islands.',
    },
];

const ThingsToDo = () => (
    <div style={{ padding: '2rem' }}>
        <h1>Things To Do</h1>
        <ul>
            {thingsToDo.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ margin: 0 }}>{item.title}</h2>
                    <p style={{ margin: 0 }}>{item.description}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default ThingsToDo;