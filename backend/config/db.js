import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB is connected!`);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
