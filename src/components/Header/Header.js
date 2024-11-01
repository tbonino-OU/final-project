import React from 'react'
import logo from "../../assets/logo2.jpg";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <img src={logo} alt="This is UI logo"></img>
      <p>Mashed Potatoes</p>
      <ul>
        <li>
          <a href="a">Home</a>
        </li>
        <li>
          <a href="a">About</a>
        </li>
        <li>
          <a href="a">Contact Us</a>
        </li>
      </ul>
      <input type="text" className="search-bar" placeholder="Search..." />
    </nav>
  );
}

export default Header