import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

//mongoose=>odm=>object data mapping
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(404).json({ message: "user not found." });
  } else {
    const isCheckPass = bcrypt.compareSync(password, user.password);
    if (!isCheckPass) {
      res.status(402).json({ message: "Your password or email is incorrect." });
    } else {
      const token = generateToken({ id: user._id });
      const { firstname, email, cellphone, address } = user;
      res.status(200).json({
        message: "Successfull",
        token,
        user: { firstname, email, cellphone, address },
      });
    }
  }
};
export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "signup failed" });
    }

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      cellphone: "",
    });
    res.status(201).json({ message: "Signup", user: createdUser });
  } catch (error) {
    res.status(404).json({ message: "Something is went wrong", error: error });
    console.log("Failed", error);
  }
};
