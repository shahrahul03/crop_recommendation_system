const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const authRoutes = require("../server/loginRoutes/auth");
const profileRoute = require("../server/profileRoute/profile");
const User = require("../server/models/user");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

// MongoDB connection
const mongoURI = "mongodb://127.0.0.1:27017/cropsRecommendationSystmUser";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

// Session management
app.use(
  session({
    secret: "your_secret_key", // Use an environment variable in production
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoURI }),
  })
);

// Middleware to set user info in session
app.use(async (req, res, next) => {
  if (req.session && req.session.userId) {
    try {
      const user = await User.findById(req.session.userId);
      if (user) {
        req.user = user;
      }
    } catch (error) {
      console.error("Error fetching user from session:", error);
    }
  }
  next();
});

// Routes
app.use(authRoutes); // Authentication routes (register, login)
app.use(profileRoute); // Profile routes

// Route to get all users
app.get("/getUsers", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});

// Profile route example
// app.get("/profile", (req, res) => {
//   if (!req.user) {
//     return res.status(401).json({ message: "Not authenticated" });
//   }

//   res.json({
//     name: req.user.name,
//     email: req.user.email,
//     address: req.user.address,
//     contact: req.user.contact,
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
