import React from 'react';
import { useTranslation } from 'react-i18next';

const Schedule = () => {
    const { t } = useTranslation();

    const scheduleItems = [
        {
            time: "12:00",
            title: t('schedule.guestsArrive'),
            description: t('schedule.guestsArriveDesc'),
            icon: "👥"
        },
        {
            time: "13:00",
            title: t('schedule.ceremony'),
            description: t('schedule.ceremonyDesc'),
            icon: "💒"
        },
        {
            time: "14:00",
            title: t('schedule.reception'),
            description: t('schedule.receptionDesc'),
            icon: "🍽️"
        },
        {
            time: "17:00",
            title: t('schedule.dancing'),
            description: t('schedule.dancingDesc'),
            icon: "💃"
        },
        {
            time: "22:00",
            title: t('schedule.farewell'),
            description: t('schedule.farewellDesc'),
            icon: "🌟"
        }
    ];

    return (
        <div className="section-padding">
            <div className="max-w-4xl mx-auto container-padding">
                {/* Header Section - Minimal */}
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="font-display-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
                        {t('schedule.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed-plus">
                        {t('schedule.subtitle')}
                    </p>
                    <div className="mt-8 inline-flex items-center px-6 py-3 glass-effect rounded-full border border-white/20">
                        <span className="w-2 h-2 bg-rose-400 rounded-full mr-3 animate-pulse-soft"></span>
                        <span className="font-medium text-gray-700">{t('header.date')}</span>
                    </div>
                </div>

                {/* Timeline - Minimal */}
                <div className="relative mb-20">
                    {/* Elegant vertical line */}
                    <div className="absolute left-12 md:left-32 top-0 bottom-0 w-px bg-gradient-to-b from-rose-200 via-pink-300 to-rose-200"></div>
                    
                    {/* Schedule Items */}
                    <div className="space-y-12">
                        {scheduleItems.map((item, index) => (
                            <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                                {/* Time marker */}
                                <div className="flex items-center">
                                    <div className="w-24 md:w-64 text-right pr-6 md:pr-12">
                                        <div className="inline-flex items-center justify-center w-16 h-16 glass-effect rounded-full border border-white/30 relative z-10">
                                            <span className="font-display-bold text-lg text-gray-800">{item.time}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 ml-6">
                                        <div className="glass-effect rounded-2xl p-6 md:p-8 soft-shadow border border-white/20 hover:border-white/40 transition-all duration-300">
                                            <div className="flex items-start">
                                                <span className="text-3xl mr-4 flex-shrink-0">{item.icon}</span>
                                                <div className="flex-1">
                                                    <h3 className="font-display text-xl md:text-2xl text-gray-800 mb-3">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed-plus font-light">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Venue Info - Minimal */}
                <div className="glass-effect rounded-3xl p-8 md:p-12 soft-shadow-lg border border-white/20 mb-16">
                    <div className="text-center">
                        <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-8">
                            {t('schedule.venueTitle')}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <span className="text-3xl mb-4 block">📍</span>
                                <p className="font-medium text-gray-800">{t('home.location').replace('Location: ', '')}</p>
                            </div>
                            <div className="text-center">
                                <span className="text-3xl mb-4 block">🚗</span>
                                <p className="font-medium text-gray-800">{t('schedule.parking')}</p>
                            </div>
                            <div className="text-center">
                                <span className="text-3xl mb-4 block">👗</span>
                                <p className="font-medium text-gray-800">{t('schedule.dressCode')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Minimal */}
                <div className="text-center">
                    <p className="text-lg text-gray-600 mb-8 font-light">
                        {t('schedule.lookingForward')}
                    </p>
                    <a
                        href="/rsvp"
                        className="btn-minimal btn-primary text-lg px-10 py-4"
                    >
                        <span className="mr-3">💌</span>
                        {t('home.rsvpButton')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Schedule;