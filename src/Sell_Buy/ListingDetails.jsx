import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import "./ListingDetails.css";
import { useListings } from "../context/ListingsContext";
import Breadcrumb1 from "./BreadCrumb1";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import RazorpayButton from "../Payment/RazorpayButton";

const ListingDetails = () => {
    const { id } = useParams();
    // const [listing, setListing] = useState(null);
    const { listings } = useListings();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchListing = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5000/api/listings/${id}`);
    //             const data = await response.json();
    //             setListing(data);
    //         } catch (error) {
    //             console.error("Error fetching listing:", error);
    //         }
    //     };
    //     fetchListing();
    // }, [id]);

    // if (!listing) {
    //     return <p>Loading...</p>;
    // }
    //find the selected product
    const product = listings.find((listing) => listing._id === id);
    // if product not found show message
    // **🔹 State to track liked items per product**
    const [likedItems, setLikedItems] = useState({});

    // **🔹 Reset like state when product changes**
    useEffect(() => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: prev[id] || false, // Keep the like state for each product
        }));
    }, [id]);

    // **🔹 Handle double-click to like/unlike**
    const handleLike = () => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle like for the current product
        }));
    };
    if (!product) {
        return <h2>Product not found</h2>;
    }
    //get related products(same category , but exclude the current product)
    const relatedListings = listings.filter(
        (listing) => listing.category === product.category && listing._id !== id).slice(0, 10);//limit to 10 items
    return (
        <>
            <Breadcrumb1 />
            <div className="listing-details-container">
                <div className="product-main">

                    {/* 🔹 Image Carousel */}
                    <div className="image-container" onDoubleClick={handleLike}>
                        <Carousel showThumbs={false} autoPlay infiniteLoop>
                            {product.images.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={`Product ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                        {/* ❤️ Show like emoji when liked */}
                        {likedItems[id] && <span className="like-emoji">❤️</span>}
                    </div>
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ₹{product.price.toLocaleString("en-US")}</p>
                        <p><strong>Condition:</strong> {product.condition}</p>
                        <p><strong>Exchange:</strong>{product.exchange} </p>
                        <p><FaLocationDot /> {product.location}</p>
                        <p><RazorpayButton amount={product.price} number={product.phoneNumber} product={product} /></p>
                        <p><a
                            href={`https://wa.me/${product.phoneNumber}?text=I'm interested in your item: ${encodeURIComponent(product.title)}`}
                            target="_blank"//opens whatsapp in a new tab
                            rel="noopener noreferrer"//it prevents security risks
                        >
                            Message on WhatsApp
                        </a></p>
                    </div>
                </div>
                {/* <p><strong>Posted by:</strong> {listing.user ? (
                <a href={`/profile/${listing.user._id}`}>{listing.user?.name}</a>
            ) : (
                "Unknown Seller"
            )}
            </p> */}
                {/* Related items section */}
                {relatedListings.length > 0 && (
                    <>
                        <h3 className="related-title">Related Products</h3>
                        <div className="related-grid">
                            {relatedListings.map((listing) => (
                                <div key={listing._id} className="related-card" onClick={() => navigate(`/listing/${listing._id}`)}>
                                    <img src={listing.images[0]} alt={listing.title} />
                                    <h4>{listing.title}</h4>
                                    <p><strong>Price:</strong> ₹{listing.price.toLocaleString("en-US")}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default ListingDetails;
