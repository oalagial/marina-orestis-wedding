import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <main className="min-h-screen">
            {/* Hero Section - Elegant */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                
                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-4 animate-fade-in">
                    <h1 className="font-display-bold text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
                        {t('home.coupleNames')}
                    </h1>
                    <div className="w-24 h-px bg-white/70 mx-auto mb-10"></div>
                    <p className="text-lg md:text-xl font-light tracking-widest mb-4 uppercase">
                        {t('header.date')}
                    </p>
                    <p className="text-base md:text-lg font-light tracking-wide opacity-90">
                        {t('header.location')}
                    </p>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-px h-16 bg-white/50"></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full mx-auto -mt-1"></div>
                </div>
            </div>

            {/* Main Content - Sophisticated */}
            <div className="mt-10 bg-white">
                <div className="max-w-6xl mx-auto container-padding">
                    {/* Welcome Message */}
                    <div className="text-center mb-16 animate-slide-up">
                        {/* <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 elegant-text">
                            {t('home.welcomeMessage')}
                        </h2> */}
                        {/* <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div> */}
                        <p className="text-xl md:text-3xl muted-text leading-relaxed-plus max-w-3xl mx-auto font-light">
                            {t('home.welcomeMessage')}
                        </p>
                    </div>

                    {/* Event Details */}
                    <div className="mb-20">
                        <div className="bg-elegant rounded-none p-12 md:p-16 soft-shadow border border-elegant">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div className="text-center md:text-left">
                                    <p className="text-sm muted-text tracking-widest mb-4 font-medium">{t('general.when')}</p>
                                    <h3 className="font-display text-3xl md:text-4xl elegant-text mb-2">
                                        {t('header.date')}
                                    </h3>
                                    <p className="muted-text text-lg">{t('header.datetime')}</p>
                                </div>
                                
                                <div className="text-center md:text-left">
                                    <p className="text-sm muted-text tracking-widest mb-4 font-medium">{t('general.where')}</p>
                                    <h3 className="font-display text-3xl md:text-4xl elegant-text mb-2">
                                        Ethereal Hall
                                    </h3>
                                    <p className="muted-text text-lg">{t('header.exactLocation')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mb-16">
                       <div className="mb-8">
                        <span className="text-lg muted-text mb-8 font-light">
                            {t('home.countdownMessagePart1')}
                        </span> <span className="text-lg muted-text mb-8 font-medium">
                            {t('home.countdownMessagePart2')}
                        </span>
                       </div>
                       
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href="/rsvp"
                                className="btn-elegant btn-primary inline-block"
                            >
                                {t('home.rsvpButton')}
                            </a>
                        </div>
                    </div>

                    {/* Decorative Section */}
                    <div className="text-center py-16 border-t border-elegant">
                        <div className="w-24 h-px bg-gray-300 mx-auto"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
