import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <div className="relative flex w-full h-[70vh] md:h-[85vh] overflow-hidden">
                <img
                    src="/images/ring-1.jpg"
                    alt="Wedding rings"
                    className="w-full md:w-2/3 h-full object-cover"
                />
                <img
                    src="/images/ring-2.jpg"
                    alt="Wedding details"
                    className="hidden md:block md:w-1/3 h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating content on image */}
                <div className="absolute bottom-8 left-8 right-8 text-white text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold mb-2 drop-shadow-lg">
                        {t('home.coupleNames')}
                    </h2>
                    <p className="text-lg md:text-xl drop-shadow-lg opacity-90">
                        {t('header.date')} • {t('header.location')}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                {/* Welcome Message */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        {t('home.welcomeTitle')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-light italic leading-relaxed max-w-3xl mx-auto">
                        {t('home.welcomeMessage')}
                    </p>
                </div>

                {/* Wedding Details Card */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-pink-200 shadow-xl mb-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="text-3xl mr-3">📅</span>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500 uppercase tracking-wide">Date</p>
                                    <p className="text-xl md:text-2xl font-serif font-bold text-gray-800">
                                        {t('header.date')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="text-3xl mr-3">📍</span>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                                    <p className="text-xl md:text-2xl font-serif font-bold text-gray-800">
                                        Ethereal Hall, Peraia
                                    </p>
                                    <p className="text-lg text-gray-600">
                                        Thessaloniki, Greece
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Countdown or Special Message */}
                <div className="mb-16">
                    <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-pink-200">
                        <span className="text-2xl mr-3">💕</span>
                        <span className="text-lg font-serif text-gray-700">
                            {t('home.countdownMessage')}
                        </span>
                        <span className="text-2xl ml-3">💕</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="/rsvp"
                        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="mr-2">💌</span>
                        {t('home.rsvpButton')}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">{/* Ensures text stays on top */}</span>
                    </a>
                    
                    <a
                        href="/schedule"
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-bold text-xl rounded-full shadow-lg border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600 transition-all duration-300"
                    >
                        <span className="mr-2">📋</span>
                        {t('home.viewSchedule')}
                    </a>
                </div>

                {/* Decorative Elements */}
                <div className="mt-16 flex justify-center space-x-8 text-4xl opacity-60">
                    <span className="animate-bounce" style={{animationDelay: '0s'}}>💒</span>
                    <span className="animate-bounce" style={{animationDelay: '0.5s'}}>💍</span>
                    <span className="animate-bounce" style={{animationDelay: '1s'}}>🎉</span>
                    <span className="animate-bounce" style={{animationDelay: '1.5s'}}>🥂</span>
                    <span className="animate-bounce" style={{animationDelay: '2s'}}>💃</span>
                </div>
            </div>
        </main>
    );
};

export default Home;
