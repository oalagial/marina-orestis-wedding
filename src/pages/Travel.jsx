import React from 'react';
import { useTranslation } from 'react-i18next';

const Travel = () => {
    const { t } = useTranslation();

    const accommodations = [
        {
            name: t('travel.hotel1.name'),
            description: t('travel.hotel1.description'),
            distance: t('travel.hotel1.distance'),
            icon: "🏨",
            color: "bg-blue-50 border-blue-200"
        },
        {
            name: t('travel.hotel2.name'),
            description: t('travel.hotel2.description'),
            distance: t('travel.hotel2.distance'),
            icon: "🏛️",
            color: "bg-purple-50 border-purple-200"
        },
        {
            name: t('travel.hotel3.name'),
            description: t('travel.hotel3.description'),
            distance: t('travel.hotel3.distance'),
            icon: "🏖️",
            color: "bg-green-50 border-green-200"
        }
    ];

    const transportation = [
        {
            title: t('travel.transport.airport.title'),
            description: t('travel.transport.airport.description'),
            icon: "✈️"
        },
        {
            title: t('travel.transport.car.title'),
            description: t('travel.transport.car.description'),
            icon: "🚗"
        },
        {
            title: t('travel.transport.taxi.title'),
            description: t('travel.transport.taxi.description'),
            icon: "🚕"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    {t('travel.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
                    {t('travel.subtitle')}
                </p>
            </div>

            {/* Venue Location */}
            <div className="mb-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
                        {t('travel.venue.title')}
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-2xl mr-3 mt-1">📍</span>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 mb-2">Ethereal Hall</h3>
                                <p className="text-gray-700">{t('travel.venue.address')}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-2xl mr-3 mt-1">🚗</span>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('travel.venue.parking')}</h3>
                                <p className="text-gray-700">{t('travel.venue.parkingDetails')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="font-bold text-lg text-gray-800 mb-4">{t('travel.venue.directions')}</h3>
                        <div className="space-y-2 text-gray-700">
                            <p>• {t('travel.venue.direction1')}</p>
                            <p>• {t('travel.venue.direction2')}</p>
                            <p>• {t('travel.venue.direction3')}</p>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all">
                            {t('travel.venue.mapButton')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Transportation */}
            <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">
                    {t('travel.transport.title')}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {transportation.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="text-center">
                                <span className="text-4xl mb-4 block">{item.icon}</span>
                                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Accommodations */}
            <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">
                    {t('travel.accommodations.title')}
                </h2>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    {t('travel.accommodations.subtitle')}
                </p>
                <div className="space-y-6">
                    {accommodations.map((hotel, index) => (
                        <div key={index} className={`rounded-xl p-6 border-2 ${hotel.color} shadow-md hover:shadow-lg transition-shadow`}>
                            <div className="flex items-start">
                                <span className="text-3xl mr-4 flex-shrink-0">{hotel.icon}</span>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800">
                                            {hotel.name}
                                        </h3>
                                        <span className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 font-medium text-gray-700">
                                            {hotel.distance}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {hotel.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all">
                                            {t('travel.accommodations.bookButton')}
                                        </button>
                                        <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            {t('travel.accommodations.viewButton')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Airport Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-6">
                    {t('travel.airport.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <span className="text-2xl mr-2">✈️</span>
                            {t('travel.airport.nearest')}
                        </h3>
                        <p className="text-gray-700 mb-4">{t('travel.airport.nearestDetails')}</p>
                        <div className="space-y-2 text-gray-700">
                            <p>• {t('travel.airport.distance')}</p>
                            <p>• {t('travel.airport.duration')}</p>
                            <p>• {t('travel.airport.options')}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <span className="text-2xl mr-2">🚌</span>
                            {t('travel.airport.transfer')}
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <h4 className="font-semibold text-gray-800">{t('travel.airport.bus')}</h4>
                                <p className="text-gray-600">{t('travel.airport.busDetails')}</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <h4 className="font-semibold text-gray-800">{t('travel.airport.taxi')}</h4>
                                <p className="text-gray-600">{t('travel.airport.taxiDetails')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;