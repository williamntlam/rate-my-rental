import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutUs from "./static/AboutUs";
import PrivacyPolicy from "./static/PrivatePolicy";
import TermsOfService from "./static/TermsOfService";
import Contact from "./static/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
