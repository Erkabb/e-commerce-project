import { authentication } from "../middlewares/authentication";

import { Router } from "express";
import {
  getCurrentUser,
  verifyOtp,
  verifyPassword,
  forgetPassword,
} from "../controllers/user-controller";

const router = Router();
router.route("/currentuser").get(authentication, getCurrentUser);

router.route("/verify-password").post(verifyPassword);
router.route("/forgetpassword").post(forgetPassword);
router.route("/verify-otp").post(verifyOtp);

export default router;
