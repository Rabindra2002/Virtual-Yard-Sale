import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: April 19, 2025</p>

      <section className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          At Virtual Yard Sale, your privacy is a top priority. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our platform.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Information We Collect</h2>
        <ul>
          <li>✔ Personal Information: Name, email address, phone number, and location.</li>
          <li>✔ Account Details: Login credentials and user profile data.</li>
          <li>✔ Listings: Images, descriptions, and pricing of posted items.</li>
          <li>✔ Usage Data: Device info, browser type, and interaction logs.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul>
          <li>✔ Provide, maintain, and improve our services.</li>
          <li>✔ Enable secure user communication and transactions.</li>
          <li>✔ Send relevant updates and notifications.</li>
          <li>✔ Prevent fraud and ensure user safety.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>4. Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with trusted partners to help us provide our services, comply with the law, or protect our rights.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Data Security</h2>
        <p>
          We use industry-standard security measures to protect your information. However, no system is completely secure, so we encourage you to use strong passwords and stay alert.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Your Choices</h2>
        <p>
          You can access, update, or delete your personal information at any time through your account settings. You may also opt out of promotional emails.
        </p>
      </section>

      <section className="privacy-section">
        <h2>7. Children's Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13. We do not knowingly collect information from children.
        </p>
      </section>

      <section className="privacy-section">
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. Any changes will be posted here, and significant updates will be communicated via email or platform notifications.
        </p>
      </section>

      <section className="privacy-section">
        <h2>9. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>Email: support@virtualyardsale.com</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
