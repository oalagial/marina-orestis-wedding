import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
                onClick={() => changeLanguage('el')}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    i18n.language === 'el'
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
                title="Ελληνικά"
            >
                ΕΛ
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    i18n.language === 'en'
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
                title="English"
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
