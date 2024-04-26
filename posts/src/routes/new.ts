import express, { Request, Response, NextFunction } from "express";
import { currentUser, validateRequest } from "@barev/common";
import { validateNewPost } from "../validate";
import { Post } from "../models/post";

const router = express.Router();

router.post(
  "/api/posts",
  currentUser,
  validateNewPost,
  validateRequest,
  async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body;

      const post = Post.build({
        title,
        content,
        userId: req.currentUser!.id,
      });

      await post.save();

      res.status(201).send(post);
    } catch (err) {
      throw err;
    }
  }
);

export { router as createPostRouter };

// GET /api/posts - get all posts
// PUT /api/posts/:id - update a post
// { title: 'new title', content: 'new content' }
