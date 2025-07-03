import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
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
                {t('home.welcomeTitle')}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 font-light italic">
                {t('home.welcomeMessage')}
            </p>
            <h2 className="mt-8 text-2xl md:text-3xl font-cursive font-semibold text-gray-500 tracking-wide">
                <span className="italic">{t('home.coupleNames')}</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700 font-medium">
                <span className="font-serif">{t('home.date')}</span>
            </p>
            <p className="text-base md:text-lg text-gray-700 font-medium">
                <span className="font-serif">{t('home.location')}</span>
            </p>
            <a
                href="/rsvp"
                className="inline-block mt-12 px-10 py-4 rounded-full bg-pink-600 text-white font-bold text-xl shadow-lg hover:bg-pink-700 transition"
            >
                {t('home.rsvpButton')}
            </a>
        </main>
    );
};

export default Home;
