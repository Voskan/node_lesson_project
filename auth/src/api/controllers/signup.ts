import { Request, Response } from "express";
import User from "../../models/UserModel";
import jwt from "jsonwebtoken";
import { BadRequestError } from "@barev/common";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({ email, password });
    await user.save();

    const userJwt = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_KEY as string
    );

    return res.status(201).json({ token: userJwt });
  } catch (error) {
    throw error;
  }
};
