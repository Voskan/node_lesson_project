import mongoose from "mongoose";
import { app, logger } from "./app";

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined.");
  }

  if (!process.env.POST_PORT) {
    throw new Error("POST_PORT must be defined.");
  }

  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined.");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    logger.info("POST SERVICE: Connected to MongoDB");
  } catch (err) {
    throw err;
  }

  app.listen(process.env.POST_PORT, () => {
    logger.info("POST SERVICE: Listening on port " + process.env.POST_PORT);
  });
};

start();
