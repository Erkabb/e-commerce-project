import User from "../models/user.model";
import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";
import crypto from "crypto";

export const getCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const user = await User.findById(id);
  res.status(200).json({ user: user, message: "success" });
};
export const getAllUsers = async (req: Request, res: Response) => {
  const { firstname, lastname, email } = req.body;
  const data = await User.find(firstname, lastname, email);
  res.status(200).json({ message: "Success", user: data });
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    findUser.otp = otp;
    await findUser.save();
    await sendEmail(email, otp);

    res
      .status(200)
      .json({ message: "OTP code sent to your email succesfully" });
  } catch (error) {
    console.log("otp error", error);
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpValue } = req.body;

  const findUser = await User.findOne({ email: email, otp: otpValue });
  if (!findUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  findUser.passwordResetToken = hashedResetToken;
  findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();
  await sendEmail(
    email,
    `<a href="http://localhost:3000/newpass?resettoken="${resetToken}>Reset Password link</a>`
  );
  res.status(200).json({ message: "Link sent to your email" });
};

export const verifyPassword = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;
  const hashedResetToken = crypto
    .createHash("")
    .update(resetToken)
    .digest("hex");

  const findUser = await User.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now() },
  });
  if (!findUser) {
    return res.status(400).json({ message: "Нууц үг сэргээх хугацаа дууссан" });
  }
  findUser.password = password;
  await findUser.save();
  res.status(200).json({ message: "Succesfull" });
};
