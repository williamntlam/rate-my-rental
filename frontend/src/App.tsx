import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Rentals from "./pages/Rentals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./static/AboutUs";
import Contact from "./static/Contact";
import PrivacyPolicy from "./static/PrivatePolicy";
import TermsOfService from "./static/TermsOfService";
import Profile from "./pages/Profile";
import SavedRentals from "./pages/SavedRentals";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Rentals />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/saved-rentals" element={<SavedRentals />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
