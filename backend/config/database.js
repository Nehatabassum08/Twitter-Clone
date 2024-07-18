// database.js

import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/twitter';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export { connectDB };
