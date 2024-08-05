const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Contact number must be 10 digits long"], // Ensure contact is 10 digits
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

// Middleware to hash password before saving
UserSchema.pre("save", async function (next) {
  // Check if password has been modified (or is new)
  if (!this.isModified("password")) return next();

  // Generate salt and hash password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
