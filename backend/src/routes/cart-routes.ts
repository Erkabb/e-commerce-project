import { Router } from "express";

import {
  createCart,
  getUsersCarts,
  deleteCart,
} from "../controllers/cart-controller";
import { authentication } from "../middlewares/authentication";

const cartRoute = Router();
cartRoute.route("/create-cart").post(createCart);
cartRoute.route("/id").get(authentication, getUsersCarts);
cartRoute.route("/:uid/:pid").delete(deleteCart);
export default cartRoute;
