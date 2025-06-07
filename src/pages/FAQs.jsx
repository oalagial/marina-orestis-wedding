import React from 'react';

const faqs = [
    {
        question: "When is the wedding?",
        answer: "The wedding will take place on [Date] at [Venue]."
    },
    {
        question: "What should I wear?",
        answer: "The dress code is [Dress Code]."
    },
    {
        question: "Can I bring a plus one?",
        answer: "Please refer to your invitation for plus one details."
    }
];

const FAQs = () => (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
        <h1>Frequently Asked Questions</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {faqs.map((faq, idx) => (
                <li key={idx} style={{ marginBottom: '1.5rem' }}>
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default FAQs;