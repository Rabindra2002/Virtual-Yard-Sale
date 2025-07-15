import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const[user, setUser]=useState(null);
  const login = (userData) => {setUser(userData);
  };
  const[userListings, setUserListings]=useState([]);//holds logged in user's listings
  const [userId, setUserId] = useState(localStorage.getItem("userId") || ""); // Store user ID in state

  useEffect(() => {
    // Load userId from localStorage when the app starts
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Fetch listings from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/listings")//fetch all listings
      .then((response) => setListings(response.data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  // Add a new listing
  const addListing = async (newListing) => {
    try {
      const response = await axios.post("http://localhost:5000/api/listings", newListing);
      setListings((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Error adding listing:", error);
    }
  };

  // 🗑 Delete listing
  const deleteListing = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/listings/${id}`);
      setListings((prev) => prev.filter((listing) => listing._id !== id));
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  // ✏️ Update listing
  const updateListing = async (id, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/listings/${id}`, updatedData);
      setListings((prev) =>
        prev.map((listing) => (listing._id === id ? response.data : listing))
      );
    } catch (error) {
      console.error("Error updating listing:", error);
    }
  };

  return (
    <ListingsContext.Provider value={{ user,setUser, userId,setUserId,login,listings,setListings, userListings, setUserListings,addListing, deleteListing, updateListing }}>
      {children}
    </ListingsContext.Provider>
  );
};



// Custom Hook to use Listings
export const useListings = () => {
  return useContext(ListingsContext);
};