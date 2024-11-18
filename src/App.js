import "./App.css";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Media from "./components/Media/Media.js"; // Import the Media component
import data from "./CardData"; // Import your data for the cards


function App() {
  
  return (
    <div className="container">
      <Router>
        <Nav />
        <div>
          <main>
            <Routes>
              {/* Define each route to load the appropriate component */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/features" element={<Features />} />
              <Route path="/media" element={<Media data={data} />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

// export to index.js
export default App;
