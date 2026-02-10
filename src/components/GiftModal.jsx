import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GiftModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-display elegant-text">Gift Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-light"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 space-y-6">
          {/* Main message */}
          <p className="text-center text-lg font-light elegant-text">
            Your presence is the greatest gift!
          </p>
          <p className="text-center text-sm muted-text">
            If you'd like to give something, we've set up a bank account for gifts.
          </p>

          {/* Bank accounts */}
          <div className="space-y-6">
            {/* Revolut Account */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-display font-semibold text-base mb-3 elegant-text">
                Revolut Account Details:
              </h3>
              <div className="space-y-2 text-sm font-light">
                <div>
                  <p className="text-gray-600">IBAN:</p>
                  <p className="font-mono text-base break-all">IE92 REVO 9903 6007 0177 09</p>
                </div>
                <div>
                  <p className="text-gray-600">BIC/SWIFT:</p>
                  <p className="font-mono text-base">REVOIE23</p>
                </div>
              </div>
            </div>

            {/* Alpha Bank Account */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-display font-semibold text-base mb-3 elegant-text">
                Alpha Bank Account Details:
              </h3>
              <div className="space-y-2 text-sm font-light">
                <div>
                  <p className="text-gray-600">IBAN:</p>
                  <p className="font-mono text-base break-all">GR0201405170517002188001411</p>
                </div>
                <div>
                  <p className="text-gray-600">BIC/SWIFT:</p>
                  <p className="font-mono text-base">CRBAGRAA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900 font-light">
              💝 <strong>Please include your name in the transfer notes</strong> so we can thank you!
            </p>
          </div>

          {/* Close button */}
          {/* <button
            onClick={onClose}
            className="w-full btn-elegant btn-primary mt-6"
          >
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
}
