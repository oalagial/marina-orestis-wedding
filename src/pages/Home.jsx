import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <main className="min-h-screen">
            {/* Hero Section - Minimal */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
                    <img
                        src="/images/ring-1.jpg"
                        alt="Wedding rings"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="/images/ring-2.jpg"
                        alt="Wedding details"
                        className="hidden md:block w-full h-full object-cover"
                    />
                </div>
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                
                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-4 animate-fade-in">
                    <h1 className="font-display-bold text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
                        Marina & Orestis
                    </h1>
                    <div className="w-24 h-px bg-white/60 mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl font-light tracking-wide mb-4">
                        {t('header.date')}
                    </p>
                    <p className="text-base md:text-lg font-light tracking-wide opacity-90">
                        {t('header.location')}
                    </p>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-px h-16 bg-white/40"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full mx-auto -mt-1"></div>
                </div>
            </div>

            {/* Main Content - Minimal */}
            <div className="section-padding">
                <div className="max-w-4xl mx-auto container-padding text-center">
                    {/* Welcome Message */}
                    <div className="mb-20 animate-slide-up">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 gradient-text">
                            {t('home.welcomeTitle')}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed-plus max-w-3xl mx-auto font-light">
                            {t('home.welcomeMessage')}
                        </p>
                    </div>

                    {/* Elegant Details */}
                    <div className="mb-20">
                        <div className="glass-effect rounded-3xl p-8 md:p-12 soft-shadow-lg">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="text-center md:text-left">
                                        <span className="text-3xl mb-4 block">📅</span>
                                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">When</p>
                                        <p className="font-display text-2xl md:text-3xl text-gray-800">
                                            June 27, 2026
                                        </p>
                                        <p className="text-gray-600 mt-1">Saturday, 1:00 PM</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="text-center md:text-left">
                                        <span className="text-3xl mb-4 block">📍</span>
                                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Where</p>
                                        <p className="font-display text-2xl md:text-3xl text-gray-800 mb-2">
                                            Ethereal Hall
                                        </p>
                                        <p className="text-gray-600">Peraia, Thessaloniki</p>
                                        <p className="text-gray-500 text-sm">Greece</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimal Message */}
                    <div className="mb-16">
                        <div className="inline-flex items-center px-8 py-4 glass-effect rounded-full border border-white/20">
                            <span className="text-2xl mr-4 animate-pulse-soft">💕</span>
                            <span className="font-medium text-gray-700 tracking-wide">
                                {t('home.countdownMessage')}
                            </span>
                            <span className="text-2xl ml-4 animate-pulse-soft">💕</span>
                        </div>
                    </div>

                    {/* Action Buttons - Minimal */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="/rsvp"
                            className="btn-minimal btn-primary text-lg px-10 py-4 group"
                        >
                            <span className="mr-3">💌</span>
                            {t('home.rsvpButton')}
                        </a>
                        
                        <a
                            href="/schedule"
                            className="btn-minimal btn-secondary text-lg px-10 py-4"
                        >
                            <span className="mr-3">📋</span>
                            {t('home.viewSchedule')}
                        </a>
                    </div>

                    {/* Minimal Decorative Elements */}
                    <div className="mt-20 flex justify-center space-x-12 text-3xl opacity-40">
                        <span className="animate-float" style={{animationDelay: '0s'}}>💒</span>
                        <span className="animate-float" style={{animationDelay: '1s'}}>💍</span>
                        <span className="animate-float" style={{animationDelay: '2s'}}>🥂</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
