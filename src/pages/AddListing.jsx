import React, { useState } from "react";
import "./AddListing.css";
const AddListing = () => {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [isSwap, setIsSwap] = useState(false);
    const [itemImage, setItemImage] = useState(null);

    const handleImageChange = (e) => {
        setItemImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("itemName", itemName);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("isSwap", isSwap);
        formData.append("itemImage", itemImage);

        // Simulate sending data to the backend
        console.log("Form data submitted:");
        console.log({
            itemName,
            category,
            description,
            price,
            isSwap,
            itemImage: itemImage ? itemImage.name : null,
        });

        alert("Item listed successfully!");
    };

    return (
        <div className="add-listing-container">
            <h2>Add a New Listing</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Item Name:</label>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select a Category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Books">Books</option>
                        <option value="Clothing">Clothing</option>
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Item Picture:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    {itemImage && <p>Selected File: {itemImage.name}</p>}
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isSwap}
                            onChange={() => setIsSwap(!isSwap)}
                        />
                        Available for Swap
                    </label>
                </div>
                <button type="submit">List Item</button>
            </form>
        </div>
    );
};

export default AddListing;
