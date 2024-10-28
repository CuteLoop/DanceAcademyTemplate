import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import classesRouter from "./routes/classes";
import usersRouter from "./routes/users";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI || "");
      console.log("MongoDB connected successfully");
    } catch (err) {
      console.error("MongoDB connection failed", err);
      process.exit(1); // Exit the process if the connection fails
    }
  };
  
  connectDB();

// Run the database connection function
connectDB();

// Define the port
const PORT = process.env.PORT || 5000;

// Basic route for API root
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Sparks of Connection API");
});

// Mount routers for different parts of the API
app.use("/api/classes", classesRouter);
app.use("/api/users", usersRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
