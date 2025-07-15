const express = require("express");
const purchase = require("../models/Purchase");
const router = express.Router();

// Save a new purchase
router.post("/buying", async (req, res) => {
  const { userId, product, paymentId } = req.body;
  console.log("Received purchase data:", { userId, product, paymentId });

  try {
    const newPurchase = new purchase({ userId, product, paymentId });
    await newPurchase.save();
    res.status(201).json({ success: true, purchase: newPurchase });
  } catch (err) {
    console.error("Error saving purchase:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

//  Fetch purchases for a user
router.get("/", async (req, res) => {
  const { userId } = req.query;

  try {
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const purchases = await purchase.find({ userId }).populate("product");
    res.status(200).json({ success: true, purchases });
  } catch (err) {
    console.error("Error fetching purchases:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});
// DELETE /api/purchases/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await purchase.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Purchase not found" });
    }
    res.json({ success: true, message: "Purchase deleted successfully" });
  } catch (error) {
    console.error("Error deleting purchase:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});


module.exports = router;
