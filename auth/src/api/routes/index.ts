import express from "express";
import { currentUser } from "../controllers/currentUser";
import { signIn } from "../controllers/signin";
import { signUp } from "../controllers/signup";

const router = express.Router();

// HTTP GET request to /api/users/currentuser
router.get("/api/users/currentuser", currentUser);

// HTTP POST request to /api/users/signin
router.post("/api/users/signin", signIn);

// HTTP POST request to /api/users/signup
router.post("/api/users/signup", signUp);

export { router };
