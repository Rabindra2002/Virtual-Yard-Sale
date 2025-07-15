import React from 'react';
import { useListings } from '../context/ListingsContext';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import "./Vehicle.css";
import Breadcrumb2 from './Breadcrumb2';

const Vehicle = () => {
    const { listings } = useListings();
    const navigate = useNavigate();

    return (
        <>
            <Breadcrumb2 />
            <div className="listings-grid">
                {listings.filter((listing) => listing.category === "vehicles").length === 0 ? (
                    <p>No vehicles items available</p>
                ) : (
                    listings
                        .filter((listing) => listing.category === "vehicles")
                        .map((listing) => (
                            <div key={listing._id} className="listing-card" onClick={() => navigate(`/listing/${listing._id}`)}>
                                {listing.images.length > 0 && (
                                    <img src={listing.images[0]} alt={listing.title} />
                                )}
                                <h3>{listing.title}</h3>
                                <p><strong>Condition:</strong> {listing.condition}</p>
                                <p><FaLocationDot /> {listing.location}</p>
                                <p><strong>Price:</strong> ₹{listing.price.toLocaleString("en-US")}</p>
                            </div>
                        ))
                )}
            </div>
        </>
    );
};

export default Vehicle;
