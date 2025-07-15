import React from "react";
import "./TermsOfService.css";

function TermsOfService() {
  return (
    <div className="tos-container">
      <h1 className="tos-title">Terms of Service</h1>
      <p className="tos-updated">Last updated: April 19, 2025</p>

      <section className="tos-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Virtual Yard Sale platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
        </p>
      </section>

      <section className="tos-section">
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use our services. By using the platform, you represent and warrant that you meet this requirement.
        </p>
      </section>

      <section className="tos-section">
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>✔ Provide accurate and complete information.</li>
          <li>✔ Use the platform only for lawful purposes.</li>
          <li>✔ Respect other users and refrain from abusive behavior.</li>
          <li>✔ Do not post prohibited or illegal items.</li>
        </ul>
      </section>

      <section className="tos-section">
        <h2>4. Account Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.
        </p>
      </section>

      <section className="tos-section">
        <h2>5. Prohibited Items</h2>
        <p>
          Users may not list or exchange items that are illegal, dangerous, or restricted under applicable laws. We reserve the right to remove such listings.
        </p>
      </section>

      <section className="tos-section">
        <h2>6. Content Ownership</h2>
        <p>
          You retain ownership of the content you post but grant us a non-exclusive license to use, display, and promote your listings on the platform.
        </p>
      </section>

      <section className="tos-section">
        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate your account if you violate these terms or engage in any conduct that may harm the platform or its users.
        </p>
      </section>

      <section className="tos-section">
        <h2>8. Limitation of Liability</h2>
        <p>
          We are not liable for any indirect, incidental, or consequential damages resulting from your use of the platform. Use it at your own risk.
        </p>
      </section>

      <section className="tos-section">
        <h2>9. Changes to Terms</h2>
        <p>
          We may update these Terms of Service at any time. Continued use of the platform after changes means you accept the revised terms.
        </p>
      </section>

      <section className="tos-section">
        <h2>10. Contact</h2>
        <p>
          If you have any questions about these Terms, contact us at:
        </p>
        <p>Email: support@virtualyardsale.com</p>
      </section>
    </div>
  );
}

export default TermsOfService;
