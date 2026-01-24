import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { db } from "../firebase";
import { collection, addDoc, query, orderBy, where, getDocs, updateDoc, serverTimestamp, increment } from "firebase/firestore";

const Photos = () => {
      const { t } = useTranslation();

    return (
        <div className="section-padding min-h-screen flex flex-col items-center">
            <div className="bg-white rounded-lg p-8 soft-shadow flex flex-col items-center">
                <p className="text-lg text-center font-bold elegant-text mb-12">
                    {t('gallery.instructions1')}
                </p>
                {/* QR Code placeholder */}
                <div className="mb-6">
                    <img src="../../public/images/knipsmig-event-qr.png" alt="QR Code" className="w-94 h-94 object-contain" />
                </div>
                {/* <p className="text-lg text-center muted-text mb-6">
                    {t('gallery.instructions2')}
                </p> */}
            </div>

                        {/* Best Dancer Voting Section */}
                        <BestDancerVoting />
        </div>
    );
};

export default Photos;

function BestDancerVoting() {
    const { t } = useTranslation();
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newName, setNewName] = useState("");
    const [votedFor, setVotedFor] = useState(new Set());

    const coll = collection(db, "best_dancer_votes");
    const STORAGE_KEY = "best_dancer_voted";

    const loadOptions = async () => {
        try {
            setLoading(true);
            const q = query(coll, orderBy("count", "desc"));
            const snap = await getDocs(q);
            const data = snap.docs.map(d => ({ id: d.id, ...(d.data()) }));
            setOptions(data);
        } catch (e) {
            console.error(e);
            setError(t('gallery.bestDancer.loadError', { defaultValue: 'Failed to load votes.' }));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Load voted list from localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setVotedFor(new Set(JSON.parse(stored)));
        }
        loadOptions();
    }, []);

    const voteFor = async (nameRaw) => {
        const name = (nameRaw || "").trim();
        if (!name || votedFor.has(name)) return;
        try {
            // Try to find existing option by name
            const q = query(coll, where("name", "==", name));
            const snap = await getDocs(q);
            if (snap.empty) {
                await addDoc(coll, { name, count: 1, createdAt: serverTimestamp() });
            } else {
                const docRef = snap.docs[0].ref;
                await updateDoc(docRef, { count: increment(1) });
            }
            
            // Mark as voted and save to localStorage
            const newVoted = new Set(votedFor);
            newVoted.add(name);
            setVotedFor(newVoted);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(newVoted)));
            
            setNewName("");
            await loadOptions();
        } catch (e) {
            console.error(e);
            setError(t('gallery.bestDancer.voteError'));
        }
    };

    return (
        <div className="max-w-2xl w-full bg-white rounded-lg p-8 mt-8 soft-shadow border border-elegant">
            <h2 className="font-display-bold text-2xl elegant-text mb-2">
                {t('gallery.bestDancer.title')}
            </h2>
            <p className="muted-text mb-6">
                {t('gallery.bestDancer.desc')}
            </p>

            {/* Add new option */}
            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder={t('gallery.bestDancer.placeholder')}
                    className="form-input-rounded flex-1"
                    disabled={votedFor.has(newName.trim())}
                />
                <button
                    className="btn-elegant btn-primary"
                    onClick={() => voteFor(newName)}
                    disabled={!newName.trim() || votedFor.has(newName.trim())}
                >
                    {t('gallery.bestDancer.add')}
                </button>
            </div>

            {/* Existing options */}
            {loading ? (
                <div className="text-center muted-text">{t('general.loading', { defaultValue: 'Loading...' })}</div>
            ) : error ? (
                <div className="text-center text-red-600">{error}</div>
            ) : options.length === 0 ? (
                <div className="text-center muted-text">{t('gallery.bestDancer.noOptions')}</div>
            ) : (
                <div>
                    <div className="text-sm muted-text mb-4 text-center font-medium">
                        {t('gallery.bestDancer.totalVotes')}{options.reduce((sum, opt) => sum + (opt.count || 0), 0)}
                    </div>
                    <ul className="space-y-4">
                        {options.map((opt, idx) => {
                            const totalVotes = options.reduce((sum, o) => sum + (o.count || 0), 0);
                            const percentage = totalVotes > 0 ? Math.round(((opt.count || 0) / totalVotes) * 100) : 0;
                            const medals = ['🥇', '🥈', '🥉'];
                            const medal = idx < 3 ? medals[idx] : '';
                            return (
                                <li key={opt.id} className="bg-gradient-to-r from-elegant to-white rounded-lg p-4 border border-elegant hover:shadow-lg transition-shadow">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            {medal && <span className="text-2xl">{medal}</span>}
                                            <div>
                                                <p className="font-medium elegant-text text-lg">{opt.name}</p>
                                                <p className="text-xs muted-text">{opt.count || 0} {opt.count === 1 ? 'vote' : 'votes'} • {percentage}%</p>
                                            </div>
                                        </div>
                                        {!votedFor.has(opt.name) && (
                                            <button 
                                                className="btn-elegant btn-primary text-xs whitespace-nowrap ml-2" 
                                                onClick={() => voteFor(opt.name)}
                                            >
                                                👍 {t('gallery.bestDancer.vote')}
                                            </button>
                                        )}
                                    </div>
                                    {/* Progress bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div 
                                            className="bg-gradient-to-r from-accent-text to-yellow-500 h-full transition-all duration-300"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}