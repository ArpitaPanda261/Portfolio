import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // ✅ Add this
import contactRoutes from './routes/contactRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend origin
app.use(cors({
  origin: "https://comfy-pie-51a6f8.netlify.app",
  methods: ['GET', 'POST'],
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Route Middleware
app.use('/api', contactRoutes);

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected');
    const db = mongoose.connection;
    console.log('Database name:', db.name);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
