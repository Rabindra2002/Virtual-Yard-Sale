import React, { useState } from "react";
import "./FAQPage.css";

const faqs = [
  {
    question: "What is the Virtual Yard Sale platform?",
    answer:
      "It's an online marketplace where users can buy, sell, or exchange used items locally or remotely.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes! Creating an account, posting items, and exchanging messages are all completely free.",
  },
  {
    question: "How do I list an item?",
    answer:
      "Simply log in, click 'Selling', add details and photos, and submit. Your listing will appear instantly.",
  },
  {
    question: "Can I exchange items instead of buying?",
    answer:
      "Absolutely! You can propose item swaps and negotiate directly through the in-app chat.",
  },
  {
    question: "Is my information safe?",
    answer:
      "Yes. We use encryption and privacy controls to protect your data and communication.",
  },
  {
    question: "How do I contact the seller?",
    answer:
      "Once you find an item, click 'Message Seller' to chat and ask questions or make an offer.",
  },
  {
    question: "Can I meet the seller in person?",
    answer:
      "Yes, if both parties agree. We recommend meeting in public places for safety.",
  },
  {
    question: "What if I have an issue with a transaction?",
    answer:
      "Contact our support team at support@virtualyardsale.com. We'll help you resolve any disputes.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">
        Find answers to common questions about the Virtual Yard Sale platform.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
