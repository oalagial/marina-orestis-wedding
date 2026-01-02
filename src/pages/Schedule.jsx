import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Link as RouterLink } from 'react-router-dom';

const Schedule = () => {
    const { t } = useTranslation();

    const scheduleItems = [
        {
            time: "17:00",
            title: t('schedule.guestsArriveGroom'),
            description: t('schedule.guestsArriveGroomDesc'),
            link: "https://maps.app.goo.gl/zvvkstbnK9iGVsJ89"
        },
        {
            time: "17:00",
            title: t('schedule.guestsArriveBride'),
            description: t('schedule.guestsArriveBrideDesc'),
            link: "https://maps.app.goo.gl/SWzJBLCPCPrY8yeD8"
        },
        {
            time: "19:45",
            title: t('schedule.ceremony'),
            description: t('schedule.ceremonyDesc'),
            link: "https://maps.app.goo.gl/bQZrmmLcg6djn7t28"
        },
        {
            time: "20:30",
            title: t('schedule.dinner'),
            description: t('schedule.dinnerDesc'),
            link: "https://maps.app.goo.gl/bQZrmmLcg6djn7t28"
        },
        {
            time: "22:30",
            title: t('schedule.coupleEntrance'),
            description: t('schedule.coupleEntranceDesc')
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
                        <span className="font-medium elegant-text">{t('header.date')}</span>
                    </div>
                </div>

                {/* Timeline - Elegant */}
                <div className="relative mb-20">
                    {/* Elegant vertical line */}
                    <div className="absolute left-12 md:left-32 top-0 bottom-0 w-px bg-gray-200"></div>
                    {/* 'You choose!' between the two 17:00 slots, left of the line */}
                    <div className="absolute" style={{ top: '150px', zIndex: 30 }}>
                        <span
                            className="font-display elegant-text text-xs md:text-sm bg-white px-2 text-gray-500 border border-gray-200 rounded shadow"
                            style={{ letterSpacing: '1px' }}
                        >
                            {t('schedule.youChoose')}
                        </span>
                    </div>
                    {/* 'You choose!' above the line between the two 17:00 slots */}
                    
                    {/* Schedule Items */}
                    <div className="space-y-12">
                        {scheduleItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="relative animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
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
                                                <p className="muted-text leading-relaxed-plus font-light flex align-items-center">
                                                    {item.description}
                                                    {item.link && (
                                                        <span className="block ml-2 mt-1">
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 underline inline-flex items-center gap-1"
                                                            >
                                                                {t('schedule.mapLink', '')}
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3V3" />
                                                                </svg>
                                                            </a>
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Venue Info - Elegant */}
                <div className="bg-elegant rounded-lg p-8 md:p-12 soft-shadow border border-gray-200 mb-16">
                    <div className="text-center">
                        <h2 className="font-display text-3xl md:text-4xl elegant-text mb-8">
                            {t('schedule.venueTitle')}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="text-center">
                                <p className="text-sm muted-text uppercase tracking-wider mb-2">{t('general.location')}</p>
                                <p className="font-display text-lg elegant-text">{t('home.venueLocation').replace('Location: ', '')}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm muted-text uppercase tracking-wider mb-2">Parking</p>
                                <p className="font-display text-lg elegant-text">{t('schedule.parking')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Elegant */}
                <div className="text-center">
                    <p className="text-lg muted-text mb-8 font-light">
                        {t('schedule.lookingForward')}
                    </p>
                    <Link
                        to="/rsvp"
                        className="btn-elegant btn-primary"
                    >
                        {t('home.rsvpButton')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Schedule;