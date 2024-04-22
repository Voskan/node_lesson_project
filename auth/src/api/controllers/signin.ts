import { Request, Response } from "express";
import User from "../../models/UserModel";
import { BadRequestError } from "@barev/common";
import { Password } from "../../services/Password";
import jwt from "jsonwebtoken";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user || !(await Password.compare(user.password, password))) {
      throw new BadRequestError("Invalid credentials");
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_KEY as string
    );

    return res.json({ token });
  } catch (error) {
    throw error;
  }
};
