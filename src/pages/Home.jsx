import React from 'react';

const Home = () => (
    <main>
        <div className="flex w-full h-[60vh] md:h-[80vh]">
            <img
                src="/images/ring-1.jpg"
                alt="Orestis"
                className="w-full md:w-2/3 h-full object-cover"
            />
            <img
                src="/images/ring-2.jpg"
                alt="Marina"
                className="hidden md:block md:w-1/3 h-full object-cover"
            />
        </div>
        <h1 className="mt-8 text-3xl md:text-5xl font-serif font-bold text-gray-800 tracking-wide">
            Welcome to Our Wedding
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 font-light italic">
            We are delighted to invite you to celebrate our special day with us!
        </p>
        <h2 className="mt-8 text-2xl md:text-3xl font-serif font-semibold text-pink-700 tracking-wide">
            Marina <span className="text-gray-500">&amp;</span> Orestis
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-700 font-medium">
            <span className="font-serif">Date:</span>{' '}
            <span className="font-light">27 June 2026</span>
        </p>
        <p className="text-base md:text-lg text-gray-700 font-medium">
            <span className="font-serif">Location:</span>{' '}
            <span className="font-light">Ethereal Hall, Peraia, Thessaloniki</span>
        </p>
        <a
            href="/rsvp"
            className="inline-block mt-12 px-10 py-4 rounded-full bg-pink-600 text-white font-bold text-xl shadow-lg hover:bg-pink-700 transition"
        >
            RSVP Here
        </a>
    </main>
);

export default Home;