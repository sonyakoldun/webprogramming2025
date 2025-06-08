import mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema({
  category: { type: String, required: true },
  skills: [{
    name: { type: String, required: true },
    level: { type: Number, required: true, min: 0, max: 100 }
  }],
  order: { type: Number, default: 0 }
});

export default mongoose.model('Skills', skillsSchema); 