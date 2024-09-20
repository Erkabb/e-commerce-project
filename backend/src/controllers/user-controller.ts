import User from "../models/user.model";

export const getAllUser = (req: any, res: any) => {
  const data = User;
  res.status(200).json({ message: "all users", user: data });
};

export const deleteUser = (req: any, res: any) => {
  const { id } = req.params;
  const data = User.findByIdAndDelete;
  res.data(200).json({ message: "deleted", user: data });
};
