import React from "react";
import "./FeaturePage.css"; // Import the custom CSS

const features = [
  {
    title: "User Profiles & Personalization",
    points: [
      "Create and personalize your profile.",
      "Track your listings, trades, and ratings.",
    ],
  },
  {
    title: "Seamless Product Listings",
    points: [
      "Quickly post items with images and descriptions.",
      "Edit or update your listings anytime.",
    ],
  },
  {
    title: "Exchange & Swap Feature",
    points: [
      "Propose item swaps and negotiate terms.",
      "Make sustainable choices through reuse.",
    ],
  },
  {
    title: "Messaging & Negotiation",
    points: [
      "Chat with other users directly.",
      "Real-time notifications for quick updates.",
    ],
  },
  {
    title: "Simple Search & Filters",
    points: [
      "Find items using categories and filters.",
      "Save favorite items for later.",
    ],
  },
  {
    title: "Localized Listings & Meetups",
    points: [
      "Discover nearby items to reduce shipping.",
      "Meetup point suggestions for convenience.",
    ],
  },
  {
    title: "Secure Transactions",
    points: [
      "Secure messaging for safe communication.",
      "Transaction confirmation and safety checks.",
    ],
  },
  {
    title: "Sustainability Focus",
    points: [
      "Reduce waste by reusing and recycling.",
      "Encourage second-hand culture.",
    ],
  },
  {
    title: "Easy Account Settings",
    points: [
      "Edit your profile and settings easily.",
      "Manage preferences and privacy options.",
    ],
  },
];

function FeaturePage() {
  return (
    <div className="feature-page-container">
      <h1 className="feature-title">Platform Features</h1>
      <p className="feature-subtitle">
        Explore the features that make the Virtual Yard Sale Platform easy, fun, and eco-friendly.
      </p>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h2 className="feature-heading">{feature.title}</h2>
            <ul className="feature-list">
              {feature.points.map((point, i) => (
                <li key={i}>✔ {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="feature-buttons">
        <button className="btn-primary"><a href="/signup">Sign Up Now</a></button>
        <button className="btn-secondary"><a href="/browse-all">Browse Listings</a></button>
      </div>
    </div>
  );
}

export default FeaturePage;
