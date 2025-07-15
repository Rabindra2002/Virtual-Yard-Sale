// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// // import "./Navbar.css";
// import Modal from "./Modal";

// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profileImage, setProfileImage] = useState("");

//   const handleProfileClick = () => {
//     if (!isLoggedIn) {
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleLogin = (profilePicUrl) => {
//     setIsLoggedIn(true);
//     setProfileImage(profilePicUrl); // Update with the user's profile image
//     setIsModalOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="navbar-logo">
//         <h2>Virtual Yard</h2>
//       </div>

//       {/* Search Input */}
//       <div className="navbar-search">
//         <input type="text" placeholder="Search items..." className="search-input" />
//       </div>

//       {/* Profile Icon or Profile Image */}
//       <div className="navbar-profile" onClick={handleProfileClick}>
//         {isLoggedIn ? (
//           <img src={profileImage} alt="Profile" className="profile-image" />
//         ) : (
//           <FaUserCircle className="profile-icon" />
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && <Modal onClose={closeModal} onLogin={handleLogin} />}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import Modal from "./Modal"; // Import the Modal component
import "./Navbar.css";
import Notification from "../pages/Notification";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login
  const [profileImage, setProfileImage] = useState(""); // State to store profile image
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); // State to toggle profile dropdown

  const notifications = [
    { id: 1, message: "New item added to Featured Items!" },
    { id: 2, message: "Someone liked your listing!" },
  ];

  // Function to handle profile icon click
  const handleProfileClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true); // Open modal if not logged in
    } else {
      setShowProfileDropdown(!showProfileDropdown); // Toggle dropdown if logged in
    }
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Callback for login action
  const handleLogin = (profilePicUrl) => {
    setIsLoggedIn(true); // Update login status
    setProfileImage(profilePicUrl); // Update profile image
    setIsModalOpen(false); // Close modal
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h2>Virtual Yard</h2>
      </div>

      {/* Search Input */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div
        className="notification-icon"
        onClick={() => setShowNotifications(!showNotifications)}
        aria-label="Toggle notification"
      >
        <FaBell />
        {notifications.length > 0 && <span className="badge">{notifications.length}</span>}
      </div>

      {showNotifications && notifications.length > 0 && (
        <Notification
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
        />
      )}

      {/* Profile Icon or Profile Image */}
      <div className="navbar-profile" onClick={handleProfileClick}>
        {isLoggedIn ? (
          <img
            src={profileImage || "uncle.jpg"}
            alt="Profile"
            style={{ width: 50, height: 50, borderRadius: "50%", cursor: "pointer" }}
            className="profile-image"
          />
        ) : (
          <FaUserCircle className="profile-icon" />
        )}
      </div>

      {/* Profile Dropdown */}
      {isLoggedIn && showProfileDropdown && (
        <div className="profile-dropdown">
          <div className="profile-info">
            <img
              src={profileImage || "uncle.jpg"}
              alt="Profile"
              className="dropdown-profile-image"
            />
            <p>{`Name: John Doe`}</p> {/* Replace with dynamic data */}
            <p>{`Email: john@example.com`}</p> {/* Replace with dynamic data */}
          </div>
          <button onClick={() => alert("Log out clicked")}>Logout</button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && <Modal onClose={closeModal} onLogin={handleLogin} />}
    </nav>
  );
};

export default Navbar;
