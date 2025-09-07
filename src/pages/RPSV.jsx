import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const RPSV = () => {
    const [formData, setFormData] = useState({
        guestName: '',
        email: '',
        attending: '',
        plusOneName: '',
        plusOneAttending: '',
        plusOneAgeCategory: '',
        dietaryRestrictions: '',
        message: '',
        phone: ''
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
            // Add RSVP to Firestore
            await addDoc(collection(db, 'rsvps'), {
                ...formData,
                timestamp: new Date(),
                attending: formData.attending === 'yes',
                plusOneAttending: formData.plusOneAttending === 'yes'
            });

            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting RSVP:', err);
            setError('There was an error submitting your RSVP. Please try again.');
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
                                    email: '',
                                    attending: '',
                                    plusOneName: '',
                                    plusOneAttending: '',
                                    plusOneAgeCategory: '',
                                    dietaryRestrictions: '',
                                    message: '',
                                    phone: ''
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
                        Please let us know if you will be able to attend our wedding!
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
                        <label htmlFor="guestName" className="block text-sm font-medium muted-text mb-2 uppercase tracking-wider">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            id="guestName"
                            name="guestName"
                            value={formData.guestName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium muted-text mb-2 uppercase tracking-wider">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium muted-text mb-2 uppercase tracking-wider">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            placeholder="+30 123 456 7890"
                        />
                    </div>

                    {/* Attending */}
                    <div>
                        <label className="block text-sm font-medium muted-text mb-3 uppercase tracking-wider">
                            Will you be attending? *
                        </label>
                        <div className="space-y-3">
                            <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input
                                    type="radio"
                                    name="attending"
                                    value="yes"
                                    checked={formData.attending === 'yes'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300"
                                    required
                                />
                                <span className="ml-3 elegant-text">Yes, I'll be there!</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input
                                    type="radio"
                                    name="attending"
                                    value="no"
                                    checked={formData.attending === 'no'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300"
                                    required
                                />
                                <span className="ml-3 elegant-text">Sorry, I can't make it</span>
                            </label>
                        </div>
                    </div>

                    {/* Plus One */}
                    <div>
                        <label htmlFor="plusOneName" className="block text-sm font-medium muted-text mb-2 uppercase tracking-wider">
                            Plus One Name (if applicable)
                        </label>
                        <input
                            type="text"
                            id="plusOneName"
                            name="plusOneName"
                            value={formData.plusOneName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            placeholder="Enter plus one's name"
                        />
                    </div>

                    {/* Plus One Attending */}
                    {formData.plusOneName && (
                        <div>
                            <label className="block text-sm font-medium muted-text mb-3 uppercase tracking-wider">
                                Will your plus one be attending?
                            </label>
                            <div className="space-y-3">
                                <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="plusOneAttending"
                                        value="yes"
                                        checked={formData.plusOneAttending === 'yes'}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300"
                                    />
                                    <span className="ml-3 elegant-text">Yes</span>
                                </label>
                                <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="plusOneAttending"
                                        value="no"
                                        checked={formData.plusOneAttending === 'no'}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300"
                                    />
                                    <span className="ml-3 elegant-text">No</span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Plus One Age Category */}
                    {formData.plusOneName && formData.plusOneAttending === 'yes' && (
                        <div>
                            <label htmlFor="plusOneAgeCategory" className="block text-sm font-medium muted-text mb-2 uppercase tracking-wider">
                                Plus One Age Category
                            </label>
                            <select
                                id="plusOneAgeCategory"
                                name="plusOneAgeCategory"
                                value={formData.plusOneAgeCategory}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            >
                                <option value="">Select age category</option>
                                <option value="adult">Adult</option>
                                <option value="child-0-7">Child (0-7)</option>
                                <option value="child-8-13">Child (8-13)</option>
                            </select>
                        </div>
                    )}

                    {/* Dietary Restrictions */}
                    <div>
                        <label htmlFor="dietaryRestrictions" className="block text-sm font-medium muted-text mb-2 uppercase tracking-wider">
                            Dietary Restrictions or Allergies
                        </label>
                        <textarea
                            id="dietaryRestrictions"
                            name="dietaryRestrictions"
                            value={formData.dietaryRestrictions}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            placeholder="Please let us know about any dietary restrictions, allergies, or special meal preferences"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium muted-text mb-2 uppercase tracking-wider">
                            Message for the Couple
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                            placeholder="Share your congratulations, a memory, or any special message for Marina & Orestis"
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
                            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RPSV;