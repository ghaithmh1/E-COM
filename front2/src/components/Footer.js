import React from 'react';
import './Footer.css'; 
import DarkModeSwitch from './DarkModeSwitch';

const Footer = () => {

  return (
    <footer className={`footer-container bg-body-tertiary py-4`}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-12 col-md-4 mb-3">
            <h4>About Us</h4>
            <p>
              We are a company dedicated to providing the best products and services.
              Our mission is to bring the best shopping experience to our customers.
            </p>
          </div>
          {/* Quick Links Section */}
          <div className="col-12 col-md-4 mb-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" >Home</a></li>
              <li><a href="/about" >About Us</a></li>
              <li><a href="/contact" >Contact</a></li>
              <li><a href="/privacy-policy" >Privacy Policy</a></li>
            </ul>
            <div className="d-flex align-items-center ms-auto">
              <DarkModeSwitch />
            </div>
          </div>
          {/* Contact Section */}
          <div className="col-12 col-md-4 mb-3">
            <h4>Contact Us</h4>
            <p><i className="fas fa-phone"></i> +123 456 7890</p>
            <p><i className="fas fa-envelope"></i> info@company.com</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Company Name | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
