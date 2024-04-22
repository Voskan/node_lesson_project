import express, { Request, Response, NextFunction } from "express";
import { currentUser } from "@barev/common";

const router = express.Router();

router.post("/api/posts", currentUser, (req, res) => {
  res.send("posts");
});

export { router as createPostRouter };
