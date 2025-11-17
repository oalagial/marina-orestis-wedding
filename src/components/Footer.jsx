import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-elegant border-t border-elegant mt-20">
      <div className="max-w-6xl mx-auto container-padding py-16">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h3 className="font-display-bold text-3xl md:text-4xl elegant-text mb-4">
              {t('footer.coupleNames')}
            </h3>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-4"></div>
            <p className="muted-text font-light italic text-lg">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Wedding Info - Elegant */}
          <div className="grid md:grid-cols-2 gap-12 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-sm muted-text tracking-widest mb-3 font-medium">{t('general.when')}</p>
              <p className="font-display text-xl elegant-text">{t('header.date')}</p>
            </div>
            <div className="text-center">
              <p className="text-sm muted-text tracking-widest mb-3 font-medium">{t('general.where')}</p>
              <p className="font-display text-xl elegant-text">{t('header.location')}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <p className="muted-text text-sm mb-4">
              {t('footer.contactInfo')}
            </p>
          </div>

          {/* Decorative Element */}
          <div className="mb-8">
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-xs muted-text font-light tracking-wide">
              © 2025 {t('footer.coupleNames')} • {t('footer.madeWithLove')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
