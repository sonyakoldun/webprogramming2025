import express from 'express';
import Skills from '../models/skills.model';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skills.find().sort({ order: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
});

// Add new skills category
router.post('/', async (req, res) => {
  try {
    const skills = new Skills(req.body);
    await skills.save();
    res.status(201).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error creating skills category', error });
  }
});

// Update skills category
router.put('/:id', async (req, res) => {
  try {
    const skills = await Skills.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error updating skills category', error });
  }
});

// Delete skills category
router.delete('/:id', async (req, res) => {
  try {
    await Skills.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting skills category', error });
  }
});

export default router; 