import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
