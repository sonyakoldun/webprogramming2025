import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import profileRoutes from './routes/profile.routes';
import experienceRoutes from './routes/experience.routes';
import educationRoutes from './routes/education.routes';
import skillsRoutes from './routes/skills.routes';
import { auth } from './middleware/auth';
import { DataService } from './services/data.service';

// Routes
import contactRoutes from './routes/contact.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize data service
export const dataService = new DataService();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:4200', // Angular default port
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Public routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contact', contactRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 