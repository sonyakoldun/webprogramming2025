import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { dataService } from '../server';
import { User, UsersData } from '../models/user';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Register new user
router.post('/register', async (req, res) => {
  try {
    console.log('Registration request body:', req.body);
    const { name, username, email, password } = req.body;
    const displayName = username || name;

    // Validate input
    if (!displayName || !email || !password) {
      console.log('Missing required fields:', { displayName, email, password: password ? 'provided' : 'missing' });
      return res.status(400).json({ 
        message: 'All fields are required',
        details: {
          name: !displayName ? 'Name is required' : null,
          email: !email ? 'Email is required' : null,
          password: !password ? 'Password is required' : null
        }
      });
    }

    const usersData = await dataService.readData('users.json') as UsersData;
    console.log('Existing users:', usersData);
    const users = usersData.users || [];

    // Check if user already exists
    if (users.find((u: User) => u.email === email)) {
      console.log('User already exists with email:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser: User = {
      id: (users.length + 1).toString(),
      username: displayName,
      email,
      password: hashedPassword,
      role: 'user',
      profile: {
        name: displayName,
        title: '',
        summary: '',
        location: '',
        phone: '',
        website: '',
        socialLinks: {
          linkedin: '',
          github: '',
          twitter: ''
        }
      },
      experience: [],
      education: [],
      skills: []
    };

    console.log('Creating new user:', { ...newUser, password: '[REDACTED]' });

    // Save user
    users.push(newUser);
    await dataService.writeData('users.json', { users });

    // Create token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    console.log('Login request body:', req.body);
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      console.log('Missing required fields:', { email, password: password ? 'provided' : 'missing' });
      return res.status(400).json({ 
        message: 'All fields are required',
        details: {
          email: !email ? 'Email is required' : null,
          password: !password ? 'Password is required' : null
        }
      });
    }

    const usersData = await dataService.readData('users.json') as UsersData;
    console.log('Existing users:', usersData);
    const users = usersData.users || [];
    const user = users.find((u: User) => u.email === email);

    // Check if user exists
    if (!user) {
      console.log('User not found with email:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    if (password!==user.password) {
      console.log('Invalid password for user:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('Login successful for user:', email);

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router; 