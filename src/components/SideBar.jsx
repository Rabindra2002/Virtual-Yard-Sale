import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaShoppingCart, FaCar, FaLaptop, FaTshirt, FaMapMarkerAlt, FaGuitar, FaDolly, FaBook, FaTractor } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import './SideBar.css';  // Import the external CSS file
import { FaDiamond, FaFootball, FaHouse, FaHouseMedical } from "react-icons/fa6";

const SideBar = ({toggleSidebar}) => {
  const [isOpen, setIsOpen] = useState(true); // Toggle sidebar
  const [isHovered, setIsHovered] = useState(false); // Track mouse hover state
  const navigate = useNavigate();
  
  const handleLocationChange=(e)=>{
    navigate(e.target.value);// navigate to selected citys
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggleSidebar(!isOpen);//Pass the updated state to parent
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          width: isOpen ? "open" : "collapsed",
        }}
        onMouseEnter={() => setIsHovered(true)} // When the mouse enters the sidebar, allow scrolling
        onMouseLeave={() => setIsHovered(false)} // When the mouse leaves the sidebar, disable scrolling
      >
        {/* Sidebar Toggle Button */}
        <div
          className="toggle-button"
          onClick={handleToggle}
        >
          <FaBars size={24} />
          {isOpen && <h3 className="menu-text">Virtual Yard</h3>}
        </div>

        {/* Sidebar Menu */}
        <nav className="menu" style={{ overflowY: isHovered ? "auto" : "hidden" }}>
          <ul className="menu-list">
            {/* Menu Items */}
            <li className="menu-item"><AiOutlineShop size={20} /> {isOpen && <span><Link to="/browse-all">Browse All</Link></span>}</li>
            <li className="menu-item"><FaShoppingCart size={20} /> {isOpen && <span><Link to="/buy">Buying</Link></span>}</li>
            <li className="menu-item"><AiOutlineShop size={20} /> {isOpen && <span><Link to="/sellingitems">Selling</Link></span>}</li>
            <li className="menu-item">
              <FaMapMarkerAlt size={20} />
              {isOpen && (
                <select className="location-dropdown" onChange={handleLocationChange} >
                  <option value="">Location</option>
                  <option value="/mumbai">Mumbai Center</option>
                  <option value="/mahalaxmi">Mahalaxmi</option>
                  <option value="/mira">Mira road</option>
                  <option value="/dadar">Dadar</option>
                  <option value="/bandra">Bandra</option>
                  <option value="/virar">Virar</option>
                  <option value="/boriwali">Boriwali</option>
                  {/* Add more locations as needed */}
                </select>
              )}
            </li>

            <li className="menu-category">Categories</li>
            <li className="menu-item"><FaCar size={20} /> {isOpen && <span><Link to="/vehicle">Vehicles</Link></span>}</li>
            <li className="menu-item"><FaLaptop size={20} /> {isOpen && <span><Link to="/electronics">Electronics</Link></span>}</li>
            <li className="menu-item"><FaTshirt size={20} /> {isOpen && <span><Link to="/apparel">Apparel</Link></span>}</li>
            <li className="menu-item"><FaHouse size={20} /> {isOpen && <span><Link to="/homegoods">Home Goods</Link></span>}</li>
            <li className="menu-item"><FaGuitar size={20} /> {isOpen && <span><Link to="/musical">Musical Instrument</Link> </span>}</li>
            <li className="menu-item"><FaFootball size={20} /> {isOpen && <span><Link to="/sporting">Sporting Goods</Link></span>}</li>
            <li className="menu-item"><FaDolly size={20} /> {isOpen && <span><Link to="/toys">Toys and Games</Link></span>}</li>
            <li className="menu-item"><FaBook size={20} /> {isOpen && <span><Link to="/books">Books</Link></span>}</li>
            <li className="menu-item"><FaDiamond size={20} /> {isOpen && <span><Link to="/antique">Antique Items</Link></span>}</li>
            <li className="menu-item"><FaTractor size={20} /> {isOpen && <span><Link to="/furniture">Furniture</Link></span>}</li>
            {/* <li className="menu-item"><FaCar size={20} /> {isOpen && <span>Vehicles</span>}</li>
            <li className="menu-item"><FaLaptop size={20} /> {isOpen && <span>Electronics</span>}</li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
