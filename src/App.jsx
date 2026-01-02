import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

// Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
        <ScrollToTop />
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
