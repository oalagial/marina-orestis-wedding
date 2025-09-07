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
        { id: 'all', name: t('gallery.categories.all') },
        { id: 'engagement', name: t('gallery.categories.engagement') },
        { id: 'couple', name: t('gallery.categories.couple') },
        { id: 'venues', name: t('gallery.categories.venues') },
    ];

    const filteredItems = selectedCategory === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="section-padding">
            <div className="max-w-6xl mx-auto container-padding">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="font-display-bold text-4xl md:text-5xl elegant-text mb-4">
                        {t('gallery.title')}
                    </h1>
                    <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl muted-text font-light max-w-3xl mx-auto">
                        {t('gallery.subtitle')}
                    </p>
                    <div className="mt-8 inline-flex items-center px-6 py-3 bg-elegant rounded-sm border border-gray-200">
                        <span className="font-display text-lg elegant-text">{t('gallery.memoryMessage')}</span>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-sm transition-all uppercase tracking-wider text-sm font-medium ${
                                    selectedCategory === category.id
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                                }`}
                            >
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
                                <div key={item.id} className="group relative overflow-hidden rounded-sm soft-shadow hover:shadow-md transition-all duration-300">
                                    <div className="aspect-w-4 aspect-h-3">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white font-display text-lg">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="font-display text-xl elegant-text mb-2">
                                {t('gallery.noPhotos')}
                            </h3>
                            <p className="muted-text">
                                {t('gallery.noPhotosDesc')}
                            </p>
                        </div>
                    )}
                </div>

                {/* Coming Soon Section */}
                <div className="bg-elegant rounded-sm p-8 mb-16 border border-gray-200 soft-shadow">
                    <div className="text-center">
                        <h2 className="font-display text-3xl elegant-text mb-4">
                            {t('gallery.comingSoon.title')}
                        </h2>
                        <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
                        <p className="text-lg muted-text mb-6 max-w-2xl mx-auto">
                            {t('gallery.comingSoon.description')}
                        </p>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                                <div className="bg-white rounded-sm p-4 soft-shadow border border-gray-200">
                                    <h3 className="font-display text-lg elegant-text mb-1">{t('gallery.comingSoon.ceremony')}</h3>
                                    <p className="text-sm muted-text">{t('gallery.comingSoon.ceremonyDesc')}</p>
                                </div>
                                <div className="bg-white rounded-sm p-4 soft-shadow border border-gray-200">
                                    <h3 className="font-display text-lg elegant-text mb-1">{t('gallery.comingSoon.reception')}</h3>
                                    <p className="text-sm muted-text">{t('gallery.comingSoon.receptionDesc')}</p>
                                </div>
                                <div className="bg-white rounded-sm p-4 soft-shadow border border-gray-200">
                                    <h3 className="font-display text-lg elegant-text mb-1">{t('gallery.comingSoon.party')}</h3>
                                    <p className="text-sm muted-text">{t('gallery.comingSoon.partyDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Share Your Photos */}
                <div className="bg-elegant rounded-sm p-8 border border-gray-200 soft-shadow">
                    <div className="text-center">
                        <h2 className="font-display text-3xl elegant-text mb-4">
                            {t('gallery.sharePhotos.title')}
                        </h2>
                        <p className="text-lg muted-text mb-6 max-w-2xl mx-auto">
                            {t('gallery.sharePhotos.description')}
                        </p>
                        <div className="bg-white rounded-sm p-6 max-w-md mx-auto soft-shadow border border-gray-200">
                            <h3 className="font-display text-xl elegant-text mb-3">
                                {t('gallery.sharePhotos.hashtag')}
                            </h3>
                            <div className="bg-gray-100 rounded-sm p-3 font-mono text-lg elegant-text mb-4">
                                #MarinaOrestis2026
                            </div>
                            <p className="text-sm muted-text">
                                {t('gallery.sharePhotos.hashtagDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;