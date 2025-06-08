import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  website: { type: String },
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String
  }
});

export default mongoose.model('Contact', contactSchema); 