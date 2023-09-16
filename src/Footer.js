import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="one">
          <img src="Logo.svg" alt="Secondary Logo" />
        </div>
        <div className="two">
          <ul>
            <h5>Navigation</h5>
            <li>
              <Link to="/"  className="a">Home</Link>
            </li>
            <li>
              <Link to="/about" className="a">About</Link>
            </li>
            <li>
              <Link to="/menu" className="a">Menu</Link>
            </li>
            <li>
              <Link to="/reservations" className="a">Reservations</Link>
            </li>
            <li>
              <Link to="/order" className="a">Order Online</Link>
            </li>
            <li>
              <Link to="/login" className="a">Login</Link>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Contact</h5>
            <li>
              <a id="nav" href="a">
                Phone Number
              </a>
            </li>
            <li>
              <a id="nav" href="b">
                Email
              </a>
            </li>
            <li>
              <a id="nav" href="c">
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>

            <li>
              <a id="nav" href="https://twitter.com">
                Twitter
              </a>
            </li>
            <li>
              <a id="nav" href="https://facebook.com">
                Facebook
              </a>
            </li>
            <li>
              <a id="nav" href="https://instagram.com">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
