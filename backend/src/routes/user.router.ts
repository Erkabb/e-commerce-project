import { authentication } from "../middlewares/authentication";

import { Router } from "express";
import {
  getCurrentUser,
  getAllUsers,
  verifyOtp,
  verifyPassword,
  forgetPassword,
} from "../controllers/user-controller";

const router = Router();
router.route("/current-user").get(authentication, getCurrentUser);
router.route("/allusers").get(getAllUsers);
router.route("/verify-password").post(verifyPassword);
router.route("/forgetpassword").post(forgetPassword);
router.route("/verifyotp").post(verifyOtp);

export default router;
