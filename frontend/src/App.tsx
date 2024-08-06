import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutUs from "./static/AboutUs";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
