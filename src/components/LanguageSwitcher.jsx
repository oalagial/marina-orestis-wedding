import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
                onClick={() => changeLanguage('el')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    i18n.language === 'el'
                        ? 'bg-white text-pink-600 shadow-sm font-semibold'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
                title="Ελληνικά"
            >
                ΕΛ
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    i18n.language === 'en'
                        ? 'bg-white text-pink-600 shadow-sm font-semibold'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
                title="English"
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
