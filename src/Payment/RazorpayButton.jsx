import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RazorpayButton = ({ amount, product }) => {
  const navigate= useNavigate();
  const handlePayment = async () => {
    try {
      // Step 1: Create Order from Backend with Dynamic Amount
      const { data } = await axios.post("http://localhost:5000/api/payments/create-order", {
        amount: product.price, // Send dynamic amount
      });

      if (!data || !data.orderId) {
        console.error("Error creating order:", data);
        return;
      }

      // Step 2: Load Razorpay and Open Payment Window
      const options = {
        key: "rzp_test_0CW0M4UKEBs5CO", // Replace with your Razorpay Key ID
        amount: data.amount,
        currency: "INR",
        name: "Sundar Nepal",
        description: "Listing Payment",
        order_id: data.orderId,
        handler: async function (response) {
          try {
            console.log("Payment response:",response);
            // Step 3: Verify Payment with Backend
            const verifyRes = await axios.post("http://localhost:5000/api/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount:data.amount,
              
            });

            if (verifyRes.data.success) {
             
              await axios.post("http://localhost:5000/api/purchases/buying", {
                userId: localStorage.getItem("userId"), // get from auth
                product,
                paymentId: response.razorpay_payment_id,
              });
              alert("Payment Successful!");
              navigate("/buy");
            } else {
              alert("Payment Failed!");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
          }
        },
        prefill: {
          name: "Rabindra Bhandari",
          email: "bhandari743@gmail.com",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Buy
    </button>
  );
};

export default RazorpayButton;
