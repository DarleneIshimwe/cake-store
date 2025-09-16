import "./App.css";
import ContactPage from "./components/ContactPage";
import About from "./components/AboutPage";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// make sure path is correct

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <ContactPage />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
