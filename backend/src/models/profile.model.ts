import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  location: { type: String, required: true },
  website: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String
  }
});

export default mongoose.model('Profile', profileSchema); 