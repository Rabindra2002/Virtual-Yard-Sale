import { useEffect, useState } from "react";
import { useListings } from "../context/ListingsContext";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"; // Import Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ListItems.css";
import { FaLocationDot } from "react-icons/fa6";

const ListItems = () => {
  const {
    userListings,
    setUserListings,
    setListings,
    addListing,
    deleteListing,
    updateListing,
  } = useListings();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    condition: "",
    exchange: "",
    location: "",
    phoneNumber: "",
    description: "",
    images: [],
  });
  const [imageInput, setImageInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserListings = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await fetch("http://localhost:5000/api/listings");
        const allListings = await response.json();
        const userSpecificListings = allListings.filter((item) => item.owner === userId);
        setUserListings(userSpecificListings);
      } catch (error) {
        console.error("Error fetching user listings:", error);
      }
    };
  
    fetchUserListings();
  }, []);
  
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageAdd = () => {
    if (!imageInput.trim()) return;
    setFormData((prev) => ({ ...prev, images: [...prev.images, imageInput] }));
    setImageInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.price ||
      !formData.phoneNumber ||
      !formData.location ||
      formData.images.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      let response;
      let result;

      if (editingId) {
        // UPDATE Listing
        response = await fetch(`http://localhost:5000/api/listings/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...formData, owner: userId }),
        });

        result = await response.json();

        setListings((prev) => prev.map((item) => (item._id === editingId ? result : item)));
        setUserListings((prev) => prev.map((item) => (item._id === editingId ? result : item)));
        setEditingId(null);
      } else {
        // CREATE Listing
        response = await fetch("http://localhost:5000/api/listings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...formData, owner: userId }),
        });

        result = await response.json();
        setListings((prev) => [...prev, result]);
        setUserListings((prev) => [...prev, result]);
      }

      // Reset form
      setFormData({
        title: "",
        price: "",
        category: "",
        condition: "",
        exchange: "",
        location: "",
        phoneNumber: "",
        description: "",
        images: [],
      });
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <h2>{editingId ? "Edit Your Item" : "Sell Your Item"}</h2>

        <form onSubmit={handleSubmit} className="forms">
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price (₹):</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option></option>
              <option value="vehicles">Vehicles</option>
              <option value="households">Home Goods</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="apparel">Apparel</option>
              <option value="musical">Musical Instrument</option>
              <option value="sporting">Sporting Goods</option>
              <option value="toys">Toys and Game</option>
              <option value="antique">Antique Items</option>
              <option value="furnitures">Furniture</option>
            </select>
          </div>
          <div className="form-group">
            <label>Condition:</label>
            <select name="condition" value={formData.condition} onChange={handleChange}>
              <option></option>
              <option value="new">New</option>
              <option value="used_new">Used - Like New</option>
              <option value="used_good">Used - Good</option>
              <option value="used_fair">Used - Fair</option>
            </select>
          </div>
          <div className="form-group">
            <label>Exchange:</label>
            <select name="exchange" value={formData.exchange} onChange={handleChange} required>
              <option></option>
              <option value="available">Available</option>
              <option value="not_available">Not Available</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" value={imageInput} onChange={(e) => setImageInput(e.target.value)} placeholder="Image URL" />
            <button type="button" onClick={handleImageAdd}>Add Image</button>
          </div>
          <button type="submit">{editingId ? "Update Listing" : "Add Listing"}</button>
        </form>
      </div>

      <div className="listings-grid">
        {userListings.length === 0 ? (
          <p>You have not posted any items yet.</p>
        ) : (
          userListings.map((listing) => (
            <div key={listing._id} className="listing-card">
              {listing.images.length > 0 && (
                  <Carousel showThumbs={false} autoPlay infiniteLoop>
                  {listing.images.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`Listing ${index}`} onError={(e) => e.target.src = "/placeholder.jpg"} />
                    </div>
                  ))}
                </Carousel>
              )}
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <p><strong>Category:</strong> {listing.category}</p>
              <p><strong>Condition:</strong> {listing.condition}</p>
              <p><strong>Phone Number:</strong> {listing.phoneNumber}</p>
              <p><FaLocationDot /> {listing.location}</p>
              <p className="price">₹{listing.price}</p>
              <button onClick={() => deleteListing(listing._id)}>🗑 Delete</button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFormData({ ...listing });
                  setEditingId(listing._id);
                }}
              >
                ✏ Edit
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListItems;
