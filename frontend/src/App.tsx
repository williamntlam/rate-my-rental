import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
