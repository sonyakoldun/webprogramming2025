import express from 'express';
import Contact from '../models/contact.model';

const router = express.Router();

// Get contact information
router.get('/', async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact information', error });
  }
});

// Update contact information
router.put('/', async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error updating contact information', error });
  }
});

export default router; 