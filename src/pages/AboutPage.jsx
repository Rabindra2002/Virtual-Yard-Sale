import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Virtual Yard Sale</h1>
      <p className="about-intro">
        The Virtual Yard Sale Platform is a modern online marketplace where users can buy, sell, or exchange items in a safe and community-driven environment. Whether you're decluttering your space, searching for great deals, or looking to make sustainable choices, our platform makes it easier than ever.
      </p>

      <div className="about-section">
        <h2 className="about-heading">Our Mission</h2>
        <p>
          We aim to promote sustainability, affordability, and community engagement by allowing users to repurpose items they no longer need. Through item exchanges and second-hand sales, we contribute to reducing waste and encouraging a culture of reuse.
        </p>
      </div>

      <div className="about-section">
        <h2 className="about-heading">Why Choose Us?</h2>
        <ul>
          <li>✔ Simple and user-friendly interface</li>
          <li>✔ Fast product posting and easy communication</li>
          <li>✔ In-app chat for secure negotiations</li>
          <li>✔ Promote sustainable living by reducing landfill waste</li>
          <li>✔ Local meetups and delivery suggestions</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="about-heading">Get Involved</h2>
        <p>
          Join thousands of users who are buying, selling, and swapping goods every day. Sign up today, create your profile, and start your own virtual yard sale!
        </p>
        <div className="about-buttons">
          <button className="btn-primary"><a href="/signup">Sign Up Now</a></button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
