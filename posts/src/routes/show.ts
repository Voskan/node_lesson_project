import express, { Request, Response } from "express";
import { Post } from "../models/post";
import { NotFoundError } from "@barev/common";

const router = express.Router();

// /api/posts/507f1f77bcf86cd799439011
router.get("/api/posts/:id", async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new NotFoundError();
    }

    return res.send(post);
  } catch (err) {
    throw err;
  }
});

export { router as showPostRouter };
