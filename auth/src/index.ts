import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { router } from "./api/routes";

const app = express();
app.use(json());
app.use(router);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("AUTH SERVICE: Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }

  app.listen(process.env.AUTH_PORT, () => {
    console.log("AUTH SERVICE: Listening on port " + process.env.AUTH_PORT);
  });
};

start();
