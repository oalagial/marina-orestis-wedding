import React from 'react';
import { useTranslation } from "react-i18next";

const Photos = () => {
      const { t } = useTranslation();

    return (
        <div className="section-padding min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg p-8 soft-shadow flex flex-col items-center">
                {/* QR Code placeholder */}
                <div className="mb-6">
                    <img src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?semt=ais_hybrid&w=740&q=80" alt="QR Code" className="w-94 h-94 object-contain" />
                </div>
                <p className="text-lg text-center font-display elegant-text">
                    {t('gallery.instructions')}
                </p>
            </div>
        </div>
    );
};

export default Photos;