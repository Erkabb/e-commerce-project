import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
//mongoose=>odm=>object data mapping
export const login = async (req: Request, res: Response) => {
  // res.status(200).json({ message: "success" });
  const { firstname, password } = req.body;
  const [user] = await User.find({ firstname: firstname });
  if (!user) {
    res.status(404).json({ message: "user not found." });
  } else {
    const isCheckPass = bcrypt.compareSync(password, user.hashedPass);
    if (!isCheckPass) {
      res.status(402).json({ message: "Your password or email is incorrect." });
    }
    res.status(200).json({ message: "Successfull" });
  }
};
export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      res.status(400).json({ message: "signup failed" });
    }
    const hashedPass = bcrypt.hashSync(password, 8);
    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      hashedPass,
      cellphone: "",
    });
    res.status(201).json({ message: "Signup", user: createdUser });
  } catch (error) {
    res.status(404).json({ message: "Something is went wrong", error: error });
  }
};
