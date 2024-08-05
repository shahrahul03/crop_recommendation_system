const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};
function isNew(createdAt) {
  // Example logic: Consider messages created within the last 24 hours as new
  const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  return new Date() - new Date(createdAt) < oneDay;
}

exports.getAllContact = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10
    const skip = (page - 1) * limit;

    const contacts = await Contact.find().skip(skip).limit(parseInt(limit));
    const totalContacts = await Contact.countDocuments();
    const totalPages = Math.ceil(totalContacts / limit);

    // Optionally mark messages as new if you have such logic
    contacts.forEach((contact) => {
      contact.isNew = isNew(contact.createdAt); // Add your logic here
    });

    res.json({ contacts, totalPages });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Helper function to determine if a contact is new
function isNew(createdAt) {
  // Example logic: Consider messages created within the last 24 hours as new
  const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  return new Date() - new Date(createdAt) < oneDay;
}
