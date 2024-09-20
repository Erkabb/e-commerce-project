const { Router } = require("express");
const { deleteUser } = require("../controllers/user-controller");

const router = Router();
router.route("/:id").get(deleteUser);

module.exports = router;
