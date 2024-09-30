import { Router } from "express";
import {
  productInfo,
  ClassOfProducts,
} from "../controllers/product.category-controller";
const productandclasslistRouter = Router();

productandclasslistRouter.route("/product").post(productInfo);
productandclasslistRouter.route("/category").post(ClassOfProducts);

export default productandclasslistRouter;
