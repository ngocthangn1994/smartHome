import env from "./env";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("Successfully connect to the database!");
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};

export default connectDB;
