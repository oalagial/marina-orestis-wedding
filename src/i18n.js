import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            // Navigation
            nav: {
                home: "Home",
                schedule: "Schedule",
                travel: "Travel",
                gallery: "Gallery",
                thingsToDo: "Things To Do",
                faqs: "FAQs",
                rsvp: "RSVP"
            },

            // Header
            header: {
                welcomeParty: "Welcome Party details posted! Please join us at 7:30pm on June 18th at Anestis Restaurant",
                date: "June 27, 2026",
                location: "Thessaloniki, Greece"
            },

            // Home page
            home: {
                welcomeTitle: "Welcome to Our Wedding",
                welcomeMessage: "We are delighted to invite you to celebrate our special day with us!",
                coupleNames: "Marina & Orestis",
                date: "Date: 27 June 2026",
                location: "Location: Ethereal Hall, Peraia, Thessaloniki",
                rsvpButton: "RSVP Here"
            },

            // RSVP page
            rsvp: {
                title: "RSVP",
                subtitle: "Please let us know if you will be able to attend our wedding!",
                thankYou: "Thank You!",
                thankYouMessage: "Your RSVP has been submitted successfully. We can't wait to celebrate with you!",
                submitAnother: "Submit another RSVP",

                // Form fields
                yourName: "Your Name",
                required: "*",
                email: "Email Address",
                phone: "Phone Number",
                attending: "Will you be attending?",
                attendingYes: "Yes, I'll be there!",
                attendingNo: "Sorry, I can't make it",
                plusOneName: "Plus One Name (if applicable)",
                plusOneAttending: "Will your plus one be attending?",
                plusOneAgeCategory: "Plus One Age Category",
                selectAgeCategory: "Select age category",
                adult: "Adult",
                child07: "Child (0-7)",
                child813: "Child (8-13)",
                dietaryRestrictions: "Dietary Restrictions or Allergies",
                dietaryPlaceholder: "Please let us know about any dietary restrictions, allergies, or special meal preferences",
                message: "Message for the Couple",
                messagePlaceholder: "Share your congratulations, a memory, or any special message for Marina & Orestis",
                submitting: "Submitting...",
                submit: "Submit RSVP",
                error: "There was an error submitting your RSVP. Please try again.",

                // Placeholders
                namePlaceholder: "Enter your full name",
                emailPlaceholder: "your.email@example.com",
                phonePlaceholder: "+30 123 456 7890",
                plusOnePlaceholder: "Enter plus one's name"
            },

            // Admin page
            admin: {
                title: "Wedding RSVPs",
                totalResponses: "Total Responses",
                attending: "Attending",
                notAttending: "Not Attending",
                exportCSV: "Export to CSV",
                logout: "Logout",
                guest: "Guest",
                contact: "Contact",
                plusOne: "Plus One",
                notes: "Notes",
                submitted: "Submitted",
                yes: "Yes",
                no: "No",
                dietary: "Dietary",
                messageLabel: "Message",
                loading: "Loading RSVPs...",
                adminAccess: "Admin Access",
                enterPassword: "Enter password to view RSVPs",
                adminPassword: "Admin password",
                signIn: "Sign in",
                incorrectPassword: "Incorrect password"
            }
        }
    },

    el: {
        translation: {
            // Navigation
            nav: {
                home: "Αρχική",
                schedule: "Πρόγραμμα",
                travel: "Ταξίδι",
                gallery: "Φωτογραφίες",
                thingsToDo: "Τι να κάνετε",
                faqs: "Συχνές Ερωτήσεις",
                rsvp: "Επιβεβαίωση"
            },

            // Header
            header: {
                welcomeParty: "Στοιχεία για το καλωσόρισμα αναρτήθηκαν! Παρακαλούμε ελάτε στις 7:30μμ στις 18 Ιουνίου στο εστιατόριο Ανέστης",
                date: "27 Ιουνίου 2026",
                location: "Θεσσαλονίκη, Ελλάδα"
            },

            // Home page
            home: {
                welcomeTitle: "Καλώς ήρθατε στο Γάμο μας",
                welcomeMessage: "Είμαστε ενθουσιασμένοι να σας προσκαλέσουμε να γιορτάσετε μαζί μας αυτή την ξεχωριστή μέρα!",
                coupleNames: "Μαρίνα & Ορέστης",
                date: "Ημερομηνία: 27 Ιουνίου 2026",
                location: "Τοποθεσία: Ethereal Hall, Περαία, Θεσσαλονίκη",
                rsvpButton: "Επιβεβαίωση Παρουσίας"
            },

            // RSVP page
            rsvp: {
                title: "Επιβεβαίωση Παρουσίας",
                subtitle: "Παρακαλούμε ενημερώστε μας αν θα μπορέσετε να παρευρεθείτε στο γάμο μας!",
                thankYou: "Ευχαριστούμε!",
                thankYouMessage: "Η επιβεβαίωσή σας υποβλήθηκε επιτυχώς. Ανυπομονούμε να γιορτάσουμε μαζί σας!",
                submitAnother: "Υποβολή άλλης επιβεβαίωσης",

                // Form fields
                yourName: "Το όνομά σας",
                required: "*",
                email: "Διεύθυνση Email",
                phone: "Τηλέφωνο",
                attending: "Θα παρευρεθείτε;",
                attendingYes: "Ναι, θα είμαι εκεί!",
                attendingNo: "Λυπάμαι, δεν μπορώ να έρθω",
                plusOneName: "Όνομα συνοδού (εάν υπάρχει)",
                plusOneAttending: "Θα παρευρεθεί ο σύντροφός σας;",
                plusOneAgeCategory: "Κατηγορία ηλικίας συνοδού",
                selectAgeCategory: "Επιλέξτε κατηγορία ηλικίας",
                adult: "Ενήλικας",
                child07: "Παιδί (0-7)",
                child813: "Παιδί (8-13)",
                dietaryRestrictions: "Διατροφικοί περιορισμοί ή αλλεργίες",
                dietaryPlaceholder: "Παρακαλούμε ενημερώστε μας για τυχόν διατροφικούς περιορισμούς, αλλεργίες ή ειδικές προτιμήσεις",
                message: "Μήνυμα για το ζευγάρι",
                messagePlaceholder: "Μοιραστείτε τα συγχαρητήριά σας, μια ανάμνηση ή κάποιο ειδικό μήνυμα για τη Μαρίνα και τον Ορέστη",
                submitting: "Υποβολή...",
                submit: "Υποβολή",
                error: "Υπήρξε σφάλμα κατά την υποβολή. Παρακαλούμε δοκιμάστε ξανά.",

                // Placeholders
                namePlaceholder: "Εισάγετε το πλήρες όνομά σας",
                emailPlaceholder: "το.email@example.com",
                phonePlaceholder: "+30 123 456 7890",
                plusOnePlaceholder: "Εισάγετε το όνομα του συνοδού"
            },

            // Admin page
            admin: {
                title: "Επιβεβαιώσεις Γάμου",
                totalResponses: "Συνολικές Απαντήσεις",
                attending: "Παρευρίσκονται",
                notAttending: "Δεν Παρευρίσκονται",
                exportCSV: "Εξαγωγή CSV",
                logout: "Αποσύνδεση",
                guest: "Καλεσμένος",
                contact: "Επικοινωνία",
                plusOne: "Σύντροφος",
                notes: "Σημειώσεις",
                submitted: "Υποβλήθηκε",
                yes: "Ναι",
                no: "Όχι",
                dietary: "Διατροφικά",
                messageLabel: "Μήνυμα",
                loading: "Φόρτωση επιβεβαιώσεων...",
                adminAccess: "Πρόσβαση Διαχειριστή",
                enterPassword: "Εισάγετε κωδικό για προβολή επιβεβαιώσεων",
                adminPassword: "Κωδικός διαχειριστή",
                signIn: "Σύνδεση",
                incorrectPassword: "Λάθος κωδικός"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'el',
        lng: 'el',
        debug: false,

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
