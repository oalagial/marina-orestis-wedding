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
            <div className="max-w-2xl mx-auto p-8 text-center">
                <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Thank You!</h1>
                <p className="text-lg text-gray-600">
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
                        className="text-pink-600 hover:text-pink-700 underline"
                    >
                        Submit another RSVP
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 text-center">RSVP</h1>
            <p className="text-lg text-gray-600 text-center mb-8">
                Please let us know if you will be able to attend our wedding!
            </p>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Guest Name */}
                <div>
                    <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                    </label>
                    <input
                        type="text"
                        id="guestName"
                        name="guestName"
                        value={formData.guestName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        placeholder="your.email@example.com"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        placeholder="+30 123 456 7890"
                    />
                </div>

                {/* Attending */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Will you be attending? *
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="attending"
                                value="yes"
                                checked={formData.attending === 'yes'}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                                required
                            />
                            <span className="ml-2 text-gray-700">Yes, I'll be there!</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="attending"
                                value="no"
                                checked={formData.attending === 'no'}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                                required
                            />
                            <span className="ml-2 text-gray-700">Sorry, I can't make it</span>
                        </label>
                    </div>
                </div>

                {/* Plus One */}
                <div>
                    <label htmlFor="plusOneName" className="block text-sm font-medium text-gray-700 mb-2">
                        Plus One Name (if applicable)
                    </label>
                    <input
                        type="text"
                        id="plusOneName"
                        name="plusOneName"
                        value={formData.plusOneName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Enter plus one's name"
                    />
                </div>

                {/* Plus One Attending */}
                {formData.plusOneName && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Will your plus one be attending?
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="plusOneAttending"
                                    value="yes"
                                    checked={formData.plusOneAttending === 'yes'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                                />
                                <span className="ml-2 text-gray-700">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="plusOneAttending"
                                    value="no"
                                    checked={formData.plusOneAttending === 'no'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                                />
                                <span className="ml-2 text-gray-700">No</span>
                            </label>
                        </div>
                    </div>
                )}

                {/* Plus One Age Category */}
                {formData.plusOneName && formData.plusOneAttending === 'yes' && (
                    <div>
                        <label htmlFor="plusOneAgeCategory" className="block text-sm font-medium text-gray-700 mb-2">
                            Plus One Age Category
                        </label>
                        <select
                            id="plusOneAgeCategory"
                            name="plusOneAgeCategory"
                            value={formData.plusOneAgeCategory}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
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
                    <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                        Dietary Restrictions or Allergies
                    </label>
                    <textarea
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Please let us know about any dietary restrictions, allergies, or special meal preferences"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message for the Couple
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Share your congratulations, a memory, or any special message for Marina & Orestis"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-block px-8 py-3 rounded-full font-bold text-lg shadow-lg transition ${
                            isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-pink-600 hover:bg-pink-700 text-white'
                        }`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RPSV;