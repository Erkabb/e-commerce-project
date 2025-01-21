import { Request, Response, NextFunction } from "express";

import { decodeToken } from "../utils/jwt";

interface IMyReq extends Request {
  user: any;
}
declare global {
  namespace Express {
    interface Request {
      user: {
        id: string | object;
      };
    }
  }
}
export const authentication = (
  req: IMyReq,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    console.log("user:", req.user);
    return res
      .status(401)
      .json({ message: "Та энэ үйлдлийг хийхийн тулд нэвтэрнэ үү." });
  }
  const token = req.headers.authorization?.split(" ")[1];
  const user = decodeToken(token);
    req.user = user;
  next();
};
