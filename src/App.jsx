import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1 p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">We're getting married!</h2>
        <p className="mb-6">Save the date: <strong>July 12, 2025</strong></p>
        <a
          href="https://your-rsvp-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition"
        >
          RSVP Here
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
