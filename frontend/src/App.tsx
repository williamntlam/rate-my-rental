import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Rentals from "./pages/Rentals";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Rentals />
      <Footer />
    </div>
  );
}

export default App;
