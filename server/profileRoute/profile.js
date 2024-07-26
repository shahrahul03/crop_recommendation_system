const express = require("express");
const authenticateToken = require("../AuthenticationMiddleware/authenticateToken");
const User = require("../models/user.js");

const router = express.Router();

router.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
