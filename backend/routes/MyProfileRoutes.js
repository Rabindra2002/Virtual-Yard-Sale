const express = require("express");
const multer = require("multer");
const MyProfile = require("../models/MyProfile");
const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

router.get("/profile/:email", async (req, res) => {
  try {
    const user = await MyProfile.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//update or create user profile
router.post("/update-profile", upload.single("profilePhoto"), async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    let profilePhoto = req.file ? req.file.path : null;
    if (!profilePhoto) {
      const user = await MyProfile.findOne({ email });
      profilePhoto = user ? user.profilePhoto : "";
    }

    const updatedUser = await MyProfile.findOneAndUpdate(
      { email },
      { name, phone, profilePhoto },
      { new: true, upsert: true }

    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;