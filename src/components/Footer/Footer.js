import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo2.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="cols">
        <div className="about-col">
          <a href="index.html">
            <img src={logo} alt="This is MP logo" />
          </a>
          <h3>
            <i>
              <b>@Mashed Potatoes@</b>
            </i>
          </h3>
        </div>
        <div className="links-col">
          <h4>Useful Links:</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </div>
        <div className="links-col">
          <h4>Follow us on:</h4>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Snapchat</a>
          <a href="#">LinkedIn</a>
          <a href="#">TikTok</a>
        </div>
        <div className="news-col">
          <h4>Newsletter</h4>
          <p>Register your email for Newsletter:</p>
          <form>
            <input type="email" placeholder="Enter Your Email Here" />
            <button type="submit">
              <i className="bx bxl-telegram"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        &copy; Mashed Potatoes 2024. <br />
        <p>
          Email:{" "}
          <a href="mailto:your-email@example.com">mashed-potatoes@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
