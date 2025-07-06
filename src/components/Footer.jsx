import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-pink-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Wedding Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-3">
              {t('footer.weddingInfo')}
            </h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📅</span>
                {t('header.date')}
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📍</span>
                {t('header.location')}
              </p>
            </div>
          </div>

          {/* Couple */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">
              Marina & Orestis
            </h3>
            <p className="text-gray-600 italic">
              {t('footer.tagline')}
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="text-2xl">💕</span>
              <span className="text-2xl">💒</span>
              <span className="text-2xl">🎉</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-3">
              {t('footer.questions')}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('footer.contactInfo')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Marina & Orestis Wedding • {t('footer.madeWithLove')}
          </p>
        </div>
      </div>
    </footer>
  );
}
