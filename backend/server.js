
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const userlogin = require("./routes/userlogin");
const listingRoutes=require("./routes/listingRoutes");
const MyProfileRoutes=require("./routes/MyProfileRoutes")
const paymentRoutes = require("./routes/paymentRoutes");
const Password= require("./routes/Password")
const purchasesRoute = require("./routes/purchases");

const app = express();
//middleware
app.use(express.json());
// app.use(cors());
const allowedOrigins = [
  "http://localhost:5173",                      // for local development
  "https://virtual-yard-z4na.vercel.app"        // deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
})); 
app.use("/uploads",express.static("uploads"));//serve uploaded files

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", userlogin);
app.use("/api/listings", listingRoutes);
app.use("/users" , MyProfileRoutes);
app.use("/api/payments",paymentRoutes);
app.use("/api/password", Password);
app.use("/api/purchases", purchasesRoute);


//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
