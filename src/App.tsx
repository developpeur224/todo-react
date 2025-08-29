import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todos from "./pages/Todos";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/todos" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
