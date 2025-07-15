import React from "react";
// import "./Notification.css";

const Notification = ({ notifications, onClose }) => {
  return (
    <div className="notification-dropdown">
      {notifications.map((notif) => (
        <p key={notif.id}>{notif.message}</p>
      ))}
      <button onClick={onClose} className="close-notification">
       X
      </button>
    </div>
  );
};

export default Notification;