import React, { useState } from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo2.jpg";
import "../App.css";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <header className="header">
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <img src={logo} alt="This is MP logo" />
      <div className="logo-title">Mashed Potatoes</div>
      <input type="text" className="search-bar" placeholder="Search" />

      {/* Show menu options when hamburger is open */}
      {hamburgerOpen && (
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/" onClick={() => setHamburgerOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setHamburgerOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => setHamburgerOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="/features" onClick={() => setHamburgerOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="/media" onClick={() => setHamburgerOpen(false)}>
                Media
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
