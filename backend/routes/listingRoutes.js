const express = require("express");
const Listing = require("../models/Listing.js");

const router = express.Router();
//Add a new listing

router.post("/", async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Get all Listings
router.get("/", async (req, res) => {
    try {
        const Listings = await Listing.find();
        res.json(Listings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//Get a single listing by ID
router.get("/:id", async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ error: "Listing not found" });
        res.json(listing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Get listings by user ID
router.get("/user/:userId", async (req, res) => {
    try {
      const userListings = await Listing.find({ userId: req.params.userId });
      res.json(userListings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Update a listing
router.put("/:id", async (req, res) => {
    try {
        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true });
        if (!updatedListing) return res.status(404).json({ error: "Listing not found" });
        res.json(updatedListing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a listing
router.delete("/:id", async (req, res) => {
    try {
        const deletedListing = await Listing.findByIdAndDelete(req.params.id);
        if (!deletedListing) {
            return res.status(404).json({ error: "Listing not found" });
        }
        res.json({ message: "Listing deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;