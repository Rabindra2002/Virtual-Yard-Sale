const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,      // Your Gmail address
    pass: process.env.EMAIL_PASS, // App password (not your actual Gmail password)
  },
});

module.exports = transporter;
