import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center p-2 rounded-md transition-colors ${
                    i18n.language === 'en' 
                        ? 'bg-pink-100 border-2 border-pink-500' 
                        : 'hover:bg-gray-100 border-2 border-transparent'
                }`}
                title="English"
            >
                <span className="text-2xl">🇺🇸</span>
            </button>
            <button
                onClick={() => changeLanguage('el')}
                className={`flex items-center p-2 rounded-md transition-colors ${
                    i18n.language === 'el' 
                        ? 'bg-pink-100 border-2 border-pink-500' 
                        : 'hover:bg-gray-100 border-2 border-transparent'
                }`}
                title="Ελληνικά"
            >
                <span className="text-2xl">🇬🇷</span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
