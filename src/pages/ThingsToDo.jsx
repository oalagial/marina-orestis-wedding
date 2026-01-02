import React from 'react';
import { useTranslation } from 'react-i18next';

const ThingsToDo = () => {
    const { t } = useTranslation();
    const favoriteSpots = t('thingsToDo.thessaloniki.favorites', { returnObjects: true });

    return (
        <div className="section-padding">
            <div className="max-w-6xl mx-auto container-padding">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="font-display-bold text-4xl md:text-5xl elegant-text mb-4">
                        {t('thingsToDo.title')}
                    </h1>
                    <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl muted-text font-light max-w-3xl mx-auto">
                        {t('thingsToDo.subtitle')}
                    </p>
                </div>

                {/* Activities */}
                <div className="space-y-8 mb-16">
                    {/* Thessaloniki */}
                    <div className="bg-white rounded-lg p-8 soft-shadow border border-gray-200">
                        <h2 className="font-display text-2xl md:text-3xl elegant-text mb-4 flex items-center gap-2">
                            {t('thingsToDo.thessaloniki.title')}
                            <a href="https://www.google.com/search?q=Thessaloniki&rlz=1C1GCEA_enIE1155IE1155&oq=Thessaloniki&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQLhixAxiABDIRCAIQIxgnGEYYgAIYgAQYigUyBggDEEUYQTIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEINDc0N2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </h2>
                        <p className="muted-text leading-relaxed">
                            {t('thingsToDo.thessaloniki.description')}
                        </p>
                        <h3 className="font-display text-2xl elegant-text mt-6 mb-2">{t('thingsToDo.favouriteSpots')}</h3>
                        {Array.isArray(favoriteSpots) && favoriteSpots.length > 0 && (
                            <div className="mt-4 space-y-2">
                                {favoriteSpots.map((spot, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-sm md:text-base">
                                        <span className="text-gray-500">•</span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-display elegant-text text-base md:text-lg">{spot.name}</span>
                                                {spot.link && (
                                                    <a href={spot.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                            {spot.description && (
                                                <p className="muted-text text-sm md:text-base">{spot.description}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>  

                    {/* Meteora */}
                    <div className="bg-white rounded-lg p-8 soft-shadow border border-gray-200">
                        <h2 className="font-display text-2xl md:text-3xl elegant-text mb-4 flex items-center gap-2">
                            {t('thingsToDo.meteora.title')}
                            <a href="https://www.getyourguide.com/-l15524/?cmp=brand&campaign_id=16350394005&adgroup_id=141707910625&target_id=kwd-619254023419&loc_physical_ms=9197743&match_type=e&ad_id=628039778857&keyword=meteora%20get%20your%20guide&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gad_source=1&gad_campaignid=16350394005&gbraid=0AAAAADmzJCNjdAOSgKV7VxvSvKYrgmWSs&gclid=Cj0KCQiA9t3KBhCQARIsAJOcR7zk65PmxNaXJns1O3bbWTCOLsN4lMTWMI6YXJV0e-EpsyYMvNWiqj4aAgoXEALw_wcB" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </h2>
                        <p className="muted-text leading-relaxed">
                            {t('thingsToDo.meteora.description')}
                        </p>
                    </div>

                    {/* Chalkidiki */}
                    <div className="bg-white rounded-lg p-8 soft-shadow border border-gray-200">
                        <h2 className="font-display text-2xl md:text-3xl elegant-text mb-4">
                            {t('thingsToDo.chalkidiki.title')}
                        </h2>
                        <p className="muted-text leading-relaxed mb-6">
                            {t('thingsToDo.chalkidiki.intro')}
                        </p>
                        
                        <div className="space-y-6">
                            {/* Kassandra */}
                            <div className="pl-4 border-l-4 border-gray-300">
                                <h3 className="font-display text-xl elegant-text mb-2">{t('thingsToDo.chalkidiki.kassandra.title')}</h3>
                                <p className="muted-text">{t('thingsToDo.chalkidiki.kassandra.description')}</p>
                            </div>

                            {/* Sithonia */}
                            <div className="pl-4 border-l-4 border-gray-300">
                                <h3 className="font-display text-xl elegant-text mb-2">{t('thingsToDo.chalkidiki.sithonia.title')}</h3>
                                <p className="muted-text mb-3">
                                    {t('thingsToDo.chalkidiki.sithonia.description')}
                                </p>
                                <p className="muted-text mb-2">{t('thingsToDo.chalkidiki.sithonia.recommendations')}</p>
                                <ul className="list-none muted-text space-y-2">
                                    <li className="flex items-center gap-2">
                                        • {t('thingsToDo.chalkidiki.sithonia.beaches.armenistis')}
                                        <a href="https://maps.app.goo.gl/armenistis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        • {t('thingsToDo.chalkidiki.sithonia.beaches.vourvourou')}
                                        <a href="https://maps.app.goo.gl/vourvourou" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        • {t('thingsToDo.chalkidiki.sithonia.beaches.kavourotripes')}
                                        <a href="https://maps.app.goo.gl/kavourotripes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        • {t('thingsToDo.chalkidiki.sithonia.beaches.aktiPortokali')}
                                        <a href="https://maps.app.goo.gl/akti-portokali" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        • {t('thingsToDo.chalkidiki.sithonia.beaches.tristinika')}
                                        <a href="https://maps.app.goo.gl/tristinika" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Athos */}
                            <div className="pl-4 border-l-4 border-gray-300">
                                <h3 className="font-display text-xl elegant-text mb-2">{t('thingsToDo.chalkidiki.athos.title')}</h3>
                                <p className="muted-text">{t('thingsToDo.chalkidiki.athos.description')}</p>
                            </div>
                        </div>
                    </div>

                           {/* Loutra Pozar */}
                    <div className="bg-white rounded-lg p-8 soft-shadow border border-gray-200">
                        <h2 className="font-display text-2xl md:text-3xl elegant-text mb-4 flex items-center gap-2">
                            {t('thingsToDo.pozar.title')}
                            <a href="https://www.google.com/search?sca_esv=1db8b9ddc237ac31&rlz=1C1GCEA_enIE1155IE1155&sxsrf=AE3TifMBhjeV-2g6Dcq_mWH5SEjCiLqpdg:1767358598570&udm=2&fbs=AIIjpHyHEazDMB0bSBcqBbnIcz05X45wBxvoLMSAuvA7N5XagA_9NAAfDMVTsk3eaVxgX1n6kS-zJmkNguuisHgMw8YEqjx64njHjyGFMfRh3ZaEyw7X5M56RSaehxr5ecZgYdtvDwSdWaHU0WY-seyd3u2kqg3N9zF0bZzC-dABY0YIPGranZZY4UnC6VZSjJzJ6tBPRNeV4dDeOmKexlzELcJ0erF3nW3Onq9ApPRT9OFKOpuT0B0&q=%CE%9B%CE%BF%CF%85%CF%84%CE%B1+%CF%80%CE%BF%CE%B6%CE%B1%CF%81&sa=X&ved=2ahUKEwjpmdXr8-yRAxWiBdsEHSx7LB0QtKgLegQINhAB&biw=1536&bih=826&dpr=1.25" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </h2>
                        <p className="muted-text leading-relaxed mb-4">
                            {t('thingsToDo.pozar.description')}{' '}
                            Hotel: Agnanti
                            <a href="https://www.booking.com/hotel/gr/agnandi.el.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ThingsToDo;