import { NotFoundError } from "@barev/common";
import { NextFunction, Request, Response } from "express";

export const currentUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.currentUser;

  if (!user) {
    throw new NotFoundError();
  }

  return res.send(user);
};
