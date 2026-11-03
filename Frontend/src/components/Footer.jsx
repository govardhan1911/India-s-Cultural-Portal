import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaEnvelope,
     FaGithub
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            {/* Main Footer */}
            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <h2>Sanskriti Bharat</h2>

                    <p>
                        Discover the rich culture, heritage, festivals,
                        food, and beautiful destinations of India.
                    </p>
                </div>

                {/* About */}
                <div className="footer-section">
                    <h4>About</h4>

                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Explore */}
                <div className="footer-section">
                    <h4>Explore</h4>

                    <Link to="/festivals">Festivals</Link>
                    <Link to="/food">Food</Link>
                    <Link to="/tourism">Tourism</Link>
                    <Link to="/heritage">Heritage</Link>
                </div>

                {/* Useful Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>

                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>

                {/* Social Media */}
                <div className="footer-section social-section">
                    <h4>Social Media</h4>

                    <div className="social-icons">

                        <a
                            href="#"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="#"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>

                        

                    </div>

                    <div className="footer-contact">
                        <p>
                            <FaMapMarkerAlt />
                            India
                        </p>

                        <p>
                            <FaEnvelope />
                            info@sanskritibharat.com
                        </p>
                                
                        <p>
                             <  FaGithub className='git'/>
                             <a
                            href="https://github.com/govardhan1911/Sanskriti_Bharat-India-s-culture-"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            https://github.com/govardhan1911/Sanskriti_Bharat-India-s-culture-
                        </a>

                        </p>
                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Sanskriti Bharat
                </p>

                <p>
                    Developed By Govardhan
                </p>

                <p>
                    Made with ❤️ for India's Culture & Heritage
                </p>

            </div>

        </footer>
    );
};

export default Footer;