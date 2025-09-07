import React from 'react';
import { useTranslation } from 'react-i18next';

const Schedule = () => {
    const { t } = useTranslation();

    const scheduleItems = [
        {
            time: "12:00",
            title: t('schedule.guestsArrive'),
            description: t('schedule.guestsArriveDesc')
        },
        {
            time: "13:00",
            title: t('schedule.ceremony'),
            description: t('schedule.ceremonyDesc')
        },
        {
            time: "14:00",
            title: t('schedule.reception'),
            description: t('schedule.receptionDesc')
        },
        {
            time: "17:00",
            title: t('schedule.dancing'),
            description: t('schedule.dancingDesc')
        },
        {
            time: "22:00",
            title: t('schedule.farewell'),
            description: t('schedule.farewellDesc')
        }
    ];

    return (
        <div className="section-padding">
            <div className="max-w-4xl mx-auto container-padding">
                {/* Header Section - Elegant */}
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="font-display-bold text-4xl md:text-5xl lg:text-6xl elegant-text mb-6">
                        {t('schedule.title')}
                    </h1>
                    <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl muted-text font-light max-w-2xl mx-auto leading-relaxed-plus">
                        {t('schedule.subtitle')}
                    </p>
                    <div className="mt-8 inline-flex items-center px-6 py-3 bg-elegant rounded-lg border border-gray-200">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        <span className="font-medium elegant-text">{t('header.date')}</span>
                    </div>
                </div>

                {/* Timeline - Elegant */}
                <div className="relative mb-20">
                    {/* Elegant vertical line */}
                    <div className="absolute left-12 md:left-32 top-0 bottom-0 w-px bg-gray-200"></div>
                    
                    {/* Schedule Items */}
                    <div className="space-y-12">
                        {scheduleItems.map((item, index) => (
                            <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                                {/* Time marker */}
                                <div className="flex items-center">
                                    <div className="w-24 md:w-64 text-right pr-6 md:pr-12">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg border border-gray-200 relative z-10 soft-shadow">
                                            <span className="font-display-bold text-lg elegant-text">{item.time}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 ml-6">
                                        <div className="bg-white rounded-lg p-6 md:p-8 soft-shadow border border-gray-200 hover:border-gray-300 transition-all duration-300">
                                            <h3 className="font-display text-xl md:text-2xl elegant-text mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="muted-text leading-relaxed-plus font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Venue Info - Elegant */}
                <div className="bg-elegant rounded-lg p-8 md:p-12 soft-shadow border border-gray-200 mb-16">
                    <div className="text-center">
                        <h2 className="font-display text-3xl md:text-4xl elegant-text mb-8">
                            {t('schedule.venueTitle')}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <p className="text-sm muted-text uppercase tracking-wider mb-2">Location</p>
                                <p className="font-display text-lg elegant-text">{t('home.location').replace('Location: ', '')}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm muted-text uppercase tracking-wider mb-2">Parking</p>
                                <p className="font-display text-lg elegant-text">{t('schedule.parking')}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm muted-text uppercase tracking-wider mb-2">Dress Code</p>
                                <p className="font-display text-lg elegant-text">{t('schedule.dressCode')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Elegant */}
                <div className="text-center">
                    <p className="text-lg muted-text mb-8 font-light">
                        {t('schedule.lookingForward')}
                    </p>
                    <a
                        href="/rsvp"
                        className="btn-elegant btn-primary"
                    >
                        {t('home.rsvpButton')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Schedule;