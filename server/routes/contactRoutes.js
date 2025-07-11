import express from "express";
import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

// POST: New contact message
router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("📥 Incoming contact data:", req.body);

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    await sendEmail({ name, email, subject, message });
    console.log("✅ Email sent successfully");
    res
      .status(201)
      .json({ message: "Message sent successfully", contact: newContact });
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
});

// GET: All contact messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages", error: err });
  }
});

export default router;
