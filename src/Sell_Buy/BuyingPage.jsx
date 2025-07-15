import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BuyEmpty from './BuyEmpty';
import './BuyingPage.css';
import { FaTrash } from 'react-icons/fa'; // icon for delete

const BuyingPage = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          alert("Please login first!");
          return;
        }

        const res = await axios.get(`http://localhost:5000/api/purchases?userId=${userId}`);
        setPurchasedItems(res.data.purchases || []);
      } catch (error) {
        console.error("Error fetching purchased items:", error);
      }
    };

    fetchPurchasedItems();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/purchases/${id}`);
      setPurchasedItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete purchase:", err);
      alert("Error deleting item.");
    }
  };

  if (purchasedItems.length === 0) {
    return <BuyEmpty />;
  }

  return (
    <div className="buying-container">
      <h2 className="buying-heading">Your Purchased Items</h2>
      <div className="product-grid">
        {purchasedItems.map((purchase) => {
          const product = purchase.product;

          return (
            <div key={purchase._id} className="product-card-flex">
              <img
                src={product?.images?.[0] || ""}
                alt={product?.title || "No title"}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Status:</strong> Purchased</p>
              </div>
              <button className="delete-icon" onClick={() => handleDelete(purchase._id)}>
                <FaTrash />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyingPage;
