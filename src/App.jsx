import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Travel from './pages/Travel';
import RPSV from './pages/RPSV';
import AdminRSVPs from './pages/AdminRSVPs';
import Photos from "./pages/Gallery";
import ThingsToDo from "./pages/ThingsToDo";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            {/* <Route path="/travel" element={<Travel />} /> */}
            <Route path="/photos" element={<Photos />} />
            <Route path="/things-to-do" element={<ThingsToDo />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/rsvp" element={<RPSV />} />
            <Route path="/admin" element={<AdminRSVPs />} />
            <Route path="*" element={<div className="text-center p-8 text-xl font-semibold">Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
