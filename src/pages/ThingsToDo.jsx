import React from 'react';
import { useTranslation } from 'react-i18next';

const ThingsToDo = () => {
    const { t } = useTranslation();

    const activities = [
        {
            title: t('thingsToDo.oldTown.title'),
            description: t('thingsToDo.oldTown.description'),
            icon: "🏛️",
            category: t('thingsToDo.categories.culture'),
            color: "bg-amber-50 border-amber-200",
            duration: t('thingsToDo.oldTown.duration')
        },
        {
            title: t('thingsToDo.beach.title'),
            description: t('thingsToDo.beach.description'),
            icon: "🏖️",
            category: t('thingsToDo.categories.nature'),
            color: "bg-blue-50 border-blue-200",
            duration: t('thingsToDo.beach.duration')
        },
        {
            title: t('thingsToDo.cuisine.title'),
            description: t('thingsToDo.cuisine.description'),
            icon: "🍽️",
            category: t('thingsToDo.categories.food'),
            color: "bg-green-50 border-green-200",
            duration: t('thingsToDo.cuisine.duration')
        },
        {
            title: t('thingsToDo.boatTour.title'),
            description: t('thingsToDo.boatTour.description'),
            icon: "⛵",
            category: t('thingsToDo.categories.adventure'),
            color: "bg-cyan-50 border-cyan-200",
            duration: t('thingsToDo.boatTour.duration')
        },
        {
            title: t('thingsToDo.museum.title'),
            description: t('thingsToDo.museum.description'),
            icon: "🏛️",
            category: t('thingsToDo.categories.culture'),
            color: "bg-purple-50 border-purple-200",
            duration: t('thingsToDo.museum.duration')
        },
        {
            title: t('thingsToDo.nightlife.title'),
            description: t('thingsToDo.nightlife.description'),
            icon: "🌃",
            category: t('thingsToDo.categories.entertainment'),
            color: "bg-pink-50 border-pink-200",
            duration: t('thingsToDo.nightlife.duration')
        }
    ];

    const recommendations = [
        {
            title: t('thingsToDo.recommendations.restaurant1.title'),
            description: t('thingsToDo.recommendations.restaurant1.description'),
            type: t('thingsToDo.recommendations.restaurant1.type'),
            icon: "🍴"
        },
        {
            title: t('thingsToDo.recommendations.bar1.title'),
            description: t('thingsToDo.recommendations.bar1.description'),
            type: t('thingsToDo.recommendations.bar1.type'),
            icon: "🍸"
        },
        {
            title: t('thingsToDo.recommendations.attraction1.title'),
            description: t('thingsToDo.recommendations.attraction1.description'),
            type: t('thingsToDo.recommendations.attraction1.type'),
            icon: "🎯"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    {t('thingsToDo.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
                    {t('thingsToDo.subtitle')}
                </p>
                <div className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200">
                    <span className="text-2xl mr-3">🗺️</span>
                    <span className="font-serif text-lg text-gray-800">{t('thingsToDo.exploreMessage')}</span>
                </div>
            </div>

            {/* Activities Grid */}
            <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
                    {t('thingsToDo.activitiesTitle')}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity, index) => (
                        <div key={index} className={`rounded-xl p-6 border-2 ${activity.color} shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                            <div className="text-center mb-4">
                                <span className="text-4xl mb-3 block">{activity.icon}</span>
                                <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border border-gray-200 mb-3">
                                    {activity.category}
                                </div>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-gray-800 mb-3 text-center">
                                {activity.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4 text-center">
                                {activity.description}
                            </p>
                            <div className="flex items-center justify-center text-sm text-gray-500">
                                <span className="mr-2">⏱️</span>
                                <span>{activity.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Local Recommendations */}
            <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">
                    {t('thingsToDo.recommendationsTitle')}
                </h2>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    {t('thingsToDo.recommendationsSubtitle')}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {recommendations.map((rec, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="text-center mb-4">
                                <span className="text-3xl mb-3 block">{rec.icon}</span>
                                <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-pink-200">
                                    {rec.type}
                                </div>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-gray-800 mb-3 text-center">
                                {rec.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {rec.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Weather & Best Time */}
            <div className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">
                    {t('thingsToDo.weather.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                        <span className="text-6xl mb-4 block">☀️</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{t('thingsToDo.weather.june')}</h3>
                        <p className="text-gray-700">{t('thingsToDo.weather.juneDesc')}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{t('thingsToDo.weather.tips')}</h3>
                        <div className="space-y-2 text-gray-700">
                            <p>• {t('thingsToDo.weather.tip1')}</p>
                            <p>• {t('thingsToDo.weather.tip2')}</p>
                            <p>• {t('thingsToDo.weather.tip3')}</p>
                            <p>• {t('thingsToDo.weather.tip4')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
                <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                    {t('thingsToDo.cta.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    {t('thingsToDo.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/travel"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        {t('thingsToDo.cta.travelButton')}
                    </a>
                    <a
                        href="/rsvp"
                        className="inline-block px-6 py-3 bg-white text-gray-700 border border-gray-300 font-bold rounded-full hover:bg-gray-50 transition-colors"
                    >
                        {t('thingsToDo.cta.rsvpButton')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThingsToDo;