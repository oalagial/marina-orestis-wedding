import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import AdminLogin from '../components/AdminLogin';

const AdminRSVPs = () => {
    const [rsvps, setRsvps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authenticated = localStorage.getItem('adminAuthenticated') === 'true';
        setIsAuthenticated(authenticated);
        
        if (authenticated) {
            fetchRSVPs();
        } else {
            setLoading(false);
        }
    }, []);

    const handleLogin = (authenticated) => {
        setIsAuthenticated(authenticated);
        if (authenticated) {
            setLoading(true);
            fetchRSVPs();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminAuthenticated');
        setIsAuthenticated(false);
    };

    const fetchRSVPs = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'rsvps'));
            const rsvpData = [];
            querySnapshot.forEach((doc) => {
                rsvpData.push({
                    id: doc.id,
                    ...doc.data(),
                    // normalize timestamp to a JS Date or keep as-is
                    timestamp: doc.data().timestamp?.toDate?.() || doc.data().timestamp || null
                });
            });
            setRsvps(rsvpData);
        } catch (err) {
            console.error('Error fetching RSVPs:', err);
            setError('Failed to fetch RSVPs');
        } finally {
            setLoading(false);
        }
    };

    const exportToCSV = () => {
        const headers = [
            'Guest Name',
            'Phone',
            'Number of People',
            'Number of Children',
            'Dietary Restrictions',
            'Comment',
            'Submitted At'
        ];

        const csvRows = rsvps.map(rsvp => {
            const submittedAt = rsvp.timestamp ? new Date(rsvp.timestamp).toLocaleString() : '';
            return [
                `"${(rsvp.guestName || '').replace(/"/g, '""')}"`,
                `"${(rsvp.phone || '').replace(/"/g, '""')}"`,
                `"${(rsvp.numberOfPeople != null ? rsvp.numberOfPeople : '')}"`,
                `"${(rsvp.numberOfChildren != null ? rsvp.numberOfChildren : '')}"`,
                `"${(rsvp.dietaryRestrictions || '').replace(/"/g, '""')}"`,
                `"${(rsvp.comment || '').replace(/"/g, '""')}"`,
                `"${submittedAt}"`
            ].join(',');
        });

        const csvContent = [headers.join(','), ...csvRows].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `wedding-rsvps-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getTotalGuests = () => {
        return rsvps.reduce((sum, r) => {
            const adults = parseInt(r.numberOfPeople || 0, 10) || 0;
            const children = parseInt(r.numberOfChildren || 0, 10) || 0;
            return sum + adults + children;
        }, 0);
    };

    if (loading) return <div className="p-8 text-center">Loading RSVPs...</div>;
    if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
    
    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <div className="section-padding">
            <div className="max-w-6xl mx-auto container-padding">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-gray-800">Wedding RSVPs</h1>
                <div className="flex gap-4">
                    <button
                        onClick={exportToCSV}
                        className="btn-elegant bg-green-600 hover:bg-green-700"
                    >
                        Export to CSV
                    </button>
                    <button
                        onClick={handleLogout}
                        className="btn-elegant bg-red-600 hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Total Responses</h3>
                    <p className="text-2xl font-bold text-gray-600">{rsvps.length}</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Total Guests</h3>
                    <p className="text-2xl font-bold text-gray-600">{getTotalGuests()}</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Avg Guests / Response</h3>
                    <p className="text-2xl font-bold text-gray-600">
                        {rsvps.length ? (getTotalGuests() / rsvps.length).toFixed(2) : '0.00'}
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Guest
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    People
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Children
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Dietary Restrictions
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Comment
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Submitted
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {rsvps.map((rsvp) => (
                                <tr key={rsvp.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {rsvp.guestName}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{rsvp.phone || '-'}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {rsvp.numberOfPeople != null ? rsvp.numberOfPeople : '0'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {rsvp.numberOfChildren != null ? rsvp.numberOfChildren : '0'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {rsvp.dietaryRestrictions || '-'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500">
                                            {rsvp.comment || '-'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {rsvp.timestamp 
                                            ? new Date(rsvp.timestamp).toLocaleDateString()
                                            : 'N/A'
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AdminRSVPs;
