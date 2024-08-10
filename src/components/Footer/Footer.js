import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{
      marginTop:'3rem'
    }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <h3>S K I L L I F Y</h3>
            <p>Empowering the next generation of African tech leaders.</p>
          </div>
          <div className="footer-section links">
            <h4>Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h4>Connect with Us</h4>
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Skillify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
