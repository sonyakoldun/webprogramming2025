import express from 'express';
import { dataService } from '../server';
import { auth } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', async (req, res) => {
  try {
    const experiences = await dataService.readData('experience.json');
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiences' });
  }
});

// Protected routes
router.post('/', auth, async (req, res) => {
  try {
    const experience = await dataService.addItem('experience.json', req.body);
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ message: 'Error creating experience' });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const experience = await dataService.updateItem('experience.json', req.params.id, req.body);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: 'Error updating experience' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const success = await dataService.deleteItem('experience.json', req.params.id);
    if (!success) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting experience' });
  }
});

export default router; 