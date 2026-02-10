import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.warn('MONGO_URI is missing. API will serve fallback content without database.');
    return false;
  }

  try {
    await mongoose.connect(mongoUri, { dbName: process.env.MONGO_DB || 'portfolio' });
    console.log('MongoDB connected successfully.');
    return true;
  } catch (error) {
    console.warn(`MongoDB connection failed: ${error.message}`);
    return false;
  }
};
