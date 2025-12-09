import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Stack />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
