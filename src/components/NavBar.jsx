import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useListings } from "../context/ListingsContext"; // <-- Import context
import "./NavBar.css";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user , setUser} = useListings(); // <-- Access user from context

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("profile");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/browse-all");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><h2>Virtual Yard</h2></div>
      <div className="navbar-search">
        <input type="text" placeholder="Search items..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
      </div>
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {user?.profilePhoto ? (
          <img
            src={`http://localhost:5000/${user.profilePhoto}`}
            alt="Profile"
            className="profile-icon"
            style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover" }}
          />
        ) : (
          <FaUserCircle className="profile-icon" />
        )}
      </a>

      <ul className="dropdown-menu" style={{ textAlign: "left", height: "auto" }}>
        {isLoggedIn ? (
          <>
            <li><span className="dropdown-item"><Link to="/userprofile" className="text-black" style={{ textDecoration: "none" }}>Profile</Link></span></li>
            <li><button className="dropdown-item text-black" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><span className="dropdown-item"><Link to="/login" className="text-black" style={{ textDecoration: "none" }}>Login</Link></span></li>
            <li><span className="dropdown-item"><Link to="/signup" className="text-black" style={{ textDecoration: "none" }}>SignUp</Link></span></li>
            <li><span className="dropdown-item"><Link to="/userprofile" className="text-black" style={{ textDecoration: "none" }}>Profile</Link></span></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
