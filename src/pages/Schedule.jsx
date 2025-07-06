import React from 'react';
import { useTranslation } from 'react-i18next';

const Schedule = () => {
    const { t } = useTranslation();

    const scheduleItems = [
        {
            time: "12:00",
            title: t('schedule.guestsArrive'),
            description: t('schedule.guestsArriveDesc'),
            icon: "👥",
            color: "bg-blue-50 border-blue-200"
        },
        {
            time: "13:00",
            title: t('schedule.ceremony'),
            description: t('schedule.ceremonyDesc'),
            icon: "💒",
            color: "bg-pink-50 border-pink-200"
        },
        {
            time: "14:00",
            title: t('schedule.reception'),
            description: t('schedule.receptionDesc'),
            icon: "🍽️",
            color: "bg-green-50 border-green-200"
        },
        {
            time: "17:00",
            title: t('schedule.dancing'),
            description: t('schedule.dancingDesc'),
            icon: "💃",
            color: "bg-purple-50 border-purple-200"
        },
        {
            time: "22:00",
            title: t('schedule.farewell'),
            description: t('schedule.farewellDesc'),
            icon: "🌟",
            color: "bg-yellow-50 border-yellow-200"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    {t('schedule.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
                    {t('schedule.subtitle')}
                </p>
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-pink-100 rounded-full">
                    <span className="text-2xl mr-2">📅</span>
                    <span className="font-serif text-lg text-gray-800">{t('header.date')}</span>
                </div>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 md:left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300"></div>
                
                {/* Schedule Items */}
                <div className="space-y-8">
                    {scheduleItems.map((item, index) => (
                        <div key={index} className="relative flex items-start">
                            {/* Time circle */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-16 md:w-48 text-right pr-4 md:pr-8">
                                    <div className="inline-block bg-white border-4 border-pink-300 rounded-full px-3 py-2 shadow-lg">
                                        <span className="text-lg md:text-xl font-bold text-gray-800">{item.time}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className={`flex-1 ml-4 p-6 rounded-lg border-2 ${item.color} shadow-md hover:shadow-lg transition-shadow`}>
                                <div className="flex items-start">
                                    <span className="text-3xl mr-4 flex-shrink-0">{item.icon}</span>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Location Info */}
            <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 border border-pink-200">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
                        {t('schedule.venueTitle')}
                    </h2>
                    <div className="space-y-2 text-lg text-gray-700">
                        <div className="flex items-center justify-center">
                            <span className="text-xl mr-2">📍</span>
                            <span className="font-medium">{t('home.location').replace('Location: ', '')}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-xl mr-2">🚗</span>
                            <span>{t('schedule.parking')}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-xl mr-2">👗</span>
                            <span>{t('schedule.dressCode')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-6">
                    {t('schedule.lookingForward')}
                </p>
                <a
                    href="/rsvp"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105"
                >
                    {t('home.rsvpButton')}
                </a>
            </div>
        </div>
    );
};

export default Schedule;