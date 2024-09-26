import User from "../models/user.model";
import { Request, Response } from "express";

export const getCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const findUser = await User.findById(id);
  res.status(200).json({ user: findUser, message: "success" });
};

export const deleteUser = (req: any, res: any) => {
  const { id } = req.params;
  const data = User.findByIdAndDelete(id);
  res.data(200).json({ message: "deleted", user: data });
};
