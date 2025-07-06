import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQs = () => {
    const { t } = useTranslation();
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqCategories = [
        {
            title: t('faqs.categories.general'),
            icon: "❓",
            faqs: [
                {
                    question: t('faqs.general.when.question'),
                    answer: t('faqs.general.when.answer')
                },
                {
                    question: t('faqs.general.where.question'),
                    answer: t('faqs.general.where.answer')
                },
                {
                    question: t('faqs.general.time.question'),
                    answer: t('faqs.general.time.answer')
                }
            ]
        },
        {
            title: t('faqs.categories.attire'),
            icon: "👗",
            faqs: [
                {
                    question: t('faqs.attire.dress.question'),
                    answer: t('faqs.attire.dress.answer')
                },
                {
                    question: t('faqs.attire.weather.question'),
                    answer: t('faqs.attire.weather.answer')
                },
                {
                    question: t('faqs.attire.shoes.question'),
                    answer: t('faqs.attire.shoes.answer')
                }
            ]
        },
        {
            title: t('faqs.categories.logistics'),
            icon: "🚗",
            faqs: [
                {
                    question: t('faqs.logistics.parking.question'),
                    answer: t('faqs.logistics.parking.answer')
                },
                {
                    question: t('faqs.logistics.transport.question'),
                    answer: t('faqs.logistics.transport.answer')
                },
                {
                    question: t('faqs.logistics.accommodation.question'),
                    answer: t('faqs.logistics.accommodation.answer')
                }
            ]
        },
        {
            title: t('faqs.categories.ceremony'),
            icon: "💒",
            faqs: [
                {
                    question: t('faqs.ceremony.plusOne.question'),
                    answer: t('faqs.ceremony.plusOne.answer')
                },
                {
                    question: t('faqs.ceremony.children.question'),
                    answer: t('faqs.ceremony.children.answer')
                },
                {
                    question: t('faqs.ceremony.gifts.question'),
                    answer: t('faqs.ceremony.gifts.answer')
                }
            ]
        },
        {
            title: t('faqs.categories.food'),
            icon: "🍽️",
            faqs: [
                {
                    question: t('faqs.food.dietary.question'),
                    answer: t('faqs.food.dietary.answer')
                },
                {
                    question: t('faqs.food.menu.question'),
                    answer: t('faqs.food.menu.answer')
                },
                {
                    question: t('faqs.food.drinks.question'),
                    answer: t('faqs.food.drinks.answer')
                }
            ]
        }
    ];

    const toggleFAQ = (categoryIndex, faqIndex) => {
        const key = `${categoryIndex}-${faqIndex}`;
        setOpenFAQ(openFAQ === key ? null : key);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    {t('faqs.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
                    {t('faqs.subtitle')}
                </p>
                <div className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200">
                    <span className="text-2xl mr-3">💡</span>
                    <span className="font-serif text-lg text-gray-800">{t('faqs.helpMessage')}</span>
                </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        {/* Category Header */}
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-4 border-b border-gray-100">
                            <h2 className="text-2xl font-serif font-bold text-gray-800 flex items-center">
                                <span className="text-3xl mr-3">{category.icon}</span>
                                {category.title}
                            </h2>
                        </div>

                        {/* FAQ Items */}
                        <div className="divide-y divide-gray-100">
                            {category.faqs.map((faq, faqIndex) => {
                                const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                                return (
                                    <div key={faqIndex} className="px-6 py-4">
                                        <button
                                            onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                                            className="w-full text-left flex items-center justify-between hover:text-pink-600 transition-colors"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                                {faq.question}
                                            </h3>
                                            <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                                                ➕
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="mt-4 pr-8 animate-fade-in">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick RSVP Reminder */}
            <div className="mt-12 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                    {t('faqs.rsvpReminder.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                    {t('faqs.rsvpReminder.description')}
                </p>
                <a
                    href="/rsvp"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                    {t('faqs.rsvpReminder.button')}
                </a>
            </div>
        </div>
    );
};

export default FAQs;