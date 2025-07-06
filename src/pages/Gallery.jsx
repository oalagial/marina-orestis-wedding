import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Placeholder gallery data - replace with actual photos
    const galleryItems = [
        { id: 1, category: 'engagement', title: t('gallery.engagement1'), src: '/images/ring-1.jpg' },
        { id: 2, category: 'engagement', title: t('gallery.engagement2'), src: '/images/ring-2.jpg' },
        { id: 3, category: 'couple', title: t('gallery.couple1'), src: '/images/ring-1.jpg' },
        { id: 4, category: 'couple', title: t('gallery.couple2'), src: '/images/ring-2.jpg' },
        { id: 5, category: 'venues', title: t('gallery.venue1'), src: '/images/ring-1.jpg' },
        { id: 6, category: 'venues', title: t('gallery.venue2'), src: '/images/ring-2.jpg' },
    ];

    const categories = [
        { id: 'all', name: t('gallery.categories.all'), icon: '🖼️' },
        { id: 'engagement', name: t('gallery.categories.engagement'), icon: '💍' },
        { id: 'couple', name: t('gallery.categories.couple'), icon: '💕' },
        { id: 'venues', name: t('gallery.categories.venues'), icon: '🏛️' },
    ];

    const filteredItems = selectedCategory === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    {t('gallery.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
                    {t('gallery.subtitle')}
                </p>
                <div className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200">
                    <span className="text-2xl mr-3">📸</span>
                    <span className="font-serif text-lg text-gray-800">{t('gallery.memoryMessage')}</span>
                </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center px-6 py-3 rounded-full transition-all ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-pink-300 hover:text-pink-600'
                            }`}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="mb-16">
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="aspect-w-4 aspect-h-3">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-serif font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <span className="text-6xl mb-4 block">📷</span>
                        <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                            {t('gallery.noPhotos')}
                        </h3>
                        <p className="text-gray-600">
                            {t('gallery.noPhotosDesc')}
                        </p>
                    </div>
                )}
            </div>

            {/* Coming Soon Section */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-16 border border-pink-200">
                <div className="text-center">
                    <span className="text-6xl mb-6 block">🎉</span>
                    <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                        {t('gallery.comingSoon.title')}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        {t('gallery.comingSoon.description')}
                    </p>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <span className="text-2xl mb-2 block">📱</span>
                                <h3 className="font-bold text-gray-800 mb-1">{t('gallery.comingSoon.ceremony')}</h3>
                                <p className="text-sm text-gray-600">{t('gallery.comingSoon.ceremonyDesc')}</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <span className="text-2xl mb-2 block">🥂</span>
                                <h3 className="font-bold text-gray-800 mb-1">{t('gallery.comingSoon.reception')}</h3>
                                <p className="text-sm text-gray-600">{t('gallery.comingSoon.receptionDesc')}</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <span className="text-2xl mb-2 block">💃</span>
                                <h3 className="font-bold text-gray-800 mb-1">{t('gallery.comingSoon.party')}</h3>
                                <p className="text-sm text-gray-600">{t('gallery.comingSoon.partyDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share Your Photos */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <div className="text-center">
                    <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                        {t('gallery.sharePhotos.title')}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        {t('gallery.sharePhotos.description')}
                    </p>
                    <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {t('gallery.sharePhotos.hashtag')}
                        </h3>
                        <div className="bg-gray-100 rounded-lg p-3 font-mono text-lg text-gray-800 mb-4">
                            #MarinaOrestis2026
                        </div>
                        <p className="text-sm text-gray-600">
                            {t('gallery.sharePhotos.hashtagDesc')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;