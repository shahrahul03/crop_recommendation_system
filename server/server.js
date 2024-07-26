const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("../server/loginRoutes/auth");
const profileRoute = require("../server/profileRoute/profile");
const User = require("../server/models/user");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Add options if needed, e.g., `cors({ origin: 'http://localhost:3000' })`

// MongoDB connection
const mongoURI = "mongodb://127.0.0.1:27017/cropsRecommendationSystmUser";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

// Routes
app.use(authRoutes); // Register routes under /register
app.use(profileRoute); // Profile routes under /profile

// route to get all users
app.get("/getUsers", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});

// profile route

app.get("/profile", (req, res) => {
  // fetch profile data
  // User.find()
  //   .then((users) => res.json(users))
  //   .catch((err) => res.status(500).json(err));
  res.send("Profile data");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
