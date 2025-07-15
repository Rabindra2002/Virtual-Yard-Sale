import React from "react";
import { useListings } from "../context/ListingsContext";
import { useNavigate } from "react-router-dom";
import "./BrowseAll.css";
import Breadcrumb from "./BreadCrumb";
import { FaLocationDot } from "react-icons/fa6";

const BrowseAll = ({ searchQuery }) => {
  const { listings } = useListings();
  const navigate = useNavigate();

  const filteredListings = listings.filter((listing) =>
    (listing.title?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <>
      <Breadcrumb />
      <h2 className="browse">Browse All</h2>
      <div className="listings-grid">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div
              key={listing._id}
              className="listing-card"
              onClick={() => navigate(`/listing/${listing._id}`)}
            >
              {listing.images?.length > 0 && (
                <img src={listing.images[0]} alt={listing.title || "Listing"} />
              )}
              <h3>{listing.title}</h3>
              <p>
                <strong>Condition:</strong> {listing.condition}
              </p>
              <p>
                <FaLocationDot /> {listing.location}
              </p>
              <p>
                <strong>Price:</strong> ₹{listing.price?.toLocaleString("en-US")}
              </p>
            </div>
          ))
        ) : (
          <p>No listings found</p>
        )}
      </div>
    </>
  );
};

export default BrowseAll;
