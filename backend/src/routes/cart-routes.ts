import { Router } from "express";

import {
  createCart,
  getUsersCarts,
  deleteCart,
} from "../controllers/cart-controller";

const cartRoute = Router();
cartRoute.route("/").post(createCart);
cartRoute.route("/:uid").get(getUsersCarts);
cartRoute.route("/:uid/:pid").delete(deleteCart);
export default cartRoute;
