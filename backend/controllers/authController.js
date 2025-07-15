const jwt = require("jsonwebtoken");
const MyProfile = require("../models/MyProfile");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await MyProfile.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check password (assuming bcrypt is used)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token including email
    const token = jwt.sign({ email: user.email, id: user._id }, "your_secret_key", { expiresIn: "1h" });

    res.json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { loginUser };
