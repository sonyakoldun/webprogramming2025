import express from 'express';
import Education from '../models/education.model';

const router = express.Router();

// Get all education entries
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching education', error });
  }
});

// Add new education entry
router.post('/', async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ message: 'Error creating education entry', error });
  }
});

// Update education entry
router.put('/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: 'Error updating education entry', error });
  }
});

// Delete education entry
router.delete('/:id', async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting education entry', error });
  }
});

export default router; 