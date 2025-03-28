import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
