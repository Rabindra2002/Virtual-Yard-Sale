import React from 'react';
import './BuyEmpty.css';
const BuyEmpty = () => {
  return (
    <div className="empty-container">
      <div className="empty-box">
        <img
          src="https://www.svgrepo.com/show/43071/shopping-bag.svg"
          alt="No Activity"
          className="empty-icon"
        />
        <h2 className="empty-title">No Marketplace Activity</h2>
        <p className="empty-text">Items you're buying or selling will appear here.</p>
       <span className='buying'><a href="/browse-all">Browse Marketplace</a></span>
      </div>
    </div>
  );
};

export default BuyEmpty;
