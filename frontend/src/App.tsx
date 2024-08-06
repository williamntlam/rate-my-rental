import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">Main Content Placeholder</main>
      <Footer />
    </div>
  );
}

export default App;
