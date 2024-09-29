import jwt from "jsonwebtoken";
export const generateToken = (playload: object) => {
  return jwt.sign(playload, process.env.JWT_TOKEN_PASSWORD || "", {
    expiresIn: "12h",
  });
};
export const decodeToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_TOKEN_PASSWORD || "");
};
