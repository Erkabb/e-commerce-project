import { authentication } from "../middlewares/authentication";

const { Router } = require("express");
const {
  deleteUser,
  getCurrentUser,
} = require("../controllers/user-controller");

const router = Router();
router.route("/").get(authentication, getCurrentUser);
router.route("/:id").get(deleteUser);

module.exports = router;
