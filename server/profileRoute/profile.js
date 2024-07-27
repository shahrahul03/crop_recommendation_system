const express = require("express");
const User = require("../models/user"); // Adjust path as needed

const router = express.Router();

router.get("/profile", async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email not provided" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      name: user.name,
      email: user.email,
      address: user.address,
      contact: user.contact,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
