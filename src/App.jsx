import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Travel from './pages/Travel';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
        <Header />
        <main className="flex-1 text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/gallery" element={<div>Gallery Page</div>} />
            <Route path="/things-to-do" element={<div>Things To Do Page</div>} />
            <Route path="/faqs" element={<div>FAQs Page</div>} />
            <Route path="/rsvp" element={<div>RSVP Page</div>} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
