import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  period: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  order: { type: Number, default: 0 }
});

export default mongoose.model('Education', educationSchema); 