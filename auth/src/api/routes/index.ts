import express from "express";
import { currentUser } from "../controllers/currentUser";
import { signIn } from "../controllers/signin";
import { signUp } from "../controllers/signup";
import { validateAuth } from "../../validate";
import { validateRequest } from "@barev/common";

const router = express.Router();

// HTTP GET request to /api/users/currentuser
router.get("/currentuser", currentUser);

// HTTP POST request to /api/users/signin
router.post("/signin", validateAuth, validateRequest, signIn);

// HTTP POST request to /api/users/signup
router.post("/signup", validateAuth, validateRequest, signUp);

export { router };
