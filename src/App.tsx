import "./App.css";
import Header from "../src/Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
