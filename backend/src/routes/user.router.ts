const { Router } = require("express");
const { deleteUser, getAllUser } = require("../controllers/user-controller");

const router = Router();
router.route("/").get(getAllUser);
router.route("/:id").get(deleteUser);

module.exports = router;
