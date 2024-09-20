import mongoose from "mongoose";

const connectDB = async (uri: string) => {
  try {
    const con = await mongoose.connect(uri);

    console.log("Database connected", con.connection.host);
  } catch (error) {
    console.log("failed");
  }
};
export default connectDB;