import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2>Education</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">News & Blogs</a></li>
            <li><a href="#">Help & Supports</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">How we work</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Akshya Nagar 1st Block 1st Cross,<br />
            Ramamurthy Nagar, Bangalore-560016
          </p>
          <p>+1 202-918-2132</p>
          <p>education@mail.com</p>
          <p>www.education.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;