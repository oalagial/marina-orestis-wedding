import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useTranslation } from 'react-i18next';

const RPSV = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        guestName: '',
        phone: '',
        numberOfPeople: '0',
        numberOfChildren: '0',
        dietaryRestrictions: '',
        comment: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Normalize numeric fields and build payload
            const payload = {
                guestName: formData.guestName.trim(),
                phone: formData.phone.trim(),
                numberOfPeople: parseInt(formData.numberOfPeople || '0', 10) || 0,
                numberOfChildren: parseInt(formData.numberOfChildren || '0', 10) || 0,
                dietaryRestrictions: formData.dietaryRestrictions.trim(),
                comment: formData.comment.trim(),
                timestamp: new Date()
            };

            await addDoc(collection(db, 'rsvps'), payload);

            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting RSVP:', err);
            const code = err?.code ? ` (${err.code})` : '';
            const message = err?.message ? ` ${err.message}` : '';
            setError(`There was an error submitting your RSVP.${code}. Please try again.${message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="section-padding">
                <div className="max-w-2xl mx-auto container-padding text-center">
                    <h1 className="font-display-bold text-4xl elegant-text mb-6">Thank You!</h1>
                    <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
                    <p className="text-lg muted-text">
                        Your RSVP has been submitted successfully. We can't wait to celebrate with you!
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({
                                    guestName: '',
                                    phone: '',
                                    numberOfPeople: '0',
                                    numberOfChildren: '0',
                                    dietaryRestrictions: '',
                                    comment: ''
                                });
                            }}
                            className="btn-elegant btn-outline"
                        >
                            Submit another RSVP
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="section-padding">
            <div className="max-w-2xl mx-auto container-padding">
                <div className="text-center mb-12">
                    <h1 className="font-display-bold text-4xl md:text-5xl elegant-text mb-4">RSVP</h1>
                    <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
                    <p className="text-lg muted-text">
                        {t('rsvp.subtitle')}
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 soft-shadow">
                    {/* Guest Name */}
                    <div>
                        <label htmlFor="guestName" className="block text-sm font-medium muted-text mb-2 tracking-wider">
                            {t('rsvp.yourName')} *
                        </label>
                        <input
                            type="text"
                            id="guestName"
                            name="guestName"
                            value={formData.guestName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium muted-text mb-2 tracking-wider">
                            {t('rsvp.phone')}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                        />
                    </div>

                    {/* Number of People */}
                    <div>
                        <label htmlFor="numberOfPeople" className="block text-sm font-medium muted-text mb-3 tracking-wider">
                            {t('rsvp.numberOfPeople')}
                        </label>
                        <div className="space-y-3">
                            <input
                                id="numberOfPeople"
                                type="number"
                                name="numberOfPeople"
                                min="0"
                                max="10"
                                value={formData.numberOfPeople}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            />
                        </div>
                    </div>

                    {/* Number of Children */}
                    <div>
                        <label htmlFor="numberOfChildren" className="block text-sm font-medium muted-text mb-3 tracking-wider">
                            {t('rsvp.numberOfChildren')}
                        </label>
                        <div className="space-y-3">
                            <input
                                id="numberOfChildren"
                                type="number"
                                name="numberOfChildren"
                                min="0"
                                max="10"
                                value={formData.numberOfChildren}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            />
                        </div>
                    </div>

                    {/* Dietary Restrictions */}
                    <div>
                        <label htmlFor="dietaryRestrictions" className="block text-sm font-medium muted-text mb-2 tracking-wider">
                            {t('rsvp.dietaryRestrictions')}
                        </label>
                        <textarea
                            id="dietaryRestrictions"
                            name="dietaryRestrictions"
                            value={formData.dietaryRestrictions}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                        />
                    </div>

                    {/* Comment */}
                    <div>
                        <label htmlFor="comment" className="block text-sm font-medium muted-text mb-2 tracking-wider">
                            {t('rsvp.comment')}
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`btn-elegant ${
                                isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed text-white border-gray-400'
                                    : 'btn-primary'
                            }`}
                        >
                            {isSubmitting ? t('general.submitting') : t('rsvp.submit')}
                        </button>
                    </div>

                    <p className="muted-text">{t('rsvp.note')}</p>
                </form>
            </div>
        </div>
    );
};

export default RPSV;