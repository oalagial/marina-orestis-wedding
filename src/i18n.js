import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            general: {
                when: 'When',
                where: 'Where',
                submitting: "Submitting...",
                location: 'Location',
            },
            // Navigation
            nav: {
                home: "Home",
                schedule: "Schedule",
                travel: "Travel",
                photos: "Photos",
                thingsToDo: "Things To Do",
                faqs: "FAQs",
                rsvp: "RSVP"
            },

            // Header
            header: {
                welcomeParty: "Welcome Party details posted! Please join us at 7:30pm on June 18th at Anestis Restaurant",
                date: "June 27, 2026",
                datetime: "Saturday, at 8:00 PM",
                location: "Thessaloniki, Greece",
                exactLocation: "Peraia, Thessaloniki",
                welcome: "Welcome to Our Wedding",
            },

            // Home page
            home: {
                welcomeTitle: "Welcome to Our Wedding",
                welcomeMessage: "We are delighted to invite you to celebrate this special day with us!",
                coupleNames: "Orestis & Marina",
                date: "Date: 27 June 2026",
                location: "Location: Ethereal Hall, Peraia, Thessaloniki",
                venueLocation: "Venue Location: Ethereal Hall, Peraia, Thessaloniki (next to Royal Hotel)",
                rsvpButton: "RSVP Here",
                viewSchedule: "View Schedule",
                countdownMessagePart1: "Please confirm your attendance at the link below ",
                countdownMessagePart2: "by 15/06/2026"
            },

            // RSVP page
            rsvp: {
                title: "RSVP",
                subtitle: "Please let us know if you will be able to attend our wedding!",
                thankYou: "Thank You!",
                thankYouMessage: "Your RSVP has been submitted successfully. We can't wait to celebrate with you!",
                submitAnother: "Submit another RSVP",

                // Form fields
                yourName: "Full Name",
                required: "*",
                phone: "Phone Number",
                numberOfPeople: 'Number of People above 12 years',
                numberOfChildren: 'Number of People under 12 years',
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
                dietaryRestrictions: "Allergies/Dietary",
                dietaryPlaceholder: "e.g. Vegetarian",
                message: "Message for the Couple",
                comment: 'Comments',
                messagePlaceholder: "Share your congratulations, a memory, or any special message for Orestis & Marina",
                submitting: "Submitting...",
                submit: "Submit RSVP",
                error: "There was an error submitting your RSVP. Please try again.",

                // Placeholders
                namePlaceholder: "Enter your full name",
                emailPlaceholder: "your.email@example.com",
                phonePlaceholder: "+30 123 456 7890",
                plusOnePlaceholder: "Enter plus one's name",
                note: 'Please inform us of any changes in the number of attendees as soon as possible at +306946172421 '
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
            },

            // Schedule page
            schedule: {
                title: "Wedding Day Schedule",
                subtitle: "Join us for a day filled with love, laughter, and celebration as we begin our journey together",
                guestsArriveGroom: "Guests Arrive at Groom's Residence",
                guestsArriveGroomDesc: "Groom preparation",
                guestsArriveBride: "Guests Arrive at Bride's Residence",
                guestsArriveBrideDesc: "Bride preparation",
                ceremony: "Wedding Ceremony", 
                ceremonyDesc: "Civil wedding ceremony in the olive grove of Ethereal Hall.",
                dinner: "Wedding Dinner",
                dinnerDesc: "Welcome drink, delicious buffet dinner, and photobooth time.",
                dancing: "Dancing & Celebration",
                dancingDesc: "Let's dance the night away! Traditional Greek music, modern hits, and lots of joy on the dance floor.",
                coupleEntrance: "Couple Entrance & Party!",
                coupleEntranceDesc: "",
                youChoose: "You choose!",
                farewell: "Farewell & Send-off",
                farewellDesc: "A magical send-off with sparklers as we conclude this perfect day and begin our new adventure.",
                venueTitle: "Venue Information",
                parking: "Free parking available on-site",
                dressCode: "Dress Code: Formal/Cocktail attire",
                lookingForward: "We can't wait to celebrate this special day with all of you!"
            },

            // Footer
            footer: {
                weddingInfo: "Wedding Information",
                tagline: "Beginning our forever together",
                questions: "Questions?",
                coupleNames: "Orestis & Marina",
                contactInfo: "For any questions or concerns, please reach out to the wedding party or check our FAQs page.",
                madeWithLove: "Made with love for our special day"
            },

            // Travel page
            travel: {
                title: "Travel & Accommodations",
                subtitle: "Everything you need to know to join us in beautiful Thessaloniki for our special day",
                venue: {
                    title: "Wedding Venue",
                    address: "Peraia, Thessaloniki 57019, Greece",
                    parking: "Parking Information",
                    parkingDetails: "Free parking available on-site with valet service",
                    directions: "How to Get There",
                    direction1: "From Thessaloniki city center: 25 minutes by car",
                    direction2: "From SKG Airport: 15 minutes by car or taxi",
                    direction3: "Public transport: Bus line X1 to Peraia",
                    mapButton: "Open in Maps"
                },
                transport: {
                    title: "Transportation Options",
                    airport: {
                        title: "Airport Transfer",
                        description: "Thessaloniki Airport (SKG) is the closest airport, just 15 minutes away from our venue."
                    },
                    car: {
                        title: "Car Rental",
                        description: "Rental cars are available at the airport and city center. Free parking at venue."
                    },
                    taxi: {
                        title: "Taxi & Rideshare",
                        description: "Taxis and Uber are readily available. Estimated cost from airport: €15-20."
                    }
                },
                accommodations: {
                    title: "Recommended Hotels",
                    subtitle: "We've selected these hotels for their comfort, location, and proximity to our venue",
                    bookButton: "Book Now",
                    viewButton: "View Details"
                },
                hotel1: {
                    name: "Mediterranean Palace Hotel",
                    description: "Luxury beachfront hotel with stunning sea views and premium amenities",
                    distance: "10 min to venue"
                },
                hotel2: {
                    name: "Electra Palace Thessaloniki",
                    description: "Historic luxury hotel in the heart of Thessaloniki with elegant rooms",
                    distance: "25 min to venue"
                },
                hotel3: {
                    name: "Peraia Beach Hotel",
                    description: "Charming seaside hotel perfect for a relaxing wedding weekend",
                    distance: "5 min to venue"
                },
                airport: {
                    title: "Airport Information",
                    nearest: "Thessaloniki Airport (SKG)",
                    nearestDetails: "Macedonia Airport is the main international airport serving Thessaloniki",
                    distance: "Distance to venue: 12 km",
                    duration: "Travel time: 15-20 minutes",
                    options: "Multiple transport options available",
                    transfer: "Ground Transportation",
                    bus: "Airport Bus",
                    busDetails: "X1 Express bus to city center, then local transport to Peraia",
                    taxi: "Taxi Service",
                    taxiDetails: "Available 24/7, fixed rate to venue approximately €18"
                }
            },

            // Things To Do page
            thingsToDo: {
                title: "Our favourite places",
                subtitle: "Discover our favourite spots in Thessaloniki and its surroundings, as well as some of our favourite trips nearby!",
                favouriteSpots: "Our favourite Spots",
                thessaloniki: {
                    title: "Thessaloniki",
                    description: "Explore our city and our favourite places in it (lots of food!).",
                   
                    favourites: [
                        {
                            name: "Walk along Thessaloniki Waterfront",
                            description: "A beautiful beachside promenade with stunning sea views.",
                            link: "https://maps.app.goo.gl/TiBvt33hxqpvr19X8"
                        },
                        {
                            name: "Perea Beach",
                            description: "Beautiful seaside promenade with cafes and restaurants.",
                            link: "https://www.google.com/maps/place/Perea+Beach/@40.5085701,22.922582,749m/data=!3m1!1e3!4m6!3m5!1s0x14a8152801505321:0x6048eac3a0033a3!8m2!3d40.5085701!4d22.922582!16s%2Fg%2F11fnx685q1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                        },
                        {     
                            name: "Galyfianakis",
                            description: "Our favourite traditional pastry shop known for its Galaktoboureko dessert.",
                            link: "https://maps.app.goo.gl/hnQRGko9YkzMTRES7"
                        },
                        {   name: "Choureál | Choux & Profiterole",
                            description: "Our favourite place famous for its delicious Profiterole pastries.",
                            link: "https://maps.app.goo.gl/B9RFhbwxX7PNTSA29"
                        },
                        {
                            name: "Trigwna Elenidis",
                            description: "Traditional sweet with cream",
                            link: "https://maps.app.goo.gl/TrigwnaElenidis"
                        },
                        {
                            name: "Giok Balik",
                            description: "Our favourite place for gyro",
                            link: "https://maps.app.goo.gl/vc1SDMhX9pkcPBak6"
                        },
                        {
                            name: "Ladadika District",
                            description: "Historic quarter packed with tavernas, bars, and nightlife.",
                            link: "https://maps.app.goo.gl/AzKJbWvGh7MVxYqg8"
                        }
                    ]
                },
                pozar: {
                    title: "Pozar Hot Springs",
                    description: "Enjoy a relaxing getaway with a bath in natural hot springs (natural hot baths). Value for money accommodation we enjoy:",
                    hotelLink: "Agnanti Hotel"
                },
                meteora: {
                    title: "Meteora",
                    description: "Day trip to Meteora with English speaking guide"
                },
                chalkidiki: {
                    title: "Chalkidiki",
                    intro: "This is the paradise of Northern Greece. Many options to choose from:",
                    kassandra: {
                        title: "Kassandra",
                        description: "Choose Kassandra if you are looking for partying and crystal clear waters or Aigaiopelagitika beach for swimming",
                    },
                    sithonia: {
                        title: "Sithonia",
                        description: "Choose Sithonia if you are looking for a relaxing vacation by the sea. Magical turquoise water and you can explore a different beach every day.",
                        recommendations: "Recommendations:",
                        beaches: {
                            armenistis: "Armenistis Beach",
                            vourvourou: "Vourvourou",
                            kavourotripes: "Kavourotripes",
                            aktiPortokali: "Akti Portokali",
                            tristinika: "Tristinika"
                        }
                    },
                    athos: {
                        title: "Athos",
                        description: "Choose Athos for a peaceful religious day (only males allowed)."
                    }
                }
            },

            // Gallery page
            gallery: {
                title: "Our Story in Pictures",
                subtitle: "Relive our journey together through these special moments leading up to our big day",
                memoryMessage: "Creating beautiful memories together",
                categories: {
                    all: "All Photos",
                    engagement: "Engagement",
                    couple: "Couple",
                    venues: "Venues"
                },
                instructions1: "Upload here every photo you captured from this special day!",
                instructions2: "The moments you shared with us",
                engagement1: "Engagement Ring",
                engagement2: "The Proposal",
                couple1: "Together Forever",
                couple2: "Love Story",
                venue1: "Our Wedding Venue",
                venue2: "Reception Hall",
                noPhotos: "Coming Soon!",
                noPhotosDesc: "We're working on adding more photos to this section",
                comingSoon: {
                    title: "Wedding Day Gallery Coming Soon!",
                    description: "After our special day, this gallery will be filled with beautiful moments from our celebration",
                    ceremony: "Ceremony Photos",
                    ceremonyDesc: "The sacred moments",
                    reception: "Reception Highlights", 
                    receptionDesc: "Celebration & joy",
                    party: "Party Time",
                    partyDesc: "Dancing & fun"
                },
                sharePhotos: {
                    title: "Share Your Photos!",
                    description: "Help us capture every moment by sharing your photos from our wedding using our hashtag",
                    hashtag: "Use Our Wedding Hashtag",
                    hashtagDesc: "Tag your photos so we can find and cherish them forever"
                },
                bestDancer: {
                    title: "Best Dancer Voting",
                    desc: "Vote for the best dancer or add a new name.",
                    placeholder: "Add a new name",
                    add: "Add & Vote",
                    vote: "Vote",
                    voted: "✓ Voted",
                    totalVotes: "Total votes: ",
                    noOptions: "No votes yet — be the first!",
                    loadError: "Failed to load votes.",
                    voteError: "Failed to submit vote."
                }
            },

            // FAQs page
            faqs: {
                title: "Frequently Asked Questions",
                subtitle: "Everything you need to know about our wedding day - we've got you covered!",
                helpMessage: "Here to help make your experience perfect",
                categories: {
                    general: "General Information",
                    attire: "Attire & Style",
                    logistics: "Travel & Logistics", 
                    ceremony: "Ceremony Details",
                    food: "Food & Dining"
                },
                general: {
                    when: {
                        question: "When is the wedding?",
                        answer: "Our wedding will take place on Saturday, June 27th, 2026. The ceremony begins at 7:45 PM followed by reception and celebration."
                    },
                    where: {
                        question: "Where is the wedding venue?",
                        answer: "We'll be celebrating at Ethereal Hall in Peraia, Thessaloniki. It's a beautiful venue just 15 minutes from Thessaloniki Airport."
                    }
                },
                attire: {
                    dress: {
                        question: "What should I wear?",
                        answer: "The dress code is formal/cocktail attire. Think elegant and festive! Ladies can wear cocktail dresses or formal wear, gentlemen should wear suits or blazers."
                    },
                    weather: {
                        question: "What's the weather like in June?",
                        answer: "June in Thessaloniki is warm and sunny with average temperatures around 25°C. Perfect weather for our celebration!"
                    },
                    shoes: {
                        question: "What shoes should I wear?",
                        answer: "The ceremony and reception are outdoors on natural grounds. We recommend avoiding stiletto heels - block heels, wedges, or dress shoes work best."
                    }
                },
                logistics: {
                    parking: {
                        question: "Is parking available?",
                        answer: "Yes! Free parking is available on-site. No need to worry about finding a spot."
                    },
                    transport: {
                        question: "How do I get to the venue?",
                        answer: "The venue is accessible by car or taxi. We're just 15 minutes from the airport and 35 minutes from Thessaloniki city center."
                    },
                    accommodation: {
                        question: "Where should I stay?",
                        answer: "Contact us for hotel recommendations in the area, from seaside options to city center choices. Book early for the best rates!"
                    }
                },
                ceremony: {
                    plusOne: {
                        question: "Can I bring a plus one?",
                        answer: "Absolutely! Please include your plus one's details in your RSVP."
                    },
                    children: {
                        question: "Are children welcome?",
                        answer: "Our celebration is family-friendly. Please let us know when you RSVP if you're bringing little ones so we can plan accordingly."
                    },
                    gifts: {
                        question: "Do you have a gift registry?",
                        answer: "Your presence is the greatest gift! If you'd like to give something, we've set up a bank account for gifts."
                    }
                },
                food: {
                    dietary: {
                        question: "Can you accommodate dietary restrictions?",
                        answer: "Absolutely! Please let us know about any dietary restrictions, allergies, or special meal preferences when you RSVP."
                    },
                    menu: {
                        question: "What food will be served?",
                        answer: "We'll have a delicious Mediterranean menu featuring fresh local ingredients, seafood, traditional Greek dishes, and international options."
                    },
                    drinks: {
                        question: "Will there be an open bar?",
                        answer: "Yes! We'll have a full open bar with premium spirits, local wines, signature cocktails, and non-alcoholic beverages throughout the celebration."
                    }
                },
                stillQuestions: {
                    title: "Still Have Questions?",
                    description: "We're here to help! Don't hesitate to reach out if you need any additional information or have specific concerns."
                },
                contact: {
                    email: "Email Us",
                    emailDesc: "Best for detailed questions",
                    sendEmail: "Send Email",
                    phone: "Call Us", 
                    phoneDesc: "For urgent questions",
                    callUs: "Call Now"
                },
                rsvpReminder: {
                    title: "Don't Forget to RSVP!",
                    description: "Please confirm your attendance so we can plan the perfect celebration for everyone",
                    button: "RSVP Here"
                }
            }
        }
    },

    el: {
        translation: {
            general: {
                when: 'Πότε',
                where: 'Πού',
                submitting: "Υποβολή...",
                location: 'Τοποθεσία',
            },
            // Navigation
            nav: {
                home: "Αρχική",
                schedule: "Πρόγραμμα",
                travel: "Ταξίδι",
                photos: "Φωτογραφίες",
                thingsToDo: "Τι να κάνετε",                faqs: "Συχνές Ερωτήσεις",
                rsvp: "RSVP"
            },

            // Header
            header: {
                welcomeParty: "Στοιχεία για το καλωσόρισμα αναρτήθηκαν! Παρακαλούμε ελάτε στις 7:30μμ στις 18 Ιουνίου στο εστιατόριο Ανέστης",
                date: "27 Ιουνίου 2026",
                datetime: "Σάββατο, στις 8:00 μ.μ.",
                exactLocation: "Περαία, Θεσσαλονίκη",
                location: "Θεσσαλονίκη, Ελλάδα",
                welcome: "Καλώς ήρθατε στο γάμο μας"
            },

            // Home page
            home: {
                welcomeTitle: "Καλώς ήρθατε στο Γάμο μας",
                welcomeMessage: "Είμαστε στην ευχάριστη θέση να σας προσκαλέσουμε να γιορτάσετε μαζί μας αυτήν την ξεχωριστή μέρα!",
                coupleNames: "Ορέστης & Μαρίνα",
                date: "Ημερομηνία: 27 Ιουνίου 2026",
                location: "Τοποθεσία: Ethereal Hall, Περαία, Θεσσαλονίκη",
                venueLocation: "Τοποθεσία Χώρου: Ethereal Hall, Περαία, Θεσσαλονίκη (δίπλα στο ξενοδοχείο Royal)",
                rsvpButton: "Επιβεβαιωση Παρουσιας",
                viewSchedule: "Δείτε το Πρόγραμμα",
                countdownMessagePart1: "Παρακαλούμε επιβεβαιώστε την παρουσία σας στον παρακάτω σύνδεσμο ",
                countdownMessagePart2: "έως το αργότερο 15/06/2026"
            },

            // RSVP page
            rsvp: {
                title: "Επιβεβαίωση Παρουσίας",
                subtitle: "Παρακαλούμε ενημερώστε μας αν θα μπορέσετε να παρευρεθείτε στο γάμο μας!",
                thankYou: "Ευχαριστούμε!",
                thankYouMessage: "Η επιβεβαίωσή σας υποβλήθηκε επιτυχώς. Ανυπομονούμε να γιορτάσουμε μαζί σας!",
                submitAnother: "Υποβολή άλλης επιβεβαίωσης",

                // Form fields
                yourName: "Ονοματεπώνυμο",
                required: "*",
                phone: "Τηλέφωνο",
                numberOfPeople: 'Αριθμός Ατόμων άνω των 12 ετών',
                numberOfChildren: 'Αριθμός ατόμων κάτω των 12 ετών',
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
                dietaryRestrictions: "Αλλεργίες/Διατροφή",
                comment: 'Σχόλια',
                dietaryPlaceholder: "π.χ. Vegetarian",
                message: "Μήνυμα για το ζευγάρι",
                messagePlaceholder: "Μοιραστείτε τα συγχαρητήριά σας, μια ανάμνηση ή κάποιο ειδικό μήνυμα για τη Μαρίνα και τον Ορέστη",
                submitting: "Υποβολη...",
                submit: "Υποβολη",
                error: "Υπήρξε σφάλμα κατά την υποβολή. Παρακαλούμε δοκιμάστε ξανά.",

                // Placeholders
                namePlaceholder: "Εισάγετε το πλήρες όνομά σας",
                emailPlaceholder: "το.email@example.com",
                phonePlaceholder: "+30 123 456 7890",
                plusOnePlaceholder: "Εισάγετε το όνομα του συνοδού",
                note: 'Παρακαλούμε ενημερώστε μας για τυχόν αλλαγές στον αριθμό των ατόμων το συντομότερο δυνατόν στο +306946172421 '
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
            },

            // Schedule page
            schedule: {
                title: "Πρόγραμμα ημέρας Γάμου",
                subtitle: "Ελάτε να γιορτάσουμε μαζί μας μια μέρα γεμάτη αγάπη, γέλιο και χαρά καθώς ξεκινάμε το ταξίδι μας μαζί",
                guestsArriveGroom: "Άφιξη Καλεσμένων Σπίτι γαμπρού",
                guestsArriveGroomDesc: "Προετοιμασία γαμπρού",
                guestsArriveBride: "Άφιξη Καλεσμένων Σπίτι νύφης",
                guestsArriveBrideDesc: "Προετοιμασία νύφης",
                ceremony: "Γαμήλια Τελετή",
                ceremonyDesc: "Τέλεση πολιτικού γάμου στον ελαιώνα του πολυχώρου Ethereal.",
                dinner: "Γαμήλιο Δείπνο",
                youChoose: "Εσείς επιλέγετε!",
                dinnerDesc: "Welcome drink, γευστικό δείπνο σε μπουφέ και photobooth time.",
                reception: "Δεξίωση & Γεύμα",
                receptionDesc: "Γιορτάστε με ένα νόστιμο γεύμα, προπόσεις και υπέροχες συζητήσεις καθώς ξεκινούν οι εορτασμοί.",
                dancing: "Χορός & Γιορτή",
                dancingDesc: "Ας χορέψουμε όλη τη νύχτα! Παραδοσιακή ελληνική μουσική, σύγχρονες επιτυχίες και πολλή χαρά στην πίστα.",
                coupleEntrance: "Είσοδος Ζευγαριού και Party!",
                coupleEntranceDesc: "",
                farewell: "Αποχαιρετισμός",
                farewellDesc: "Ένας μαγικός αποχαιρετισμός με αναμμένα κεριά καθώς ολοκληρώνουμε αυτή την τέλεια μέρα.",
                venueTitle: "Πληροφορίες Χώρου",
                parking: "Δωρεάν χώρος στάθμευσης στον χώρο",
                dressCode: "Ντύσιμο: Επίσημο/Κοκτέιλ",
                lookingForward: "Ανυπομονούμε να γιορτάσουμε αυτή την ξεχωριστή μέρα με όλους εσάς!"
            },

            // Footer
            footer: {
                weddingInfo: "Πληροφορίες Γάμου",
                tagline: "Ξεκινώντας το για πάντα μας μαζί",
                questions: "Ερωτήσεις;",
                contactInfo: "Για οποιεσδήποτε ερωτήσεις ή ανησυχίες, παρακαλώ επικοινωνήστε με το γαμήλιο πάρτι ή δείτε τη σελίδα συχνών ερωτήσεων.",
                coupleNames: "Ορέστης & Μαρίνα",
                madeWithLove: "Φτιαγμένο με αγάπη για την ξεχωριστή μας μέρα"
            },

            // Travel page
            travel: {
                title: "Ταξίδι & Διαμονή",
                subtitle: "Όλα όσα χρειάζεστε να γνωρίζετε για να έρθετε στη όμορφη Θεσσαλονίκη για την ξεχωριστή μας μέρα",
                venue: {
                    title: "Χώρος Γάμου",
                    address: "Περαία, Θεσσαλονίκη 57019, Ελλάδα",
                    parking: "Πληροφορίες Στάθμευσης",
                    parkingDetails: "Δωρεάν στάθμευση στον χώρο με υπηρεσία valet",
                    directions: "Πώς να Φτάσετε",
                    direction1: "Από το κέντρο Θεσσαλονίκης: 25 λεπτά με αυτοκίνητο",
                    direction2: "Από το αεροδρόμιο ΘΕΣ: 15 λεπτά με αυτοκίνητο ή ταξί",
                    direction3: "Δημόσια μεταφορά: Λεωφορείο X1 προς Περαία",
                    mapButton: "Άνοιγμα στους Χάρτες"
                },
                transport: {
                    title: "Επιλογές Μεταφοράς",
                    airport: {
                        title: "Μεταφορά από Αεροδρόμιο",
                        description: "Το αεροδρόμιο Θεσσαλονίκης (ΘΕΣ) είναι το πλησιέστερο, μόλις 15 λεπτά από τον χώρο μας."
                    },
                    car: {
                        title: "Ενοικίαση Αυτοκινήτου",
                        description: "Ενοικιάσεις αυτοκινήτων διαθέσιμες στο αεροδρόμιο και το κέντρο. Δωρεάν στάθμευση στον χώρο."
                    },
                    taxi: {
                        title: "Ταξί & Rideshare",
                        description: "Ταξί και Uber άμεσα διαθέσιμα. Εκτιμώμενο κόστος από αεροδρόμιο: €15-20."
                    }
                },
                accommodations: {
                    title: "Προτεινόμενα Ξενοδοχεία",
                    subtitle: "Επιλέξαμε αυτά τα ξενοδοχεία για την άνεση, τοποθεσία και εγγύτητά τους στον χώρο μας",
                    bookButton: "Κάντε Κράτηση",
                    viewButton: "Δείτε Λεπτομέρειες"
                },
                hotel1: {
                    name: "Mediterranean Palace Hotel",
                    description: "Πολυτελές ξενοδοχείο στην παραλία με εκπληκτική θέα θάλασσας",
                    distance: "10 λεπτά από χώρο"
                },
                hotel2: {
                    name: "Electra Palace Thessaloniki",
                    description: "Ιστορικό πολυτελές ξενοδοχείο στην καρδιά της Θεσσαλονίκης",
                    distance: "25 λεπτά από χώρο"
                },
                hotel3: {
                    name: "Peraia Beach Hotel",
                    description: "Γοητευτικό παραθαλάσσιο ξενοδοχείο για ένα χαλαρωτικό γαμήλιο σαββατοκύριακο",
                    distance: "5 λεπτά από χώρο"
                },
                airport: {
                    title: "Πληροφορίες Αεροδρομίου",
                    nearest: "Αεροδρόμιο Θεσσαλονίκης (ΘΕΣ)",
                    nearestDetails: "Το αεροδρόμιο Μακεδονία είναι το κύριο διεθνές αεροδρόμιο της Θεσσαλονίκης",
                    distance: "Απόσταση από χώρο: 12 χλμ",
                    duration: "Χρόνος ταξιδιού: 15-20 λεπτά",
                    options: "Πολλαπλές επιλογές μεταφοράς διαθέσιμες",
                    transfer: "Μεταφορά από Έδαφος",
                    bus: "Λεωφορείο Αεροδρομίου",
                    busDetails: "X1 Express προς κέντρο, στη συνέχεια τοπική μεταφορά προς Περαία",
                    taxi: "Υπηρεσία Ταξί",
                    taxiDetails: "Διαθέσιμο 24/7, σταθερή τιμή προς χώρο περίπου €18"
                }
            },

            // Things To Do page
            thingsToDo: {
                title: "Τα αγαπημένα μας μέρη",
                subtitle: "Ανακαλύψτε τα αγαπημένα μας σημεία στη Θεσσαλονίκη και τις γύρω περιοχές, καθώς και μερικές από τις αγαπημένες μας εκδρομές κοντά!",
                favouriteSpots: "Τα Αγαπημένα μας Σημεία",
                thessaloniki: {
                    title: "Θεσσαλονίκη",
                    description: "Εξερευνήστε την πόλη μας και τα αγαπημένα μας μέρη σε αυτήν (πολύ φαγητό!).",
                    favourites: [
                        {
                            name: "Βόλτα στην παραλία της Θεσσαλονίκης",
                            description: "Πολύ όμορφη παραλία για περπάτημα με θέα στη θάλασσα.",
                            link: "https://maps.app.goo.gl/TiBvt33hxqpvr19X8"
                        },
                        {
                            name: "Παραλία Περαίας",
                            description: "Όμορφος πεζόδρομος κατά μήκος της θάλασσας με καφετέριες και εστιατόρια.",
                            link: "https://www.google.com/maps/place/Perea+Beach/@40.5085701,22.922582,749m/data=!3m1!1e3!4m6!3m5!1s0x14a8152801505321:0x6048eac3a0033a3!8m2!3d40.5085701!4d22.922582!16s%2Fg%2F11fnx685q1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                        },
                        {
                            name: "Γαλυφιανάκης",
                            description: "Το αγαπημένο μας παραδοσιακό ζαχαροπλαστείο γνωστό για το γλυκό του (γαλακτομπούρεκο).",
                            link: "https://maps.app.goo.gl/galyfianakis"
                        },
                        {   name: "Choureál | Choux & Profiterole",
                            description: "Το αγαπημένο μας μέρος διάσημο για τα νόστιμα προφιτερόλ του.",
                            link: "https://maps.app.goo.gl/La4FUnfDnLPRHK5c8"
                        },
                        {
                            name: "Τριγώνα Ελενίδη",
                            description: "Παραδοσιακό γλυκό με κρέμα",
                            link: "https://maps.app.goo.gl/hnQRGko9YkzMTRES7"
                        },
                        {
                            name: "Γιοκ Μπαλίκ",
                            description: "Το αγαπημένο μας μέρος για γύρο",
                            link: "https://maps.app.goo.gl/vc1SDMhX9pkcPBak6"
                        },
                        {
                            name: "Λαδάδικα",
                            description: "Ιστορική γειτονιά γεμάτη ταβέρνες, μπαρ και νυχτερινή ζωή.",
                            link: "https://maps.app.goo.gl/AzKJbWvGh7MVxYqg8"
                        }
                    ]
                },
                pozar: {
                    title: "Λουτρά Πόζαρ",
                    description: "Απολαύστε ένα χαλαρωτικό διήμερο με μπάνιο σε φυσικές ζεστές πηγές (natural hot baths). Value for money accommodation we enjoy:",
                    hotelLink: "Agnanti Hotel"
                },
                meteora: {
                    title: "Μετέωρα",
                    description: "Ημερήσια εκδρομή στα Μετέωρα με αγγλόφωνο ξεναγό"
                },
                chalkidiki: {
                    title: "Χαλκιδική",
                    intro: "Αυτός είναι ο παράδεισος της Βόρειας Ελλάδας. Πολλές επιλογές να διαλέξετε:",
                    kassandra: {
                        title: "Κασσάνδρα",
                        description: "Διαλέξτε Κασσάνδρα αν ψάχνετε για διασκέδαση και κρυστάλλινα νερά."
                    },
                    sithonia: {
                        title: "Σιθωνία",
                        description: "Διαλέξτε Σιθωνία αν ψάχνετε για χαλαρωτικές διακοπές δίπλα στη θάλασσα. Μαγευτικά τιρκουάζ νερά και μπορείτε να εξερευνήσετε μια διαφορετική παραλία κάθε μέρα.",
                        recommendations: "Προτάσεις:",
                        beaches: {
                            armenistis: "Παραλία Αρμενιστής",
                            vourvourou: "Βουρβουρού",
                            kavourotripes: "Καβουρότρυπες",
                            aktiPortokali: "Ακτή Πορτοκαλί",
                            tristinika: "Τριστινίκα"
                        }
                    },
                    athos: {
                        title: "Άθως",
                        description: "Διαλέξτε Άθως για μια ήρεμη θρησκευτική μέρα (μόνο άνδρες επιτρέπονται)."
                    }
                }
            },

            // Gallery page
            gallery: {
                title: "Η Ιστορία μας σε Εικόνες",
                subtitle: "Ζήστε ξανά το ταξίδι μας μαζί μέσα από αυτές τις ξεχωριστές στιγμές προς τη μεγάλη μας μέρα",
                memoryMessage: "Δημιουργώντας όμορφες αναμνήσεις μαζί",
                categories: {
                    all: "Όλες οι Φωτογραφίες",
                    engagement: "Αρραβώνας",
                    couple: "Ζευγάρι",
                    venues: "Χώροι"
                },
                instructions1: "Ανεβάστε εδώ κάθε φωτογραφία που τραβήξατε από αυτή την ξεχωριστή μέρα!",
                instructions2: "Οι στιγμές που μοιραστήκατε εσείς μαζί μας",
                engagement1: "Δαχτυλίδι Αρραβώνων",
                engagement2: "Η Πρόταση",
                couple1: "Μαζί για Πάντα",
                couple2: "Ιστορία Αγάπης",
                venue1: "Ο Χώρος του Γάμου μας",
                venue2: "Αίθουσα Δεξίωσης",
                noPhotos: "Σύντομα!",
                noPhotosDesc: "Εργαζόμαστε για να προσθέσουμε περισσότερες φωτογραφίες",
                comingSoon: {
                    title: "Η Γκαλερί του Γάμου Έρχεται Σύντομα!",
                    description: "Μετά την ξεχωριστή μας μέρα, αυτή η γκαλερί θα γεμίσει με όμορφες στιγμές από τον εορτασμό μας",
                    ceremony: "Φωτογραφίες Τελετής",
                    ceremonyDesc: "Οι ιερές στιγμές",
                    reception: "Στιγμιότυπα Δεξίωσης",
                    receptionDesc: "Εορτασμός & χαρά",
                    party: "Ώρα για Πάρτι",
                    partyDesc: "Χορός & διασκέδαση"
                },
                sharePhotos: {
                    title: "Μοιραστείτε τις Φωτογραφίες σας!",
                    description: "Βοηθήστε μας να αποτυπώσουμε κάθε στιγμή μοιράζοντας τις φωτογραφίες σας με το hashtag μας",
                    hashtag: "Χρησιμοποιήστε το Hashtag του Γάμου",
                    hashtagDesc: "Βάλτε tag στις φωτογραφίες σας για να τις βρούμε και να τις κρατήσουμε για πάντα"
                },
                bestDancer: {
                    title: "Ψηφοφορία για τον Καλύτερο Χορευτή",
                    desc: "Ψηφίστε για τον καλύτερο χορευτή ή προσθέστε ένα νέο όνομα.",
                    placeholder: "Προσθέστε ένα νέο όνομα",
                    add: "Προσθήκη & Ψήφος",
                    vote: "Ψηφισε",
                    voted: "✓ Ψηφισες",
                    totalVotes: "Συνολικές ψήφοι: ",
                    noOptions: "Κανείς δεν έχει ψηφίσει ακόμα — είστε οι πρώτοι!",
                    loadError: "Αποτυχία φόρτωσης ψήφων.",
                    voteError: "Αποτυχία υποβολής ψήφου."
                }
            },

            // FAQs page
            faqs: {
                title: "Συχνές Ερωτήσεις",
                subtitle: "Όλα όσα χρειάζεστε να γνωρίζετε για τη γαμήλια μας μέρα - σας καλύπτουμε!",
                helpMessage: "Εδώ για να κάνουμε την εμπειρία σας τέλεια",
                categories: {
                    general: "Γενικές Πληροφορίες",
                    attire: "Ντύσιμο & Στυλ",
                    logistics: "Ταξίδι & Logistics",
                    ceremony: "Λεπτομέρειες Τελετής",
                    food: "Φαγητό & Τραπέζι"
                },
                general: {
                    when: {
                        question: "Πότε είναι ο γάμος;",
                        answer: "Ο γάμος μας θα γίνει το Σάββατο, 27 Ιουνίου 2026. Η τελετή αρχίζει στις 19:45 ακολουθούμενη από δεξίωση και εορτασμό."
                    },
                    where: {
                        question: "Πού είναι ο χώρος του γάμου;",
                        answer: "Θα γιορτάσουμε στο Ethereal Hall στην Περαία, Θεσσαλονίκη. Είναι ένας όμορφος χώρος μόλις 15 λεπτά από το αεροδρόμιο."
                    }
                },
                attire: {
                    dress: {
                        question: "Τι να φορέσω;",
                        answer: "Ο κώδικας ντυσίματος είναι επίσημο/κοκτέιλ. Σκεφτείτε κομψό και εορταστικό! Οι κυρίες μπορούν να φορέσουν φορέματα κοκτέιλ ή επίσημα φορέματα, οι κύριοι κοστούμια ή σακάκια."
                    },
                    weather: {
                        question: "Πώς είναι ο καιρός τον Ιούνιο;",
                        answer: "Ο Ιούνιος στη Θεσσαλονίκη είναι ζεστός και ηλιόλουστος με μέσες θερμοκρασίες γύρω στους 25°C. Τέλειος καιρός για τον εορτασμό μας!"
                    },
                    shoes: {
                        question: "Τι παπούτσια να φορέσω;",
                        answer: "Η τελετή και δεξίωση είναι σε εξωτερικό χώρο με φυσικό έδαφος. Συνιστούμε να αποφύγετε τα στιλέτο - block τακούνια, πλατφόρμες ή κομψά παπούτσια λειτουργούν καλύτερα."
                    }
                },
                logistics: {
                    parking: {
                        question: "Υπάρχει στάθμευση;",
                        answer: "Ναι! Δωρεάν στάθμευση διαθέσιμη στον χώρο. Δεν χρειάζεται να ανησυχείτε για εύρεση θέσης."
                    },
                    transport: {
                        question: "Πώς να φτάσω στον χώρο;",
                        answer: "Ο χώρος είναι εύκολα προσβάσιμος με αυτοκίνητο ή ταξί. Είμαστε μόλις 15 λεπτά από το αεροδρόμιο και 35 λεπτά από το κέντρο Θεσσαλονίκης."
                    },
                    accommodation: {
                        question: "Πού να μείνω;",
                        answer: "Επικοινωνήστε μαζί μας για προτάσεις ξενοδοχείων στην περιοχή, από παραθαλάσσια επιλογές μέχρι επιλογές στο κέντρο της πόλης. Κάντε κράτηση νωρίς για τις καλύτερες τιμές!"
                    }
                },
                ceremony: {
                    plusOne: {
                        question: "Μπορώ να φέρω σύντροφο;",
                        answer: "Φυσικά! Συμπεριλάβετε τις λεπτομέρειες του συντρόφου σας στην επιβεβαίωση."
                    },

                    children: {
                        question: "Είναι ευπρόσδεκτα τα παιδιά;",
                        answer: "Ο εορτασμός μας είναι φιλικός προς την οικογένεια. Παρακαλώ ενημερώστε μας στην επιβεβαίωση αν φέρνετε μικρά παιδιά."
                    },
                    gifts: {
                        question: "Έχετε μητρώο δώρων;",
                        answer: "Η παρουσία σας είναι το μεγαλύτερο δώρο! Αν θέλετε να δώσετε κάτι, έχουμε δημιουργήσει έναν τραπεζικό λογαριασμό για δώρα."
                    }
                },
                food: {
                    dietary: {
                        question: "Μπορείτε να καλύψετε διατροφικούς περιορισμούς;",
                        answer: "Απολύτως! Παρακαλώ ενημερώστε μας για διατροφικούς περιορισμούς, αλλεργίες ή ειδικές προτιμήσεις στην επιβεβαίωση."
                    },
                    menu: {
                        question: "Τι φαγητό θα σερβιριστεί;",
                        answer: "Θα έχουμε νόστιμο μεσογειακό μενού με φρέσκα τοπικά υλικά, θαλασσινά, παραδοσιακά ελληνικά πιάτα και άλλες επιλογές."
                    },
                    drinks: {
                        question: "Θα υπάρχει open bar;",
                        answer: "Ναι! Θα έχουμε πλήρες open bar με premium ποτά, τοπικά κρασιά, signature κοκτέιλ και αναψυκτικά σε όλο τον εορτασμό."
                    }
                },
                stillQuestions: {
                    title: "Έχετε Ακόμα Ερωτήσεις;",
                    description: "Είμαστε εδώ για να βοηθήσουμε! Μη διστάσετε να επικοινωνήσετε αν χρειάζεστε επιπλέον πληροφορίες."
                },
                contact: {
                    email: "Στείλτε Email",
                    emailDesc: "Καλύτερο για λεπτομερείς ερωτήσεις",
                    sendEmail: "Αποστολή Email",
                    phone: "Καλέστε μας",
                    phoneDesc: "Για επείγουσες ερωτήσεις",
                    callUs: "Καλέστε Τώρα"
                },
                rsvpReminder: {
                    title: "Μην Ξεχάσετε την Επιβεβαίωση!",
                    description: "Παρακαλώ επιβεβαιώστε την παρουσία σας για να σχεδιάσουμε τον τέλειο εορτασμό",
                    button: "Επιβεβαίωση Εδώ"
                }
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
