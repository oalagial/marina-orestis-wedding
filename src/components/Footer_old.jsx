import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="glass-effect border-t border-white/20 mt-20">
      <div className="max-w-6xl mx-auto container-padding py-16">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h3 className="font-display-bold text-3xl md:text-4xl gradient-text mb-4">
              Marina & Orestis
            </h3>
            <p className="text-gray-600 font-light italic text-lg">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Wedding Info - Minimal */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 mb-3">
                <span className="text-white text-sm">�</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Date</p>
              <p className="font-medium text-gray-800">{t('header.date')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 mb-3">
                <span className="text-white text-sm">�</span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</p>
              <p className="font-medium text-gray-800">{t('header.location')}</p>
            </div>
          </div>

          {/* Minimal Contact */}
          <div className="mb-12">
            <p className="text-gray-600 text-sm mb-4">
              {t('footer.contactInfo')}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-6 mb-8 text-2xl opacity-50">
            <span>💕</span>
            <span>💒</span>
            <span>🎉</span>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200/50 pt-8">
            <p className="text-xs text-gray-500 font-light tracking-wide">
              © 2025 Marina & Orestis • {t('footer.madeWithLove')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
