import express from 'express';
import { dataService } from '../server';
import { auth } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', async (req, res) => {
  try {
    const profiles = await dataService.readData('profile.json');
    res.json(profiles[0] || null);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// Protected routes
router.put('/', auth, async (req, res) => {
  try {
    const profiles = await dataService.readData('profile.json');
    if (profiles.length === 0) {
      const newProfile = await dataService.addItem('profile.json', req.body);
      return res.json(newProfile);
    }
    
    const updatedProfile = await dataService.updateItem('profile.json', profiles[0].id, req.body);
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

export default router; 