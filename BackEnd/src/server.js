const app=require("./app");
const dotenv=require("dotenv");
const express = require("express");
const connectDB = require("./config/database.js");
const cors = require("cors");


const equipmentRoutes = require("./routes/equipmentRoutes");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();

connectDB();


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(cors());
app.use(express.json());

//adding routes
app.use("/api/auth", authRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/bookings", bookingRoutes);
//routes

app.get("/", (req, res) => {
  res.send("Agri Equipment Rental API Running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


