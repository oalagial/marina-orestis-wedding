import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const Accomodation = () => {
	const { t } = useTranslation();
	const royalHotelMapUrl = 'https://maps.app.goo.gl/GXC7E2gmg2iCeLnV8';
    const royalHotelWebsiteUrl = 'https://www.royal-hotel.gr/';

	return (
		<div className="section-padding">
			<div className="max-w-4xl mx-auto container-padding">
				<div className="text-center mb-12">
					<h1 className="font-display-bold text-4xl md:text-5xl elegant-text mb-4">
						{t('accommodationPage.title')}
					</h1>
					<div className="w-16 h-px bg-gray-300 mx-auto"></div>
				</div>

				<div className="bg-elegant rounded-lg p-8 border border-gray-200 soft-shadow space-y-8">
					<div>
						<p className="muted-text leading-relaxed">
							{t('accommodationPage.text1')}
						</p>
						<p className="muted-text leading-relaxed mt-4">
							{t('accommodationPage.text2')}
						</p>

						<p className="muted-text leading-relaxed mt-4 whitespace-pre-line">
							<Trans i18nKey="accommodationPage.text3" />
						</p>
						<div className="mt-6 flex items-center gap-2">
							<span className="font-medium elegant-text">Google Maps:</span>
							<a
								href={royalHotelMapUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800"
								aria-label={t('accommodationPage.mapLinkHint')}
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
                        <div className="mt-2 flex items-center gap-2">
							<span className="font-medium elegant-text">Website:</span>
							<a
								href={royalHotelWebsiteUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800"
								aria-label={t('accommodationPage.mapLinkHint')}
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accomodation;
