import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="min-h-screen">Main Content</main>
      <Footer />
    </div>
  );
}

export default App;
