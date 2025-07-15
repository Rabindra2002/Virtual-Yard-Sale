
import React from 'react';
import './BuyEmpty.css';
const SellingItems = () => {
  return (
    <div className="empty-container">
      <div className="empty-box">
        <img
          src="deal.png"
          alt="No Activity"
          className="empty-icon"
        />
        <h2 className="empty-title">No Marketplace Activity</h2>
        <p className="empty-text">When you start selling, your listing will appear here.</p>
       <span className='buying'><a href="/listitems">+Upload New Items </a></span>
      </div>
    </div>
  );
};

export default SellingItems;

