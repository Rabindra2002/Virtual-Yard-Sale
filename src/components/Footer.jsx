import React from "react";
import { Link } from "react-router-dom"; // Using Link for navigation

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light mt-5">
      <footer className="py-4 text-center">
        {/* Navigation Links */}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-light text-decoration-none">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/feature" className="nav-link px-2 text-light text-decoration-none">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/policy" className="nav-link px-2 text-light text-decoration-none">Privacy Policy</Link>
          </li>
          <li className="nav-item">
            <Link to="/FAQ" className="nav-link px-2 text-light text-decoration-none">FAQs</Link>
          </li>
          <li className="nav-item">
            <Link to="/terms" className="nav-link px-2 text-light text-decoration-none">Terms of Service</Link>
          </li>
        </ul>

        {/* Copyright Text */}
        <p className="text-center text-light mb-0">Copyright© 2024 Virtual Yard Sale Platform Inc. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
