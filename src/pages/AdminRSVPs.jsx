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
        // Check if user is already authenticated
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
                    timestamp: doc.data().timestamp?.toDate?.() || doc.data().timestamp
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
            'Email',
            'Phone',
            'Attending',
            'Plus One Name',
            'Plus One Attending',
            'Dietary Restrictions',
            'Message',
            'Submitted At'
        ];

        const csvContent = [
            headers.join(','),
            ...rsvps.map(rsvp => [
                `"${rsvp.guestName || ''}"`,
                `"${rsvp.email || ''}"`,
                `"${rsvp.phone || ''}"`,
                rsvp.attending ? 'Yes' : 'No',
                `"${rsvp.plusOneName || ''}"`,
                rsvp.plusOneAttending ? 'Yes' : 'No',
                `"${rsvp.dietaryRestrictions || ''}"`,
                `"${rsvp.message || ''}"`,
                `"${rsvp.timestamp ? new Date(rsvp.timestamp).toLocaleString() : ''}"`
            ].join(','))
        ].join('\n');

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

    const getAttendingCount = () => {
        const attending = rsvps.filter(rsvp => rsvp.attending).length;
        const plusOnes = rsvps.filter(rsvp => rsvp.plusOneAttending).length;
        return attending + plusOnes;
    };

    if (loading) return <div className="p-8 text-center">Loading RSVPs...</div>;
    if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
    
    // Show login form if not authenticated
    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <div className="max-w-6xl mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-gray-800">Wedding RSVPs</h1>
                <div className="flex gap-4">
                    <button
                        onClick={exportToCSV}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Export to CSV
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-blue-800">Total Responses</h3>
                    <p className="text-2xl font-bold text-blue-600">{rsvps.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-green-800">Attending</h3>
                    <p className="text-2xl font-bold text-green-600">{getAttendingCount()}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-red-800">Not Attending</h3>
                    <p className="text-2xl font-bold text-red-600">
                        {rsvps.filter(rsvp => !rsvp.attending).length}
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
                                    Attending
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Plus One
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Notes
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
                                        <div className="text-sm text-gray-900">{rsvp.email}</div>
                                        {rsvp.phone && (
                                            <div className="text-sm text-gray-500">{rsvp.phone}</div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            rsvp.attending 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {rsvp.attending ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {rsvp.plusOneName && (
                                            <div className="text-sm text-gray-900">
                                                {rsvp.plusOneName}
                                                <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    rsvp.plusOneAttending 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {rsvp.plusOneAttending ? 'Yes' : 'No'}
                                                </span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {rsvp.dietaryRestrictions && (
                                            <div className="text-sm text-gray-900 mb-1">
                                                <strong>Dietary:</strong> {rsvp.dietaryRestrictions}
                                            </div>
                                        )}
                                        {rsvp.message && (
                                            <div className="text-sm text-gray-500">
                                                <strong>Message:</strong> {rsvp.message}
                                            </div>
                                        )}
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
    );
};

export default AdminRSVPs;
