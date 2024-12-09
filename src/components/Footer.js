//The Footer component creates a structured footer section for a React application.
//Moreover, This component is meant to be placed at the bottom of all pages, providing navigation, 
//connectivity, and additional site branding.
import React from "react";// Import React to use JSX and components
import { Link } from "react-router-dom";// Import Link for internal navigation without refreshing the page
//import "./Footer.css";// Import CSS for styling the footer
import logo from "../images/logo.png";// Import the logo image used in the footer
import "../css/Footer.css";// Import CSS for styling the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="cols">
        <div className="about-col">
          <a href="index.html">
            <img src={logo} alt="This is MP logo" /> {/* Display the logo */}
          </a>
          <h3>
            <i>
              <b>@Mashed Potatoes@</b> {/* Brand name styled */}
            </i>
          </h3>
        </div>
        <div className="links-col">
          <h3>Useful Links:</h3> {/* Links to main sections of the site */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TableofContents">TableofContents</Link>
            </li>
            <li>
              <Link to="/User">Account</Link>
            </li>
          </ul>
        </div>
        <div className="links-col">
          <h4>Follow us on:</h4>
          {/* Links to social media profiles */}
          <a href="https://www.facebook.com/fakeprofile" target="_blank">
            Facebook
          </a>
          <a href="https://twitter.com/fakeprofile" target="_blank">
            Twitter
          </a>
          <a href="https://www.instagram.com/fakeprofile" target="_blank">
            Instagram
          </a>
          <a href="https://www.snapchat.com/add/fakeprofile" target="_blank">
            Snapchat
          </a>
          <a href="https://www.linkedin.com/in/fakeprofile" target="_blank">
            LinkedIn
          </a>
          <a href="https://www.tiktok.com/@fakeprofile" target="_blank">
            TikTok
          </a>
        </div>
        <div className="news-col">
          <h4>Newsletter</h4> {/* Newsletter subscription form */}
          <p>Register your email for Newsletter:</p>
          <form>
            <input type="email" placeholder="Enter Your Email Here" />
            <button type="submit">
              <i className="bx bxl-telegram"></i>{" "}
              {/* Icon for the submit button */}
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        &copy; Mashed Potatoes 2024. <br />
        <p>
          Email:{" "}
          <a href="mailto:your-email@example.com">mashed-potatoes@gmail.com</a>{" "}
          {/* Contact email */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;