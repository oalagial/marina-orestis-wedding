import React from 'react';
import { useTranslation } from 'react-i18next';

const Travel = () => {
    const { t } = useTranslation();

    const accommodations = [
        {
            name: t('travel.hotel1.name'),
            description: t('travel.hotel1.description'),
            distance: t('travel.hotel1.distance'),
            color: "bg-white border-gray-200"
        },
        {
            name: t('travel.hotel2.name'),
            description: t('travel.hotel2.description'),
            distance: t('travel.hotel2.distance'),
            color: "bg-white border-gray-200"
        },
        {
            name: t('travel.hotel3.name'),
            description: t('travel.hotel3.description'),
            distance: t('travel.hotel3.distance'),
            color: "bg-white border-gray-200"
        }
    ];

    const transportation = [
        {
            title: t('travel.transport.airport.title'),
            description: t('travel.transport.airport.description')
        },
        {
            title: t('travel.transport.car.title'),
            description: t('travel.transport.car.description')
        },
        {
            title: t('travel.transport.taxi.title'),
            description: t('travel.transport.taxi.description')
        }
    ];

    return (
        <div className="section-padding">
            <div className="max-w-6xl mx-auto container-padding">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="font-display-bold text-4xl md:text-5xl elegant-text mb-4">
                        {t('travel.title')}
                    </h1>
                    <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl muted-text font-light max-w-3xl mx-auto">
                        {t('travel.subtitle')}
                    </p>
                </div>

                {/* Venue Location */}
                <div className="mb-16 bg-elegant rounded-sm p-8 border border-gray-200 soft-shadow">
                    <div className="text-center mb-6">
                        <h2 className="font-display text-3xl md:text-4xl elegant-text mb-4">
                            {t('travel.venue.title')}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm muted-text uppercase tracking-wider mb-2">Venue</p>
                                <h3 className="font-display text-xl elegant-text mb-2">Ethereal Hall</h3>
                                <p className="muted-text">{t('travel.venue.address')}</p>
                            </div>
                            <div>
                                <p className="text-sm muted-text uppercase tracking-wider mb-2">Parking</p>
                                <h3 className="font-display text-lg elegant-text mb-2">{t('travel.venue.parking')}</h3>
                                <p className="muted-text">{t('travel.venue.parkingDetails')}</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm p-6 soft-shadow border border-gray-200">
                            <h3 className="font-display text-lg elegant-text mb-4">{t('travel.venue.directions')}</h3>
                            <div className="space-y-2 muted-text">
                                <p>• {t('travel.venue.direction1')}</p>
                                <p>• {t('travel.venue.direction2')}</p>
                                <p>• {t('travel.venue.direction3')}</p>
                            </div>
                            <button className="mt-4 btn-elegant btn-primary">
                                {t('travel.venue.mapButton')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Transportation */}
                <div className="mb-16">
                    <h2 className="font-display text-3xl elegant-text text-center mb-8">
                        {t('travel.transport.title')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {transportation.map((item, index) => (
                            <div key={index} className="bg-white rounded-sm p-6 soft-shadow border border-gray-200 hover:border-gray-300 transition-colors">
                                <div className="text-center">
                                    <h3 className="font-display text-xl elegant-text mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="muted-text leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accommodations */}
                <div className="mb-16">
                    <h2 className="font-display text-3xl elegant-text text-center mb-8">
                        {t('travel.accommodations.title')}
                    </h2>
                    <p className="text-lg muted-text text-center mb-12 max-w-2xl mx-auto">
                        {t('travel.accommodations.subtitle')}
                    </p>
                    <div className="space-y-6">
                        {accommodations.map((hotel, index) => (
                            <div key={index} className={`rounded-sm p-6 border ${hotel.color} soft-shadow hover:border-gray-300 transition-colors`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <h3 className="font-display text-xl md:text-2xl elegant-text">
                                        {hotel.name}
                                    </h3>
                                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-sm border border-gray-200 font-medium muted-text">
                                        {hotel.distance}
                                    </span>
                                </div>
                                <p className="muted-text leading-relaxed mb-4">
                                    {hotel.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button className="btn-elegant btn-primary">
                                        {t('travel.accommodations.bookButton')}
                                    </button>
                                    <button className="btn-elegant btn-secondary">
                                        {t('travel.accommodations.viewButton')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Airport Information */}
                <div className="bg-elegant rounded-sm p-8 border border-gray-200 soft-shadow">
                    <h2 className="font-display text-3xl elegant-text text-center mb-6">
                        {t('travel.airport.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-display text-xl elegant-text mb-4">
                                {t('travel.airport.nearest')}
                            </h3>
                            <p className="muted-text mb-4">{t('travel.airport.nearestDetails')}</p>
                            <div className="space-y-2 muted-text">
                                <p>• {t('travel.airport.distance')}</p>
                                <p>• {t('travel.airport.duration')}</p>
                                <p>• {t('travel.airport.options')}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-xl elegant-text mb-4">
                                {t('travel.airport.transfer')}
                            </h3>
                            <div className="space-y-3">
                                <div className="bg-white rounded-sm p-4 border border-gray-200">
                                    <h4 className="font-medium elegant-text">{t('travel.airport.bus')}</h4>
                                    <p className="muted-text">{t('travel.airport.busDetails')}</p>
                                </div>
                                <div className="bg-white rounded-sm p-4 border border-gray-200">
                                    <h4 className="font-medium elegant-text">{t('travel.airport.taxi')}</h4>
                                    <p className="muted-text">{t('travel.airport.taxiDetails')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;