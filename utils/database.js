import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  console.log("Connecting to database......");
  // mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      // userNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
