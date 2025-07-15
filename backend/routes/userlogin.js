const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Listing = require("../models/Listing.js");
const router = express.Router();

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token with user ID and email
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const allListings =await Listing.find();
    const userListings=await Listing.find({owner:user._id})|| [];
    
    console.log("User found:", user); // 🔹 Log user data
    console.log("All Listings:", allListings); // 🔹 Log listings data
    console.log("User Listings",userListings);
    res.json({
      token,
      user:{id:user._id.toString(), email:user.email},
      allListings,//send all item to display on browesall
      userListings,//send only the logged in user's listings
      
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Signup Route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
