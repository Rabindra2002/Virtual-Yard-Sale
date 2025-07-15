import React from 'react';
import { useListings } from '../context/ListingsContext';
import { useParams } from 'react-router-dom';

const Breadcrumb2 = () => {
    const { listings } = useListings();
    const { id } = useParams();

    console.log("Listings:", listings); // Check if listings are available
    console.log("Current ID from params:", id); // Check the ID from the URL

    // Convert id to a number if listing IDs are numbers
    const currentListing = listings.find(listing => String(listing._id) === String(id));

    // console.log("Current Listing:", currentListing); // See if the correct listing is found

    return (
        <div className="containers">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb" className="mb-0">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/" role="button" tabIndex="0">Home</a>
                                <span className="breadcrumb-separator"> / </span>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="/browse-all" role="button" tabIndex="0">
                                    <span>Shop</span>
                                </a>
                                <span className="breadcrumb-separator"> / </span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb2;
