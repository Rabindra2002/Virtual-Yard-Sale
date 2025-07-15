import React from 'react';
import { useListings } from '../context/ListingsContext';
import { useNavigate } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
// import "./Vehicle.css";

const Mira = () => {
    const { listings } = useListings(); // Get global listings
    const navigate=useNavigate();

    return (
        <div className="listings-grid">
        {listings.length === 0 ? (
          <p>No items available</p>
        ) : (
            listings
                .filter((listing) => listing.location === "Mira Road") //  Show only items around the mira
                .map((listing) => (
                        <div key={listing.id} className="listing-card" onClick={()=>navigate(`/listing/${listing._id}`)}>
                        {listing.images.length > 0 && <img src={listing.images[0]} alt={listing.title} />}
                        <h3>{listing.title}</h3>
                        <p><strong>Condition:</strong> {listing.condition}</p>
                        <p><FaLocationDot/> {listing.location}</p>
                        <p><strong>Price:</strong> ₹{listing.price.toLocaleString("en-US")}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Mira;
