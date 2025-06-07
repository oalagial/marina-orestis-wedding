import React from 'react';

const Home = () => (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Welcome to Our Wedding</h1>
        <p>
            We are delighted to invite you to celebrate our special day with us!
        </p>
        <section style={{ marginTop: '2rem' }}>
            <h2>Marina & Orestis</h2>
            <p>Date: 27 June 2026</p>
            <p>Location: Ethereal Hall, Peraia, Thessaloniki</p>
            <a
                href="/rsvp"
                className="inline-block mt-16 px-8 py-3 rounded-full bg-pink-600 text-white font-bold text-lg shadow hover:bg-pink-700 transition"
            >
                RSVP Here
            </a>
        </section>
    </main>
);

export default Home;