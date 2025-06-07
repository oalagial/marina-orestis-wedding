import React from 'react';

const Home = () => (
    <main>
        <div className="flex w-full h-[60vh] md:h-[80vh]">
            <img
                src="/images/ring-1.jpg"
                alt="Orestis"
                className="w-2/3 h-full object-cover"
            />
            <img
                src="/images/ring-2.jpg"
                alt="Marina"
                className="w-1/3 h-full object-cover"
            />
        </div>
        <h1 className="mt-8">Welcome to Our Wedding</h1>
        <p>
            We are delighted to invite you to celebrate our special day with us!
        </p>
        <h2>Marina & Orestis</h2>
        <p>Date: 27 June 2026</p>
        <p>Location: Ethereal Hall, Peraia, Thessaloniki</p>
        <a
            href="/rsvp"
            className="inline-block mt-16 px-8 py-3 rounded-full bg-pink-600 text-white font-bold text-lg shadow hover:bg-pink-700 transition"
        >
            RSVP Here
        </a>
    </main>
);

export default Home;